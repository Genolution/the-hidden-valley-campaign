(function () {
  'use strict';

  var KM = window.KM || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function kebab(s) {
    return norm(s).replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function arr(x) { return Array.isArray(x) ? x : []; }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key));
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  /* =========================================================
   * Registro de entidades
   * ========================================================= */
  var KIND_LABEL = {
    activity: 'Atividade do Reino', structure: 'Estrutura', feat: 'Talento do Reino', skill: 'Perícia do Reino',
    leader: 'Cargo de Liderança', rule: 'Regra', army: 'Exército', gear: 'Equipamento de Exército',
    tactic: 'Tática', waraction: 'Ação de Guerra', condition: 'Condição de Exército',
    charter: 'Carta (Charter)', heartland: 'Terra Natal (Heartland)', government: 'Governo',
    cstep: 'Criação do Reino', step: 'Etapa do Turno'
  };
  var KIND_PLURAL = {
    activity: 'Atividades', structure: 'Estruturas', feat: 'Talentos', skill: 'Perícias', leader: 'Líderes',
    rule: 'Regras', army: 'Exércitos', gear: 'Equipamentos', tactic: 'Táticas', waraction: 'Ações de guerra',
    condition: 'Condições', charter: 'Cartas', heartland: 'Terras natais', government: 'Governos',
    cstep: 'Criação', step: 'Etapas do turno'
  };
  var registry = {};
  var all = [];
  var dupIds = [];

  // Conteúdo da campanha (data/campanha.js): cada lista é anexada à coleção KM de mesmo nome.
  // Só entram itens com active: true; ?mestre (e ?check) mostram também os inativos, marcados.
  var CHECK = /[?&]check\b/.test(location.search);
  var GM = CHECK || /[?&]mestre\b/.test(location.search);
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  // Rascunho do editor (assets/editor.js), salvo só no navegador do mestre; vale apenas no modo mestre.
  // Se o arquivo publicado já é igual ao rascunho, o rascunho é descartado.
  var campaignFile = clone(KM.campaign || {}), campaignDraft = false;
  if (GM && !CHECK) {
    var draft = store('km-campaign-draft');
    if (draft && JSON.stringify(draft) === JSON.stringify(campaignFile)) { try { localStorage.removeItem('km-campaign-draft'); } catch (e) { /* ignore */ } }
    else if (draft) { KM.campaign = draft; campaignDraft = true; }
  }
  var campaignSrc = clone(KM.campaign || {});
  var campaignUnknown = [], campaignInactive = [];
  if (KM.campaign) Object.keys(KM.campaign).forEach(function (key) {
    if (!Array.isArray(KM[key])) { campaignUnknown.push(key); return; }
    arr(KM.campaign[key]).forEach(function (e) {
      e.source = 'campanha';
      e._ckey = key;
      if (e.active !== true) {
        campaignInactive.push(key + ':' + e.id);
        if (!GM) return;
        e._inactive = true;
      }
      KM[key].push(e);
    });
  });
  // Melhorias: basta declarar um lado (upgradeTo ou upgradeFrom); o outro é completado aqui
  (function () {
    var byId = {};
    arr(KM.structures).forEach(function (s) { byId[s.id] = s; });
    function link(list, other, id) {
      arr(list).forEach(function (t) {
        var o = byId[t]; if (!o) return;
        if (!Array.isArray(o[other])) o[other] = [];
        if (o[other].indexOf(id) < 0) o[other].push(id);
      });
    }
    arr(KM.structures).forEach(function (s) { link(s.upgradeTo, 'upgradeFrom', s.id); link(s.upgradeFrom, 'upgradeTo', s.id); });
  })();

  function add(kind, list, extra) {
    if (!registry[kind]) registry[kind] = {};
    arr(list).forEach(function (e) {
      if (!e || !e.id) return;
      e._kind = kind;
      if (extra) for (var k in extra) e[k] = extra[k];
      if (registry[kind][e.id]) {
        // id duplicado entre fontes: mantém o primeiro como alvo das referências
        var n = 2; while (registry[kind][e.id + '-' + n]) n++;
        dupIds.push(kind + ':' + e.id + ' → ' + e.id + '-' + n);
        e.id = e.id + '-' + n;
      }
      registry[kind][e.id] = e;
      all.push(e);
    });
  }

  add('rule', KM.rules);
  add('rule', KM.settlementRules);
  add('rule', KM.warfareRules);
  add('activity', KM.activities);
  add('activity', KM.armyActivities, { _army: true });
  add('skill', KM.skills);
  add('feat', KM.feats);
  add('leader', KM.leaders);
  add('structure', KM.structures);
  add('army', KM.armies);
  add('gear', KM.gear);
  add('tactic', KM.tactics);
  add('waraction', KM.warActions);
  add('condition', KM.conditions);
  if (KM.creation) {
    add('charter', KM.creation.charters);
    add('heartland', KM.creation.heartlands);
    add('government', KM.creation.governments);
    add('cstep', KM.creation.steps);
  }

  // Etapas do turno: combinam o resumo (turn.js) com o texto completo vindo das regras de cada fase.
  arr(KM.turn).forEach(function (phase) {
    var rule = get('rule', phase.ruleId);
    var ruleSteps = rule ? arr(rule.steps) : [];
    phase.steps.forEach(function (st, i) {
      var match = ruleSteps.filter(function (rs) { return norm(rs.name).indexOf(norm(st.name).replace(/^step \d+: /, '')) >= 0; })[0] || ruleSteps[i];
      if (match) {
        st.text = match.text;
        if (!st.activityStep && arr(match.activities).length) st.extraActivities = match.activities;
      }
      st.page = st.page || (rule && rule.page);
      st._phase = phase;
    });
    add('step', phase.steps);
  });

  function get(kind, id) {
    return registry[kind] ? registry[kind][id] : undefined;
  }
  // Ids previstos por um extrator que ficaram com outro nome em outro arquivo
  var ALIAS = {
    'rule:armies': 'rule:warfare', 'rule:roads': 'activity:build-roads',
    'structure:stone-wall': 'structure:wall-stone', 'structure:wooden-wall': 'structure:wall-wooden',
    'rule:feats': 'rule:kingdom-feats'
  };
  function resolve(kind, id) {
    var e = get(kind, id);
    if (e) return e;
    var al = ALIAS[kind + ':' + id];
    if (al) { var p = al.split(':'); e = get(p[0], p[1]); if (e) return e; }
    var alt = [id, id.replace(/s$/, ''), id + 's', id.replace(/-(rule|rules)$/, '')];
    var kinds = [kind].concat(Object.keys(registry));
    for (var a = 0; a < alt.length; a++) {
      for (var k = 0; k < kinds.length; k++) {
        e = get(kinds[k], alt[a]);
        if (e) return e;
      }
    }
    return null;
  }

  /* =========================================================
   * Configuração do reino (perícias treinadas)
   * ========================================================= */
  var RANKS = ['untrained', 'trained', 'expert', 'master', 'legendary'];
  var RANK_PT = ['Destreinado', 'Treinado', 'Especialista', 'Mestre', 'Lendário'];
  var RANK_ABBR = ['', 'T', 'E', 'M', 'L'];
  var DEFAULT_SKILLS = ['Agriculture', 'Arts', 'Boating', 'Defense', 'Engineering', 'Exploration', 'Folklore', 'Industry',
    'Intrigue', 'Magic', 'Politics', 'Scholarship', 'Statecraft', 'Trade', 'Warfare', 'Wilderness'];
  var SKILL_PT = {
    agriculture: 'Agricultura', arts: 'Artes', boating: 'Navegação', defense: 'Defesa', engineering: 'Engenharia',
    exploration: 'Exploração', folklore: 'Folclore', industry: 'Indústria', intrigue: 'Intriga', magic: 'Magia',
    politics: 'Política', scholarship: 'Erudição', statecraft: 'Diplomacia', trade: 'Comércio', warfare: 'Guerra',
    wilderness: 'Ermos'
  };
  function rankIdx(p) { var i = RANKS.indexOf(norm(p)); return i < 0 ? 0 : i; }
  function skillList() {
    var s = arr(KM.skills);
    return s.length ? s.map(function (x) { return x.name; }) : DEFAULT_SKILLS;
  }
  var kingdom = store('km-kingdom') || null; // { skills: {agriculture: 1, ...}, hideUnavailable: bool }

  function available(act) {
    if (!kingdom || !kingdom.skills) return true;
    var sk = arr(act.skills);
    if (!sk.length) return true;
    return sk.some(function (s) {
      var id = kebab(s.skill);
      if (!(id in kingdom.skills)) return true; // "Any skill", "Varies", etc.
      return kingdom.skills[id] >= rankIdx(s.proficiency);
    });
  }

  /* =========================================================
   * Texto rico
   * ========================================================= */
  function refHtml(kind, id, label) {
    var e = resolve(kind, id);
    var text = label || (e ? e.name : id);
    if (!e) return '<span class="xref-missing" title="Referência: ' + esc(kind + ':' + id) + '">' + text + '</span>';
    return '<a class="xref" data-open="' + esc(e._kind + ':' + e.id) + '" title="' + esc(e.namePt || e.name) + '">' + text + '</a>';
  }
  function inline(s) {
    s = esc(s);
    s = s.replace(/\[\[([a-z-]+):([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, k, id, label) { return refHtml(k, id.trim(), label); });
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g, '$1<em>$2</em>');
    return s;
  }
  var DEG_RE = /^(?:\*\*)?(Critical Success|Critical Failure|Success|Failure)(?:\*\*)?(?=[\s:.]|$)/;
  var DEG_CLASS = { 'Critical Success': 'cs', 'Success': 's', 'Failure': 'f', 'Critical Failure': 'cf' };
  function degLine(line) {
    var m = line.match(DEG_RE);
    if (!m) return null;
    var rest = line.slice(m[0].length).replace(/^[:.]?\s*/, ' ');
    return '<span class="deg ' + DEG_CLASS[m[1]] + '"><span class="lbl">' + m[1] + '</span>' + inline(rest) + '</span>';
  }
  function rich(text) {
    if (text == null || text === '') return '';
    if (Array.isArray(text)) text = text.join('\n\n');
    var lines = String(text).replace(/\r/g, '').split('\n');
    var out = [], para = [], list = null, table = null;
    function flushPara() {
      if (!para.length) return;
      var html = [], buf = [];
      para.forEach(function (l) {
        var d = degLine(l);
        if (d) {
          if (buf.length) { html.push('<p>' + buf.map(inline).join('<br>') + '</p>'); buf = []; }
          html.push(d);
        } else buf.push(l);
      });
      if (buf.length) html.push('<p>' + buf.map(inline).join('<br>') + '</p>');
      out.push(html.join(''));
      para = [];
    }
    function flushList() { if (list) { out.push('<ul>' + list.map(function (li) { return '<li>' + inline(li) + '</li>'; }).join('') + '</ul>'); list = null; } }
    function flushTable() {
      if (!table) return;
      var rows = table.filter(function (r) { return !/^\|?\s*:?-{2,}/.test(r.trim()) || /[a-z0-9]/i.test(r.replace(/[-:|\s]/g, '')); });
      var cells = rows.map(function (r) { return r.trim().replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); }); });
      var hasSep = table.length > 1 && /^\|?\s*:?-{2,}/.test(table[1].trim());
      var h = '<table>';
      cells.forEach(function (c, i) {
        var tag = (i === 0 && hasSep) ? 'th' : 'td';
        h += '<tr>' + c.map(function (x) { return '<' + tag + '>' + inline(x) + '</' + tag + '>'; }).join('') + '</tr>';
      });
      out.push(h + '</table>');
      table = null;
    }
    lines.forEach(function (raw) {
      var line = raw.replace(/\s+$/, '');
      var t = line.trim();
      if (/^\|.*\|$/.test(t)) { flushPara(); flushList(); (table = table || []).push(t); return; }
      flushTable();
      if (!t) { flushPara(); flushList(); return; }
      if (/^###\s+/.test(t)) { flushPara(); flushList(); out.push('<h4>' + inline(t.replace(/^###\s+/, '')) + '</h4>'); return; }
      if (/^[-•]\s+/.test(t)) { flushPara(); (list = list || []).push(t.replace(/^[-•]\s+/, '')); return; }
      flushList();
      para.push(t);
    });
    flushPara(); flushList(); flushTable();
    return '<div class="rt">' + out.join('') + '</div>';
  }

  /* =========================================================
   * Pedaços de UI reutilizáveis
   * ========================================================= */
  var STEP_LABEL = {
    'upkeep-leadership': 'Manutenção', 'commerce-taxes': 'Comércio · Impostos', 'commerce-expenses': 'Comércio · Despesas',
    'commerce-commodities': 'Comércio · Commodities', 'commerce-trade': 'Comércio · Acordos',
    leadership: 'Liderança', region: 'Região', civic: 'Cívica', army: 'Exército'
  };
  var STEP_ORDER = ['upkeep-leadership', 'commerce-taxes', 'commerce-expenses', 'commerce-commodities', 'commerce-trade', 'leadership', 'region', 'civic', 'army'];
  var STEP_PHASE = { 'upkeep-leadership': 'upkeep', 'commerce-taxes': 'commerce', 'commerce-expenses': 'commerce', 'commerce-commodities': 'commerce', 'commerce-trade': 'commerce', leadership: 'activity', region: 'activity', civic: 'activity', army: 'activity' };
  var PHASE_COLOR = { upkeep: 'var(--ph-upkeep)', commerce: 'var(--ph-commerce)', activity: 'var(--ph-activity)', event: 'var(--ph-event)' };

  function stepsOf(a) {
    var s = arr(a.steps).slice();
    if (a.step && s.indexOf(a.step) < 0) s.unshift(a.step);
    return s;
  }
  function activitiesFor(stepKey) {
    return (all.filter(function (e) { return e._kind === 'activity' && stepsOf(e).indexOf(stepKey) >= 0; }))
      .sort(function (a, b) { return a.name.localeCompare(b.name); });
  }
  function skillChips(a) {
    return arr(a.skills).map(function (s) {
      var r = rankIdx(s.proficiency);
      var ok = true;
      if (kingdom && kingdom.skills) {
        var id = kebab(s.skill);
        if (id in kingdom.skills) ok = kingdom.skills[id] >= r;
      }
      return '<span class="chip skill' + (ok ? '' : ' warn') + '" title="' + esc((SKILL_PT[kebab(s.skill)] || s.skill) + ' — mínimo: ' + RANK_PT[r] + (s.note ? ' · ' + s.note : '')) + '">' +
        esc(String(s.skill).charAt(0).toUpperCase() + String(s.skill).slice(1)) + (r ? ' <span class="rank">' + RANK_ABBR[r] + '</span>' : '') + '</span>';
    }).join('');
  }
  function nameBlock(e) {
    var pt = e.namePt && norm(e.namePt) !== norm(e.name) ? '<span class="pt">' + esc(e.namePt) + '</span>' : '';
    return '<div class="card-title">' + esc(e.name) + pt + '</div>';
  }
  function srcChip(e) {
    if (e.source !== 'campanha') return '';
    return '<span class="chip campaign" title="Conteúdo da campanha">Campanha</span>' +
      (e._inactive ? '<span class="chip inactive" title="' + esc('Oculto para os jogadores' + (e.condition ? ' · Ativa quando: ' + e.condition : '')) + '">Inativo</span>' : '');
  }
  // sourceRef: link http(s) vira "Ver card" para todos; texto livre (ex.: nome do PDF) só aparece no modo mestre
  function sourceUrl(e) { var r = String(e.sourceRef || '').trim(); return /^https?:\/\/\S+$/i.test(r) ? r : ''; }
  function sourceLinkChip(e) {
    var u = sourceUrl(e);
    if (!u) return '';
    var host = u.replace(/^https?:\/\/(www\.)?/i, '').split(/[\/?#]/)[0];
    return '<a class="chip source-link" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer" title="' + esc(u) + '">Ver card ↗ <span class="muted">' + esc(host) + '</span></a>';
  }
  function bySource(list, v) {
    if (!v) return list;
    if (v === 'inativo') return list.filter(function (e) { return e._inactive; });
    return list.filter(function (e) { return (e.source === 'campanha') === (v === 'campanha'); });
  }
  function sourceSelect(id, v) {
    return '<label>Origem <select id="' + id + '"><option value="">todas</option>' +
      [['livro', 'livro'], ['campanha', 'campanha']].concat(GM ? [['inativo', 'campanha inativa']] : []).map(function (o) { return '<option value="' + o[0] + '"' + (v === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></label>';
  }
  function badgeFor(e) {
    if (e._kind === 'structure' || e._kind === 'feat' || e._kind === 'army' || e._kind === 'tactic' || (e.level != null && e._kind !== 'rule')) {
      if (e.level != null && e.level !== '') return '<span class="badge-num" title="Nível">Nv ' + esc(e.level) + '</span>';
    }
    if (e._kind === 'waraction' && e.actions) return '<span class="badge-num" title="Ações">' + esc(actionsLabel(e.actions)) + '</span>';
    return '';
  }
  function actionsLabel(a) {
    var m = { '1': '◆', '2': '◆◆', '3': '◆◆◆', 'reaction': '⤾ reação', 'free': '◇ livre' };
    return m[String(a).toLowerCase()] || a;
  }
  function card(e, opts) {
    opts = opts || {};
    var cls = 'card';
    if (e._kind === 'activity' && !available(e)) {
      if (kingdom && kingdom.hideUnavailable && !opts.showAll) return '';
      cls += ' unavailable';
    }
    var meta = srcChip(e);
    if (e._kind === 'activity') {
      meta += skillChips(e);
      if (opts.showStep) stepsOf(e).forEach(function (s) { meta += '<span class="chip trait">' + esc(STEP_LABEL[s] || s) + '</span>'; });
      if (e.oncePerTurn) meta += '<span class="chip" title="Limite de frequência">1×/turno</span>';
    } else if (e._kind === 'structure') {
      meta += '<span class="chip">' + esc(e.lots ? e.lots + (e.lots === 1 ? ' lote' : ' lotes') : 'infraestrutura') + '</span>';
      if (e.cost && e.cost.rp != null) meta += '<span class="chip">' + esc(e.cost.rp) + ' RP</span>';
      arr(e.traits || e.tags).slice(0, 3).forEach(function (t) { meta += '<span class="chip trait">' + esc(t) + '</span>'; });
    } else {
      arr(e.tags).slice(0, 4).forEach(function (t) { meta += '<span class="chip trait">' + esc(t) + '</span>'; });
    }
    var quick = '';
    if (opts.quick && e.quick) quick = quickDl(e.quick);
    return '<button type="button" class="' + cls + '" data-open="' + esc(e._kind + ':' + e.id) + '">' +
      '<div class="card-head">' + nameBlock(e) + badgeFor(e) + '</div>' +
      (e.summary ? '<p class="card-sum">' + esc(e.summary) + '</p>' : '') + quick +
      (meta ? '<div class="card-meta">' + meta + '</div>' : '') + '</button>';
  }
  function quickDl(q) {
    var rows = [['criticalSuccess', 'CS', 'var(--cs)'], ['success', 'S', 'var(--s)'], ['failure', 'F', 'var(--f)'], ['criticalFailure', 'CF', 'var(--cf)']];
    var h = rows.filter(function (r) { return q[r[0]]; }).map(function (r) {
      return '<dt style="color:' + r[2] + '">' + r[1] + '</dt><dd>' + esc(q[r[0]]) + '</dd>';
    }).join('');
    return h ? '<dl class="quick">' + h + '</dl>' : '';
  }
  function cards(list, opts) {
    var h = list.map(function (e) { return card(e, opts); }).join('');
    return h || '<div class="empty">Nada encontrado.</div>';
  }

  /* =========================================================
   * Modal
   * ========================================================= */
  var modalStack = [];
  var modal = $('#modal');

  function openEntity(kind, id, push) {
    var e = get(kind, id) || resolve(kind, id);
    if (!e) return;
    if (push !== false && !modal.hidden && modalStack.length) modalStack.push(e);
    else if (push !== false) modalStack = [e];
    renderModal(e);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modal-body').scrollTop = 0;
  }
  function closeModal() {
    modal.hidden = true;
    modalStack = [];
    document.body.style.overflow = '';
  }
  function modalBack() {
    if (modalStack.length > 1) { modalStack.pop(); renderModal(modalStack[modalStack.length - 1]); }
  }

  var OUT_LABEL = [['criticalSuccess', 'Critical Success', 'cs', 'Sucesso crítico'], ['success', 'Success', 's', 'Sucesso'], ['failure', 'Failure', 'f', 'Falha'], ['criticalFailure', 'Critical Failure', 'cf', 'Falha crítica']];

  function statsHtml(stats) {
    if (!stats) return '';
    var keys = Object.keys(stats).filter(function (k) { return stats[k] !== '' && stats[k] != null; });
    if (!keys.length) return '';
    return '<dl class="stats">' + keys.map(function (k) {
      var v = stats[k];
      if (Array.isArray(v)) v = v.join(', ');
      if (typeof v === 'object') v = JSON.stringify(v);
      return '<dt>' + esc(k) + '</dt><dd>' + inline(String(v)) + '</dd>';
    }).join('') + '</dl>';
  }
  function linkList(items) {
    return '<div class="related">' + items.map(function (x) {
      return '<a class="xref" data-open="' + esc(x.e._kind + ':' + x.e.id) + '">' + esc(x.label || x.e.name) + '</a>';
    }).join(' · ') + '</div>';
  }
  function idsToEntities(kind, ids) {
    return arr(ids).map(function (id) { return resolve(kind, id); }).filter(Boolean);
  }

  function renderModal(e) {
    $('#modal-kind').textContent = KIND_LABEL[e._kind] || e._kind;
    $('#modal-title').textContent = e.name;
    var sub = [];
    if (e.namePt && norm(e.namePt) !== norm(e.name)) sub.push(esc(e.namePt));
    if (e._kind === 'step' && e._phase) sub.push(esc(e._phase.namePt));
    if (e.source === 'campanha') sub.push('<span class="page-ref">Conteúdo da campanha' + (GM && e.sourceRef && !sourceUrl(e) ? ' · ' + esc(e.sourceRef) : '') + '</span>');
    else if (e.page) sub.push('<span class="page-ref">Player\'s Guide, p. ' + esc(e.page) + '</span>');
    $('#modal-sub').innerHTML = sub.join(' · ');
    $('#modal-back').hidden = modalStack.length < 2;

    var h = [];
    var chips = srcChip(e) + sourceLinkChip(e);
    if (e._kind === 'activity') {
      stepsOf(e).forEach(function (s) { chips += '<span class="chip trait">' + esc(STEP_LABEL[s] || s) + '</span>'; });
    }
    arr(e.tags).forEach(function (t) { chips += '<span class="chip">' + esc(t) + '</span>'; });
    if (e._kind === 'activity' && arr(e.skills).length) chips += skillChips(e);
    if (e._kind === 'activity' && kingdom && kingdom.skills) chips += available(e) ? '<span class="chip ok">Disponível p/ o reino</span>' : '<span class="chip warn">Reino sem a perícia necessária</span>';
    if (chips) h.push('<div class="chips">' + chips + '</div>');
    if (GM && e.source === 'campanha') h.push('<div class="callout gm"><b>' + (e._inactive ? 'Inativo — oculto para os jogadores.' : 'Ativo.') + '</b>' + (e.condition ? ' Condição: ' + esc(e.condition) : '') +
      ' <button type="button" class="btn btn-sm" data-ed-edit="' + esc(e._ckey + '|' + e.id) + '">✎ Editar</button></div>');
    if (e.summary) h.push('<div class="summary-box">' + esc(e.summary) + '</div>');
    if (e._kind === 'step') {
      if (e.limit) h.push('<div class="callout limit">' + esc(e.limit) + '</div>');
      if (e.formula) h.push('<div class="formula">' + esc(e.formula) + '</div>');
      if (e.alert) h.push('<div class="callout alert">' + esc(e.alert) + '</div>');
    }
    h.push(statsHtml(e.stats));

    if (e.quick && OUT_LABEL.some(function (o) { return e.quick[o[0]]; })) {
      h.push('<div class="outcomes-quick">' + OUT_LABEL.filter(function (o) { return e.quick[o[0]]; }).map(function (o) {
        return '<div class="oq ' + o[2] + '"><b>' + o[3] + '</b>' + esc(e.quick[o[0]]) + '</div>';
      }).join('') + '</div>');
    }

    // Relações úteis para otimizar
    var rel = relatedHtml(e);
    if (rel) h.push(rel);

    // Texto completo
    var full = [];
    if (e.trigger) full.push(rich('**Trigger** ' + e.trigger));
    if (e.frequency) full.push(rich('**Frequency** ' + e.frequency));
    if (e.requirements && (!e.text || String(e.text).indexOf(String(e.requirements).slice(0, 30)) < 0)) full.push(rich('**Requirements** ' + e.requirements));
    if (e.text) full.push(rich(e.text));
    if (e.effects && (!e.text || String(e.text).indexOf(String(e.effects).slice(0, 40)) < 0)) full.push(rich('**Effects** ' + e.effects));
    if (e.outcomes) {
      var oh = OUT_LABEL.filter(function (o) { return e.outcomes[o[0]]; }).map(function (o) {
        return '<span class="deg ' + o[2] + '"><span class="lbl">' + o[1] + '</span> ' + inline(e.outcomes[o[0]]).replace(/\n/g, '<br>') + '</span>';
      }).join('');
      if (oh) full.push('<div class="rt">' + oh + '</div>');
    }
    if (e.special) full.push(rich('**Special** ' + e.special));
    if (e.vacancy && (!e.text || String(e.text).indexOf(String(e.vacancy).slice(0, 25)) < 0)) full.push(rich('**Vacancy Penalty** ' + e.vacancy));
    if (full.length) h.push('<div class="block-title">' + (e.source === 'campanha' ? 'Texto completo (campanha)' : 'Texto completo (original em inglês)') + '</div>' + full.join(''));

    if (arr(e.steps).length && e._kind === 'rule') {
      h.push('<div class="block-title">Etapas</div>' + e.steps.map(function (s) {
        return '<h4 style="margin:10px 0 4px">' + esc(s.name) + (s.namePt ? ' <span class="muted" style="font-weight:400">· ' + esc(s.namePt) + '</span>' : '') + '</h4>' +
          (s.summary ? '<div class="summary-box" style="margin-bottom:6px">' + esc(s.summary) + '</div>' : '') + rich(s.text);
      }).join(''));
    }
    $('#modal-body').innerHTML = h.join('');
  }

  function relatedHtml(e) {
    var h = [];
    if (e._kind === 'activity') {
      var skillIds = arr(e.skills).map(function (s) { return kebab(s.skill); });
      var helpers = arr(KM.structures).map(function (st) {
        var bs = arr(st.itemBonuses).filter(function (b) {
          if (b.activity) return b.activity === e.id;
          return b.skill && skillIds.indexOf(kebab(b.skill)) >= 0;
        });
        return bs.length ? { e: st, b: bs } : null;
      }).filter(Boolean).sort(function (a, b) { return (a.e.level || 0) - (b.e.level || 0); });
      if (helpers.length) {
        h.push('<div class="block-title">Estruturas que dão bônus de item</div>' +
          '<div class="related">' + helpers.map(function (x) {
            var desc = x.b.map(function (b) { return '+' + b.value + ' ' + (b.activity ? (resolve('activity', b.activity) || {}).name || b.activity : b.skill) + (b.note ? ' (' + b.note + ')' : ''); }).join('; ');
            return '<a class="xref" data-open="structure:' + esc(x.e.id) + '" title="' + esc(desc) + '">' + esc(x.e.name) + '</a> <span class="muted" style="font-size:12px">' + esc(desc) + ' · Nv ' + esc(x.e.level) + '</span>';
          }).join('<br>') + '</div>');
      }
      var sk = arr(e.skills).map(function (s) { return resolve('skill', kebab(s.skill)); }).filter(Boolean);
      if (sk.length) h.push('<div class="block-title">Perícias</div>' + linkList(sk.map(function (s) { return { e: s, label: s.name + ' (' + (s.ability || '') + ')' }; })));
    }
    if (e._kind === 'skill') {
      var un = idsToEntities('activity', e.untrained), tr = idsToEntities('activity', e.trained);
      if (!un.length && !tr.length) {
        all.forEach(function (a) {
          if (a._kind !== 'activity') return;
          arr(a.skills).forEach(function (s) { if (kebab(s.skill) === e.id) (rankIdx(s.proficiency) ? tr : un).push(a); });
        });
      }
      if (un.length) h.push('<div class="block-title">Atividades sem treinamento</div>' + linkList(un.map(function (x) { return { e: x }; })));
      if (tr.length) h.push('<div class="block-title">Atividades que exigem treinamento</div>' + linkList(tr.map(function (x) { return { e: x }; })));
      var st = arr(KM.structures).filter(function (s) { return arr(s.itemBonuses).some(function (b) { return kebab(b.skill) === e.id; }); });
      if (st.length) h.push('<div class="block-title">Estruturas com bônus nesta perícia</div>' + linkList(st.map(function (x) { return { e: x, label: x.name + ' (Nv ' + x.level + ')' }; })));
    }
    if (e._kind === 'structure') {
      var from = idsToEntities('structure', e.upgradeFrom), to = idsToEntities('structure', e.upgradeTo);
      if (from.length) h.push('<div class="block-title">Melhoria de</div>' + linkList(from.map(function (x) { return { e: x }; })));
      if (to.length) h.push('<div class="block-title">Pode ser melhorada para</div>' + linkList(to.map(function (x) { return { e: x }; })));
    }
    if (e._kind === 'step') {
      var acts = e.activityStep ? activitiesFor(e.activityStep) : idsToEntities('activity', e.extraActivities);
      if (acts.length) h.push('<div class="block-title">Atividades desta etapa</div>' + linkList(acts.map(function (x) { return { e: x }; })));
      var refs = arr(e.refs).map(function (r) { var p = r.split(':'); return resolve(p[0], p[1]); }).filter(Boolean);
      if (refs.length) h.push('<div class="block-title">Regras relacionadas</div>' + linkList(refs.map(function (x) { return { e: x }; })));
    }
    if (e._kind === 'government' && e.bonusFeat) {
      var f = resolve('feat', kebab(e.bonusFeat));
      if (f) h.push('<div class="block-title">Talento bônus</div>' + linkList([{ e: f }]));
    }
    return h.join('');
  }

  /* =========================================================
   * Busca global
   * ========================================================= */
  var searchIndex = all.map(function (e) {
    return {
      e: e,
      name: norm(e.name), pt: norm(e.namePt),
      sum: norm(e.summary) + ' ' + norm(arr(e.tags).join(' ')),
      text: norm([e.text, e.outcomes && JSON.stringify(e.outcomes), e.effects].join(' '))
    };
  });
  function search(q, limit) {
    q = norm(q).trim();
    if (!q) return [];
    var words = q.split(/\s+/);
    var res = [];
    searchIndex.forEach(function (x) {
      var score = 0;
      if (x.name === q || x.pt === q) score += 200;
      if (x.name.indexOf(q) === 0 || x.pt.indexOf(q) === 0) score += 100;
      if (x.name.indexOf(q) >= 0) score += 60;
      if (x.pt.indexOf(q) >= 0) score += 50;
      var allW = words.every(function (w) { return x.name.indexOf(w) >= 0 || x.pt.indexOf(w) >= 0 || x.sum.indexOf(w) >= 0 || x.text.indexOf(w) >= 0; });
      if (!allW && !score) return;
      if (allW) {
        words.forEach(function (w) {
          if (x.sum.indexOf(w) >= 0) score += 12;
          if (x.text.indexOf(w) >= 0) score += 3;
        });
        score += 1;
      }
      if (x.e._kind === 'step') score -= 5;
      res.push({ e: x.e, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score || a.e.name.localeCompare(b.e.name); });
    return res.slice(0, limit || 40);
  }
  function filterBy(list, q) {
    q = norm(q).trim();
    if (!q) return list;
    var ok = {};
    search(q, 9999).forEach(function (r) { ok[r.e._kind + ':' + r.e.id] = 1; });
    return list.filter(function (e) { return ok[e._kind + ':' + e.id]; });
  }

  var sInput = $('#search'), sBox = $('#search-results'), sActive = -1;
  function renderSearch() {
    var res = search(sInput.value, 30);
    if (!sInput.value.trim()) { sBox.hidden = true; return; }
    if (!res.length) { sBox.innerHTML = '<div class="sr-group">Nenhum resultado</div>'; sBox.hidden = false; return; }
    var groups = {}, order = [];
    res.forEach(function (r) { var k = r.e._kind; if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(r.e); });
    var h = '', i = 0;
    order.forEach(function (k) {
      h += '<div class="sr-group">' + esc(KIND_PLURAL[k] || k) + '</div>';
      groups[k].forEach(function (e) {
        h += '<button type="button" class="sr-item" data-idx="' + (i++) + '" data-open="' + esc(e._kind + ':' + e.id) + '"><b>' + esc(e.name) + '</b>' +
          (e.namePt && norm(e.namePt) !== norm(e.name) ? ' <span class="muted">· ' + esc(e.namePt) + '</span>' : '') +
          (e.summary ? '<span class="sr-sum">' + esc(e.summary) + '</span>' : '') + '</button>';
      });
    });
    sBox.innerHTML = h; sBox.hidden = false; sActive = -1;
  }
  sInput.addEventListener('input', renderSearch);
  sInput.addEventListener('focus', function () { if (sInput.value.trim()) renderSearch(); });
  sInput.addEventListener('keydown', function (ev) {
    var items = $$('.sr-item', sBox);
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (!items.length) return;
      sActive = (sActive + (ev.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(function (it, i) { it.classList.toggle('active', i === sActive); });
      items[sActive].scrollIntoView({ block: 'nearest' });
    } else if (ev.key === 'Enter') {
      var it = items[sActive < 0 ? 0 : sActive];
      if (it) it.click();
    } else if (ev.key === 'Escape') {
      sBox.hidden = true; sInput.blur();
    }
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.search-wrap')) sBox.hidden = true;
  });

  /* =========================================================
   * Views
   * ========================================================= */
  var view = $('#view');
  var openState = store('km-open') || {};
  function detailsOpen(id, def) { return (id in openState ? openState[id] : def) ? ' open' : ''; }
  view.addEventListener('toggle', function (ev) {
    var d = ev.target;
    if (d.tagName === 'DETAILS' && d.dataset.key) { openState[d.dataset.key] = d.open; store('km-open', openState); }
  }, true);

  function viewTurno() {
    var phases = arr(KM.turn);
    var h = '<div class="page-head"><div><h1>Turno do Reino</h1><p>Sequência completa de um turno (ao fim de cada mês de jogo). Clique em qualquer atividade para ver os detalhes completos; use a busca (tecla <b>/</b>) para achar qualquer coisa.</p></div></div>';
    h += '<div class="turn-strip">' + phases.map(function (p, i) {
      return '<a href="#phase-' + p.id + '" data-jump="phase-' + p.id + '" style="--ph:' + PHASE_COLOR[p.id] + '"><span class="num">FASE ' + (i + 1) + '</span><span class="t">' + esc(p.namePt) + '</span><ol>' +
        p.steps.map(function (s) { return '<li>' + esc(s.namePt) + '</li>'; }).join('') + '</ol></a>';
    }).join('') + '</div>';
    h += '<div class="tips">' +
      '<div class="tip"><b>Fama/Infâmia:</b> +1 no início do turno e a cada sucesso crítico (máx. 3). Gaste 1 para rerrolar um teste do reino; pontos não usados se perdem no fim do turno. ' + refHtml('rule', 'fame-and-infamy', 'Regra') + '</div>' +
      '<div class="tip"><b>Teste básico:</b> CD = Control DC do reino. Crítico = superar a CD por 10+; 20 natural melhora 1 grau, 1 natural piora. ' + refHtml('rule', 'kingdom-skill-checks', 'Regra') + '</div>' +
      '<div class="tip"><b>Limites da Fase de Atividades:</b> 3 de Liderança por PC (2 sem Castle/Palace/Town Hall na capital) · 3 de Região no total · 1 Cívica por assentamento.</div>' +
      '</div>';
    phases.forEach(function (p, i) {
      h += '<details class="acc phase" id="phase-' + p.id + '" data-key="ph-' + p.id + '" style="--ph:' + PHASE_COLOR[p.id] + '"' + detailsOpen('ph-' + p.id, true) + '>' +
        '<summary><span class="phase-badge">' + (i + 1) + '</span><div class="phase-title"><h2>' + esc(p.namePt) + '<span class="en">' + esc(p.name) + '</span></h2><p>' + esc(p.summary) + '</p></div></summary><div class="acc-body">';
      if (get('rule', p.ruleId)) h += '<div class="ref-links">' + refHtml('rule', p.ruleId, 'Ler a regra completa da fase →') + '</div>';
      p.steps.forEach(function (s, j) {
        var acts = s.activityStep ? activitiesFor(s.activityStep) : idsToEntities('activity', s.extraActivities);
        var count = acts.length ? acts.length + (acts.length === 1 ? ' atividade' : ' atividades') : '';
        h += '<details class="acc step" data-key="st-' + s.id + '"' + detailsOpen('st-' + s.id, true) + '>' +
          '<summary><span class="step-n">Etapa ' + (j + 1) + '</span><span class="step-title">' + esc(s.namePt) + '<span class="en">' + esc(s.name.replace(/^Step \d+: /, '')) + '</span></span><span class="step-count" style="margin-left:auto">' + count + '</span></summary><div class="acc-body">';
        h += '<p class="step-sum">' + esc(s.summary) + '</p>';
        if (s.formula) h += '<div class="formula">' + esc(s.formula) + '</div>';
        if (s.limit) h += '<div class="callout limit">' + esc(s.limit) + '</div>';
        if (s.alert) h += '<div class="callout alert">' + esc(s.alert) + '</div>';
        var links = [];
        if (s.text) links.push('<a class="xref" data-open="step:' + esc(s.id) + '">Texto completo da etapa</a>');
        arr(s.refs).forEach(function (r) { var q = r.split(':'); var e = resolve(q[0], q[1]); if (e) links.push('<a class="xref" data-open="' + esc(e._kind + ':' + e.id) + '">' + esc(e.namePt || e.name) + '</a>'); });
        if (s.activityStep === 'army') links.push('<a href="#/guerra">Abrir aba Guerra →</a>');
        if (links.length) h += '<div class="ref-links">' + links.join(' · ') + '</div>';
        if (acts.length) h += '<div class="grid dense">' + cards(acts) + '</div>';
        h += '</div></details>';
      });
      h += '</div></details>';
    });
    return h;
  }

  // ---- Atividades
  var actState = store('km-act') || { q: '', step: 'all', skill: '', prof: '' };
  function viewAtividades() {
    var h = '<div class="page-head"><div><h1>Atividades do Reino</h1><p>Todas as atividades do reino e de exército. Filtre por etapa, perícia ou proficiência. Configure as perícias do reino em <b>⚙ Meu Reino</b> para marcar o que vocês já podem fazer.</p></div></div>';
    h += '<div class="filters" id="act-filters">' +
      '<input type="search" id="act-q" placeholder="Filtrar atividades…" value="' + esc(actState.q) + '">' +
      '<div class="seg" id="act-step">' + [['all', 'Todas']].concat(STEP_ORDER.map(function (s) { return [s, STEP_LABEL[s]]; })).map(function (s) {
        return '<button type="button" data-v="' + s[0] + '" class="' + (actState.step === s[0] ? 'on' : '') + '">' + esc(s[1]) + '</button>';
      }).join('') + '</div>' +
      '<label>Perícia <select id="act-skill"><option value="">Todas</option>' + skillList().map(function (s) {
        var id = kebab(s); return '<option value="' + id + '"' + (actState.skill === id ? ' selected' : '') + '>' + esc(s) + ' · ' + esc(SKILL_PT[id] || '') + '</option>';
      }).join('') + '</select></label>' +
      '<label>Exige <select id="act-prof"><option value="">qualquer</option><option value="0"' + (actState.prof === '0' ? ' selected' : '') + '>sem treino</option><option value="1"' + (actState.prof === '1' ? ' selected' : '') + '>treinado+</option></select></label>' +
      sourceSelect('act-src', actState.src) +
      '<label><input type="checkbox" id="act-quick"' + (actState.quick ? ' checked' : '') + '> resultados resumidos</label>' +
      '<span class="count" id="act-count"></span></div><div id="act-list"></div>';
    return h;
  }
  function bindAtividades() {
    function upd() {
      actState.q = $('#act-q').value; actState.skill = $('#act-skill').value; actState.prof = $('#act-prof').value; actState.quick = $('#act-quick').checked; actState.src = $('#act-src').value;
      store('km-act', actState);
      var list = all.filter(function (e) { return e._kind === 'activity'; });
      list = bySource(filterBy(list, actState.q), actState.src);
      if (actState.step !== 'all') list = list.filter(function (e) { return stepsOf(e).indexOf(actState.step) >= 0; });
      if (actState.skill) list = list.filter(function (e) { return arr(e.skills).some(function (s) { return kebab(s.skill) === actState.skill || /any|varies|qualquer/i.test(s.skill); }); });
      if (actState.prof !== '') list = list.filter(function (e) {
        var min = Math.min.apply(null, arr(e.skills).map(function (s) { return rankIdx(s.proficiency); }).concat([9]));
        return actState.prof === '0' ? min === 0 : min >= 1;
      });
      var visible = list.filter(function (e) { return !(kingdom && kingdom.hideUnavailable && !available(e)); });
      $('#act-count').textContent = visible.length + ' de ' + all.filter(function (e) { return e._kind === 'activity'; }).length;
      var opts = { quick: actState.quick, showStep: actState.step === 'all' };
      var out = '';
      if (actState.step === 'all' && !actState.q) {
        STEP_ORDER.forEach(function (s) {
          var g = list.filter(function (e) { return stepsOf(e)[0] === s; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
          var html = g.map(function (e) { return card(e, { quick: actState.quick }); }).join('');
          if (html) out += '<h3 class="section-title" style="color:' + PHASE_COLOR[STEP_PHASE[s]] + '">' + esc(STEP_LABEL[s]) + '</h3><div class="grid">' + html + '</div>';
        });
        var other = list.filter(function (e) { return STEP_ORDER.indexOf(stepsOf(e)[0]) < 0; });
        if (other.length) out += '<h3 class="section-title">Outras</h3><div class="grid">' + cards(other, opts) + '</div>';
        if (!out) out = '<div class="empty">Nada encontrado.</div>';
      } else {
        out = '<div class="grid">' + cards(list.sort(function (a, b) { return a.name.localeCompare(b.name); }), opts) + '</div>';
      }
      $('#act-list').innerHTML = out;
    }
    $('#act-q').addEventListener('input', upd);
    $('#act-skill').addEventListener('change', upd);
    $('#act-prof').addEventListener('change', upd);
    $('#act-src').addEventListener('change', upd);
    $('#act-quick').addEventListener('change', upd);
    $('#act-step').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      actState.step = b.dataset.v;
      $$('#act-step button').forEach(function (x) { x.classList.toggle('on', x === b); });
      upd();
    });
    upd();
  }

  // ---- Estruturas
  var stState = store('km-st') || { q: '', maxLevel: '', lots: '', trait: '', bonus: '', mode: 'table', sort: 'level', asc: true };
  function viewEstruturas() {
    var traits = {}, lots = {};
    arr(KM.structures).forEach(function (s) { arr(s.traits || s.tags).forEach(function (t) { traits[t] = 1; }); if (s.lots) lots[s.lots] = 1; });
    var h = '<div class="page-head"><div><h1>Estruturas</h1><p>Construídas com <a class="xref" data-open="activity:build-structure">Build Structure</a> (atividade Cívica). Ordene a tabela clicando nos cabeçalhos; filtre por perícia para ver quais estruturas dão bônus de item.</p></div>' +
      '<div class="view-toggle" id="st-mode"><button type="button" data-v="table" class="' + (stState.mode === 'table' ? 'on' : '') + '">Tabela</button><button type="button" data-v="cards" class="' + (stState.mode === 'cards' ? 'on' : '') + '">Cartões</button></div></div>';
    h += '<div class="filters">' +
      '<input type="search" id="st-q" placeholder="Filtrar estruturas…" value="' + esc(stState.q) + '">' +
      '<label>Nível até <select id="st-lvl"><option value="">todos</option>' + range(1, 20).map(function (n) { return '<option' + (String(stState.maxLevel) === String(n) ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></label>' +
      '<label>Lotes <select id="st-lots"><option value="">todos</option>' + Object.keys(lots).sort(function (a, b) { return a - b; }).map(function (n) { return '<option' + (stState.lots === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></label>' +
      '<label>Traço <select id="st-trait"><option value="">todos</option>' + Object.keys(traits).sort().map(function (t) { return '<option' + (stState.trait === t ? ' selected' : '') + '>' + esc(t) + '</option>'; }).join('') + '</select></label>' +
      '<label>Bônus em <select id="st-bonus"><option value="">qualquer</option>' + skillList().map(function (s) { var id = kebab(s); return '<option value="' + id + '"' + (stState.bonus === id ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select></label>' +
      sourceSelect('st-src', stState.src) +
      '<span class="count" id="st-count"></span></div><div id="st-list"></div>';
    return h;
  }
  function range(a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; }
  function bonusText(s) {
    return arr(s.itemBonuses).map(function (b) {
      var act = b.activity ? resolve('activity', b.activity) : null;
      return '+' + b.value + ' ' + (act ? act.name : (b.skill || '')) + (act && b.skill ? ' (' + b.skill + ')' : '');
    }).join('; ');
  }
  function upgradeText(s) {
    return idsToEntities('structure', s.upgradeTo).map(function (x) { return x.name; }).join(', ');
  }
  function upgradeCell(s) {
    var to = idsToEntities('structure', s.upgradeTo);
    if (!to.length) return '<span class="muted">—</span>';
    return to.map(function (x) {
      return '<a class="xref" data-open="structure:' + esc(x.id) + '" title="' + esc(x.namePt || x.name) + '">' + esc(x.name) + '</a> <span class="muted" style="font-size:12px;white-space:nowrap">Nv ' + esc(x.level) + '</span>';
    }).join('<br>');
  }
  function bindEstruturas() {
    var cols = [
      ['name', 'Estrutura', function (s) { return s.name; }],
      ['level', 'Nv', function (s) { return +s.level || 0; }],
      ['lots', 'Lotes', function (s) { return +s.lots || 0; }],
      ['rp', 'Custo', function (s) { return s.cost && s.cost.rp != null ? +s.cost.rp : 0; }],
      ['dc', 'Construção', function (s) { return s.construction && s.construction.dc ? +s.construction.dc : 0; }],
      ['upgrade', 'Melhora para', function (s) { return upgradeText(s) || '￿'; }],
      ['bonus', 'Bônus de item', function (s) { return bonusText(s); }]
    ];
    function upd() {
      stState.q = $('#st-q').value; stState.maxLevel = $('#st-lvl').value; stState.lots = $('#st-lots').value; stState.trait = $('#st-trait').value; stState.bonus = $('#st-bonus').value; stState.src = $('#st-src').value;
      store('km-st', stState);
      var list = arr(KM.structures).slice();
      list = bySource(filterBy(list, stState.q), stState.src);
      if (stState.maxLevel) list = list.filter(function (s) { return (+s.level || 0) <= +stState.maxLevel; });
      if (stState.lots) list = list.filter(function (s) { return String(s.lots) === stState.lots; });
      if (stState.trait) list = list.filter(function (s) { return arr(s.traits || s.tags).indexOf(stState.trait) >= 0; });
      if (stState.bonus) list = list.filter(function (s) { return arr(s.itemBonuses).some(function (b) { return kebab(b.skill) === stState.bonus; }); });
      var col = cols.filter(function (c) { return c[0] === stState.sort; })[0] || cols[1];
      list.sort(function (a, b) {
        var x = col[2](a), y = col[2](b);
        var r = typeof x === 'number' ? x - y : String(x).localeCompare(String(y));
        if (!r) r = (+a.level || 0) - (+b.level || 0) || a.name.localeCompare(b.name);
        return stState.asc ? r : -r;
      });
      $('#st-count').textContent = list.length + ' de ' + arr(KM.structures).length;
      if (!list.length) { $('#st-list').innerHTML = '<div class="empty">Nada encontrado.</div>'; return; }
      if (stState.mode === 'cards') { $('#st-list').innerHTML = '<div class="grid">' + cards(list) + '</div>'; return; }
      var h = '<div class="table-wrap"><table class="data"><thead><tr>' + cols.map(function (c) {
        return '<th data-sort="' + c[0] + '" class="' + (stState.sort === c[0] ? 'sorted' + (stState.asc ? ' asc' : '') : '') + '">' + c[1] + '</th>';
      }).join('') + '</tr></thead><tbody>';
      list.forEach(function (s) {
        h += '<tr data-open="structure:' + esc(s.id) + '"><td><b>' + esc(s.name) + '</b> ' + srcChip(s) + (s.namePt ? '<span class="pt">' + esc(s.namePt) + '</span>' : '') + '</td>' +
          '<td class="num">' + esc(s.level) + '</td><td class="num">' + esc(!s.lots ? '—' : s.lots) + '</td>' +
          '<td>' + esc(s.costText || (s.cost && s.cost.rp != null ? s.cost.rp + ' RP' : '')) + '</td>' +
          '<td>' + esc(s.construction ? (s.construction.text || (s.construction.skill + ' DC ' + s.construction.dc)) : '') + '</td>' +
          '<td>' + upgradeCell(s) + '</td>' +
          '<td>' + esc(bonusText(s) || '—') + '</td></tr>';
      });
      $('#st-list').innerHTML = h + '</tbody></table></div>';
    }
    ['#st-q'].forEach(function (s) { $(s).addEventListener('input', upd); });
    ['#st-lvl', '#st-lots', '#st-trait', '#st-bonus', '#st-src'].forEach(function (s) { $(s).addEventListener('change', upd); });
    $('#st-list').addEventListener('click', function (ev) {
      var th = ev.target.closest('th[data-sort]'); if (!th) return;
      if (stState.sort === th.dataset.sort) stState.asc = !stState.asc; else { stState.sort = th.dataset.sort; stState.asc = /^(name|level|upgrade)$/.test(th.dataset.sort); }
      upd();
    });
    $('#st-mode').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      stState.mode = b.dataset.v; $$('#st-mode button').forEach(function (x) { x.classList.toggle('on', x === b); }); upd();
    });
    upd();
  }

  // ---- Guerra
  var WAR_SECTIONS = [
    ['regras', 'Regras de Guerra', function () { return all.filter(function (e) { return e._kind === 'rule' && arr(KM.warfareRules).indexOf(e) >= 0; }); }],
    ['atividades', 'Atividades de Exército', function () { return all.filter(function (e) { return e._army; }); }],
    ['acoes', 'Ações de Guerra', function () { return arr(KM.warActions); }],
    ['taticas', 'Táticas', function () { return arr(KM.tactics); }],
    ['exercitos', 'Exércitos Básicos', function () { return arr(KM.armies); }],
    ['equipamento', 'Equipamento', function () { return arr(KM.gear); }],
    ['condicoes', 'Condições', function () { return arr(KM.conditions); }]
  ];
  var warState = store('km-war') || { sec: 'all', q: '' };
  function viewGuerra() {
    var h = '<div class="page-head"><div><h1>Guerra</h1><p>Exércitos, atividades de exército, ações de guerra, táticas, equipamento e condições (apêndice de Warfare).</p></div></div>';
    h += '<div class="filters"><input type="search" id="war-q" placeholder="Filtrar…" value="' + esc(warState.q) + '"><div class="seg" id="war-sec">' +
      [['all', 'Tudo']].concat(WAR_SECTIONS.map(function (s) { return [s[0], s[1]]; })).map(function (s) {
        return '<button type="button" data-v="' + s[0] + '" class="' + (warState.sec === s[0] ? 'on' : '') + '">' + esc(s[1]) + '</button>';
      }).join('') + '</div><span class="count" id="war-count"></span></div><div id="war-list"></div>';
    return h;
  }
  function bindGuerra() {
    function upd() {
      warState.q = $('#war-q').value; store('km-war', warState);
      var out = '', n = 0;
      WAR_SECTIONS.forEach(function (s) {
        if (warState.sec !== 'all' && warState.sec !== s[0]) return;
        var list = filterBy(s[2](), warState.q);
        if (s[0] === 'exercitos' || s[0] === 'taticas' || s[0] === 'equipamento') list = list.slice().sort(function (a, b) { return (+a.level || 0) - (+b.level || 0) || a.name.localeCompare(b.name); });
        else if (s[0] !== 'regras') list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
        n += list.length;
        if (!list.length) return;
        out += '<h3 class="section-title">' + esc(s[1]) + ' <span class="muted" style="font-size:14px">(' + list.length + ')</span></h3><div class="grid">' + cards(list, { quick: s[0] === 'atividades', showAll: true }) + '</div>';
      });
      $('#war-count').textContent = n + ' itens';
      $('#war-list').innerHTML = out || '<div class="empty">Nada encontrado' + (all.some(function (e) { return e._kind === 'army' || e._army; }) ? '.' : ' — dados de guerra ainda não carregados.') + '</div>';
    }
    $('#war-q').addEventListener('input', upd);
    $('#war-sec').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      warState.sec = b.dataset.v; $$('#war-sec button').forEach(function (x) { x.classList.toggle('on', x === b); }); upd();
    });
    upd();
  }

  // ---- Talentos
  var featState = { q: '', lvl: '' };
  function viewTalentos() {
    var lv = {};
    arr(KM.feats).forEach(function (f) { lv[f.level] = 1; });
    var h = '<div class="page-head"><div><h1>Talentos do Reino</h1><p>O reino ganha um talento no nível 2 e a cada 2 níveis depois disso.</p></div></div>';
    h += '<div class="filters"><input type="search" id="ft-q" placeholder="Filtrar talentos…"><label>Nível até <select id="ft-lvl"><option value="">todos</option>' +
      Object.keys(lv).sort(function (a, b) { return a - b; }).map(function (n) { return '<option>' + esc(n) + '</option>'; }).join('') +
      '</select></label><span class="count" id="ft-count"></span></div><div id="ft-list"></div>';
    return h;
  }
  function bindTalentos() {
    function upd() {
      featState.q = $('#ft-q').value; featState.lvl = $('#ft-lvl').value;
      var list = filterBy(arr(KM.feats), featState.q);
      if (featState.lvl) list = list.filter(function (f) { return (+f.level || 0) <= +featState.lvl; });
      list = list.slice().sort(function (a, b) { return (+a.level || 0) - (+b.level || 0) || a.name.localeCompare(b.name); });
      $('#ft-count').textContent = list.length + ' talentos';
      $('#ft-list').innerHTML = '<div class="grid">' + cards(list) + '</div>';
    }
    $('#ft-q').addEventListener('input', upd);
    $('#ft-lvl').addEventListener('change', upd);
    upd();
  }

  // ---- Regras
  var CAT_LABEL = {
    basico: 'Conceitos básicos', turno: 'Turno do reino', recursos: 'Recursos e consumo', problemas: 'Unrest, Ruína e crises',
    territorio: 'Território e expansão', assentamentos: 'Assentamentos', progressao: 'Progressão e níveis', reputacao: 'Fama e Infâmia',
    criacao: 'Criação do reino', guerra: 'Guerra'
  };
  var CAT_ORDER = ['basico', 'turno', 'recursos', 'problemas', 'territorio', 'assentamentos', 'progressao', 'reputacao'];
  function viewRegras() {
    var h = '<div class="page-head"><div><h1>Regras de Referência</h1><p>Conceitos que todo líder precisa consultar: perícias, cargos, recursos, Unrest e Ruína, território, assentamentos e progressão.</p></div>' +
      '<input type="search" id="rg-q" placeholder="Filtrar regras…" style="padding:8px 12px;border-radius:8px;border:1px solid var(--line-strong);background:var(--surface-2);min-width:240px"></div><div id="rg-list"></div>';
    return h;
  }
  function bindRegras() {
    function upd() {
      var q = $('#rg-q').value;
      var out = '';
      // Perícias (tabela)
      var skills = filterBy(arr(KM.skills).map(function (s) { return registry.skill[s.id]; }).filter(Boolean), q);
      if (skills.length) {
        out += '<details class="acc" data-key="rg-skills"' + detailsOpen('rg-skills', true) + '><summary><h3 class="section-title" style="margin:0">Perícias do Reino</h3></summary><div class="acc-body"><div class="table-wrap"><table class="data"><thead><tr><th>Perícia</th><th>Atributo</th><th>Sem treino</th><th>Treinado</th></tr></thead><tbody>' +
          skills.map(function (s) {
            var un = idsToEntities('activity', s.untrained).map(function (a) { return a.name; }).join(', ');
            var tr = idsToEntities('activity', s.trained).map(function (a) { return a.name; }).join(', ');
            return '<tr data-open="skill:' + esc(s.id) + '"><td><b>' + esc(s.name) + '</b><span class="pt">' + esc(s.namePt || SKILL_PT[s.id] || '') + '</span></td><td>' + esc(s.ability) + '</td><td>' + esc(un || '—') + '</td><td>' + esc(tr || '—') + '</td></tr>';
          }).join('') + '</tbody></table></div></div></details>';
      }
      var leaders = filterBy(arr(KM.leaders), q);
      if (leaders.length) out += '<details class="acc" data-key="rg-leaders"' + detailsOpen('rg-leaders', true) + '><summary><h3 class="section-title" style="margin:0">Cargos de Liderança</h3></summary><div class="acc-body"><div class="grid">' + cards(leaders) + '</div></div></details>';
      var rules = filterBy(arr(KM.rules).concat(arr(KM.settlementRules)), q);
      var cats = CAT_ORDER.slice();
      rules.forEach(function (r) { if (cats.indexOf(r.category) < 0) cats.push(r.category); });
      cats.forEach(function (c) {
        var g = rules.filter(function (r) { return r.category === c; });
        if (!g.length) return;
        out += '<details class="acc" data-key="rg-' + esc(c) + '"' + detailsOpen('rg-' + c, true) + '><summary><h3 class="section-title" style="margin:0">' + esc(CAT_LABEL[c] || c || 'Outras') + ' <span class="muted" style="font-size:14px">(' + g.length + ')</span></h3></summary><div class="acc-body"><div class="grid">' + cards(g) + '</div></div></details>';
      });
      $('#rg-list').innerHTML = out || '<div class="empty">Nada encontrado.</div>';
    }
    $('#rg-q').addEventListener('input', upd);
    upd();
  }

  // ---- Criação
  function viewCriacao() {
    var c = KM.creation || {};
    var h = '<div class="page-head"><div><h1>Criação do Reino</h1><p>Os 10 passos de fundação do reino, as cartas (charters), terras natais (heartlands) e governos disponíveis.</p></div></div>';
    if (arr(c.steps).length) {
      h += '<details class="acc" data-key="cr-steps"' + detailsOpen('cr-steps', true) + '><summary><h3 class="section-title" style="margin:0">Passo a passo</h3></summary><div class="acc-body"><div class="grid">' +
        arr(c.steps).map(function (s) { return card(registry.cstep[s.id] || s); }).join('') + '</div></div></details>';
    }
    [['charters', 'charter', 'Cartas (Charters)'], ['heartlands', 'heartland', 'Terras Natais (Heartlands)'], ['governments', 'government', 'Governos']].forEach(function (x) {
      var list = arr(c[x[0]]);
      if (!list.length) return;
      h += '<details class="acc" data-key="cr-' + x[1] + '"' + detailsOpen('cr-' + x[1], true) + '><summary><h3 class="section-title" style="margin:0">' + x[2] + '</h3></summary><div class="acc-body"><div class="grid">' + cards(list) + '</div></div></details>';
    });
    var creationRules = arr(KM.rules).filter(function (r) { return r.category === 'criacao'; });
    if (creationRules.length) h += '<details class="acc" data-key="cr-rules"' + detailsOpen('cr-rules', false) + '><summary><h3 class="section-title" style="margin:0">Regras de criação</h3></summary><div class="acc-body"><div class="grid">' + cards(creationRules) + '</div></div></details>';
    if (h.indexOf('acc') < 0) h += '<div class="empty">Dados de criação ainda não carregados.</div>';
    return h;
  }

  /* =========================================================
   * Configuração "Meu Reino"
   * ========================================================= */
  function openKingdomConfig() {
    var k = kingdom || { skills: {}, hideUnavailable: false };
    $('#modal-kind').textContent = 'Configuração';
    $('#modal-title').textContent = 'Meu Reino';
    $('#modal-sub').textContent = 'Salvo apenas neste navegador';
    $('#modal-back').hidden = true;
    var h = '<p>Informe a proficiência do reino em cada perícia. As atividades que exigem um grau maior aparecem esmaecidas com 🔒 (ou ocultas, se você marcar a opção abaixo).</p>' +
      '<div class="skill-config">' + skillList().map(function (s) {
        var id = kebab(s), v = k.skills[id] || 0;
        return '<label><span>' + esc(s) + ' <span class="muted" style="font-size:12px">' + esc(SKILL_PT[id] || '') + '</span></span><select data-skill="' + id + '">' +
          RANK_PT.map(function (r, i) { return '<option value="' + i + '"' + (v === i ? ' selected' : '') + '>' + r + '</option>'; }).join('') + '</select></label>';
      }).join('') + '</div>' +
      '<p><label><input type="checkbox" id="kc-hide"' + (k.hideUnavailable ? ' checked' : '') + '> Ocultar atividades indisponíveis</label></p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary" id="kc-save">Salvar</button><button class="btn" id="kc-clear">Limpar configuração</button></div>';
    $('#modal-body').innerHTML = h;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#kc-save').onclick = function () {
      var skills = {};
      $$('#modal-body select[data-skill]').forEach(function (s) { skills[s.dataset.skill] = +s.value; });
      kingdom = { skills: skills, hideUnavailable: $('#kc-hide').checked };
      store('km-kingdom', kingdom);
      closeModal(); route();
    };
    $('#kc-clear').onclick = function () {
      kingdom = null;
      try { localStorage.removeItem('km-kingdom'); } catch (e) { /* ignore */ }
      closeModal(); route();
    };
  }

  /* =========================================================
   * Roteamento e eventos globais
   * ========================================================= */
  var ROUTES = {
    turno: [viewTurno], atividades: [viewAtividades, bindAtividades], estruturas: [viewEstruturas, bindEstruturas],
    guerra: [viewGuerra, bindGuerra], talentos: [viewTalentos, bindTalentos], regras: [viewRegras, bindRegras], criacao: [viewCriacao]
  };
  function route() {
    var m = location.hash.match(/^#\/([a-z]+)(?:\/([a-z-]+):([a-z0-9-]+))?/);
    var tab = m && ROUTES[m[1]] ? m[1] : 'turno';
    var r = ROUTES[tab];
    if (view.dataset.tab !== tab || !view.innerHTML) {
      view.innerHTML = r[0]();
      if (r[1]) r[1]();
      view.dataset.tab = tab;
    } else {
      view.innerHTML = r[0]();
      if (r[1]) r[1]();
    }
    $$('#tabs a').forEach(function (a) { a.classList.toggle('active', a.dataset.tab === tab); });
    if (m && m[2]) openEntity(m[2], m[3]);
  }
  window.addEventListener('hashchange', function () {
    var prev = view.dataset.tab;
    route();
    var m = location.hash.match(/^#\/([a-z]+)/);
    if (m && m[1] !== prev) window.scrollTo(0, 0);
  });

  document.addEventListener('click', function (ev) {
    var jump = ev.target.closest('[data-jump]');
    if (jump) {
      ev.preventDefault();
      var el = document.getElementById(jump.dataset.jump);
      if (el) { el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      return;
    }
    var o = ev.target.closest('[data-open]');
    if (o) {
      ev.preventDefault();
      var p = o.dataset.open.split(':');
      sBox.hidden = true;
      openEntity(p[0], p.slice(1).join(':'));
      return;
    }
    if (ev.target.closest('[data-close]')) closeModal();
  });
  $('#modal-back').addEventListener('click', modalBack);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && !modal.hidden) { closeModal(); return; }
    if (ev.key === 'Backspace' && !modal.hidden && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && modalStack.length > 1) { ev.preventDefault(); modalBack(); return; }
    if (ev.key === '/' && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { ev.preventDefault(); sInput.focus(); sInput.select(); }
  });
  $('#btn-kingdom').addEventListener('click', openKingdomConfig);

  // Tema
  var theme = store('km-theme');
  if (theme) document.documentElement.setAttribute('data-theme', theme);
  $('#btn-theme').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store('km-theme', next);
  });

  // Auto-verificação dos dados: abra index.html?check
  function selfCheck() {
    var missing = {}, noSummary = [], noText = [], counts = {};
    all.forEach(function (e) {
      counts[e._kind] = (counts[e._kind] || 0) + 1;
      if (!e.summary) noSummary.push(e._kind + ':' + e.id);
      if (!e.text && !e.outcomes && e._kind !== 'step') noText.push(e._kind + ':' + e.id);
      var blob = JSON.stringify([e.text, e.outcomes, e.effects, e.requirements, e.special, e.steps]);
      var re = /\[\[([a-z-]+):([^\]|]+)(?:\|[^\]]+)?\]\]/g, m;
      while ((m = re.exec(blob))) if (!resolve(m[1], m[2].trim())) missing[m[1] + ':' + m[2]] = (missing[m[1] + ':' + m[2]] || []).concat(e._kind + ':' + e.id);
      arr(e.itemBonuses).forEach(function (b) { if (b.activity && !resolve('activity', b.activity)) missing['activity:' + b.activity] = (missing['activity:' + b.activity] || []).concat(e._kind + ':' + e.id); });
      arr(e.upgradeTo).concat(arr(e.upgradeFrom)).forEach(function (id) { if (!resolve('structure', id)) missing['structure:' + id] = (missing['structure:' + id] || []).concat(e._kind + ':' + e.id); });
      ['untrained', 'trained'].forEach(function (f) { if (e._kind === 'skill') arr(e[f]).forEach(function (id) { if (!resolve('activity', id)) missing['activity:' + id] = (missing['activity:' + id] || []).concat(e._kind + ':' + e.id); }); });
    });
    var stepsNoAct = STEP_ORDER.filter(function (s) { return !activitiesFor(s).length; });
    var orphanActs = all.filter(function (e) { return e._kind === 'activity' && !stepsOf(e).some(function (s) { return STEP_ORDER.indexOf(s) >= 0; }); }).map(function (e) { return e.id; });
    var pre = document.createElement('pre');
    pre.id = 'selfcheck';
    var campaign = all.filter(function (e) { return e.source === 'campanha'; }).map(function (e) { return e._kind + ':' + e.id; });
    pre.textContent = JSON.stringify({ counts: counts, campaign: campaign, campaignInactive: campaignInactive, missingRefs: missing, noSummary: noSummary, noText: noText, stepsWithoutActivities: stepsNoAct, activitiesWithUnknownStep: orphanActs, duplicateIds: dupIds, campaignUnknownKeys: campaignUnknown }, null, 1);
    document.body.appendChild(pre);
  }

  function showPanel(kind, title, sub, html) {
    $('#modal-kind').textContent = kind;
    $('#modal-title').textContent = title;
    $('#modal-sub').innerHTML = sub || '';
    $('#modal-back').hidden = true;
    $('#modal-body').innerHTML = html;
    modalStack = [];
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modal-body').scrollTop = 0;
  }

  // Exposto para depuração no console e para o editor do mestre (assets/editor.js)
  window.KMApp = {
    registry: registry, all: all, resolve: resolve, search: search, check: selfCheck,
    gm: GM, campaign: { file: campaignFile, current: campaignSrc, draft: campaignDraft },
    util: {
      esc: esc, kebab: kebab, store: store, clone: clone, skillList: skillList, rich: rich, showPanel: showPanel, closeModal: closeModal,
      SKILL_PT: SKILL_PT, RANKS: RANKS, RANK_PT: RANK_PT, STEP_ORDER: STEP_ORDER, STEP_LABEL: STEP_LABEL
    }
  };

  if (GM && !CHECK) {
    var gmBar = document.createElement('div');
    gmBar.className = 'gm-banner';
    gmBar.innerHTML = '<b>Modo mestre</b> — itens de campanha inativos visíveis (selo <span class="chip inactive">Inativo</span>), ' + campaignInactive.length + ' inativo(s). ' +
      '<button type="button" class="btn btn-sm" data-ed-panel>☰ Gerenciar campanha</button> <button type="button" class="btn btn-sm" data-ed-new="activities">+ Atividade</button> <button type="button" class="btn btn-sm" data-ed-new="structures">+ Estrutura</button> ' +
      (campaignDraft ? '<span class="gm-draft">⚠ Rascunho local não publicado. <button type="button" class="btn btn-sm btn-primary" data-ed-download>⤓ Baixar campanha.js</button> <button type="button" class="btn btn-sm" data-ed-discard>Descartar rascunho</button></span> ' : '') +
      '<a href="' + esc(location.pathname) + '" data-gm-exit>Sair do modo mestre</a>';
    document.body.insertBefore(gmBar, view);
    gmBar.querySelector('[data-gm-exit]').addEventListener('click', function (ev) { ev.preventDefault(); location.href = location.pathname + location.hash; });
  }

  route();
  if (CHECK) selfCheck();
})();
