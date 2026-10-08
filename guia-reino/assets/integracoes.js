/* Integrações (todos os usuários): envio de rolagens ao chat (KMChat) pela função do servidor /api/chat,
 * versão do site (KMVersion) e, no modo mestre, a aba Configurações (#/config) com versão, publicação,
 * hospedagem e chat. Provedores suportados: listas HOSTS e CHATS abaixo (docs/integracoes.md explica como incluir outro). */
(function () {
  'use strict';

  var A = window.KMApp;
  if (!A) return;
  var U = A.util, esc = U.esc, KM = window.KM || {};
  var site = A.site || {};

  // Hospedagem: onde o site e a função /api/chat rodam (o adaptador fica em <dir> no repositório)
  var HOSTS = [
    { id: 'netlify', name: 'Netlify', dir: 'netlify/functions/', env: 'Site configuration → Environment variables', docs: 'https://docs.netlify.com/environment-variables/overview/' }
  ];
  // Chat: para onde vão as rolagens (o núcleo fica em integracoes/chat/<id>.mjs)
  var CHATS = [
    { id: 'discord', name: 'Discord', envVars: ['DISCORD_WEBHOOK_URL'], how: 'No Discord: Configurações do canal → Integrações → Webhooks → Novo webhook → Copiar URL do webhook.' }
  ];
  function chatInfo(id) { for (var i = 0; i < CHATS.length; i++) if (CHATS[i].id === id) return CHATS[i]; return null; }

  /* ---------- chat ---------- */
  var chatId = String(site.chat || '').trim();
  var KMChat = {
    provider: function () { return chatInfo(chatId); },
    // Envio ativo: chat suportado em site.js, fora da vitrine e servido por http(s) (a função não existe em file://)
    enabled: function () { return !!chatInfo(chatId) && !A.showcase && /^https?:$/.test(location.protocol); },
    why: function () {
      if (A.showcase) return 'vitrine: não envia ao chat';
      if (!chatId) return 'nenhum chat configurado em data/site.js';
      if (!chatInfo(chatId)) return 'chat "' + chatId + '" não suportado';
      if (!/^https?:$/.test(location.protocol)) return 'site aberto localmente (file://): a função do servidor não roda';
      return '';
    },
    send: function (roll) {
      if (!KMChat.enabled()) return Promise.resolve({ ok: false, error: KMChat.why() });
      return fetch('/api/chat', {
        method: 'POST', cache: 'no-store', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider: chatId, roll: roll })
      }).then(function (r) {
        return r.json().then(null, function () { return { ok: false, error: 'resposta inválida (' + r.status + ') — a função /api/chat está publicada?' }; });
      }, function (e) { return { ok: false, error: 'sem conexão com o servidor: ' + e.message }; });
    },
    status: function () {
      return fetch('/api/chat', { cache: 'no-store' }).then(function (r) {
        return r.json().then(null, function () { return { ok: false, error: 'a função /api/chat não respondeu (' + r.status + ')' }; });
      }, function (e) { return { ok: false, error: e.message }; });
    }
  };

  /* ---------- versão ---------- */
  var VER_KEY = 'km-latest-version';
  function cmpVer(a, b) {
    var x = String(a).split('.'), y = String(b).split('.');
    for (var i = 0; i < 3; i++) { var d = (+x[i] || 0) - (+y[i] || 0); if (d) return d > 0 ? 1 : -1; }
    return 0;
  }
  // Versão mais recente no repositório base (KM.site.upstream), lida pela API do GitHub; 1 consulta por sessão
  function latest() {
    var up = String(site.upstream || '').trim();
    if (!up) return Promise.resolve(null);
    try { var c = JSON.parse(sessionStorage.getItem(VER_KEY)); if (c && c.repo === up) return Promise.resolve(c.version); } catch (x) { /* ignore */ }
    return fetch('https://api.github.com/repos/' + up + '/contents/guia-reino/assets/version.js', { cache: 'no-store', headers: { 'Accept': 'application/vnd.github.raw+json' } })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (t) {
        var m = /KM\.version\s*=\s*['"]([\d.]+)['"]/.exec(t || '');
        var v = m ? m[1] : null;
        try { if (v) sessionStorage.setItem(VER_KEY, JSON.stringify({ repo: up, version: v })); } catch (x) { /* ignore */ }
        return v;
      }, function () { return null; });
  }
  var KMVersion = { current: KM.version || '0.0.0', latest: latest, cmp: cmpVer };

  /* ---------- aba Configurações (modo mestre) ---------- */
  function box(title, body) { return '<section class="sh-box sh-wide"><h3>' + title + '</h3>' + body + '</section>'; }
  function row(label, value) { return '<div class="sh-row"><span class="sh-lbl">' + label + '</span><span class="sh-v">' + value + '</span></div>'; }
  function ext(href, text) { return '<a href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + text + ' ↗</a>'; }

  function view() {
    if (!A.gm) return '<div class="empty">Configurações disponíveis só no modo mestre.</div>';
    var G = window.KMGitHub, gcfg = G ? G.config() : {}, mode = G ? G.mode() : '';
    var up = String(site.upstream || '');
    var h = '<div class="page-head"><div><h1>Configurações</h1><p>Versão, publicação e integrações deste site. Só aparece no modo mestre.</p></div></div><div class="sheet">';

    h += box('Versão',
      row('Este site', '<b>v' + esc(KMVersion.current) + '</b>') +
      row('Mais recente no repositório base', '<span id="cfg-latest" class="muted">consultando…</span>') +
      (up ? '<p class="muted sh-small">Novidades: ' + ext('https://github.com/' + up + '/blob/main/CHANGELOG.md', 'CHANGELOG') + '. Para atualizar um fork: na página do seu repositório no GitHub, <b>Sync fork → Update branch</b> (ou <code>git pull upstream main</code>); o site é republicado sozinho.</p>' : ''));

    var pub = mode === 'showcase' ? 'desativada (vitrine)' : mode === 'setup' ? '<span class="chip warn">repositório não configurado</span>' : '<code>' + esc(gcfg.repo) + '</code> · branch <code>' + esc(gcfg.branch) + '</code>';
    h += box('Publicação (GitHub)',
      row('Repositório', pub) +
      (mode === 'showcase' ? '' : row('Token neste navegador', G && G.hasToken() ? '<span class="chip ok">salvo</span>' : '<span class="chip warn">nenhum</span>') +
        '<div class="ed-bar"><button type="button" class="btn btn-sm" data-gh-setup>Configurar repositório</button><button type="button" class="btn btn-sm" data-gh-token>Token do GitHub</button></div>'));

    h += box('Hospedagem suportada', '<table class="sh-table"><thead><tr><th>Provedor</th><th>Função do servidor</th><th>Variáveis de ambiente</th></tr></thead><tbody>' +
      HOSTS.map(function (x) { return '<tr><td><b>' + esc(x.name) + '</b></td><td><code>' + esc(x.dir) + '</code></td><td>' + esc(x.env) + ' · ' + ext(x.docs, 'docs') + '</td></tr>'; }).join('') +
      '</tbody></table><p class="muted sh-small">O site em si é estático e roda em qualquer hospedagem; o envio ao chat precisa da função do servidor, disponível nos provedores acima. Outros provedores podem ser incluídos (veja <code>docs/integracoes.md</code>).</p>');

    var cur = chatInfo(chatId);
    h += box('Chat (rolagens)',
      row('Configurado em <code>data/site.js</code>', cur ? '<b>' + esc(cur.name) + '</b> <span class="muted">("chat": "' + esc(chatId) + '")</span>' : '<span class="muted">nenhum' + (chatId ? ' ("' + esc(chatId) + '" não suportado)' : '') + '</span>') +
      row('Servidor', '<span id="cfg-chat" class="muted">' + (KMChat.enabled() ? 'consultando…' : esc(KMChat.why() || '—')) + '</span>') +
      (KMChat.enabled() ? '<div class="ed-bar"><button type="button" class="btn btn-sm" data-cfg-chat-test>Enviar mensagem de teste</button><span id="cfg-chat-test" class="muted"></span></div>' : '') +
      '<table class="sh-table"><thead><tr><th>Serviço</th><th>Variável de ambiente</th><th>Como obter</th></tr></thead><tbody>' +
      CHATS.map(function (x) { return '<tr><td><b>' + esc(x.name) + '</b></td><td><code>' + esc(x.envVars.join(', ')) + '</code></td><td class="sh-small">' + esc(x.how) + '</td></tr>'; }).join('') +
      '</tbody></table><p class="muted sh-small">Para ativar: crie a variável no painel da hospedagem (o segredo nunca vai para o repositório), coloque <code>"chat": "discord"</code> em <code>data/site.js</code> e republique. Os jogadores escolhem o próprio nome na hora de rolar.</p>');

    return h + '</div>';
  }
  function bind() {
    if (!A.gm) return;
    latest().then(function (v) {
      var el = document.getElementById('cfg-latest');
      if (!el) return;
      if (!v) { el.textContent = 'não foi possível consultar'; return; }
      var c = cmpVer(v, KMVersion.current);
      el.className = '';
      el.innerHTML = '<b>v' + esc(v) + '</b> ' + (c > 0 ? '<span class="chip warn">atualização disponível</span>' : '<span class="chip ok">em dia</span>');
    });
    if (KMChat.enabled()) KMChat.status().then(function (r) {
      var el = document.getElementById('cfg-chat');
      if (!el) return;
      var ok = r && r.ok && r.providers && r.providers[chatId];
      el.className = '';
      el.innerHTML = ok ? '<span class="chip ok">variável configurada</span>' : '<span class="chip warn">' + esc(r && r.ok ? 'variável ' + chatInfo(chatId).envVars.join(', ') + ' ausente ou inválida' : (r && r.error) || 'sem resposta') + '</span>';
    });
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest && ev.target.closest('[data-cfg-chat-test]');
    if (!t) return;
    var out = document.getElementById('cfg-chat-test');
    out.textContent = 'enviando…';
    KMChat.send({ test: true, player: U.store('km-player') || 'Mestre', kingdom: (A.reino.current || {}).name || '' }).then(function (r) {
      out.textContent = r && r.ok ? '✔ enviada — confira o canal' : '✖ ' + ((r && r.error) || 'falhou');
    });
  });

  // Aviso de atualização na faixa do modo mestre
  if (A.gm && !/[?&]check\b/.test(location.search)) latest().then(function (v) {
    if (!v || cmpVer(v, KMVersion.current) <= 0) return;
    var bar = document.querySelector('.gm-banner');
    if (bar) bar.insertAdjacentHTML('beforeend', ' <span class="gm-draft">⬆ Nova versão v' + esc(v) + ' disponível: <a href="#/config">ver</a>.</span>');
  });

  window.KMChat = KMChat;
  window.KMVersion = KMVersion;
  window.KMIntegracoes = { view: view, bind: bind, HOSTS: HOSTS, CHATS: CHATS };
})();
