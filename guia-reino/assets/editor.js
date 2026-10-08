/* Editor do conteúdo da campanha — só no modo mestre (?mestre).
 * As alterações ficam num rascunho no navegador (localStorage 'km-campaign-draft'), que o app.js
 * carrega no lugar de data/campanha.js enquanto estiver no modo mestre. Para os jogadores verem:
 * "Publicar" grava o arquivo no GitHub via API (token pessoal em localStorage 'km-gh-token') e o
 * Netlify publica; ou, manualmente, baixar o campanha.js gerado e enviá-lo ao repositório. */
(function () {
  'use strict';

  var A = window.KMApp;
  if (!A || !A.gm) return;
  var U = A.util, esc = U.esc;
  var DRAFT_KEY = 'km-campaign-draft';
  var work = U.clone(A.campaign.current); // estado em edição (sem campos internos do app)
  var dirty = false;

  var COLL = {
    activities: ['activity', 'Atividades', 'atividades'], armyActivities: ['activity', 'Atividades de exército', 'guerra'],
    structures: ['structure', 'Estruturas', 'estruturas'], feats: ['feat', 'Talentos', 'talentos'],
    rules: ['rule', 'Regras', 'regras'], settlementRules: ['rule', 'Regras de assentamento', 'regras'], warfareRules: ['rule', 'Regras de guerra', 'guerra'],
    tactics: ['tactic', 'Táticas', 'guerra'], warActions: ['waraction', 'Ações de guerra', 'guerra'], gear: ['gear', 'Equipamento', 'guerra'],
    armies: ['army', 'Exércitos', 'guerra'], conditions: ['condition', 'Condições', 'guerra'], skills: ['skill', 'Perícias', 'regras'], leaders: ['leader', 'Cargos', 'regras']
  };
  var COST_KEYS = [['rp', 'RP'], ['lumber', 'Lumber'], ['ore', 'Ore'], ['stone', 'Stone'], ['luxuries', 'Luxuries']];
  var OUT = [['criticalSuccess', 'Sucesso crítico'], ['success', 'Sucesso'], ['failure', 'Falha'], ['criticalFailure', 'Falha crítica']];

  var HEADER = [
    '// Conteúdo próprio da campanha (fora do Player\'s Guide).',
    '// Cada lista é anexada à coleção de mesmo nome (KM.activities, KM.structures, KM.feats, …)',
    '// ao carregar o app, e todos os itens recebem source = "campanha" (selo "Campanha" na interface).',
    '// Mesmo formato dos arquivos do livro; veja docs/modelo-de-dados.md (seção "Conteúdo da campanha").',
    '// `page` não se aplica. `sourceRef`: link do card (https://…), que vira o botão "Ver card" para os',
    '// jogadores, ou texto livre como o nome do PDF (visível só no modo mestre).',
    '//',
    '// ATIVAÇÃO: o item só aparece no site com "active": true. Com false (ou sem o campo) fica oculto,',
    '// mas pode ser visto abrindo o site com ?mestre (ex.: index.html?mestre#/estruturas), com o selo',
    '// "Inativo" e a "condition" (anotação livre do que ativa o item).',
    '// Atenção: oculto não é secreto — quem abrir este arquivo no navegador vê todo o conteúdo.',
    '//',
    '// Este arquivo pode ser gerado pelo editor do modo mestre (☰ Gerenciar campanha → Publicar / Baixar).'
  ].join('\n');

  /* ---------- utilidades ---------- */
  function fileText() { return 'window.KM = window.KM || {};\n' + HEADER + '\nKM.campaign = ' + JSON.stringify(work, null, 2) + ';\n'; }
  function attr(v) { return esc(v == null ? '' : v); }
  function opts(list, val) {
    return list.map(function (o) { return '<option value="' + attr(o[0]) + '"' + (String(o[0]) === String(val == null ? '' : val) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('');
  }
  function inp(name, label, val, o) {
    o = o || {};
    return '<label class="ed-f' + (o.wide ? ' wide' : '') + '"><span>' + label + (o.req ? ' *' : '') + (o.hint ? ' <small>' + o.hint + '</small>' : '') + '</span>' +
      '<input name="' + name + '" type="' + (o.type || 'text') + '" value="' + attr(val) + '"' + (o.ph ? ' placeholder="' + attr(o.ph) + '"' : '') + (o.min != null ? ' min="' + o.min + '"' : '') + '></label>';
  }
  function area(name, label, val, rows, o) {
    o = o || {};
    return '<label class="ed-f wide"><span>' + label + (o.req ? ' *' : '') + (o.hint ? ' <small>' + o.hint + '</small>' : '') + '</span>' +
      '<textarea name="' + name + '" rows="' + (rows || 3) + '"' + (o.ph ? ' placeholder="' + attr(o.ph) + '"' : '') + '>' + esc(val == null ? '' : val) + '</textarea>' +
      (o.after || '') + '</label>';
  }
  function sel(name, label, list, val, o) {
    o = o || {};
    return '<label class="ed-f' + (o.wide ? ' wide' : '') + '"><span>' + label + (o.req ? ' *' : '') + '</span><select name="' + name + '"' + (o.multiple ? ' multiple size="7"' : '') + '>' +
      (o.multiple ? list.map(function (x) { return '<option value="' + attr(x[0]) + '"' + (val.indexOf(x[0]) >= 0 ? ' selected' : '') + '>' + esc(x[1]) + '</option>'; }).join('') : opts(list, val)) +
      '</select>' + (o.hint ? '<small>' + o.hint + '</small>' : '') + '</label>';
  }
  function chk(name, label, on) { return '<label class="ed-f ed-check"><input type="checkbox" name="' + name + '"' + (on ? ' checked' : '') + '> ' + label + '</label>'; }
  function section(t) { return '<div class="block-title ed-f wide">' + t + '</div>'; }

  function skillOpts() {
    return [['', '—'], ['Any', 'Qualquer perícia']].concat(U.skillList().map(function (s) { return [s, s + ' · ' + (U.SKILL_PT[U.kebab(s)] || '')]; }));
  }
  function profOpts() { return U.RANKS.map(function (r, i) { return [r, U.RANK_PT[i]]; }); }
  function entities(kind) {
    var r = A.registry[kind] || {};
    return Object.keys(r).map(function (k) { return r[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
  }

  function form() { return document.getElementById('ed-form'); }
  function val(name) { var el = form().elements[name]; return el ? String(el.value).trim() : ''; }
  function checked(name) { var el = form().elements[name]; return !!(el && el.checked); }
  function vals(sel) { return Array.prototype.slice.call(form().querySelectorAll(sel)); }
  function num(name) { var v = val(name); return v === '' ? null : Number(v); }
  function setOrDel(o, k, v) {
    if (v === '' || v == null || (Array.isArray(v) && !v.length)) delete o[k]; else o[k] = v;
  }
  function parseStats(t) {
    var o = {};
    String(t || '').split('\n').forEach(function (l) {
      var i = l.indexOf(':'); if (i < 1) return;
      var k = l.slice(0, i).trim(), v = l.slice(i + 1).trim();
      if (k && v) o[k] = v;
    });
    return o;
  }
  function statsText(s) { return s ? Object.keys(s).map(function (k) { return k + ': ' + s[k]; }).join('\n') : ''; }

  function saveDraft(hash) {
    U.store(DRAFT_KEY, work);
    dirty = false;
    var url = location.pathname + location.search + (hash || location.hash);
    if (url !== location.pathname + location.search + location.hash) history.replaceState(null, '', url);
    location.reload();
  }
  function findIdx(key, id) {
    var l = work[key] || [];
    for (var i = 0; i < l.length; i++) if (l[i].id === id) return i;
    return -1;
  }

  /* ---------- publicar no GitHub (o Netlify publica o site a cada commit na main) ---------- */
  var GH = { repo: 'diego-duarte/pf2-easy-kingdom-management', branch: 'main', path: 'guia-reino/data/campanha.js' };
  var TOKEN_KEY = 'km-gh-token';
  var publishAfterToken = false;

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
  function parseCampaign(txt) {
    var i = txt.indexOf('KM.campaign');
    if (i < 0) return null;
    try { return JSON.parse(txt.slice(txt.indexOf('{', i), txt.lastIndexOf('}') + 1)); } catch (x) { return null; }
  }
  function ghMsg(status, j) {
    var m = j && j.message ? ' (' + j.message + ')' : '';
    if (status === 401) return 'token inválido ou expirado' + m;
    if (status === 403) return 'sem permissão: o token precisa de "Contents: Read and write" neste repositório, ou a regra da branch bloqueou' + m;
    if (status === 404) return 'arquivo ou repositório não encontrado — o token tem acesso a ' + GH.repo + '?' + m;
    if (status === 409 || status === 422) return 'conflito: o arquivo mudou no GitHub durante a publicação; tente de novo' + m;
    return 'erro ' + status + m;
  }
  function gh(method, body) {
    var url = 'https://api.github.com/repos/' + GH.repo + '/contents/' + GH.path + (method === 'GET' ? '?ref=' + GH.branch : '');
    return fetch(url, {
      method: method, cache: 'no-store',
      headers: { 'Authorization': 'Bearer ' + token(), 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.json().then(null, function () { return {}; }).then(function (j) {
        if (!r.ok) throw new Error(ghMsg(r.status, j));
        return j;
      });
    });
  }
  // Resumo das mudanças para a mensagem do commit: +novo, −removido, ~alterado, ativado/desativado
  function changes(base, next) {
    var out = [], keys = {};
    Object.keys(base || {}).concat(Object.keys(next || {})).forEach(function (k) { keys[k] = 1; });
    Object.keys(keys).forEach(function (k) {
      var b = {}, n = {};
      ((base || {})[k] || []).forEach(function (e) { b[e.id] = e; });
      ((next || {})[k] || []).forEach(function (e) { n[e.id] = e; });
      Object.keys(n).forEach(function (id) {
        if (!b[id]) { out.push('+' + id); return; }
        if (JSON.stringify(b[id]) === JSON.stringify(n[id])) return;
        var c = U.clone(b[id]); c.active = n[id].active;
        if ((b[id].active === true) !== (n[id].active === true) && JSON.stringify(c) === JSON.stringify(n[id])) out.push((n[id].active === true ? 'ativado ' : 'desativado ') + id);
        else out.push('~' + id);
      });
      Object.keys(b).forEach(function (id) { if (!n[id]) out.push('−' + id); });
    });
    return out;
  }

  var toastEl = null;
  function toast(html, kind) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'ed-toast'; document.body.appendChild(toastEl); }
    toastEl.className = 'ed-toast' + (kind ? ' ' + kind : '');
    toastEl.innerHTML = html + ' <button type="button" class="btn btn-sm btn-ghost" data-ed-toast-close title="Fechar">✕</button>';
    toastEl.hidden = !html;
  }

  function publish() {
    if (!token()) { tokenPanel(true); return; }
    var list = changes(A.campaign.file, work);
    if (!list.length) { toast('Nada para publicar: o conteúdo é igual ao publicado.'); return; }
    toast('☁ Lendo o <code>campanha.js</code> no GitHub…');
    gh('GET').then(function (cur) {
      var remote = parseCampaign(b64decode(cur.content || ''));
      if (JSON.stringify(remote) !== JSON.stringify(A.campaign.file) &&
        !confirm('O campanha.js no GitHub foi alterado depois que esta página foi carregada (outro navegador, outra pessoa ou um commit).\n\nPublicar agora vai SOBRESCREVER essas mudanças. Continuar?')) { toast(''); return null; }
      toast('☁ Publicando…');
      var msg = 'Campanha (editor do mestre): ' + list.slice(0, 12).join(', ') + (list.length > 12 ? ' e mais ' + (list.length - 12) : '');
      return gh('PUT', { message: msg, content: b64encode(fileText()), sha: cur.sha, branch: GH.branch }).then(function (res) {
        U.store(DRAFT_KEY, work);
        dirty = false;
        waitDeploy(res && res.commit ? res.commit.sha : '');
      });
    }).then(null, function (e) { toast('Não foi possível publicar: ' + esc(e.message), 'err'); });
  }
  // Confere o arquivo servido pelo site até ele refletir a publicação (deploy do Netlify concluído)
  function waitDeploy(sha) {
    var target = JSON.stringify(work), tries = 0;
    var commitLink = sha ? ' <a href="https://github.com/' + GH.repo + '/commit/' + esc(sha) + '" target="_blank" rel="noopener noreferrer">commit ' + esc(sha.slice(0, 7)) + '</a>' : '';
    function check() {
      tries++;
      fetch('data/campanha.js?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.text(); }).then(function (txt) {
        if (JSON.stringify(parseCampaign(txt)) === target) {
          try { localStorage.removeItem(DRAFT_KEY); } catch (x) { /* ignore */ }
          toast('✔ Publicado e no ar para os jogadores.' + commitLink + ' Recarregando…', 'ok');
          setTimeout(function () { location.reload(); }, 1500);
        } else next();
      }, next);
    }
    function next() {
      if (tries >= 40) {
        toast('✔ Commit feito.' + commitLink + ' O Netlify ainda está publicando — recarregue a página em instantes. <a href="https://app.netlify.com/projects/pf2-easy-kingdom-management/deploys" target="_blank" rel="noopener noreferrer">Ver deploys</a>', 'ok');
        return;
      }
      toast('☁ Commit feito.' + commitLink + ' Aguardando o Netlify publicar… (' + tries * 5 + 's)');
      setTimeout(check, 5000);
    }
    next();
  }

  function tokenPanel(thenPublish) {
    publishAfterToken = !!thenPublish;
    var has = !!token();
    var h = '<div class="ed-note">O botão <b>Publicar</b> grava o <code>campanha.js</code> direto no GitHub (' + esc(GH.repo) + ', branch ' + esc(GH.branch) + ') e o Netlify publica o site sozinho. ' +
      'Para isso ele precisa de um <b>token pessoal</b> do GitHub, guardado <b>só neste navegador</b>. Não salve o token em computadores compartilhados.</div>' +
      '<div class="block-title">Como criar o token (uma vez)</div><ol class="ed-steps">' +
      '<li>Abra <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer">GitHub → Fine-grained token → Generate new token</a>.</li>' +
      '<li><b>Token name:</b> “Guia do Reino – editor”; <b>Expiration:</b> o prazo que preferir (ex.: 1 ano).</li>' +
      '<li><b>Repository access:</b> <i>Only select repositories</i> → <code>' + esc(GH.repo.split('/')[1]) + '</code>.</li>' +
      '<li><b>Permissions → Repository permissions → Contents:</b> <i>Read and write</i> (nada mais).</li>' +
      '<li>Clique em <b>Generate token</b>, copie o valor (começa com <code>github_pat_</code>) e cole abaixo.</li></ol>' +
      '<form id="ed-token-form" autocomplete="off"><label class="ed-f wide"><span>Token do GitHub</span>' +
      '<input name="tok" type="password" placeholder="' + (has ? 'token salvo — cole outro para trocar' : 'github_pat_…') + '"></label>' +
      '<div id="ed-err" class="ed-err" hidden></div><div class="ed-actions">' +
      '<button type="submit" class="btn btn-primary">Salvar token' + (thenPublish ? ' e publicar' : '') + '</button>' +
      (has ? '<button type="button" class="btn" data-ed-forget>Esquecer token</button>' : '') +
      '<button type="button" class="btn" data-ed-panel>Voltar</button></div></form>';
    U.showPanel('Modo mestre', 'Token do GitHub', has ? 'Token salvo neste navegador' : 'Nenhum token salvo', h);
  }
  function saveToken() {
    var f = document.getElementById('ed-token-form'), v = String(f.elements.tok.value || '').trim();
    if (!v) { if (token() && publishAfterToken) { publish(); return; } err('Cole o token.'); return; }
    var old = token();
    token(v);
    gh('GET').then(function () {
      toast('✔ Token salvo e com acesso ao repositório.', 'ok');
      if (publishAfterToken) { publishAfterToken = false; panel(); publish(); } else panel();
    }, function (e) {
      token(old || null);
      err('Token não aceito: ' + e.message);
    });
  }

  /* ---------- painel ---------- */
  function panel() {
    var h = '<div class="ed-note">As alterações ficam só <b>neste navegador</b> (rascunho) e aparecem no modo mestre. ' +
      'Para os jogadores verem, clique em <b>☁ Publicar</b>: o arquivo é gravado no GitHub e o Netlify atualiza o site em instantes ' +
      '(alternativa manual: <b>Baixar campanha.js</b> e enviar para <code>guia-reino/data/</code> no GitHub). ' +
      'Depois de publicado, o rascunho é descartado automaticamente.</div>';
    h += '<div class="ed-bar">' +
      '<button type="button" class="btn btn-sm" data-ed-new="activities">+ Atividade</button>' +
      '<button type="button" class="btn btn-sm" data-ed-new="structures">+ Estrutura</button>' +
      '<button type="button" class="btn btn-sm" data-ed-new="json">+ Outro tipo (JSON)</button><span class="sep"></span>' +
      '<button type="button" class="btn btn-sm' + (dirty ? ' btn-primary' : '') + '" data-ed-apply>✔ Salvar e aplicar</button>' +
      '<button type="button" class="btn btn-sm' + (!dirty && A.campaign.draft ? ' btn-primary' : '') + '" data-ed-publish>☁ Publicar</button>' +
      '<button type="button" class="btn btn-sm" data-ed-download>⤓ Baixar campanha.js</button>' +
      '<button type="button" class="btn btn-sm" data-ed-copy>⧉ Copiar</button>' +
      '<button type="button" class="btn btn-sm" data-ed-token title="Token do GitHub usado pelo Publicar">⚙ Token' + (token() ? ' ✓' : '') + '</button>' +
      (A.campaign.draft ? '<button type="button" class="btn btn-sm" data-ed-discard>Descartar rascunho</button>' : '') +
      (dirty ? '<span class="ed-dirty">Alterações ainda não aplicadas</span>' : '') +
      '</div>';
    var keys = Object.keys(work);
    if (!keys.length) h += '<div class="empty">Nenhum conteúdo de campanha ainda.</div>';
    keys.forEach(function (k) {
      var list = work[k] || [];
      h += '<div class="block-title">' + esc((COLL[k] || [0, k])[1]) + ' (' + list.length + ')</div>';
      if (!list.length) { h += '<p class="muted">Nenhum item.</p>'; return; }
      h += '<div class="table-wrap"><table class="data ed-list"><tbody>' + list.map(function (e, i) {
        return '<tr><td><b>' + esc(e.name || e.id) + '</b><span class="pt">' + esc(e.id) + '</span></td>' +
          '<td style="white-space:nowrap"><label class="ed-check"><input type="checkbox" data-ed-toggle="' + attr(k + '|' + i) + '"' + (e.active === true ? ' checked' : '') + '> ativo</label></td>' +
          '<td class="muted">' + esc(e.condition || '') + '</td>' +
          '<td style="white-space:nowrap;text-align:right"><button type="button" class="btn btn-sm" data-ed-edit="' + attr(k + '|' + e.id) + '" title="Editar">✎</button> ' +
          '<button type="button" class="btn btn-sm" data-ed-del="' + attr(k + '|' + i) + '" title="Excluir">🗑</button></td></tr>';
      }).join('') + '</tbody></table></div>';
    });
    h += '<div id="ed-copy-box"></div>';
    U.showPanel('Modo mestre', 'Conteúdo da campanha', A.campaign.draft ? '<span class="gm-draft">Rascunho local não publicado</span>' : 'Igual ao arquivo publicado', h);
  }

  /* ---------- formulário: atividade ---------- */
  function skillRow(s) {
    s = s || {};
    return '<div class="ed-row" data-row="skill"><select data-k="skill">' + opts(skillOpts(), s.skill) + '</select>' +
      '<select data-k="proficiency">' + opts(profOpts(), s.proficiency || 'untrained') + '</select>' +
      '<input data-k="note" placeholder="Observação (opcional)" value="' + attr(s.note) + '">' +
      '<button type="button" class="btn btn-sm" data-ed-rm-row title="Remover">✕</button></div>';
  }
  function activityForm(e) {
    var steps = U.STEP_ORDER.map(function (s) { return [s, U.STEP_LABEL[s]]; });
    var h = section('Identificação') +
      inp('name', 'Nome (original)', e.name, { req: true }) + inp('namePt', 'Nome em português', e.namePt) +
      inp('itemId', 'id', e.id, { hint: 'gerado do nome se vazio', ph: 'ex.: silken-diplomacy' }) + inp('sourceRef', 'Fonte / link do card', e.sourceRef, { ph: 'https://… ou nome do arquivo', hint: 'link vira “Ver card”' }) +
      chk('active', 'Ativo (visível para os jogadores)', e.active === true) + inp('condition', 'Condição de ativação', e.condition, { wide: true }) +
      area('summary', 'Resumo (PT)', e.summary, 2, { req: true }) +
      section('Regras') +
      sel('step', 'Etapa do turno', steps, e.step || 'leadership', { req: true }) + inp('dc', 'CD', e.dc, { ph: 'ex.: CD de Controle' }) +
      chk('oncePerTurn', '1×/turno', !!e.oncePerTurn) +
      '<div class="ed-rows" id="ed-skills"><span class="ed-f">Perícias <small>(deixe em “—” se não houver teste)</small></span>' +
      (e.skills && e.skills.length ? e.skills : [{}]).map(skillRow).join('') +
      '</div><div class="ed-f wide"><button type="button" class="btn btn-sm" data-ed-add-row="skill" style="align-self:flex-start">+ perícia</button></div>' +
      inp('requirements', 'Requisitos', e.requirements, { wide: true }) + inp('frequency', 'Frequência', e.frequency, { wide: true }) +
      area('text', 'Texto completo', e.text, 6, { req: true, hint: 'mini-markdown: **negrito**, *itálico*, - lista, [[tipo:id|Rótulo]]' }) +
      section('Resultados (opcional)');
    OUT.forEach(function (o) { h += inp('q-' + o[0], o[1] + ' — resumo', (e.quick || {})[o[0]], { wide: true }); });
    OUT.forEach(function (o) { h += area('o-' + o[0], o[1] + ' — texto completo', (e.outcomes || {})[o[0]], 2); });
    h += inp('special', 'Especial', e.special, { wide: true });
    return h;
  }
  function readActivity(o) {
    setOrDel(o, 'step', val('step'));
    setOrDel(o, 'dc', val('dc'));
    o.oncePerTurn = checked('oncePerTurn');
    o.skills = vals('[data-row=skill]').map(function (r) {
      var s = { skill: r.querySelector('[data-k=skill]').value, proficiency: r.querySelector('[data-k=proficiency]').value };
      var n = r.querySelector('[data-k=note]').value.trim(); if (n) s.note = n;
      return s;
    }).filter(function (s) { return s.skill; });
    ['requirements', 'frequency', 'special', 'text'].forEach(function (k) { setOrDel(o, k, val(k)); });
    var q = {}, out = {};
    OUT.forEach(function (x) { if (val('q-' + x[0])) q[x[0]] = val('q-' + x[0]); if (val('o-' + x[0])) out[x[0]] = val('o-' + x[0]); });
    if (Object.keys(q).length) o.quick = q; else delete o.quick;
    if (Object.keys(out).length) o.outcomes = out; else delete o.outcomes;
    if (!o.tags || !o.tags.length) o.tags = ['downtime', o.step];
  }
  function activityStats(o) {
    var s = { 'Etapa': U.STEP_LABEL[o.step] || o.step };
    s['Perícias'] = o.skills && o.skills.length ? o.skills.map(function (x) {
      return x.skill + (x.proficiency && x.proficiency !== 'untrained' ? ' (' + U.RANK_PT[U.RANKS.indexOf(x.proficiency)].toLowerCase() + ')' : '');
    }).join(', ') : 'Nenhuma (sem teste)';
    if (o.dc) s['CD'] = o.dc;
    if (o.oncePerTurn) s['Limite'] = '1/turno';
    s['Origem'] = 'Campanha';
    return s;
  }

  /* ---------- formulário: estrutura ---------- */
  function bonusRow(b) {
    b = b || {};
    var acts = [['', '— atividade —']].concat(entities('activity').filter(function (a) { return !a._army; }).map(function (a) { return [a.id, a.name]; }));
    var ba = b.activity && A.resolve('activity', b.activity);
    var note = b.note && b.note !== b.skill && !(ba && b.note === ba.name) ? b.note : '';
    return '<div class="ed-row bonus" data-row="bonus"><select data-k="value">' + opts([['1', '+1'], ['2', '+2'], ['3', '+3']], b.value || 1) + '</select>' +
      '<select data-k="activity">' + opts(acts, b.activity) + '</select>' +
      '<select data-k="skill">' + opts([['', '— perícia —']].concat(skillOpts().slice(2)), b.skill) + '</select>' +
      '<input data-k="note" placeholder="Observação (opcional)" value="' + attr(note) + '">' +
      '<button type="button" class="btn btn-sm" data-ed-rm-row title="Remover">✕</button></div>';
  }
  function structureForm(e) {
    var traits = {};
    entities('structure').forEach(function (s) { (s.traits || []).forEach(function (t) { traits[t] = 1; }); });
    var st = entities('structure').filter(function (s) { return s.id !== e.id; }).map(function (s) { return [s.id, s.name + ' (Nv ' + s.level + ')']; });
    var c = e.cost || {}, k = e.construction || {};
    var h = section('Identificação') +
      inp('name', 'Nome (original)', e.name, { req: true }) + inp('namePt', 'Nome em português', e.namePt) +
      inp('itemId', 'id', e.id, { hint: 'gerado do nome se vazio', ph: 'ex.: expedition-pavilion' }) + inp('sourceRef', 'Fonte / link do card', e.sourceRef, { ph: 'https://… ou nome do arquivo', hint: 'link vira “Ver card”' }) +
      chk('active', 'Ativo (visível para os jogadores)', e.active === true) + inp('condition', 'Condição de ativação', e.condition, { wide: true }) +
      area('summary', 'Resumo (PT)', e.summary, 2, { req: true }) +
      section('Dados') +
      inp('level', 'Nível', e.level, { req: true, type: 'number', min: 0 }) + inp('lots', 'Lotes', e.lots, { type: 'number', min: 0, hint: '0/vazio = infraestrutura' }) +
      '<div class="ed-f wide"><span>Traços</span><div class="ed-traits">' + Object.keys(traits).sort().map(function (t) {
        return '<label><input type="checkbox" name="trait" value="' + attr(t) + '"' + ((e.traits || []).indexOf(t) >= 0 ? ' checked' : '') + '> ' + esc(t) + '</label>';
      }).join('') + '</div></div>';
    COST_KEYS.forEach(function (x) { h += inp('cost-' + x[0], 'Custo: ' + x[1], c[x[0]], { type: 'number', min: 0 }); });
    h += sel('c-skill', 'Construção: perícia', [['', '—']].concat(skillOpts().slice(2)), k.skill) +
      sel('c-prof', 'Construção: proficiência', profOpts(), k.proficiency || 'untrained') +
      inp('c-dc', 'Construção: CD', k.dc, { type: 'number', min: 0 }) +
      sel('upgradeFrom', 'Melhoria de', st, e.upgradeFrom || [], { multiple: true, hint: 'Ctrl+clique para várias' }) +
      sel('upgradeTo', 'Melhora para', st, e.upgradeTo || [], { multiple: true, hint: 'Ctrl+clique para várias' }) +
      '<div class="ed-rows" id="ed-bonuses"><span class="ed-f">Bônus de item <small>(por atividade e/ou perícia)</small></span>' +
      (e.itemBonuses || []).map(bonusRow).join('') +
      '</div><div class="ed-f wide"><button type="button" class="btn btn-sm" data-ed-add-row="bonus" style="align-self:flex-start">+ bônus</button></div>' +
      inp('requirements', 'Requisitos', e.requirements, { wide: true }) +
      area('effects', 'Efeitos', e.effects, 3) +
      section('Texto') +
      area('flavor', 'Descrição (só para gerar o texto)', '', 2, { ph: 'Parágrafo de ambientação; usado pelo botão abaixo' }) +
      area('text', 'Texto completo', e.text, 7, { req: true, hint: 'mini-markdown', after: '<button type="button" class="btn btn-sm" data-ed-gen-text style="align-self:flex-start;margin-top:4px">↻ Gerar a partir dos campos</button>' });
    return h;
  }
  function readStructure(o) {
    o.level = num('level');
    var lots = num('lots'); if (lots) o.lots = lots; else delete o.lots;
    o.traits = vals('[name=trait]:checked').map(function (x) { return x.value; });
    o.tags = o.traits.slice();
    var cost = {}, parts = [];
    COST_KEYS.forEach(function (x) { var n = num('cost-' + x[0]); if (n) { cost[x[0]] = n; parts.push(n + ' ' + x[1]); } });
    o.cost = cost; setOrDel(o, 'costText', parts.join(', '));
    var sk = val('c-skill'), pr = val('c-prof'), dc = num('c-dc');
    if (sk) o.construction = { skill: sk, proficiency: pr, dc: dc, text: sk + (pr && pr !== 'untrained' ? ' (' + pr + ')' : '') + (dc != null ? ' DC ' + dc : '') };
    else delete o.construction;
    ['upgradeFrom', 'upgradeTo'].forEach(function (k) {
      o[k] = Array.prototype.slice.call(form().elements[k].selectedOptions || []).map(function (x) { return x.value; });
    });
    o.itemBonuses = vals('[data-row=bonus]').map(function (r) {
      var b = { value: +r.querySelector('[data-k=value]').value };
      var sk2 = r.querySelector('[data-k=skill]').value, act = r.querySelector('[data-k=activity]').value, n = r.querySelector('[data-k=note]').value.trim();
      if (sk2) b.skill = sk2;
      if (act) b.activity = act;
      var a = act && A.resolve('activity', act);
      b.note = n || (a ? a.name : sk2);
      return b;
    }).filter(function (b) { return b.skill || b.activity; });
    ['requirements', 'effects', 'text'].forEach(function (k) { setOrDel(o, k, val(k)); });
    if (o.requirements === undefined) o.requirements = null;
  }
  function bonusLine(b) {
    var a = b.activity && A.resolve('activity', b.activity);
    return '+' + b.value + ' item bonus to ' + (a ? '[[activity:' + a.id + '|' + a.name + ']]' + (b.skill ? ' using ' + b.skill : '') : b.skill + ' checks');
  }
  function structureText(o, flavor) {
    var l = [];
    if (flavor) l.push(flavor);
    l.push((o.lots ? '**Lots** ' + o.lots + '; ' : '') + '**Cost** ' + (o.costText || '—'));
    if (o.construction) l.push('**Construction** ' + o.construction.text);
    if (o.requirements) l.push('**Requirements** ' + o.requirements);
    function links(ids) { return ids.map(function (id) { var s = A.resolve('structure', id); return '[[structure:' + id + '|' + (s ? s.name.toLowerCase() : id) + ']]'; }).join(', '); }
    if (o.upgradeFrom && o.upgradeFrom.length) l.push('**Upgrade From** ' + links(o.upgradeFrom));
    if (o.upgradeTo && o.upgradeTo.length) l.push('**Upgrade To** ' + links(o.upgradeTo));
    if (o.itemBonuses && o.itemBonuses.length) l.push('**Item Bonus** ' + o.itemBonuses.map(bonusLine).join('; '));
    if (o.effects) l.push('**Effects** ' + o.effects);
    return l.join('\n\n');
  }
  function structureStats(o) {
    function names(ids) { return ids.map(function (id) { var s = A.resolve('structure', id); return s ? s.name : id; }).join(', '); }
    var s = { 'Nível': String(o.level) };
    if (o.traits.length) s['Traços'] = o.traits.map(function (t) { return t.charAt(0).toUpperCase() + t.slice(1); }).join(', ');
    s['Lotes'] = o.lots ? String(o.lots) : '—';
    if (o.costText) s['Custo'] = o.costText;
    if (o.construction) s['Construção'] = o.construction.text;
    if (o.upgradeFrom.length) s['Melhora de'] = names(o.upgradeFrom);
    if (o.upgradeTo.length) s['Melhora para'] = names(o.upgradeTo);
    if (o.itemBonuses.length) s['Bônus de item'] = o.itemBonuses.map(function (b) { return bonusLine(b).replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1'); }).join('; ');
    s['Origem'] = 'Campanha';
    return s;
  }

  /* ---------- abrir / salvar formulários ---------- */
  var cur = null; // { key, idx, mode: 'activity'|'structure'|'json' }

  function blank(key) {
    var o = { id: '', active: false, condition: '', name: '', namePt: '', summary: '' };
    if (key === 'structures') { o.level = 1; o.lots = 1; o.traits = ['building']; o.upgradeFrom = []; o.upgradeTo = []; o.itemBonuses = []; o.ruin = null; }
    if (key === 'activities') { o.step = 'leadership'; o.skills = []; }
    return o;
  }
  function open(key, idx, mode) {
    var e = idx >= 0 ? work[key][idx] : blank(key);
    if (!mode) mode = key === 'structures' ? 'structure' : (key === 'activities' || key === 'armyActivities') ? 'activity' : 'json';
    cur = { key: key, idx: idx, mode: mode };
    var body;
    if (mode === 'json') {
      var keys = Object.keys(COLL).map(function (k) { return [k, COLL[k][1] + ' (' + k + ')']; });
      body = (idx < 0 ? sel('coll', 'Coleção', keys, key === 'json' ? 'feats' : key) : '') +
        '<label class="ed-f wide"><span>Item em JSON <small>(mesmo formato dos arquivos de dados; veja docs/modelo-de-dados.md)</small></span>' +
        '<textarea class="ed-json" name="json" rows="22">' + esc(JSON.stringify(idx >= 0 ? e : { id: '', active: false, condition: '', name: '', namePt: '', summary: '', text: '' }, null, 2)) + '</textarea></label>';
    } else {
      body = (mode === 'structure' ? structureForm(e) : activityForm(e)) +
        section('Tabela de dados do modal') +
        area('stats', 'Linhas “Rótulo: valor”', statsText(e.stats), 5, { hint: 'vazio = gerar automaticamente', after: '<button type="button" class="btn btn-sm" data-ed-gen-stats style="align-self:flex-start;margin-top:4px">↻ Gerar a partir dos campos</button>' });
    }
    var h = '<form id="ed-form" autocomplete="off"><div class="ed-grid">' + body + '</div>' +
      '<div id="ed-err" class="ed-err" hidden></div><div class="ed-actions">' +
      '<button type="submit" class="btn btn-primary">✔ Salvar</button>' +
      '<button type="button" class="btn" data-ed-panel>Cancelar</button>' +
      (mode !== 'json' ? '<button type="button" class="btn" data-ed-as-json>{ } Editar como JSON</button>' : '') +
      '</div></form>';
    var title = idx >= 0 ? (e.name || e.id) : (mode === 'structure' ? 'Nova estrutura' : mode === 'activity' ? 'Nova atividade' : 'Novo item');
    U.showPanel('Modo mestre · ' + (idx >= 0 ? 'Editar' : 'Novo'), title, idx >= 0 ? esc(key + ' · ' + e.id) : 'Conteúdo da campanha', h);
  }
  function err(msg) { var d = document.getElementById('ed-err'); d.textContent = msg; d.hidden = false; d.scrollIntoView({ block: 'nearest' }); }

  function buildFromForm() {
    var key = cur.key, orig = cur.idx >= 0 ? work[key][cur.idx] : blank(key);
    var o = U.clone(orig);
    if (cur.mode === 'json') {
      try { o = JSON.parse(val('json')); } catch (x) { throw 'JSON inválido: ' + x.message; }
      if (!o || typeof o !== 'object' || Array.isArray(o)) throw 'O JSON deve ser um único objeto { … }.';
      if (cur.idx < 0) key = val('coll');
      o.id = U.kebab(o.id || o.name || '');
    } else {
      o.name = val('name'); setOrDel(o, 'namePt', val('namePt'));
      o.id = U.kebab(val('itemId') || o.name);
      o.active = checked('active');
      setOrDel(o, 'condition', val('condition'));
      setOrDel(o, 'sourceRef', val('sourceRef'));
      o.summary = val('summary');
      if (cur.mode === 'structure') readStructure(o); else readActivity(o);
      var st = parseStats(val('stats'));
      o.stats = Object.keys(st).length ? st : (cur.mode === 'structure' ? structureStats(o) : activityStats(o));
      if (cur.mode === 'structure' && !o.text) o.text = structureText(o, val('flavor'));
    }
    if (!o.name) throw 'Informe o nome.';
    if (!o.id) throw 'Não foi possível gerar o id.';
    if (!o.summary) throw 'Informe o resumo (PT).';
    if (!o.text && !o.outcomes) throw 'Informe o texto completo.';
    if (cur.mode === 'structure' && (o.level == null || isNaN(o.level))) throw 'Informe o nível.';
    if (!COLL[key]) throw 'Coleção desconhecida: ' + key;
    // id único: entre os itens da coleção na campanha e entre os itens do livro do mesmo tipo
    var kind = COLL[key][0];
    var same = (work[key] || []).some(function (x, i) { return x.id === o.id && !(key === cur.key && i === cur.idx); });
    var book = A.registry[kind] && A.registry[kind][o.id];
    if (same || (book && book.source !== 'campanha')) throw 'Já existe um item com o id "' + o.id + '" (' + kind + '). Escolha outro.';
    return { key: key, o: o };
  }
  function submit() {
    var r;
    try { r = buildFromForm(); } catch (x) { err(String(x)); return; }
    if (!work[r.key]) work[r.key] = [];
    if (cur.idx >= 0 && r.key === cur.key) work[r.key][cur.idx] = r.o; else work[r.key].push(r.o);
    saveDraft('#/' + COLL[r.key][2] + '/' + COLL[r.key][0] + ':' + r.o.id);
  }

  /* ---------- exportar ---------- */
  function download() {
    var blob = new Blob([fileText()], { type: 'text/javascript;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'campanha.js';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.parentNode.removeChild(a); }, 1000);
  }
  function copy() {
    var txt = fileText();
    function fallback() {
      var box = document.getElementById('ed-copy-box');
      if (!box) return;
      box.innerHTML = '<div class="block-title">Conteúdo de campanha.js</div><textarea class="ed-json" rows="14" readonly></textarea>';
      var ta = box.querySelector('textarea'); ta.value = txt; ta.focus(); ta.select();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { alert('campanha.js copiado para a área de transferência.'); }, fallback);
    else fallback();
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-ed-panel],[data-ed-new],[data-ed-edit],[data-ed-del],[data-ed-apply],[data-ed-download],[data-ed-copy],[data-ed-discard],[data-ed-add-row],[data-ed-rm-row],[data-ed-gen-text],[data-ed-gen-stats],[data-ed-as-json],[data-ed-publish],[data-ed-token],[data-ed-forget],[data-ed-toast-close]');
    if (!t) return;
    ev.preventDefault();
    var d = t.dataset;
    if ('edPanel' in d) panel();
    else if ('edPublish' in d) publish();
    else if ('edToken' in d) tokenPanel(false);
    else if ('edForget' in d) { token(null); toast('Token removido deste navegador.'); panel(); }
    else if ('edToastClose' in d) toast('');
    else if ('edNew' in d) open(d.edNew, -1, d.edNew === 'json' ? 'json' : null);
    else if ('edEdit' in d) {
      var p = d.edEdit.split('|'), i = findIdx(p[0], p[1]);
      if (i >= 0) open(p[0], i);
    } else if ('edDel' in d) {
      var q = d.edDel.split('|'), it = work[q[0]][+q[1]];
      if (confirm('Excluir "' + (it.name || it.id) + '" do conteúdo da campanha?')) { work[q[0]].splice(+q[1], 1); dirty = true; panel(); }
    } else if ('edApply' in d) saveDraft();
    else if ('edDownload' in d) download();
    else if ('edCopy' in d) copy();
    else if ('edDiscard' in d) {
      if (confirm('Descartar o rascunho local e voltar ao campanha.js publicado?')) { try { localStorage.removeItem(DRAFT_KEY); } catch (x) { /* ignore */ } location.reload(); }
    } else if ('edAddRow' in d) {
      var box = document.getElementById(d.edAddRow === 'skill' ? 'ed-skills' : 'ed-bonuses');
      box.insertAdjacentHTML('beforeend', d.edAddRow === 'skill' ? skillRow() : bonusRow());
    } else if ('edRmRow' in d) t.parentNode.parentNode.removeChild(t.parentNode);
    else if ('edGenText' in d || 'edGenStats' in d) {
      var o = { upgradeFrom: [], upgradeTo: [], itemBonuses: [], traits: [], skills: [] };
      o.name = val('name');
      if (cur.mode === 'structure') readStructure(o); else readActivity(o);
      if ('edGenText' in d) form().elements.text.value = structureText(o, val('flavor'));
      else form().elements.stats.value = statsText(cur.mode === 'structure' ? structureStats(o) : activityStats(o));
    } else if ('edAsJson' in d) {
      var r;
      try { r = buildFromForm(); } catch (x) { err(String(x) + ' (corrija antes de mudar para JSON)'); return; }
      if (!work[cur.key]) work[cur.key] = [];
      if (cur.idx >= 0) work[cur.key][cur.idx] = r.o; else { work[cur.key].push(r.o); cur.idx = work[cur.key].length - 1; }
      dirty = true;
      open(cur.key, cur.idx, 'json');
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.dataset && t.dataset.edToggle) {
      var p = t.dataset.edToggle.split('|');
      work[p[0]][+p[1]].active = t.checked;
      dirty = true;
      panel();
    }
  });
  document.addEventListener('submit', function (ev) {
    var id = ev.target.getAttribute('id');
    if (id === 'ed-form') { ev.preventDefault(); submit(); }
    else if (id === 'ed-token-form') { ev.preventDefault(); saveToken(); }
  });
  window.addEventListener('beforeunload', function (ev) {
    if (dirty) { ev.preventDefault(); ev.returnValue = ''; }
  });

  window.KMEditor = { panel: panel, open: open, work: function () { return work; }, fileText: fileText };
})();
