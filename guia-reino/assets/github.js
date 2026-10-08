/* Publicação no GitHub — só no modo mestre (?mestre); usado por editor.js (campanha.js) e ficha.js (reino.js).
 * Grava arquivos de data/ pela API de conteúdo do GitHub com um token fine-grained guardado só no navegador
 * (localStorage 'km-gh-token'); repositório, branch e pasta vêm de data/site.js (KM.site). Sem repositório
 * configurado, abre o assistente que grava o próprio site.js. Na vitrine (KM.site.showcaseHost) fica desativado.
 * Depois do commit, consulta o arquivo servido pelo site até ele refletir a publicação (deploy concluído). */
(function () {
  'use strict';

  var A = window.KMApp;
  if (!A || !A.gm) return;
  var U = A.util, esc = U.esc;
  var TOKEN_KEY = 'km-gh-token';
  var cfg = siteConfig(A.site);
  var pending = null; // ação retomada depois de salvar o token ou a configuração
  var back = null;    // botão "Voltar" dos painéis

  var SITE_HEADER = [
    '// Configuração do site (repositório onde o modo mestre publica os arquivos de dados).',
    '// Pode ser preenchida pelo próprio site: abra-o com ?mestre e clique em "☁ Publicar" — o assistente',
    '// pede repositório, branch e token e grava este arquivo no GitHub. Ou edite à mão:',
    '//   repo        "usuario/repositorio" no GitHub (vazio = publicação desativada; só "Baixar")',
    '//   branch      branch publicada pelo provedor (Netlify, Cloudflare Pages…)',
    '//   root        pasta do site dentro do repositório (onde fica o index.html)',
    '//   deploysUrl  link opcional da página de deploys do provedor (aparece após publicar)',
    '//   upstream    repositório base do projeto (botão "Crie o seu" na vitrine)',
    '//   showcaseHost endereço da vitrine do projeto base: nesse endereço o Publicar fica desativado'
  ].join('\n');

  function siteConfig(s) {
    s = s || {};
    return {
      repo: String(s.repo || '').trim(), branch: String(s.branch || 'main').trim(),
      root: String(s.root == null ? 'guia-reino' : s.root).replace(/^\/+|\/+$/g, ''),
      deploysUrl: String(s.deploysUrl || '').trim(), upstream: s.upstream || '', showcaseHost: s.showcaseHost || ''
    };
  }
  function validRepo(r) { return /^[\w.-]+\/[\w.-]+$/.test(r); }
  // 'showcase' (vitrine), 'setup' (sem repositório) ou 'ready'
  function mode() { return A.showcase ? 'showcase' : validRepo(cfg.repo) ? 'ready' : 'setup'; }

  function token(v) {
    if (v === undefined) return U.store(TOKEN_KEY) || '';
    if (v) U.store(TOKEN_KEY, v); else try { localStorage.removeItem(TOKEN_KEY); } catch (x) { /* ignore */ }
  }
  function b64encode(s) {
    var b = new TextEncoder().encode(s), bin = '';
    for (var i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]);
    return btoa(bin);
  }
  function b64decode(s) {
    var bin = atob(String(s).replace(/\s/g, '')), b = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(b);
  }
  // Lê o objeto de "KM.<nome> = { … };" de um arquivo de dados
  function parseVar(txt, name) {
    var i = String(txt || '').indexOf('KM.' + name + ' =');
    if (i < 0) return null;
    try { return JSON.parse(txt.slice(txt.indexOf('{', i), txt.lastIndexOf('}') + 1)); } catch (x) { return null; }
  }
  function dataPath(file) { return (cfg.root ? cfg.root + '/' : '') + 'data/' + file; }

  function ghMsg(status, j, repo) {
    var m = j && j.message ? ' (' + j.message + ')' : '';
    if (status === 401) return 'token inválido ou expirado' + m;
    if (status === 403) return 'sem permissão: o token precisa de "Contents: Read and write" neste repositório, ou a regra da branch bloqueou' + m;
    if (status === 404) return 'repositório, branch ou arquivo não encontrado — o token tem acesso a ' + repo + '?' + m;
    if (status === 409 || status === 422) return 'conflito: o arquivo mudou no GitHub durante a publicação; tente de novo' + m;
    return 'erro ' + status + m;
  }
  // Chamada à API; com allow404, devolve null em vez de erro quando não existe
  function api(method, url, body, allow404, repo) {
    return fetch('https://api.github.com/' + url, {
      method: method, cache: 'no-store',
      headers: { 'Authorization': 'Bearer ' + token(), 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.json().then(null, function () { return {}; }).then(function (j) {
        if (r.status === 404 && allow404) return null;
        if (!r.ok) throw new Error(ghMsg(r.status, j, repo || cfg.repo));
        return j;
      });
    });
  }
  function contents(method, c, path, body) {
    return api(method, 'repos/' + c.repo + '/contents/' + path + (method === 'GET' ? '?ref=' + encodeURIComponent(c.branch) : ''), body, method === 'GET', c.repo);
  }

  var toastEl = null;
  function toast(html, kind) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'ed-toast'; document.body.appendChild(toastEl); }
    toastEl.className = 'ed-toast' + (kind ? ' ' + kind : '');
    toastEl.innerHTML = html + ' <button type="button" class="btn btn-sm btn-ghost" data-gh-toast-close title="Fechar">✕</button>';
    toastEl.hidden = !html;
  }

  /* Publica uma lista de arquivos, um commit por arquivo, e acompanha o deploy.
   * item: { file: 'reino.js', varName: 'reino', label, text, data, base, message, draftKey, force }
   * base = conteúdo publicado quando a página carregou (se o remoto diferir, pergunta antes de sobrescrever). */
  function publish(items, opts) {
    opts = opts || {};
    var m = mode();
    if (m === 'showcase') { showcasePanel(opts.back); return; }
    if (m === 'setup') { pending = function () { publish(items, opts); }; setupPanel(opts.back); return; }
    if (!token()) { pending = function () { publish(items, opts); }; tokenPanel(opts.back); return; }
    var shas = [];
    function step(i) {
      if (i >= items.length) return Promise.resolve(true);
      var it = items[i];
      toast('☁ Lendo o <code>' + esc(it.file) + '</code> no GitHub…');
      return contents('GET', cfg, dataPath(it.file)).then(function (cur) {
        var remote = cur ? parseVar(b64decode(cur.content || ''), it.varName) : null;
        if (!it.force && cur && JSON.stringify(remote) !== JSON.stringify(it.base) &&
          !confirm('O ' + it.file + ' no GitHub foi alterado depois que esta página foi carregada (outro navegador, outra pessoa ou um commit).\n\nPublicar agora vai SOBRESCREVER essas mudanças. Continuar?')) return false;
        toast('☁ Publicando o <code>' + esc(it.file) + '</code>…');
        var body = { message: it.message, content: b64encode(it.text), branch: cfg.branch };
        if (cur) body.sha = cur.sha;
        return contents('PUT', cfg, dataPath(it.file), body).then(function (res) {
          if (res && res.commit) shas.push(res.commit.sha);
          return step(i + 1);
        });
      });
    }
    step(0).then(function (ok) {
      if (!ok) { toast(''); return; }
      items.forEach(function (it) { if (it.draftKey) U.store(it.draftKey, it.data); });
      if (opts.onCommit) opts.onCommit();
      waitDeploy(items, shas);
    }).then(null, function (e) { toast('Não foi possível publicar: ' + esc(e.message), 'err'); });
  }

  function commitLinks(shas) {
    return shas.map(function (sha) {
      return ' <a href="https://github.com/' + esc(cfg.repo) + '/commit/' + esc(sha) + '" target="_blank" rel="noopener noreferrer">commit ' + esc(sha.slice(0, 7)) + '</a>';
    }).join('');
  }
  function deploysLink() {
    return /^https?:\/\//i.test(cfg.deploysUrl) ? ' <a href="' + esc(cfg.deploysUrl) + '" target="_blank" rel="noopener noreferrer">Ver deploys</a>' : '';
  }
  // Confere os arquivos servidos pelo site até refletirem a publicação; então descarta os rascunhos e recarrega
  function waitDeploy(items, shas) {
    var links = commitLinks(shas), tries = 0;
    if (location.protocol === 'file:') {
      toast('✔ Commit feito.' + links + ' Este site está aberto localmente: para ver o arquivo publicado aqui, atualize a pasta (git pull).', 'ok');
      return;
    }
    function served(it) {
      return fetch('data/' + it.file + '?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.text(); }).then(function (txt) {
        return JSON.stringify(parseVar(txt, it.varName)) === JSON.stringify(it.data);
      });
    }
    function check() {
      tries++;
      Promise.all(items.map(served)).then(function (res) {
        if (res.every(Boolean)) {
          items.forEach(function (it) { if (it.draftKey) try { localStorage.removeItem(it.draftKey); } catch (x) { /* ignore */ } });
          toast('✔ Publicado e no ar para os jogadores.' + links + ' Recarregando…', 'ok');
          setTimeout(function () { location.reload(); }, 1500);
        } else next();
      }, next);
    }
    function next() {
      if (tries >= 40) {
        toast('✔ Commit feito.' + links + ' O site ainda está sendo publicado — recarregue a página em instantes.' + deploysLink(), 'ok');
        return;
      }
      toast('☁ Commit feito.' + links + ' Aguardando o site publicar… (' + tries * 5 + 's)');
      setTimeout(check, 5000);
    }
    next();
  }

  /* ---------- painéis ---------- */
  function backBtn() { return '<button type="button" class="btn" data-gh-back>Voltar</button>'; }
  function tokenSteps(repo) {
    return '<div class="block-title">Como criar o token (uma vez)</div><ol class="ed-steps">' +
      '<li>Abra <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer">GitHub → Fine-grained token → Generate new token</a>.</li>' +
      '<li><b>Token name:</b> “Guia do Reino – editor”; <b>Expiration:</b> o prazo que preferir (ex.: 1 ano).</li>' +
      '<li><b>Repository access:</b> <i>Only select repositories</i> → <code>' + esc(repo ? repo.split('/')[1] : 'o seu repositório') + '</code>.</li>' +
      '<li><b>Permissions → Repository permissions → Contents:</b> <i>Read and write</i> (nada mais).</li>' +
      '<li>Clique em <b>Generate token</b>, copie o valor (começa com <code>github_pat_</code>) e cole abaixo.</li></ol>';
  }
  function tokenPanel(backFn) {
    if (backFn !== undefined) back = backFn;
    if (mode() === 'showcase') { showcasePanel(); return; }
    if (mode() === 'setup') { setupPanel(); return; }
    var has = !!token();
    var h = '<div class="ed-note">O botão <b>Publicar</b> grava os arquivos de dados direto no GitHub (<code>' + esc(cfg.repo) + '</code>, branch <code>' + esc(cfg.branch) + '</code>) e o provedor (Netlify etc.) publica o site sozinho. ' +
      'Para isso ele precisa de um <b>token pessoal</b> do GitHub, guardado <b>só neste navegador</b>. Não salve o token em computadores compartilhados.</div>' +
      tokenSteps(cfg.repo) +
      '<form id="gh-token-form" autocomplete="off"><label class="ed-f wide"><span>Token do GitHub</span>' +
      '<input name="tok" type="password" placeholder="' + (has ? 'token salvo — cole outro para trocar' : 'github_pat_…') + '"></label>' +
      '<div id="gh-err" class="ed-err" hidden></div><div class="ed-actions">' +
      '<button type="submit" class="btn btn-primary">Salvar token' + (pending ? ' e publicar' : '') + '</button>' +
      (has ? '<button type="button" class="btn" data-gh-forget>Esquecer token</button>' : '') +
      '<button type="button" class="btn" data-gh-setup>Configuração do site</button>' + backBtn() + '</div></form>';
    U.showPanel('Modo mestre', 'Token do GitHub', has ? 'Token salvo neste navegador' : 'Nenhum token salvo', h);
  }
  function saveToken() {
    var f = document.getElementById('gh-token-form'), v = String(f.elements.tok.value || '').trim();
    if (!v) { if (token() && pending) { runPending(); return; } panelErr('Cole o token.'); return; }
    var old = token();
    token(v);
    api('GET', 'repos/' + cfg.repo).then(function () {
      toast('✔ Token salvo e com acesso ao repositório.', 'ok');
      if (pending) runPending(); else goBack();
    }, function (e) {
      token(old || null);
      panelErr('Token não aceito: ' + e.message);
    });
  }

  function setupPanel(backFn) {
    if (backFn !== undefined) back = backFn;
    if (mode() === 'showcase') { showcasePanel(); return; }
    var c = cfg, has = !!token();
    var h = '<div class="ed-note">' + (validRepo(c.repo) ? 'Repositório configurado: <code>' + esc(c.repo) + '</code>. Altere abaixo se mudou.' :
      '<b>Primeira configuração.</b> Informe o repositório do GitHub de onde este site é publicado (o seu fork). O assistente grava <code>' + esc(dataPath('site.js')) + '</code> com estes dados; ' +
      'depois disso o <b>☁ Publicar</b> passa a gravar o conteúdo da campanha e a ficha do reino nesse repositório.') + '</div>' +
      '<form id="gh-setup-form" autocomplete="off"><div class="ed-grid">' +
      '<label class="ed-f"><span>Repositório * <small>usuario/repositorio</small></span><input name="repoName" value="' + esc(c.repo) + '" placeholder="ex.: maria/meu-reino"></label>' +
      '<label class="ed-f"><span>Branch *</span><input name="branchName" value="' + esc(c.branch) + '"></label>' +
      '<label class="ed-f"><span>Pasta do site <small>no repositório</small></span><input name="rootDir" value="' + esc(c.root) + '"></label>' +
      '<label class="ed-f"><span>Página de deploys <small>opcional</small></span><input name="deploys" value="' + esc(c.deploysUrl) + '" placeholder="https://app.netlify.com/projects/…/deploys"></label>' +
      '<label class="ed-f wide"><span>Token do GitHub *' + (has ? ' <small>já salvo — deixe vazio para manter</small>' : '') + '</span><input name="tok" type="password" placeholder="github_pat_…"></label>' +
      '</div>' + tokenSteps(c.repo) +
      '<div id="gh-err" class="ed-err" hidden></div><div class="ed-actions">' +
      '<button type="submit" class="btn btn-primary">Salvar configuração no GitHub</button>' + backBtn() + '</div></form>';
    U.showPanel('Modo mestre', 'Configuração do site', 'Repositório de publicação', h);
  }
  function saveSetup() {
    var f = document.getElementById('gh-setup-form').elements;
    var next = siteConfig({
      repo: String(f.repoName.value).trim().replace(/^https?:\/\/github\.com\//i, '').replace(/\.git$/, '').replace(/\/+$/, ''),
      branch: f.branchName.value, root: f.rootDir.value, deploysUrl: f.deploys.value, upstream: cfg.upstream, showcaseHost: cfg.showcaseHost
    });
    if (!validRepo(next.repo)) { panelErr('Repositório inválido: use o formato usuario/repositorio.'); return; }
    if (!next.branch) { panelErr('Informe a branch.'); return; }
    var tok = String(f.tok.value || '').trim(), old = token();
    if (tok) token(tok);
    if (!token()) { panelErr('Cole o token do GitHub.'); return; }
    var data = { repo: next.repo, branch: next.branch, root: next.root, deploysUrl: next.deploysUrl, upstream: next.upstream, showcaseHost: next.showcaseHost };
    var text = 'window.KM = window.KM || {};\n' + SITE_HEADER + '\nKM.site = ' + JSON.stringify(data, null, 2) + ';\n';
    toast('☁ Conferindo o acesso a ' + esc(next.repo) + '…');
    api('GET', 'repos/' + next.repo, null, false, next.repo).then(function () {
      return contents('GET', next, (next.root ? next.root + '/' : '') + 'data/site.js');
    }).then(function (cur) {
      var body = { message: 'Configuração do site (assistente do modo mestre): ' + next.repo + '@' + next.branch, content: b64encode(text), branch: next.branch };
      if (cur) body.sha = cur.sha;
      return contents('PUT', next, (next.root ? next.root + '/' : '') + 'data/site.js', body);
    }).then(function () {
      cfg = next;
      toast('✔ Configuração gravada em ' + esc(next.repo) + '. O site passa a usá-la no próximo deploy; nesta página ela já vale.', 'ok');
      if (pending) runPending(); else goBack();
    }, function (e) {
      if (tok) token(old || null);
      toast('');
      panelErr('Não foi possível salvar: ' + e.message);
    });
  }

  function forkUrl() { return cfg.upstream ? 'https://github.com/' + cfg.upstream + '/fork' : ''; }
  function showcasePanel(backFn) {
    if (backFn !== undefined) back = backFn;
    var fork = forkUrl();
    var h = '<div class="ed-note">Este endereço é a <b>vitrine</b> do Guia do Reino: o modo mestre funciona para experimentar (as alterações ficam só neste navegador e podem ser baixadas), mas <b>não publica</b>.</div>' +
      '<p>Para ter um site da sua mesa, com conteúdo de campanha e ficha do reino publicados por você:</p><ol class="ed-steps">' +
      '<li>Faça um <b>fork</b> do repositório no GitHub' + (fork ? ' (<a href="' + esc(fork) + '" target="_blank" rel="noopener noreferrer">criar fork</a>)' : '') + '.</li>' +
      '<li>Publique o fork no Netlify (ou Cloudflare Pages) — o passo a passo está no README do repositório.</li>' +
      '<li>Abra o seu site com <code>?mestre</code> e clique em <b>☁ Publicar</b>: o assistente configura o resto.</li></ol>' +
      '<div class="ed-actions">' + (fork ? '<a class="btn btn-primary" href="' + esc(fork) + '" target="_blank" rel="noopener noreferrer">Crie o seu ↗</a>' : '') + backBtn() + '</div>';
    U.showPanel('Modo mestre', 'Publicação desativada na vitrine', '', h);
  }

  function panelErr(msg) { var d = document.getElementById('gh-err'); if (!d) { toast(esc(msg), 'err'); return; } d.textContent = msg; d.hidden = false; d.scrollIntoView({ block: 'nearest' }); }
  function runPending() { var p = pending; pending = null; U.closeModal(); p(); }
  function goBack() { pending = null; if (back) back(); else U.closeModal(); }

  function download(name, text) {
    var blob = new Blob([text], { type: 'text/javascript;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.parentNode.removeChild(a); }, 1000);
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-gh-token],[data-gh-setup],[data-gh-forget],[data-gh-back],[data-gh-toast-close]');
    if (!t) return;
    ev.preventDefault();
    var d = t.dataset;
    if ('ghToken' in d) tokenPanel();
    else if ('ghSetup' in d) setupPanel();
    else if ('ghForget' in d) { token(null); toast('Token removido deste navegador.'); tokenPanel(); }
    else if ('ghBack' in d) goBack();
    else if ('ghToastClose' in d) toast('');
  });
  document.addEventListener('submit', function (ev) {
    var id = ev.target.getAttribute('id');
    if (id === 'gh-token-form') { ev.preventDefault(); saveToken(); }
    else if (id === 'gh-setup-form') { ev.preventDefault(); saveSetup(); }
  });

  window.KMGitHub = {
    mode: mode, config: function () { return cfg; }, hasToken: function () { return !!token(); },
    publish: publish, toast: toast, download: download, parseVar: parseVar,
    tokenPanel: tokenPanel, setupPanel: setupPanel, showcasePanel: showcasePanel, forkUrl: forkUrl
  };
})();
