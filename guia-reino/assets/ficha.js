/* Ficha do reino — aba "Reino" (#/reino). Dados em data/reino.js (KM.reino); todos veem, só o modo mestre
 * edita (rascunho em localStorage 'km-reino-draft', publicado com assets/github.js).
 * O arquivo guarda só valores-base; modificadores, totais das perícias (com a regra de não somar bônus do
 * mesmo tipo), CD de Controle, estoques, consumo e Dados de Recurso são calculados aqui (regras: docs/regras-kingmaker.md). */
(function () {
  'use strict';

  var A = window.KMApp;
  if (!A) return;
  var U = A.util, esc = U.esc, KM = window.KM || {};
  var GM = A.gm;
  var DRAFT_KEY = 'km-reino-draft';

  var HEADER = [
    '// Ficha do reino (aba "Reino"). Editável só no modo mestre (?mestre), que publica este arquivo',
    '// no GitHub (☁ Publicar) ou o gera para download. Esquema em docs/modelo-de-dados.md ("Ficha do reino").',
    '// Guarde só os valores-base: modificadores, totais das perícias, CD de Controle, estoques e',
    '// Dados de Recurso são calculados pelo site a partir das regras.'
  ].join('\n');

  var ABILS = [['culture', 'Culture', 'Cultura'], ['economy', 'Economy', 'Economia'], ['loyalty', 'Loyalty', 'Lealdade'], ['stability', 'Stability', 'Estabilidade']];
  var RUINS = [['corruption', 'Corruption', 'Corrupção', 'culture'], ['crime', 'Crime', 'Crime', 'economy'], ['decay', 'Decay', 'Decadência', 'stability'], ['strife', 'Strife', 'Discórdia', 'loyalty']];
  var COMMS = [['food', 'Food', 'Comida'], ['lumber', 'Lumber', 'Madeira'], ['luxuries', 'Luxuries', 'Luxos'], ['ore', 'Ore', 'Minério'], ['stone', 'Stone', 'Pedra']];
  // CD de Controle por nível (p. 16)
  var CONTROL_DC = [14, 14, 15, 16, 18, 20, 22, 23, 24, 26, 27, 28, 30, 31, 32, 34, 35, 36, 38, 39, 40];
  // Tamanho (p. 38): [hexes mín., tipo, tipo PT, dado de recurso, mod. CD de Controle, estoque por commodity]
  var SIZES = [[0, 'Territory', 'Território', 4, 0, 4], [10, 'Province', 'Província', 6, 1, 8], [25, 'State', 'Estado', 8, 2, 12], [50, 'Country', 'País', 10, 3, 16], [100, 'Dominion', 'Domínio', 12, 4, 20]];
  // Assentamentos (p. 46): [id, tipo, PT, consumo]
  var SETTLEMENTS = [['village', 'Village', 'Vila', 1], ['town', 'Town', 'Vilarejo', 2], ['city', 'City', 'Cidade', 4], ['metropolis', 'Metropolis', 'Metrópole', 6]];
  // Vacância que afeta testes de perícia (p. 19); as demais (General, Magister, Warden) atingem atividades e aparecem como aviso
  var VACANCY = { ruler: 'all', counselor: 'culture', emissary: 'loyalty', treasurer: 'economy', viceroy: 'stability' };
  var MOD_TYPES = [['status', 'status'], ['item', 'item'], ['circumstance', 'circunstância'], ['untyped', 'sem tipo']];

  /* ---------- dados ---------- */
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function obj(o, k) { if (!o[k] || typeof o[k] !== 'object' || Array.isArray(o[k])) o[k] = {}; return o[k]; }
  function list(o, k) { if (!Array.isArray(o[k])) o[k] = []; return o[k]; }
  function leaders() { return (KM.leaders || []).filter(function (l) { return l && l.id; }); }
  function skills() { return (KM.skills || []).filter(function (s) { return s && s.id; }); }

  // Completa campos ausentes (arquivo antigo, editado à mão ou vazio)
  function normalize(o) {
    o = o && typeof o === 'object' ? o : {};
    ['name', 'capital', 'charter', 'heartland', 'government', 'languages', 'notes'].forEach(function (k) { if (typeof o[k] !== 'string') o[k] = o[k] == null ? '' : String(o[k]); });
    o.level = num(o.level, 1); o.xp = num(o.xp, 0); o.size = num(o.size, 0);
    if (o.fameType !== 'infamy') o.fameType = 'fame';
    o.fame = num(o.fame, 0); o.unrest = num(o.unrest, 0); o.rp = num(o.rp, 0);
    var ab = obj(o, 'abilities');
    ABILS.forEach(function (a) { ab[a[0]] = num(ab[a[0]], 10); });
    var ru = obj(o, 'ruin');
    RUINS.forEach(function (r) { var x = obj(ru, r[0]); x.value = num(x.value, 0); x.threshold = num(x.threshold, 10); x.penalty = num(x.penalty, 0); });
    var rd = obj(o, 'resourceDice'); rd.bonus = num(rd.bonus, 0); rd.penalty = num(rd.penalty, 0);
    var cm = obj(o, 'commodities');
    COMMS.forEach(function (c) { var x = obj(cm, c[0]); x.stock = num(x.stock, 0); x.extra = num(x.extra, 0); });
    var cs = obj(o, 'consumption'); cs.armies = num(cs.armies, 0); cs.modifier = num(cs.modifier, 0);
    var ld = obj(o, 'leaders');
    leaders().forEach(function (l) {
      var x = obj(ld, l.id);
      if (typeof x.name !== 'string') x.name = '';
      x.pc = x.pc !== false; x.invested = x.invested === true;
    });
    var sk = obj(o, 'skills');
    skills().forEach(function (s) { sk[s.id] = Math.max(0, Math.min(4, num(sk[s.id], 0))); });
    list(o, 'modifiers').forEach(function (m) {
      if (!MOD_TYPES.some(function (t) { return t[0] === m.type; })) m.type = 'circumstance';
      m.value = num(m.value, 0); if (!m.scope) m.scope = 'all'; if (typeof m.note !== 'string') m.note = '';
    });
    o.feats = list(o, 'feats').filter(function (f) { return typeof f === 'string' && f; });
    list(o, 'settlements').forEach(function (x) {
      if (typeof x.name !== 'string') x.name = '';
      if (!SETTLEMENTS.some(function (t) { return t[0] === x.type; })) x.type = 'village';
      x.consumption = num(x.consumption, settlementType(x.type)[3]);
      if (typeof x.notes !== 'string') x.notes = '';
    });
    return o;
  }
  function blank() { return normalize({}); }
  function fileText(o) { return 'window.KM = window.KM || {};\n' + HEADER + '\nKM.reino = ' + JSON.stringify(o, null, 2) + ';\n'; }

  var s = normalize(A.reino.current);           // mesmo objeto que o app.js usa para a disponibilidade das atividades
  var published = normalize(U.clone(A.reino.file || {}));
  var lastRoll = null;

  /* ---------- cálculos ---------- */
  function level() { return Math.max(1, Math.min(20, Math.floor(num(s.level, 1)))); }
  function mod(score) { return Math.floor((num(score, 10) - 10) / 2); }
  function abilityKey(name) { return U.kebab(name || ''); }
  function sizeInfo() { var r = SIZES[0]; SIZES.forEach(function (x) { if (s.size >= x[0]) r = x; }); return r; }
  function settlementType(id) { for (var i = 0; i < SETTLEMENTS.length; i++) if (SETTLEMENTS[i][0] === id) return SETTLEMENTS[i]; return SETTLEMENTS[0]; }
  function vacant(id) { var l = s.leaders[id]; return !l || !String(l.name).trim(); }
  function investBonus() { var l = level(); return l >= 16 ? 3 : l >= 8 ? 2 : 1; }
  function unrestPenalty() { var u = s.unrest; return u >= 15 ? 4 : u >= 10 ? 3 : u >= 5 ? 2 : u >= 1 ? 1 : 0; }
  function controlDC() {
    var parts = [['nível ' + level(), CONTROL_DC[level()]], [sizeInfo()[1], sizeInfo()[4]]];
    if (vacant('ruler')) parts.push(['Ruler vago', 2]);
    return { total: parts.reduce(function (t, p) { return t + p[1]; }, 0), parts: parts };
  }
  function resourceDice() { return { n: Math.max(0, level() + 4 + s.resourceDice.bonus - s.resourceDice.penalty), die: sizeInfo()[3] }; }
  function storage(c) { return sizeInfo()[5] + s.commodities[c].extra; }
  function consumption() {
    var st = s.settlements.reduce(function (t, x) { return t + num(x.consumption, 0); }, 0);
    return { settlements: st, total: Math.max(0, st + s.consumption.armies + s.consumption.modifier) };
  }
  function leaderName(l) { return l.name + (l.namePt && l.namePt !== l.name ? ' (' + l.namePt + ')' : ''); }
  function abilityPt(key) { for (var i = 0; i < ABILS.length; i++) if (ABILS[i][0] === key) return ABILS[i][2]; return key; }

  // Total de uma perícia. Bônus e penalidades do mesmo tipo (status, item, circunstância) não se somam:
  // vale o maior bônus e a pior penalidade de cada tipo; sem tipo (inclui vacância) soma tudo.
  function skillTotal(sk) {
    var key = abilityKey(sk.ability), rank = s.skills[sk.id] || 0, lv = level();
    var parts = [{ label: abilityPt(key), value: mod(s.abilities[key]) }];
    if (rank) parts.push({ label: U.RANK_PT[rank].toLowerCase() + ' (nível ' + lv + ' + ' + 2 * rank + ')', value: lv + 2 * rank });
    var cand = [];
    leaders().forEach(function (l) {
      if (abilityKey(l.ability) === key && s.leaders[l.id].invested && !vacant(l.id)) cand.push({ type: 'status', value: investBonus(), label: l.name + ' investido' });
    });
    if (unrestPenalty()) cand.push({ type: 'status', value: -unrestPenalty(), label: 'Unrest ' + s.unrest });
    RUINS.forEach(function (r) { if (r[3] === key && s.ruin[r[0]].penalty) cand.push({ type: 'item', value: -Math.abs(s.ruin[r[0]].penalty), label: r[1] }); });
    Object.keys(VACANCY).forEach(function (id) {
      if ((VACANCY[id] === 'all' || VACANCY[id] === key) && vacant(id)) cand.push({ type: 'untyped', value: -1, label: (A.resolve('leader', id) || { name: id }).name + ' vago' });
    });
    s.modifiers.forEach(function (m) {
      if (!m.value) return;
      var sc = String(m.scope || 'all');
      if (sc === 'all' || sc === 'ability:' + key || sc === 'skill:' + sk.id) cand.push({ type: m.type, value: m.value, label: m.note || 'ajuste do mestre' });
    });
    var best = {}, ignored = [];
    cand.forEach(function (c) {
      if (c.type === 'untyped') { parts.push(c); return; }
      var k = c.type + (c.value > 0 ? '+' : '-'), cur = best[k];
      if (!cur || Math.abs(c.value) > Math.abs(cur.value)) { if (cur) ignored.push(cur); best[k] = c; } else ignored.push(c);
    });
    Object.keys(best).forEach(function (k) { parts.push(best[k]); });
    return { total: parts.reduce(function (t, p) { return t + p.value; }, 0), parts: parts, ignored: ignored, rank: rank };
  }
  function signed(n) { return (n >= 0 ? '+' : '−') + Math.abs(n); }
  function typeLabel(t) { for (var i = 0; i < MOD_TYPES.length; i++) if (MOD_TYPES[i][0] === t) return MOD_TYPES[i][1]; return t; }
  function partText(p) { return signed(p.value) + ' ' + p.label + (p.type && p.type !== 'untyped' ? ' (' + typeLabel(p.type) + ')' : ''); }

  /* ---------- campos (editáveis só no modo mestre) ---------- */
  function attr(v) { return esc(v == null ? '' : v); }
  function fNum(path, v, o) {
    o = o || {};
    if (!GM) return '<b class="sh-val">' + esc(v) + '</b>';
    return '<input type="number" class="fi fi-num" data-f="' + path + '" data-t="num" value="' + attr(v) + '"' + (o.min != null ? ' min="' + o.min + '"' : '') + (o.max != null ? ' max="' + o.max + '"' : '') + (o.title ? ' title="' + attr(o.title) + '"' : '') + '>';
  }
  function fTxt(path, v, ph, o) {
    o = o || {};
    if (!GM) return v ? esc(v) : '<span class="muted">' + (o.empty || '—') + '</span>';
    return '<input type="text" class="fi fi-txt" data-f="' + path + '" data-t="text" value="' + attr(v) + '" placeholder="' + attr(ph || '') + '">';
  }
  function fSel(path, opts, v, view) {
    if (!GM) return view != null ? view : esc((opts.filter(function (x) { return x[0] === v; })[0] || ['', '—'])[1]);
    return '<select class="fi" data-f="' + path + '" data-t="text">' + opts.map(function (x) { return '<option value="' + attr(x[0]) + '"' + (String(x[0]) === String(v) ? ' selected' : '') + '>' + esc(x[1]) + '</option>'; }).join('') + '</select>';
  }
  function fChk(path, on, label) {
    if (!GM) return on ? '<span class="chip ok">' + label + '</span>' : '';
    return '<label class="fi-chk"><input type="checkbox" data-f="' + path + '" data-t="bool"' + (on ? ' checked' : '') + '> ' + label + '</label>';
  }
  function entityOpts(kind) {
    var r = A.registry[kind] || {};
    return [['', '—']].concat(Object.keys(r).map(function (k) { return r[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); }).map(function (e) { return [e.id, e.name + (e.namePt && e.namePt !== e.name ? ' · ' + e.namePt : '')]; }));
  }
  function link(kind, id) {
    var e = id && A.resolve(kind, id);
    if (!e) return id ? esc(id) : '<span class="muted">—</span>';
    return '<a class="xref" data-open="' + attr(e._kind + ':' + e.id) + '">' + esc(e.name) + '</a>';
  }
  function box(title, body, cls) { return '<section class="sh-box' + (cls ? ' ' + cls : '') + '"><h3>' + title + '</h3>' + body + '</section>'; }
  function row(label, value, hint) { return '<div class="sh-row"><span class="sh-lbl">' + label + (hint ? ' <small>' + hint + '</small>' : '') + '</span><span class="sh-v">' + value + '</span></div>'; }

  /* ---------- tela ---------- */
  function changed() { return JSON.stringify(s) !== JSON.stringify(published); }
  function isEmpty() { return JSON.stringify(s) === JSON.stringify(blank()); }

  function gmBar() {
    if (!GM) return '';
    var G = window.KMGitHub, dirty = changed();
    return '<div class="ed-bar sh-gm">' +
      '<span class="' + (dirty ? 'gm-draft' : 'muted') + '">' + (dirty ? '⚠ Rascunho local não publicado (salvo automaticamente neste navegador)' : 'Igual à ficha publicada') + '</span><span class="sep"></span>' +
      '<button type="button" class="btn btn-sm' + (dirty ? ' btn-primary' : '') + '" data-fi-publish>☁ Publicar ficha</button>' +
      '<button type="button" class="btn btn-sm" data-fi-download>⤓ Baixar reino.js</button>' +
      (dirty ? '<button type="button" class="btn btn-sm" data-fi-discard>Descartar rascunho</button>' : '') +
      (G && G.mode() !== 'showcase' ? '<button type="button" class="btn btn-sm" data-gh-token>⚙ GitHub' + (G.hasToken() ? ' ✓' : '') + '</button>' : '') +
      '</div>';
  }

  function view() {
    var cdc = controlDC(), size = sizeInfo(), rd = resourceDice(), cons = consumption();
    var h = '<div class="page-head"><div><h1>' + (s.name && !GM ? esc(s.name) : 'Ficha do Reino') + '</h1><p>' +
      (GM ? 'Modo mestre: edite os campos — o rascunho é salvo neste navegador; <b>☁ Publicar ficha</b> envia para os jogadores. ' : 'Ficha oficial do reino, mantida pelo mestre. ') +
      'Totais, modificadores, CD de Controle, estoques e Dados de Recurso são calculados pelas regras.</p></div></div>';
    h += gmBar();
    if (!GM && isEmpty()) h += '<div class="callout">A ficha do reino ainda não foi preenchida pelo mestre.</div>';
    h += '<div class="sheet">';

    // Identidade
    h += box('Reino', (GM ? row('Nome', fTxt('name', s.name, 'Nome do reino')) : '') +
      row('Capital', fTxt('capital', s.capital, 'Capital')) +
      row('Carta', fSel('charter', entityOpts('charter'), s.charter, link('charter', s.charter))) +
      row('Terra natal', fSel('heartland', entityOpts('heartland'), s.heartland, link('heartland', s.heartland))) +
      row('Governo', fSel('government', entityOpts('government'), s.government, link('government', s.government))) +
      row('Idiomas', fTxt('languages', s.languages, 'ex.: Common, Sylvan')), 'sh-id');

    // Situação
    var anarchy = s.unrest >= 20;
    h += box('Situação',
      row('Nível', fNum('level', s.level, { min: 1, max: 20 })) +
      row('XP', fNum('xp', s.xp, { min: 0 }) + ' <span class="muted">/ 1000</span>') +
      row('Tamanho', fNum('size', s.size, { min: 0 }) + ' <span class="muted">hexes · ' + esc(size[1]) + ' (' + esc(size[2]) + ')</span>') +
      row('<a class="xref" data-open="rule:control-dc">CD de Controle</a>', '<b class="sh-big">' + cdc.total + '</b>', cdc.parts.map(function (p, i) { return (i ? signed(p[1]) + ' ' : p[1] + ' ') + p[0]; }).join(' ')) +
      row('<a class="xref" data-open="rule:unrest">Unrest</a>', fNum('unrest', s.unrest, { min: 0 }) + (unrestPenalty() ? ' <span class="chip warn">−' + unrestPenalty() + ' status em todos os testes</span>' : '') + (anarchy ? ' <span class="chip warn">Anarquia</span>' : '')) +
      row(GM ? fSel('fameType', [['fame', 'Fama'], ['infamy', 'Infâmia']], s.fameType) : (s.fameType === 'infamy' ? 'Infâmia' : 'Fama'), fNum('fame', s.fame, { min: 0, max: 3 }) + ' <span class="muted">/ 3</span>'), 'sh-status');

    // Atributos e ruína
    var ab = '<div class="sh-abils">' + ABILS.map(function (a) {
      var r = RUINS.filter(function (x) { return x[3] === a[0]; })[0], ru = s.ruin[r[0]];
      var inv = leaders().filter(function (l) { return abilityKey(l.ability) === a[0] && s.leaders[l.id].invested && !vacant(l.id); });
      return '<div class="sh-abil"><div class="sh-abil-h"><span>' + a[1] + '<small>' + a[2] + '</small></span><b class="sh-big">' + signed(mod(s.abilities[a[0]])) + '</b></div>' +
        row('Valor', fNum('abilities.' + a[0], s.abilities[a[0]], { min: 0 })) +
        row(r[1] + ' <small>' + r[2] + '</small>', fNum('ruin.' + r[0] + '.value', ru.value, { min: 0 }) + ' <span class="muted">/</span> ' + fNum('ruin.' + r[0] + '.threshold', ru.threshold, { min: 0, title: 'Limiar' })) +
        row('Penalidade de item', fNum('ruin.' + r[0] + '.penalty', ru.penalty, { min: 0 })) +
        (ru.value >= ru.threshold && ru.threshold > 0 ? '<div class="chip warn">Ruína no limiar</div>' : '') +
        (inv.length ? '<div class="chip ok" title="Bônus de status por cargo investido">+' + investBonus() + ' status · ' + esc(inv.map(function (l) { return l.name; }).join(', ')) + '</div>' : '') +
        '</div>';
    }).join('') + '</div>';
    h += box('Atributos e <a class="xref" data-open="rule:ruin">Ruína</a>', ab, 'sh-wide');

    // Recursos
    var dice = rd.n + 'd' + rd.die;
    var res = row('Resource Points (RP)', fNum('rp', s.rp, { min: 0 })) +
      row('<a class="xref" data-open="rule:resource-dice">Dados de Recurso</a>', '<b>' + dice + '</b>', 'nível ' + level() + ' + 4' + (s.resourceDice.bonus ? ' + ' + s.resourceDice.bonus + ' bônus' : '') + (s.resourceDice.penalty ? ' − ' + s.resourceDice.penalty + ' penalidade' : '') + ' · d' + rd.die + ' pelo tamanho') +
      (GM ? row('Dados bônus / penalidade', fNum('resourceDice.bonus', s.resourceDice.bonus, { min: 0 }) + ' / ' + fNum('resourceDice.penalty', s.resourceDice.penalty, { min: 0 })) : '') +
      '<div class="sh-roll"><button type="button" class="btn btn-sm btn-primary" data-fi-roll>🎲 Rolar ' + dice + '</button>' +
      (lastRoll ? ' <span class="sh-roll-res">' + esc(lastRoll.dice) + ': [' + lastRoll.rolls.join(', ') + '] = <b>' + lastRoll.total + '</b> RP</span>' +
        (GM ? ' <button type="button" class="btn btn-sm" data-fi-apply-roll title="Substitui o RP da ficha pelo total rolado">Aplicar ao RP</button>' : '') : '') + '</div>';
    res += '<table class="sh-table"><thead><tr><th>Commodity</th><th>Estoque</th><th>Limite</th>' + (GM ? '<th title="Capacidade extra (estruturas como Granary, Lumberyard…)">+ extra</th>' : '') + '</tr></thead><tbody>' +
      COMMS.map(function (c) {
        var x = s.commodities[c[0]], lim = storage(c[0]);
        return '<tr><td>' + c[1] + ' <span class="muted">' + c[2] + '</span></td><td>' + fNum('commodities.' + c[0] + '.stock', x.stock, { min: 0 }) +
          (x.stock > lim ? ' <span class="chip warn" title="Acima do limite: o excedente se perde">acima</span>' : '') + '</td><td class="num">' + lim + '</td>' +
          (GM ? '<td>' + fNum('commodities.' + c[0] + '.extra', x.extra, { min: 0 }) + '</td>' : '') + '</tr>';
      }).join('') + '</tbody></table>';
    res += row('<a class="xref" data-open="rule:consumption">Consumo</a> por turno', '<b class="sh-big">' + cons.total + '</b>',
      'assentamentos ' + cons.settlements + ' + exércitos ' + s.consumption.armies + (s.consumption.modifier ? ' ' + signed(s.consumption.modifier) + ' ajuste' : '')) +
      (GM ? row('Exércitos / ajuste', fNum('consumption.armies', s.consumption.armies, { min: 0 }) + ' / ' + fNum('consumption.modifier', s.consumption.modifier, { title: 'Ex.: −Farmlands, eventos' })) : '') +
      (cons.total > s.commodities.food.stock ? '<div class="chip warn">Comida insuficiente para o consumo</div>' : '');
    h += box('Recursos', res, 'sh-res');

    // Assentamentos
    var stOpts = SETTLEMENTS.map(function (t) { return [t[0], t[1] + ' · ' + t[2]]; });
    var se = s.settlements.length ? '<table class="sh-table"><thead><tr><th>Nome</th><th>Tipo</th><th>Consumo</th><th>Notas</th>' + (GM ? '<th></th>' : '') + '</tr></thead><tbody>' +
      s.settlements.map(function (x, i) {
        var p = 'settlements.' + i + '.';
        return '<tr><td>' + fTxt(p + 'name', x.name, 'Nome') + '</td><td>' + fSel(p + 'type', stOpts, x.type) + '</td><td>' + fNum(p + 'consumption', x.consumption, { min: 0 }) + '</td>' +
          '<td>' + fTxt(p + 'notes', x.notes, '') + '</td>' + (GM ? '<td><button type="button" class="btn btn-sm" data-fi-rm="settlements.' + i + '" title="Remover">✕</button></td>' : '') + '</tr>';
      }).join('') + '</tbody></table>' : '<p class="muted">Nenhum assentamento.</p>';
    if (GM) se += '<button type="button" class="btn btn-sm" data-fi-add="settlements">+ assentamento</button>';
    h += box('<a class="xref" data-open="rule:settlement-types">Assentamentos</a>', se + '<p class="muted sh-small">Consumo padrão: Village 1 · Town 2 · City 4 · Metropolis 6 (ajuste se precisar).</p>', 'sh-sett');
    // Líderes
    var invested = leaders().filter(function (l) { return s.leaders[l.id].invested && !vacant(l.id); }).length;
    var ld = '<table class="sh-table"><thead><tr><th>Cargo</th><th>Atributo</th><th>Ocupante</th><th>' + (GM ? 'PC' : 'Tipo') + '</th><th>Investido</th></tr></thead><tbody>' +
      leaders().map(function (l) {
        var x = s.leaders[l.id], v = vacant(l.id);
        return '<tr' + (v ? ' class="sh-vacant"' : '') + '><td><a class="xref" data-open="leader:' + attr(l.id) + '">' + esc(leaderName(l)) + '</a>' +
          (v ? '<div class="sh-note" title="' + attr(l.vacancy || '') + '">Vago: ' + esc(l.vacancy || '') + '</div>' : '') + '</td>' +
          '<td>' + esc(l.ability || '') + '</td><td>' + fTxt('leaders.' + l.id + '.name', x.name, 'vago', { empty: 'vago' }) + '</td>' +
          '<td>' + (GM ? '<input type="checkbox" data-f="leaders.' + attr(l.id) + '.pc" data-t="bool"' + (x.pc ? ' checked' : '') + ' title="Personagem jogador">' : (v ? '' : x.pc ? 'PC' : 'NPC')) + '</td>' +
          '<td>' + (GM ? '<input type="checkbox" data-f="leaders.' + attr(l.id) + '.invested" data-t="bool"' + (x.invested ? ' checked' : '') + '>' : (x.invested && !v ? '<span class="chip ok">+' + investBonus() + ' ' + esc(l.ability || '') + '</span>' : '')) + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="muted sh-small">Investidos: ' + invested + ' (normalmente 4, escolhidos no início de cada turno). Cargo investido: +' + investBonus() + ' de status nos testes do seu atributo (não soma com outro cargo do mesmo atributo). Cargo sem ocupante = vago.</p>';
    h += box('<a class="xref" data-open="rule:leadership-roles">Liderança</a>', ld, 'sh-wide');

    // Perícias
    var sk = '<table class="sh-table sh-skills"><thead><tr><th>Perícia</th><th>Atributo</th><th>Proficiência</th><th>Total</th><th>Composição</th></tr></thead><tbody>' +
      skills().map(function (k) {
        var t = skillTotal(k);
        return '<tr><td><a class="xref" data-open="skill:' + attr(k.id) + '">' + esc(k.name) + '</a> <span class="muted">' + esc(U.SKILL_PT[k.id] || k.namePt || '') + '</span></td>' +
          '<td>' + esc(k.ability || '') + '</td>' +
          '<td>' + fSel('skills.' + k.id, U.RANK_PT.map(function (r, i) { return [String(i), r]; }), String(t.rank), t.rank ? '<span class="chip ok">' + U.RANK_PT[t.rank] + '</span>' : '<span class="muted">' + U.RANK_PT[0] + '</span>') + '</td>' +
          '<td class="num"><b class="sh-total">' + signed(t.total) + '</b></td>' +
          '<td class="sh-small">' + esc(t.parts.map(partText).join(' ')) + (t.ignored.length ? '<span class="muted" title="Bônus/penalidades do mesmo tipo não se somam"> · não somam: ' + esc(t.ignored.map(partText).join(', ')) + '</span>' : '') + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="muted sh-small">Teste: d20 + total contra a CD de Controle (' + cdc.total + ') ou a CD da atividade. Bônus de item das estruturas valem por atividade e aparecem na própria atividade.</p>';
    h += box('Perícias', sk, 'sh-wide');

    // Ajustes do mestre
    var scopes = [['all', 'Todos os testes']].concat(ABILS.map(function (a) { return ['ability:' + a[0], 'Testes de ' + a[1]]; }))
      .concat(skills().map(function (k) { return ['skill:' + k.id, k.name]; }));
    var mods = s.modifiers.length ? '<table class="sh-table"><thead><tr><th>Tipo</th><th>Valor</th><th>Alcance</th><th>Motivo</th>' + (GM ? '<th></th>' : '') + '</tr></thead><tbody>' +
      s.modifiers.map(function (m, i) {
        var p = 'modifiers.' + i + '.';
        return '<tr><td>' + fSel(p + 'type', MOD_TYPES, m.type) + '</td><td>' + (GM ? fNum(p + 'value', m.value) : '<b>' + signed(m.value) + '</b>') + '</td><td>' + fSel(p + 'scope', scopes, m.scope) + '</td>' +
          '<td>' + fTxt(p + 'note', m.note, 'evento, situação…') + '</td>' + (GM ? '<td><button type="button" class="btn btn-sm" data-fi-rm="modifiers.' + i + '" title="Remover">✕</button></td>' : '') + '</tr>';
      }).join('') + '</tbody></table>' : '<p class="muted">Nenhum bônus ou penalidade extra.</p>';
    if (GM) mods += '<button type="button" class="btn btn-sm" data-fi-add="modifiers">+ bônus/penalidade</button>';
    h += box('Bônus e penalidades extras', mods + '<p class="muted sh-small">Por evento, talento, situação… Do mesmo tipo, vale só o maior bônus e a pior penalidade; "sem tipo" sempre soma.</p>', 'sh-wide');

    // Talentos
    var ft = s.feats.length ? '<ul class="sh-list">' + s.feats.map(function (id, i) {
      var f = A.resolve('feat', id);
      return '<li>' + link('feat', id) + (f && f.level != null ? ' <span class="muted">Nv ' + esc(f.level) + '</span>' : '') +
        (GM ? ' <button type="button" class="btn btn-sm" data-fi-rm="feats.' + i + '" title="Remover">✕</button>' : '') + '</li>';
    }).join('') + '</ul>' : '<p class="muted">Nenhum talento.</p>';
    if (GM) ft += '<div class="sh-add"><select class="fi" id="fi-feat">' + entityOpts('feat').map(function (o) { return '<option value="' + attr(o[0]) + '">' + esc(o[0] ? o[1] : '— escolha um talento —') + '</option>'; }).join('') + '</select> <button type="button" class="btn btn-sm" data-fi-add="feats">+ talento</button></div>';
    h += box('<a class="xref" data-open="rule:kingdom-feats">Talentos</a>', ft, 'sh-feats');

    // Notas
    h += box('Notas', GM ? '<textarea class="fi fi-area" data-f="notes" data-t="text" rows="5" placeholder="Anotações livres (aceita **negrito**, listas com -, [[tipo:id|links]])">' + esc(s.notes) + '</textarea>' : (s.notes ? U.rich(s.notes) : '<p class="muted">—</p>'), 'sh-notes');

    h += '</div>';
    return h;
  }

  /* ---------- edição ---------- */
  function walk(path) {
    var p = path.split('.'), o = s;
    for (var i = 0; i < p.length - 1; i++) { o = o[p[i]]; if (o == null) return null; }
    return { o: o, k: p[p.length - 1] };
  }
  function save() {
    if (JSON.stringify(s) === JSON.stringify(published)) { try { localStorage.removeItem(DRAFT_KEY); } catch (x) { /* ignore */ } }
    else U.store(DRAFT_KEY, s);
  }
  var pendingRender = null;
  function rerender() {
    if (pendingRender) return;
    pendingRender = setTimeout(function () {
      pendingRender = null;
      var v = document.getElementById('view');
      if (!v || v.dataset.tab !== 'reino') return;
      var ae = document.activeElement, key = ae && ae.getAttribute ? ae.getAttribute('data-f') : null;
      v.innerHTML = view();
      if (key) { var el = v.querySelector('[data-f="' + key + '"]'); if (el) el.focus(); }
    }, 0);
  }
  function setField(el) {
    var w = walk(el.getAttribute('data-f'));
    if (!w) return;
    var t = el.getAttribute('data-t');
    if (t === 'bool') w.o[w.k] = el.checked;
    else if (t === 'num') w.o[w.k] = el.value === '' ? 0 : num(el.value, 0);
    else if (/^skills\./.test(el.getAttribute('data-f'))) w.o[w.k] = num(el.value, 0);
    else w.o[w.k] = el.value;
    if (/^settlements\.\d+\.type$/.test(el.getAttribute('data-f'))) w.o.consumption = settlementType(el.value)[3];
    save();
  }
  function roll() {
    var rd = resourceDice(), rolls = [], buf = new Uint32Array(Math.max(1, rd.n));
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(buf);
    for (var i = 0; i < rd.n; i++) rolls.push(1 + ((window.crypto && window.crypto.getRandomValues ? buf[i] : Math.floor(Math.random() * 4294967296)) % rd.die));
    lastRoll = { dice: rd.n + 'd' + rd.die, rolls: rolls, total: rolls.reduce(function (t, x) { return t + x; }, 0) };
    rerender();
  }

  // Mensagem do commit: campos alterados (valor antigo → novo)
  function flat(o, pre, out) {
    Object.keys(o || {}).forEach(function (k) {
      var v = o[k], p = pre ? pre + '.' + k : k;
      if (v && typeof v === 'object') flat(v, p, out); else out[p] = v;
    });
    return out;
  }
  function changes() {
    var a = flat(published, '', {}), b = flat(s, '', {}), out = [];
    Object.keys(b).forEach(function (k) { if (a[k] !== b[k]) out.push(k + (typeof b[k] === 'number' && typeof a[k] === 'number' ? ' ' + a[k] + '→' + b[k] : '')); });
    Object.keys(a).forEach(function (k) { if (!(k in b)) out.push('−' + k); });
    return out;
  }
  function publish() {
    var G = window.KMGitHub, list = changes();
    if (!G) return;
    if (!list.length) { G.toast('Nada para publicar: a ficha é igual à publicada.'); return; }
    G.publish([{
      file: 'reino.js', varName: 'reino', text: fileText(s), data: U.clone(s), base: A.reino.file, draftKey: DRAFT_KEY,
      message: 'Ficha do reino: ' + list.slice(0, 10).join(', ') + (list.length > 10 ? ' e mais ' + (list.length - 10) : '')
    }], { back: null });
  }

  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (!GM || !t.closest || !t.closest('.sheet') || !t.hasAttribute('data-f')) return;
    setField(t);
    rerender();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (!GM || !t.closest || !t.closest('.sheet') || !t.hasAttribute('data-f') || t.getAttribute('data-t') !== 'text') return;
    setField(t);
  });
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest && ev.target.closest('[data-fi-roll],[data-fi-apply-roll],[data-fi-add],[data-fi-rm],[data-fi-publish],[data-fi-download],[data-fi-discard]');
    if (!t) return;
    ev.preventDefault();
    var d = t.dataset;
    if ('fiRoll' in d) { roll(); return; }
    if (!GM) return;
    if ('fiApplyRoll' in d && lastRoll) { s.rp = lastRoll.total; save(); }
    else if ('fiAdd' in d) {
      if (d.fiAdd === 'modifiers') s.modifiers.push({ type: 'circumstance', value: 1, scope: 'all', note: '' });
      else if (d.fiAdd === 'settlements') s.settlements.push({ name: '', type: 'village', consumption: 1, notes: '' });
      else if (d.fiAdd === 'feats') {
        var sel = document.getElementById('fi-feat');
        if (!sel || !sel.value || s.feats.indexOf(sel.value) >= 0) return;
        s.feats.push(sel.value);
      }
      save();
    } else if ('fiRm' in d) {
      var p = d.fiRm.split('.');
      s[p[0]].splice(+p[1], 1);
      save();
    } else if ('fiPublish' in d) { publish(); return; }
    else if ('fiDownload' in d) { if (window.KMGitHub) window.KMGitHub.download('reino.js', fileText(s)); return; }
    else if ('fiDiscard' in d) {
      if (!confirm('Descartar o rascunho da ficha e voltar à versão publicada?')) return;
      try { localStorage.removeItem(DRAFT_KEY); } catch (x) { /* ignore */ }
      location.reload(); return;
    }
    rerender();
  });

  // Verificação (index.html?check): referências da ficha que não existem nos dados
  function check() {
    var p = [];
    [['charter', s.charter], ['heartland', s.heartland], ['government', s.government]].forEach(function (x) { if (x[1] && !A.resolve(x[0], x[1])) p.push(x[0] + ':' + x[1]); });
    s.feats.forEach(function (id) { if (!A.resolve('feat', id)) p.push('feat:' + id); });
    var raw = A.reino.current || {};
    Object.keys(raw.skills || {}).forEach(function (k) { if (!A.resolve('skill', k)) p.push('skill:' + k); });
    Object.keys(raw.leaders || {}).forEach(function (k) { if (!A.resolve('leader', k)) p.push('leader:' + k); });
    s.modifiers.forEach(function (m) {
      var sc = String(m.scope);
      if (sc !== 'all' && !/^ability:(culture|economy|loyalty|stability)$/.test(sc) && !(/^skill:/.test(sc) && A.resolve('skill', sc.slice(6)))) p.push('scope:' + sc);
    });
    return p;
  }

  window.KMFicha = {
    view: view, bind: function () { }, check: check, blank: blank, fileText: fileText, normalize: normalize,
    skillTotal: skillTotal, controlDC: controlDC, DRAFT_KEY: DRAFT_KEY, changed: changed
  };
})();
