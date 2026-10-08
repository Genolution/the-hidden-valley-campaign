window.KM = window.KM || {};
KM.activities = [
{
  "id": "abandon-hex",
  "name": "Abandon Hex",
  "namePt": "Abandonar Hex",
  "summary": "Renuncia a um ou mais hexes controlados, reduzindo o Tamanho do reino. No sucesso crítico rende 1 RP por hex; nos demais resultados gera Agitação (dobrada se houver assentamento).",
  "tags": ["downtime", "region"],
  "general": true,
  "step": "region",
  "skills": [
    {"skill": "Exploration", "proficiency": "untrained"},
    {"skill": "Wilderness", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle +1 por hex adicional",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Exploration ou Wilderness (destreinado)", "CD": "CD de Controle +1 por hex adicional", "Página": "22"},
  "requirements": "The hex to be abandoned must be controlled.",
  "text": "After careful consideration, you decide that you would rather not hold onto a particular hex as part of your claimed territory. You renounce your claim to it and pull back any settlers or explorers. Attempt a basic Exploration or Wilderness check. You can abandon more than one hex at a time, but each additional hex you abandon increases the DC of this check by 1.",
  "outcomes": {
    "criticalSuccess": "You abandon the hex or hexes, decreasing your kingdom’s Size by 1 per hex abandoned (this affects all statistics determined by Size; see [[rule:kingdom-size|Kingdom Size]]). Settlers and explorers return and resettle elsewhere in your kingdom, bringing with them bits of salvage from the abandoned hexes. Gain 1 RP per abandoned hex.",
    "success": "As critical success, but you gain no RP and increase Unrest by 1.",
    "failure": "You abandon the hex or hexes, decreasing your kingdom’s Size by 1 per hex abandoned (this affects all statistics determined by Size; see [[rule:kingdom-size|Kingdom Size]]). Some citizens become disgruntled refugees who refuse to leave the hex. Increase Unrest by 2 and then attempt a DC 6 flat check. If you fail, the refugees become bandits, and during your next Event phase, your kingdom experiences a Squatters kingdom event automatically in addition to any other event that might occur.",
    "criticalFailure": "As failure, but increase Unrest by 3 and automatically experience a Bandit Activity kingdom event instead of a Squatters event."
  },
  "quick": {
    "criticalSuccess": "Hex(es) abandonado(s); Tamanho −1 por hex; +1 RP por hex",
    "success": "Hex(es) abandonado(s); +1 Agitação",
    "failure": "Abandonado(s); +2 Agitação; teste plano CD 6 ou evento Squatters",
    "criticalFailure": "Abandonado(s); +3 Agitação; evento Bandit Activity automático"
  },
  "special": "The Unrest gained from abandoning a hex doubles if it includes a settlement. A settlement in an abandoned hex becomes a Freehold.",
  "page": 22
},
{
  "id": "build-structure",
  "name": "Build Structure",
  "namePt": "Construir Estrutura",
  "summary": "Constrói (ou repara) uma estrutura no assentamento que concede a atividade Cívica, pagando RP e Mercadorias da estrutura. Sucesso crítico devolve metade das Mercadorias; falha crítica deixa Escombros nos lotes.",
  "tags": ["civic", "downtime"],
  "general": true,
  "step": "civic",
  "skills": [
    {"skill": "Any", "proficiency": "untrained", "note": "Uses the skill check (and any proficiency requirement) listed in the structure’s entry"}
  ],
  "dc": "CD indicada na estrutura (reparo: +2 de item)",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 3: Cívica", "Perícias": "A indicada na estrutura", "CD": "A da estrutura", "Custo": "RP e Mercadorias da estrutura (metade para reparar)", "Página": "22"},
  "text": "You attempt to build a structure in the settlement that’s granting the Civic activity. You may choose any structure for which you meet the requirements. Select the appropriate number of contiguous buildable lots in a single block as specified by the structure’s entry and spend the specified RP and Commodity cost. Then attempt the structure’s skill check.\n\nYou can also use this activity to attempt to repair a structure that was damaged as the result of an event but hasn’t been replaced by Rubble. To do this, first spend half the structure’s listed RP and Commodity cost, and then attempt the specified check. The existing structure gives you a +2 item bonus to the check.\n\nOn a success, record the new construction on the [[rule:urban-grid|Urban Grid]]. Unless the structure’s entry states otherwise, its effects are immediate; if the structure adjusts a Ruin’s point total, adjust it upon construction.",
  "outcomes": {
    "criticalSuccess": "You construct or repair the structure with great efficiency and get back half of the Commodities spent in construction or repair.",
    "success": "You construct or repair the structure.",
    "failure": "You fail to construct or repair the structure. You can try to complete it next Kingdom turn; if you do so, you do not need to re-pay the RP and Commodity cost.",
    "criticalFailure": "You fail to construct the structure; if you were attempting to repair a damaged structure, it is reduced to Rubble. In either event, Rubble now fills the structure’s lots, which must be cleared with the [[activity:demolish|Demolish]] activity before you can attempt to Build a Structure in them again."
  },
  "quick": {
    "criticalSuccess": "Construída/reparada; recupera metade das Mercadorias gastas",
    "success": "Estrutura construída/reparada",
    "failure": "Não construída; pode tentar no próximo turno sem pagar de novo",
    "criticalFailure": "Falha; lotes viram Escombros (estrutura danificada é perdida)"
  },
  "page": 22
},
{
  "id": "claim-hex",
  "name": "Claim Hex",
  "namePt": "Reivindicar Hex",
  "summary": "Gasta 1 RP para adicionar um hex reconhecido e adjacente ao reino (+1 Tamanho, +10 XP de reino). No sucesso crítico, permite outra atividade de Região imediatamente.",
  "tags": ["downtime", "region"],
  "general": true,
  "step": "region",
  "skills": [
    {"skill": "Exploration", "proficiency": "untrained"},
    {"skill": "Intrigue", "proficiency": "untrained", "note": "Allowed by the activity text, though not listed under Intrigue in the page-20 table"},
    {"skill": "Magic", "proficiency": "untrained", "note": "Allowed by the activity text, though not listed under Magic in the page-20 table"},
    {"skill": "Wilderness", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": true,
  "frequency": "Once per turn at 1st level; up to twice per turn from 4th level; up to three times per turn from 9th level.",
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Exploration, Intrigue, Magic ou Wilderness (destreinado)", "CD": "CD de Controle", "Custo": "1 RP", "Limite": "1/turno (2 no nível 4, 3 no nível 9)", "Página": "23"},
  "requirements": "You have Reconnoitered the hex to be claimed during hexploration. This hex must be adjacent to at least one hex that’s already part of your kingdom. If the hex to be claimed contains dangerous hazards or monsters, they must first be cleared out—either via standard adventuring or the [[activity:clear-hex|Clear Hex]] activity.",
  "text": "Your surveyors fully explore the hex and attempt to add it into your kingdom’s domain. Spend 1 RP and then attempt a basic Exploration, Intrigue, Magic, or Wilderness check.",
  "outcomes": {
    "criticalSuccess": "You claim the hex and immediately add it to your territory, increasing your kingdom’s Size by 1 (this affects all statistics determined by Size; see [[rule:kingdom-size|Kingdom Size]]). Your occupation of the hex goes so smoothly that you can immediately attempt another Region activity.",
    "success": "You claim the hex and add it to your territory, increasing your kingdom’s Size by 1 (this affects all statistics determined by Size; see [[rule:kingdom-size|Kingdom Size]]).",
    "failure": "You fail to claim the hex.",
    "criticalFailure": "You fail to claim the hex, and a number of early settlers and explorers are lost, causing you to take a –1 circumstance penalty to Stability-based checks until the end of your next Kingdom turn."
  },
  "quick": {
    "criticalSuccess": "Hex reivindicado (+1 Tamanho); outra atividade de Região imediata",
    "success": "Hex reivindicado; +1 Tamanho",
    "failure": "Não reivindica",
    "criticalFailure": "Não reivindica; −1 em testes de Stability até o fim do próximo turno"
  },
  "special": "At 1st level, when selecting the three activities you take during the Region Activities step of the Activity phase of the Kingdom turn, you may select this activity no more than once. Once your kingdom reaches 4th level, you may select it up to twice per turn, and after reaching 9th level you may select it up to three times per turn.\n\nWhen you successfully claim a hex, gain 10 [[rule:kingdom-xp|kingdom XP]]. Many hexes have terrain features that grant benefits to your kingdom when claimed; see [[rule:terrain-features|Terrain Features]].",
  "page": 23
},
{
  "id": "clear-hex",
  "name": "Clear Hex",
  "namePt": "Limpar Hex",
  "summary": "Prepara um hex para assentamento ou remove melhoria (Engineering, custo em RP pelo terreno) ou elimina perigo/encontro (Exploration, CD pelo nível). Sucesso crítico devolve metade do RP e pode render 2 Luxos.",
  "tags": ["downtime", "region"],
  "general": true,
  "step": "region",
  "skills": [
    {"skill": "Engineering", "proficiency": "untrained", "note": "To prepare a hex for a settlement or demolish an improvement (costs RP by terrain)"},
    {"skill": "Exploration", "proficiency": "untrained", "note": "To remove a hazard or encounter (DC by level of the highest creature/hazard)"}
  ],
  "dc": "CD de Controle (Engineering) ou CD por nível da criatura/perigo (Exploration); +2 se o hex não for do reino",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Engineering ou Exploration (destreinado)", "CD": "CD de Controle ou CD por nível; +2 fora do reino", "Custo": "RP por terreno (só Engineering)", "Página": "23"},
  "text": "Engineers and mercenaries attempt to prepare a hex to serve as the site for a settlement, or they work to remove an existing improvement, a dangerous hazard, or an encounter.\n\nIf you’re trying to prepare a hex for a settlement or demolish an improvement you previously built (or that was already present in the hex), spend RP as determined by the hex’s most inhospitable terrain feature (see Building on Rough Terrain below). Then attempt a basic Engineering check.\n\nIf you’re trying to remove a hazard or encounter, instead attempt an Exploration check. The DC of this check is set by the highest level creature or hazard in the hex (as set by Table 10–5: DCs by Level, on page 503 of the *Pathfinder Core Rulebook*).\n\nIf the hex you’re attempting to Clear has existing Ruins or an existing Structure, your action doesn’t physically remove the buildings from the area and you can later incorporate these buildings (or repair ruined ones) into a Settlement you build here later. Regardless of the skill used, increase the basic DC by 2 if the hex to be cleared is not yet part of your kingdom.\n\n### Building on Rough Terrain\n\nCertain Region activities ([[activity:clear-hex|Clear Hex]], [[activity:fortify-hex|Fortify Hex]], [[activity:build-roads|Build Roads]], [[activity:establish-work-site|Establish Work Site]], [[activity:irrigation|Irrigation]]) require the PCs to spend an amount of RP determined by the most inhospitable terrain feature contained within the hex. Use the highest RP cost given for the hex’s terrain types in the list below (so if the hex contains swamps and forests, use the cost for swamps).\n\n| Terrain | Cost |\n|---|---|\n| Mountains | 12 RP |\n| Swamps | 8 RP |\n| Forests | 4 RP |\n| Hills | 2 RP |\n| Plains | 1 RP |",
  "outcomes": {
    "criticalSuccess": "You successfully clear the hex. If you spent RP to attempt this activity, you’re refunded half of the RP cost. If you were removing dangerous creatures (but not hazards) from the hex, your explorers and mercenaries recover 2 Luxury Commodities as treasure.",
    "success": "You successfully clear the hex.",
    "failure": "You fail to clear the hex.",
    "criticalFailure": "You catastrophically fail to clear the hex and several workers lose their lives. Gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "Hex limpo; metade do RP devolvida; +2 Luxos se removeu criaturas",
    "success": "Hex limpo",
    "failure": "Hex não limpo",
    "criticalFailure": "Hex não limpo; +1 Agitação"
  },
  "page": 23
},
{
  "id": "establish-settlement",
  "name": "Establish Settlement",
  "namePt": "Fundar Assentamento",
  "summary": "Funda uma nova vila num hex já limpo. O custo depende do resultado: 1d6 RP (crítico), 3d6 (sucesso) ou 6d6 (falha); se não puder pagar, conta como falha crítica.",
  "tags": ["downtime", "region"],
  "general": true,
  "step": "region",
  "skills": [
    {"skill": "Engineering", "proficiency": "untrained"},
    {"skill": "Industry", "proficiency": "untrained"},
    {"skill": "Politics", "proficiency": "untrained"},
    {"skill": "Scholarship", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Engineering, Industry, Politics ou Scholarship (destreinado)", "CD": "CD de Controle", "Custo": "1d6 / 3d6 / 6d6 RP conforme o resultado", "Página": "24"},
  "requirements": "The hex in which you’re establishing the settlement has been Cleared and doesn’t currently have a settlement (including a Freehold) in it.",
  "text": "You draw up plans, gather resources, entice citizens, and establish boundaries to found a brand new settlement in the hex. Attempt a basic Engineering, Industry, Politics, or Scholarship check. If you cannot pay the RP required by the result of this check, treat your result as a critical failure. A settlement always starts as a village. See [[rule:settlement-types|Settlements]] for further details about building settlements.",
  "outcomes": {
    "criticalSuccess": "You establish the settlement largely with the aid of enthusiastic volunteers. Spend 1d6 RP.",
    "success": "You establish the settlement. Spend 3d6 RP.",
    "failure": "You establish the settlement, but inefficiently and at great expense. Spend 6d6 RP.",
    "criticalFailure": "You fail to establish the settlement."
  },
  "quick": {
    "criticalSuccess": "Vila fundada; gasta 1d6 RP",
    "success": "Vila fundada; gasta 3d6 RP",
    "failure": "Vila fundada; gasta 6d6 RP",
    "criticalFailure": "Não funda o assentamento"
  },
  "page": 24
},
{
  "id": "establish-trade-agreement",
  "name": "Establish Trade Agreement",
  "namePt": "Estabelecer Acordo Comercial",
  "summary": "Cria um acordo comercial com um grupo com quem você tem relações diplomáticas (base para Gerenciar Acordos Comerciais). Crítico rende 2 Dados de Recurso em RP; falha exige pagar 2 Dados de Recurso em RP.",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Boating", "proficiency": "untrained", "note": "Only if a navigable river connects your kingdom with the other group’s territory"},
    {"skill": "Magic", "proficiency": "master", "note": "Only if your kingdom’s proficiency rank in Magic is master or higher"},
    {"skill": "Trade", "proficiency": "untrained"}
  ],
  "dc": "Maior entre a CD de Negociação do grupo e a CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Trade; Boating (rio navegável); Magic (mestre)", "CD": "Maior entre CD de Negociação e CD de Controle", "Página": "24"},
  "requirements": "You have diplomatic relations with the group you wish to establish an agreement with.",
  "text": "You send a band of merchants out to establish a trade agreement between your kingdom and a group with whom you’ve established diplomatic relations. If a navigable river connects your kingdom with the other group’s territory, you can attempt a Boating check to Establish the Trade Agreement. If your kingdom’s proficiency rank in Magic is Master or higher, you can attempt a Magic check. Otherwise, attempt a Trade check.\n\nThe check’s DC is either the group’s Negotiation DC (see below) or your kingdom’s Control DC, whichever is higher.\n\n### Negotiation DCs\n\nCertain Leadership activities ([[activity:establish-trade-agreement|Establish Trade Agreement]], [[activity:pledge-of-fealty|Pledge of Fealty]], [[activity:request-foreign-aid|Request Foreign Aid]], [[activity:send-diplomatic-envoy|Send Diplomatic Envoy]]) allow a kingdom to attempt checks to negotiate with other groups. Your GM has a list of all the DCs for these checks for groups you are likely to encounter.",
  "outcomes": {
    "criticalSuccess": "You successfully establish a trade agreement with your target, and your merchants return with gifts! Immediately roll 2 Resource Dice, then gain RP equal to the result of roll.",
    "success": "You successfully establish a trade agreement.",
    "failure": "Your traders reach their destination but need to sweeten the deal to secure the trade agreement. Immediately roll 2 Resource Dice, and then spend RP equal to the result of this roll. If you do so, you successfully establish a trade agreement, otherwise the attempt fails.",
    "criticalFailure": "Your trade agreement is a total loss and your traders do not return. Gain 1 Unrest, and until the end of the next Kingdom turn, take a –1 circumstance penalty to all Economy-related checks."
  },
  "quick": {
    "criticalSuccess": "Acordo firmado; ganha RP = 2 Dados de Recurso",
    "success": "Acordo comercial firmado",
    "failure": "Paga RP = 2 Dados de Recurso para firmar; senão falha",
    "criticalFailure": "Sem acordo; +1 Agitação; −1 em Economy até o fim do próximo turno"
  },
  "page": 24
},
{
  "id": "focused-attention",
  "name": "Focused Attention",
  "namePt": "Atenção Focada",
  "summary": "Um líder usa sua atividade para ajudar outro: teste CD 20 em qualquer perícia; no sucesso, o outro líder recebe +2 de circunstância num teste dessa perícia neste turno (+3 com Cooperative Leadership).",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Any", "proficiency": "untrained", "note": "Any Kingdom skill; the bonus applies to a check with the same skill"}
  ],
  "dc": "CD 20",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Qualquer", "CD": "20", "Página": "24"},
  "text": "You set aside time to focus attention on aiding another leader in an activity. Choose another leader and a Kingdom skill, then attempt a DC 20 check using the chosen skill. On a success, you grant that leader a +2 circumstance bonus to one kingdom check using that skill, provided that leader attempts the skill check during the same Kingdom turn.\n\nThe [[feat:cooperative-leadership|Cooperative Leadership]] Kingdom feat increases the efficiency of this activity.",
  "quick": {
    "success": "Outro líder ganha +2 de circunstância num teste dessa perícia neste turno",
    "failure": "Sem bônus"
  },
  "page": 24
},
{
  "id": "new-leadership",
  "name": "New Leadership",
  "namePt": "Nova Liderança",
  "summary": "Nomeia um personagem para um papel de liderança (ou troca os 4 papéis investidos) no início do turno, ou imediatamente se um líder for perdido. Cada perícia dá +2 para dois papéis; nomear Governante tem −4 e gera +1 Agitação salvo crítico.",
  "tags": ["downtime"],
  "general": true,
  "step": "upkeep-leadership",
  "skills": [
    {"skill": "Intrigue", "proficiency": "untrained", "note": "+2 circumstance bonus to assign Emissaries and Treasurers"},
    {"skill": "Politics", "proficiency": "untrained", "note": "+2 circumstance bonus to assign Counselors and Rulers"},
    {"skill": "Statecraft", "proficiency": "untrained", "note": "+2 circumstance bonus to assign Magisters and Viceroys"},
    {"skill": "Warfare", "proficiency": "untrained", "note": "+2 circumstance bonus to assign Generals and Wardens"}
  ],
  "dc": "CD de Controle (−4 para nomear Governante)",
  "oncePerTurn": false,
  "frequency": "Normally at the start of a Kingdom turn (Upkeep phase); may also be used immediately, even outside a Kingdom turn, when a leader is unexpectedly removed.",
  "stats": {"Etapa": "Manutenção 1: Atribuir Liderança", "Perícias": "Intrigue, Politics, Statecraft ou Warfare (destreinado)", "CD": "CD de Controle", "Página": "24"},
  "text": "You announce the promotion of a character into a leadership role, whether they’re a newly appointed leader or just shifting from one leadership role to another.\n\nYou normally perform this activity at the start of a Kingdom turn, but if unexpected events (such as the death of the character) remove a leader from a leadership role, you may immediately use the New Leadership activity to attempt to assign a new leader to that role, even outside of a Kingdom turn (applying the [[rule:vacancy-penalty|vacancy penalty]] for that role as appropriate). Attempt a basic Intrigue, Politics, Statecraft, or Warfare skill check—while any of these skills can be used, each skill is particularly suited to assigning two specific leadership roles.\n\n- **Intrigue:** Grants a +2 circumstance bonus to checks to assign Emissaries and Treasurers.\n- **Politics:** Grants a +2 circumstance bonus to checks to assign Counselors and Rulers.\n- **Statecraft:** Grants a +2 circumstance bonus to checks to assign Magisters and Viceroys.\n- **Warfare:** Grants a +2 circumstance bonus to checks to assign Generals and Wardens.\n\nRulers are particularly difficult to assign; when you take this activity to assign a new Ruler, you take a –4 circumstance penalty to the skill check, and unless you achieve a critical success, you gain 1 additional Unrest.\n\nWhether or not you are simultaneously assigning a leader, you may also use this activity to attempt to reselect the four leadership roles that you have invested. Any result other than a critical failure allows this.",
  "outcomes": {
    "criticalSuccess": "The people love the new leader. The leader immediately provides the benefits tied to occupying the new role and gains a +1 circumstance bonus to all Kingdom skill checks they attempt before the end of the next Kingdom turn.",
    "success": "The people accept the new leader. The leader immediately provides the benefits tied to occupying the new role.",
    "failure": "The people are unsure about the new leader. The leader takes a –1 circumstance penalty to all checks they attempt as part of their activities during the Activity phase of each Kingdom turn. At the end of the next Kingdom turn, the leader can attempt any Loyalty‑based basic skill check to ingratiate themselves with the populace. The leader may attempt this check at the end of each Kingdom turn until they succeed. Success removes this penalty, but a critical failure results in the development detailed in Critical Failure below.",
    "criticalFailure": "The people reject the new leader. The leadership role is treated as vacant and you must attempt to reassign it using the New Leadership activity at the start of the next Kingdom turn. Unrest increases by 1."
  },
  "quick": {
    "criticalSuccess": "Líder aceito; +1 em todos os testes dele até o fim do próximo turno",
    "success": "Líder aceito; benefícios do papel imediatos",
    "failure": "Líder com −1 nas atividades até passar num teste de Loyalty no fim do turno",
    "criticalFailure": "Rejeitado; papel vago; +1 Agitação; tentar de novo no próximo turno"
  },
  "page": 24
},
{
  "id": "pledge-of-fealty",
  "name": "Pledge of Fealty",
  "namePt": "Juramento de Lealdade",
  "summary": "Oferece a um grupo independente (freeholders, refugiados etc.) um lugar no reino em troca de lealdade, ganhando a vantagem específica do grupo. No crítico também reivindica o hex do grupo (+10 XP).",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Intrigue", "proficiency": "trained"},
    {"skill": "Statecraft", "proficiency": "trained"},
    {"skill": "Warfare", "proficiency": "trained"}
  ],
  "dc": "CD de Negociação do grupo",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Intrigue, Statecraft ou Warfare (treinado)", "CD": "CD de Negociação do grupo", "Página": "25"},
  "text": "When your representatives encounter freeholders, refugees, independent groups, or other bands of individuals gathered in the wilderness who aren’t already part of a nation, you can offer them a place in your kingdom, granting them the benefits of protection, security, and prosperity in exchange for their fealty. The benefits granted to your kingdom can vary wildly, but often manifest as one-time boons to your commodities or unique bonuses against certain types of events.\n\nThe adventure text in this campaign offers numerous examples of groups who could accept a Pledge of Fealty.\n\nYou can attempt this skill check with Intrigue, Statecraft, or Warfare; however, certain groups will respond better (or worse) to specific skills. The DC is the group’s Negotiation DC (see the Negotiation DCs sidebar under [[activity:establish-trade-agreement|Establish Trade Agreement]]).",
  "outcomes": {
    "criticalSuccess": "The group becomes part of your kingdom, granting the specific boon or advantage listed in that group’s entry. If you haven’t already claimed the hex in which the group dwells, you immediately do so, gaining 10 [[rule:kingdom-xp|kingdom XP]] and increasing your kingdom’s Size by 1 (this affects all statistics determined by Size; see [[rule:kingdom-size|Kingdom Size]]). If the hex doesn’t share a border with your kingdom, it becomes a secondary territory and checks involving this location take a Control penalty.",
    "success": "As success, but you don’t claim the hex the group is in. Immediately roll 1 Resource Die. You must spend RP equal to the result to integrate the group into your kingdom.",
    "failure": "The group refuses to pledge to you at this time. You can attempt to get them to Pledge Fealty next turn. Increase Unrest by 1.",
    "criticalFailure": "The group refuses to pledge to you—furthermore, it will never Pledge Fealty to your kingdom, barring significant in-play changes or actions by the PCs (subject to the GM’s approval). The group’s potentially violent rebuff of your offer increases Unrest by 2 and increases a Ruin of your choice by 1."
  },
  "quick": {
    "criticalSuccess": "Grupo se junta (vantagem dele); reivindica o hex; +10 XP; +1 Tamanho",
    "success": "Grupo se junta; paga RP = 1 Dado de Recurso; não reivindica o hex",
    "failure": "Recusa por ora; +1 Agitação",
    "criticalFailure": "Recusa para sempre; +2 Agitação; +1 numa Ruína"
  },
  "page": 25
},
{
  "id": "quell-unrest",
  "name": "Quell Unrest",
  "namePt": "Acalmar Agitação",
  "summary": "Reduz a Agitação em 1 (1d6 no crítico). Só uma vez por turno e não pode repetir a mesma perícia em turnos consecutivos.",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Arts", "proficiency": "untrained"},
    {"skill": "Folklore", "proficiency": "untrained"},
    {"skill": "Intrigue", "proficiency": "untrained"},
    {"skill": "Magic", "proficiency": "untrained"},
    {"skill": "Politics", "proficiency": "untrained"},
    {"skill": "Warfare", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": true,
  "frequency": "Once per Kingdom turn; you can never use the same skill for this activity in consecutive Kingdom turns.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Arts, Folklore, Intrigue, Magic, Politics ou Warfare (destreinado)", "CD": "CD de Controle", "Limite": "1/turno; perícia diferente do turno anterior", "Página": "25"},
  "text": "You send your agents among the citizenry with the charge of suppressing dissent and calming unrest.\n\nYou can attempt a basic Arts, Folklore, Intrigue, Magic, Politics, or Warfare check to Quell Unrest, but you can never use the same skill for this activity in consecutive Kingdom turns. This activity cannot be attempted more than once per Kingdom turn.",
  "outcomes": {
    "criticalSuccess": "Reduce Unrest by 1d6.",
    "success": "Reduce Unrest by 1.",
    "failure": "You fail to reduce Unrest.",
    "criticalFailure": "You not only fail to reduce Unrest, but actually incite further anger among the citizenry. Choose one of the following: increase Unrest by 1d4 or increase two Ruins of your choice by 1."
  },
  "quick": {
    "criticalSuccess": "−1d6 Agitação",
    "success": "−1 Agitação",
    "failure": "Nada",
    "criticalFailure": "+1d4 Agitação ou +1 em duas Ruínas"
  },
  "page": 25
},
{
  "id": "repair-reputation",
  "name": "Repair Reputation",
  "namePt": "Reparar Reputação",
  "summary": "Reduz uma Ruína em 1 (2 no crítico, e diminui sua penalidade em 1). A perícia depende da Ruína: Arts (Corrupção), Trade (Crime), Engineering (Decadência), Intrigue (Discórdia). CD de Controle +2.",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Arts", "proficiency": "trained", "note": "Only to reduce Corruption"},
    {"skill": "Engineering", "proficiency": "trained", "note": "Only to reduce Decay"},
    {"skill": "Intrigue", "proficiency": "trained", "note": "Only to reduce Strife"},
    {"skill": "Trade", "proficiency": "trained", "note": "Only to reduce Crime"}
  ],
  "dc": "CD de Controle + 2",
  "oncePerTurn": false,
  "frequency": "After a failure, you cannot Repair Reputation on that Ruin for 1 Kingdom turn; after a critical failure, you cannot Repair Reputation for 3 Kingdom turns.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Arts (Corruption), Trade (Crime), Engineering (Decay), Intrigue (Strife) — treinado", "CD": "CD de Controle + 2", "Página": "25"},
  "text": "When things have gotten out of hand in the kingdom and the nation’s reputation has become damaged, you can focus efforts on a campaign to reassure the citizens and bring them closer together, stamp down crime, organize repairs and maintenance of public structures, or strive to adjust poor public opinions.\n\nThe skill used to Repair Reputation depends on which [[rule:ruin|Ruin]] total you wish to reduce. If you wish to reduce your Corruption, you attempt an Arts check. If you wish to reduce your Crime, you attempt a Trade check. If you wish to reduce your Decay, you attempt an Engineering check. If you wish to reduce your Strife, you attempt an Intrigue check. In all cases, the DC is your Control DC + 2.",
  "outcomes": {
    "criticalSuccess": "You reduce the targeted Ruin by 2 and reduce its current ruin penalty by 1 to a minimum of 0.",
    "success": "You reduce the targeted Ruin by 1.",
    "failure": "You fail to reduce the targeted Ruin. You cannot attempt to Repair Reputation on this Ruin for 1 Kingdom turn.",
    "criticalFailure": "You fail to reduce the targeted Ruin in a particularly public and embarrassing way. Increase Unrest by 1d4, and you cannot attempt to Repair Reputation for 3 Kingdom turns."
  },
  "quick": {
    "criticalSuccess": "Ruína −2 e penalidade dela −1",
    "success": "Ruína −1",
    "failure": "Nada; essa Ruína bloqueada por 1 turno",
    "criticalFailure": "+1d4 Agitação; atividade bloqueada por 3 turnos"
  },
  "page": 25
},
{
  "id": "rest-and-relax",
  "name": "Rest and Relax",
  "namePt": "Descansar e Relaxar",
  "summary": "Folga para líderes e cidadãos: −1 Agitação no sucesso, e no crítico também +2 na próxima atividade de Liderança. CD +4 se usada no turno anterior.",
  "tags": ["downtime", "leadership"],
  "general": true,
  "step": "leadership",
  "skills": [
    {"skill": "Arts", "proficiency": "untrained", "note": "Entertainment or the pursuit of a hobby"},
    {"skill": "Boating", "proficiency": "untrained", "note": "Trips on the lakes and rivers of your kingdom"},
    {"skill": "Scholarship", "proficiency": "untrained", "note": "Reading or studying a topic of personal interest"},
    {"skill": "Trade", "proficiency": "untrained", "note": "Shopping or feasting"},
    {"skill": "Wilderness", "proficiency": "untrained", "note": "Relaxing in the countryside"}
  ],
  "dc": "CD de Controle (+4 se usada no turno anterior)",
  "oncePerTurn": false,
  "frequency": "If your kingdom Rested and Relaxed the previous Kingdom turn, the DC increases by 4.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Arts, Boating, Scholarship, Trade ou Wilderness (destreinado)", "CD": "CD de Controle (+4 se repetida)", "Página": "26"},
  "text": "Working non-stop can burn out even the most devoted and dedicated individual. As such, it’s important to take time for yourself, and thus set a good example for the nation.\n\nYou take time to relax, and you extend the chance to unwind to your citizens as well. The Kingdom skill you use to determine the effectiveness of your time off depends on how you want to spend it: Use a basic Arts check to spend the time engaged in entertainment or the pursuit of a hobby. Use a basic Boating check to enjoy trips on the lakes and rivers of your kingdom. Use a basic Scholarship check to spend the time reading or studying a topic of personal interest beyond your daily duties. Use a basic Trade check to spend your time shopping or feasting. Use a basic Wilderness check to get away from the bustle and relax in the countryside.\n\nIf your kingdom Rested and Relaxed the previous Kingdom turn, the DC increases by 4, as your kingdom’s production and output hasn’t had a chance to catch up to all those vacation days.",
  "outcomes": {
    "criticalSuccess": "The citizens enjoy the time off and are ready to get back to work. Reduce Unrest by 1, and the next Leadership activity you take gains a +2 circumstance bonus.",
    "success": "The time spent relaxing has calmed nerves; reduce Unrest by 1.",
    "failure": "The rest is welcome, but not particularly beneficial in the long term.",
    "criticalFailure": "The time is wasted, and when you get back to work, you have to spend extra time catching up. Take a –2 circumstance penalty to your next skill check made as a Leadership activity."
  },
  "quick": {
    "criticalSuccess": "−1 Agitação; +2 na próxima atividade de Liderança",
    "success": "−1 Agitação",
    "failure": "Nada",
    "criticalFailure": "−2 no próximo teste de atividade de Liderança"
  },
  "page": 26
},
{
  "id": "establish-farmland",
  "name": "Establish Farmland",
  "namePt": "Estabelecer Fazendas",
  "summary": "Transforma um hex de planície (1 RP, CD de Controle) ou colina (2 RP, CD de Controle +5) na influência de um assentamento em Fazenda, que produz Comida. No crítico, cria duas fazendas adjacentes.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Agriculture", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle (planície) ou CD de Controle + 5 (colinas)",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Agriculture (destreinado)", "CD": "CD de Controle (planície) / +5 (colinas)", "Custo": "1 RP (planície) / 2 RP (colinas)", "Página": "26"},
  "requirements": "Plains or hills are the predominant terrain feature in the hex; the hex is in the influence of one of your settlements.",
  "text": "You plant crops and establish livestock in permanent farms, ranches, and other growing operations to create [[rule:farmland|Farmland]]. If you’re attempting to Establish Farmland in a hex that is predominantly plains, you must spend 1 RP and the check is against your Control DC. If you’re targeting a hex that is predominantly hills, you must spend 2 RP and the check is against your Control DC + 5.",
  "outcomes": {
    "criticalSuccess": "You establish two adjacent Farmland hexes instead of one. If your target hex was a hills hex, the additional hex may be a hills hex or a plains hex; otherwise, the additional hex must be a plains hex. If no appropriate hex is available, treat this result as a regular success instead.",
    "success": "You establish one Farmland hex.",
    "failure": "You fail to establish a Farmland hex.",
    "criticalFailure": "You fail to establish a Farmland hex, and your attempt potentially causes the spread of a blight. At the start of each of the next two Event phases, attempt a DC 6 flat check; on a failure, your kingdom experiences a Crop Failure event in this and all adjacent hexes."
  },
  "quick": {
    "criticalSuccess": "Duas Fazendas adjacentes",
    "success": "Uma Fazenda",
    "failure": "Nenhuma Fazenda",
    "criticalFailure": "Nenhuma; 2 testes planos CD 6 contra evento Crop Failure"
  },
  "page": 26
},
{
  "id": "harvest-crops",
  "name": "Harvest Crops",
  "namePt": "Colher Safra",
  "summary": "Coleta alimentos silvestres ou excedentes das fazendas: +1 Comida (1d4 no crítico). Falha crítica perde 1d4 Comida (ou +1 Agitação).",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Agriculture", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Agriculture (destreinado)", "CD": "CD de Controle", "Página": "26"},
  "text": "Attempt a basic check to forage for wild edibles or gather excess crops from farms.",
  "outcomes": {
    "criticalSuccess": "Gain 1d4 Food commodities.",
    "success": "Gain 1 Food commodity.",
    "failure": "Gain no Food commodities.",
    "criticalFailure": "Lose 1d4 Food commodities to spoilage; if you have no Food to lose, you instead gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "+1d4 Comida",
    "success": "+1 Comida",
    "failure": "Nada",
    "criticalFailure": "−1d4 Comida (ou +1 Agitação se não tiver)"
  },
  "page": 26
},
{
  "id": "craft-luxuries",
  "name": "Craft Luxuries",
  "namePt": "Produzir Luxos",
  "summary": "Gasta RP igual a 1 Dado de Recurso para produzir Luxos: +1 Luxo (1d4 no crítico). Falha crítica aumenta uma Ruína em 1.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Arts", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Arts (destreinado)", "CD": "CD de Controle", "Custo": "RP = 1 Dado de Recurso", "Página": "27"},
  "text": "You encourage your artisans to craft luxury goods and may even aid them in this pursuit. Roll 1 Resource Die and spend RP equal to the result. Then attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "Your artisans exceed expectations and craft extravagant goods. Gain 1d4 Luxury Commodities.",
    "success": "Your artisans produce some delightful goods. Gain 1 Luxury Commodity.",
    "failure": "Your artisans fail to produce anything noteworthy.",
    "criticalFailure": "Your artisans not only fail to produce anything noteworthy, but some took advantage of the opportunity to push their own agendas or earn more for themselves by selling to underground markets. Increase one of your Ruins by 1."
  },
  "quick": {
    "criticalSuccess": "+1d4 Luxos",
    "success": "+1 Luxo",
    "failure": "Nada",
    "criticalFailure": "Nada; +1 numa Ruína"
  },
  "page": 27
},
{
  "id": "create-a-masterpiece",
  "name": "Create a Masterpiece",
  "namePt": "Criar uma Obra-Prima",
  "summary": "Uma vez por turno, artistas criam uma obra-prima: +1 Fama/Infâmia; no crítico, +1 extra no próximo turno e RP = 2 Dados de Recurso. Falha crítica perde 1 ponto (ou +1d4 Agitação).",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Arts", "proficiency": "trained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": true,
  "frequency": "Once per Kingdom turn regardless of the number of leaders pursuing activities.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Arts (treinado)", "CD": "CD de Controle", "Limite": "1/turno", "Página": "27"},
  "text": "You encourage your kingdom’s artists to create and display a masterful work of art to bolster your kingdom’s reputation. Attempt a basic check; the result affects either Fame or Infamy (depending on the type of kingdom you’re running). Create a Masterpiece may be attempted only once per Kingdom turn regardless of the number of leaders pursuing activities.",
  "outcomes": {
    "criticalSuccess": "Gain 1 Fame or Infamy point immediately, and at the start of your next Kingdom turn, gain 1 additional Fame or Infamy point. Immediately roll 2 Resource Dice. Gain RP equal to the result.",
    "success": "Gain 1 Fame or Infamy point immediately.",
    "failure": "Your attempt to create a masterpiece fails.",
    "criticalFailure": "Not only does your attempt to create a masterpiece fail, it does so in a dramatic and humiliating way. Lose 1 Fame or Infamy point; if you have no Fame or Infamy points to lose, instead gain 1d4 Unrest."
  },
  "quick": {
    "criticalSuccess": "+1 Fama agora, +1 no próximo turno; RP = 2 Dados de Recurso",
    "success": "+1 Fama/Infâmia",
    "failure": "Nada",
    "criticalFailure": "−1 Fama/Infâmia (ou +1d4 Agitação)"
  },
  "page": 27
},
{
  "id": "go-fishing",
  "name": "Go Fishing",
  "namePt": "Pescar",
  "summary": "Pesca nos rios e lagos do reino: +1 Comida (1d4 no crítico). Exige um hex reivindicado com rio ou lago; falha crítica dá +1 Agitação.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Boating", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Boating (destreinado)", "CD": "CD de Controle", "Página": "27"},
  "requirements": "Must have at least one claimed hex that includes river or lake terrain.",
  "text": "Attempt a basic check to fish for food from the rivers and lakes in your kingdom.",
  "outcomes": {
    "criticalSuccess": "Gain 1d4 Food commodities.",
    "success": "Gain 1 Food commodity.",
    "failure": "Gain no Food commodities.",
    "criticalFailure": "You lose some fishers to tragic accidents; gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "+1d4 Comida",
    "success": "+1 Comida",
    "failure": "Nada",
    "criticalFailure": "+1 Agitação"
  },
  "page": 27
},
{
  "id": "fortify-hex",
  "name": "Fortify Hex",
  "namePt": "Fortificar Hex",
  "summary": "Constrói um forte num hex reivindicado sem assentamento (custo em RP pelo terreno): −1 Agitação, bônus em guerra e descanso seguro para os PJs. Crítico devolve metade do RP.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Defense", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Defense (destreinado)", "CD": "CD de Controle", "Custo": "RP pelo terreno (1–12)", "Página": "27"},
  "requirements": "The target hex must be claimed by your kingdom and must not have a settlement in it.",
  "text": "Your command your engineers to construct a protected encampment, such as a fort or barbican, to serve as a defensive post in the hex. Spend RP as determined by the hex’s most inhospitable terrain (see Building on Rough Terrain below). Then attempt a basic check.\n\nA fortified hex grants an additional bonus in warfare (see [[rule:warfare|Warfare]]), but also gives traveling PCs a place to rest that prevents wandering monsters from interrupting their rest.\n\n### Building on Rough Terrain\n\nCertain Region activities ([[activity:clear-hex|Clear Hex]], [[activity:fortify-hex|Fortify Hex]], [[activity:build-roads|Build Roads]], [[activity:establish-work-site|Establish Work Site]], [[activity:irrigation|Irrigation]]) require the PCs to spend an amount of RP determined by the most inhospitable terrain feature contained within the hex. Use the highest RP cost given for the hex’s terrain types in the list below (so if the hex contains swamps and forests, use the cost for swamps).\n\n| Terrain | Cost |\n|---|---|\n| Mountains | 12 RP |\n| Swamps | 8 RP |\n| Forests | 4 RP |\n| Hills | 2 RP |\n| Plains | 1 RP |",
  "outcomes": {
    "criticalSuccess": "You find a defensible position for your fortification and finish construction efficiently. Gain a refund of half the RP you spent to build in the hex, then reduce Unrest by 1.",
    "success": "You establish your fortification in the hex. Reduce Unrest by 1.",
    "failure": "You fail to fortify the hex.",
    "criticalFailure": "Your attempt ends in disaster. Not only do you fail to build a structure, but you lose several workers to an accident, banditry, a vicious monster, or some other unforeseen occurrence. Gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "Hex fortificado; metade do RP devolvida; −1 Agitação",
    "success": "Hex fortificado; −1 Agitação",
    "failure": "Não fortifica",
    "criticalFailure": "Não fortifica; +1 Agitação"
  },
  "page": 27
},
{
  "id": "provide-care",
  "name": "Provide Care",
  "namePt": "Prestar Cuidados",
  "summary": "Organiza curandeiros e cuidadores: −1 Agitação no sucesso; no crítico também −1 numa Ruína à escolha. Falha crítica dá +1 Agitação ou +1 numa Ruína.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Defense", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Defense (destreinado)", "CD": "CD de Controle", "Página": "28"},
  "text": "Attempt a basic check to organize and encourage your settlements’ healers, apothecaries, medics, and other caregivers to provide care and support for citizens in need.",
  "outcomes": {
    "criticalSuccess": "You provide unexpectedly compassionate support for the people. Reduce Unrest by 1 and reduce one Ruin of your choice by 1.",
    "success": "Your care soothes the worries and fears of the populace; reduce Unrest by 1.",
    "failure": "You don’t provide any notable care for the citizens, but at least you don’t make things worse.",
    "criticalFailure": "Your attempt to provide care backfires. Increase your Unrest or a Ruin of your choice by 1."
  },
  "quick": {
    "criticalSuccess": "−1 Agitação e −1 numa Ruína",
    "success": "−1 Agitação",
    "failure": "Nada",
    "criticalFailure": "+1 Agitação ou +1 numa Ruína"
  },
  "page": 28
},
{
  "id": "build-roads",
  "name": "Build Roads",
  "namePt": "Construir Estradas",
  "summary": "Constrói estradas num hex reivindicado (custo em RP pelo terreno; dobro se precisar de pontes), melhorando o terreno de viagem em um passo. Crítico estende a estrada a um hex adjacente.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Engineering", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Engineering (destreinado)", "CD": "CD de Controle", "Custo": "RP pelo terreno (dobro com rio = Ponte)", "Página": "28"},
  "requirements": "The hex in which you seek to build roads must be claimed by your kingdom.",
  "text": "You order your kingdom’s engineers to construct a network of robust [[rule:roads|roads]] through the hex. Travel along roads uses a terrain type one step better than the surrounding terrain; for example, roads through forest hexes—normally difficult terrain—allow travel as if it were open terrain.\n\nSpend RP as determined by the hex’s most inhospitable terrain (see Building on Rough Terrain below; if the hex includes any rivers that cross the hex from one hex side to any other, you must spend double the normal RP cost to also build bridges; this adds the [[structure:bridge|Bridge]] structure to that hex). Then attempt a basic check. Work with the GM to determine where your roads appear on the map.\n\n### Building on Rough Terrain\n\nCertain Region activities ([[activity:clear-hex|Clear Hex]], [[activity:fortify-hex|Fortify Hex]], [[activity:build-roads|Build Roads]], [[activity:establish-work-site|Establish Work Site]], [[activity:irrigation|Irrigation]]) require the PCs to spend an amount of RP determined by the most inhospitable terrain feature contained within the hex. Use the highest RP cost given for the hex’s terrain types in the list below (so if the hex contains swamps and forests, use the cost for swamps).\n\n| Terrain | Cost |\n|---|---|\n| Mountains | 12 RP |\n| Swamps | 8 RP |\n| Forests | 4 RP |\n| Hills | 2 RP |\n| Plains | 1 RP |",
  "outcomes": {
    "criticalSuccess": "You build roads into the target hex and one adjacent claimed hex that doesn’t yet have roads and whose terrain features are at least as hospitable as those of the target hex. If no adjacent hex is appropriate, treat this result as a Success instead.",
    "success": "You build roads in the hex.",
    "failure": "You fail to build roads in the hex.",
    "criticalFailure": "Your attempt to build roads ends in disaster. Not only do you fail to build roads, but you lose several workers to an accident, banditry, a vicious monster, or some other unforeseen occurrence. Gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "Estradas no hex e em um hex adjacente",
    "success": "Estradas no hex",
    "failure": "Sem estradas",
    "criticalFailure": "Sem estradas; +1 Agitação"
  },
  "page": 28
},
{
  "id": "demolish",
  "name": "Demolish",
  "namePt": "Demolir",
  "summary": "Demole um lote ocupado (ou remove Escombros) para liberar espaço. Crítico derruba uma estrutura de vários lotes de uma vez ou recupera 1d6 Mercadorias (madeira, pedra, minério).",
  "tags": ["civic", "downtime"],
  "general": false,
  "step": "civic",
  "skills": [
    {"skill": "Engineering", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 3: Cívica", "Perícias": "Engineering (destreinado)", "CD": "CD de Controle", "Página": "28"},
  "text": "Choose a single occupied lot in one of your settlements and attempt a basic check to reduce it to Rubble and then clear the Rubble away to make ready for a new structure. For multiple-lot structures, you’ll need to perform multiple Demolish activities (or critically succeed at the activity) to fully clear all of the lots. As soon as you begin Demolishing a multiple-lot structure, all of the lots occupied by that structure no longer function.",
  "outcomes": {
    "criticalSuccess": "Choose one of the following effects: you demolish an entire multiple-lot structure all at once and clear all of the lots it occupied, or you recover 1d6 Commodities (chosen from lumber, stone, and ore) from the Rubble of a single-lot demolition.",
    "success": "You demolish the lot successfully.",
    "failure": "You fail to demolish the lot. It remains in Rubble and cannot be used for further construction until you successfully Demolish it.",
    "criticalFailure": "As failure, but accidents during the demolition cost you the lives of some of your workers. Gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "Demole estrutura inteira de vários lotes, ou +1d6 Mercadorias",
    "success": "Lote demolido e limpo",
    "failure": "Lote fica em Escombros",
    "criticalFailure": "Lote em Escombros; +1 Agitação"
  },
  "page": 28
},
{
  "id": "establish-work-site",
  "name": "Establish Work Site",
  "namePt": "Estabelecer Local de Trabalho",
  "summary": "Cria um campo madeireiro (floresta), mina ou pedreira (colinas/montanhas) que produz Mercadorias; custo em RP pelo terreno. Crítico dobra a produção do local até o fim do próximo turno.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Engineering", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Engineering (destreinado)", "CD": "CD de Controle", "Custo": "RP pelo terreno (1–12)", "Página": "28"},
  "text": "Your hire a crew of workers to travel to a hex that contains Lumber, Ore, or Stone to be harvested. Spend RP as determined by the hex’s most inhospitable terrain (see Building on Rough Terrain below). Then attempt a basic check. Lumber camps can be established in any hex that contains a significant amount of forest terrain. Mines and quarries can be established in any hex that contains a significant amount of hill or mountain terrain. (See [[rule:work-sites|Work Sites]].)\n\n### Building on Rough Terrain\n\nCertain Region activities ([[activity:clear-hex|Clear Hex]], [[activity:fortify-hex|Fortify Hex]], [[activity:build-roads|Build Roads]], [[activity:establish-work-site|Establish Work Site]], [[activity:irrigation|Irrigation]]) require the PCs to spend an amount of RP determined by the most inhospitable terrain feature contained within the hex. Use the highest RP cost given for the hex’s terrain types in the list below (so if the hex contains swamps and forests, use the cost for swamps).\n\n| Terrain | Cost |\n|---|---|\n| Mountains | 12 RP |\n| Swamps | 8 RP |\n| Forests | 4 RP |\n| Hills | 2 RP |\n| Plains | 1 RP |",
  "outcomes": {
    "criticalSuccess": "You establish a Work Site in the hex and proceed to discover an unexpectedly rich supply of high quality Commodities. All Commodity yields granted by this site are doubled until the end of the next Kingdom turn.",
    "success": "You establish a Work Site in the hex.",
    "failure": "You fail to establish a Work Site in the hex.",
    "criticalFailure": "Not only do you fail to establish a Work Site, but you lose several workers to an accident, banditry, a vicious monster, or some other unforeseen occurrence. Gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "Local criado; produção dobrada até o fim do próximo turno",
    "success": "Local de Trabalho criado",
    "failure": "Nada",
    "criticalFailure": "Nada; +1 Agitação"
  },
  "page": 28
},
{
  "id": "irrigation",
  "name": "Irrigation",
  "namePt": "Irrigação",
  "summary": "Leva água de um rio/lago adjacente a um hex controlado, dando-lhe a característica de rio ou lago (custo em RP pelo terreno). Crítico devolve metade do RP; falha crítica gera +1 Agitação e risco recorrente de Peste.",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Engineering", "proficiency": "trained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Engineering (treinado)", "CD": "CD de Controle", "Custo": "RP pelo terreno (1–12)", "Página": "29"},
  "requirements": "You control a hex adjacent to a river or lake that itself does not contain a river or lake.",
  "text": "You send excavators to build waterways, canals, or drainage systems to convey water from areas that have natural access to a river or lake. Spend RP as determined by the hex’s most inhospitable terrain feature (see Building on Rough Terrain below). Then attempt a basic check.\n\n### Building on Rough Terrain\n\nCertain Region activities ([[activity:clear-hex|Clear Hex]], [[activity:fortify-hex|Fortify Hex]], [[activity:build-roads|Build Roads]], [[activity:establish-work-site|Establish Work Site]], [[activity:irrigation|Irrigation]]) require the PCs to spend an amount of RP determined by the most inhospitable terrain feature contained within the hex. Use the highest RP cost given for the hex’s terrain types in the list below (so if the hex contains swamps and forests, use the cost for swamps).\n\n| Terrain | Cost |\n|---|---|\n| Mountains | 12 RP |\n| Swamps | 8 RP |\n| Forests | 4 RP |\n| Hills | 2 RP |\n| Plains | 1 RP |",
  "outcomes": {
    "criticalSuccess": "The hex gains a river or lake terrain feature (or you change the effects of a previous critical failure at Irrigation in this hex into a failure); work with your GM to determine where these features appear in the hex. In addition, your workers were efficient and quick, and you regain half the RP you spent building the waterways.",
    "success": "As success, but without regaining any RP.",
    "failure": "You fail to build workable systems or to restore a previous critical failure, and the hex does not gain the river or lake terrain feature.",
    "criticalFailure": "As failure, but your attempts at Irrigation are so completely useless that they become breeding grounds for disease. Gain 1 Unrest. From this point onward, at the start of your Kingdom turn’s Event phase, attempt a DC 4 flat check. This flat check’s DC increases by 1 for each hex in your kingdom that contains a critically failed attempt at Irrigation. If you fail this flat check, your kingdom suffers a Plague event in addition to any other event it might have. You can attempt this activity again in a later Kingdom turn to undo a critically failed Irrigation attempt."
  },
  "quick": {
    "criticalSuccess": "Hex ganha rio/lago (ou desfaz falha crítica); metade do RP devolvida",
    "success": "Hex ganha rio/lago (ou desfaz falha crítica)",
    "failure": "Nada",
    "criticalFailure": "+1 Agitação; teste plano CD 4+ a cada turno contra evento Plague"
  },
  "page": 29
},
{
  "id": "hire-adventurers",
  "name": "Hire Adventurers",
  "namePt": "Contratar Aventureiros",
  "summary": "Paga RP igual a 1 Dado de Recurso para aventureiros tentarem encerrar um evento contínuo. Crítico encerra o evento; sucesso dá +2 para resolvê-lo na próxima fase de Evento.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Exploration", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle ajustada pelo modificador de nível do evento",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Exploration (destreinado)", "CD": "CD de Controle + modificador de nível do evento", "Custo": "RP = 1 Dado de Recurso (2 após falha)", "Página": "29"},
  "text": "While the PCs can strike out themselves to deal with ongoing events, it’s often more efficient to Hire Adventurers. When you Hire Adventurers to help end an ongoing event, the DC is equal to your Control DC adjusted by the event’s level modifier. Roll 1 Resource Die and spend RP equal to the result each time you attempt this activity.",
  "outcomes": {
    "criticalSuccess": "You end the continuous event.",
    "success": "The continuous event doesn’t end, but you gain a +2 circumstance bonus to resolve the event during the next Event phase.",
    "failure": "You fail to end the continuous event. If you try to end the continuous event again, the cost in RP increases to 2 Resource Dice.",
    "criticalFailure": "As failure, but word spreads quickly through the region—you can no longer attempt to end this continuous event by Hiring Adventurers."
  },
  "quick": {
    "criticalSuccess": "Evento contínuo encerrado",
    "success": "+2 para resolver o evento na próxima fase de Evento",
    "failure": "Nada; próximas tentativas custam 2 Dados de Recurso",
    "criticalFailure": "Nada; não pode mais usar contra esse evento"
  },
  "page": 29
},
{
  "id": "celebrate-holiday",
  "name": "Celebrate Holiday",
  "namePt": "Celebrar Feriado",
  "summary": "Declara um feriado: +1 (sucesso) ou +2 (crítico) em testes de Loyalty até o fim do próximo turno; custa RP = 1 Dado de Recurso exceto no crítico. CD +4 se celebrou no turno anterior.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Folklore", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle (+4 se usada no turno anterior)",
  "oncePerTurn": false,
  "frequency": "If your kingdom Celebrated a Holiday the previous turn, the DC increases by 4.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Folklore (destreinado)", "CD": "CD de Controle (+4 se repetida)", "Página": "30"},
  "text": "You declare a day of celebration. Holidays may be religious, historical, martial, or simply festive, but all relieve your citizens from their labors and give them a chance to make merry at the kingdom’s expense. Attempt a basic check, but if your kingdom Celebrated a Holiday the previous turn, the DC increases by 4, as your kingdom hasn’t had a chance to recover from the previous gala.",
  "outcomes": {
    "criticalSuccess": "Your holidays are a delight to your people. The event is expensive, but incidental income from the celebrants covers the cost. You gain a +2 circumstance bonus to Loyalty-based checks until the end of your next Kingdom turn.",
    "success": "Your holidays are a success, but they’re also expensive. You gain a +1 circumstance bonus to Loyalty-based checks until the end of your next Kingdom turn. Immediately roll 1 Resource Die and spend RP equal to the result. If you can’t afford this cost, treat this result as a Critical Failure instead.",
    "failure": "The holiday passes with little enthusiasm, but is still expensive. Immediately roll 1 Resource Die and spend RP equal to the result. If you can’t afford this cost, treat this result as a Critical Failure instead.",
    "criticalFailure": "Your festival days are poorly organized, and the citizens actively mock your failed attempt to celebrate. During the next turn, reduce your Resource Dice total by 4. The failure also causes you to take a –1 circumstance penalty to Loyalty-based checks until the end of the next Kingdom turn."
  },
  "quick": {
    "criticalSuccess": "+2 em Loyalty até o fim do próximo turno; sem custo",
    "success": "+1 em Loyalty; paga RP = 1 Dado de Recurso",
    "failure": "Paga RP = 1 Dado de Recurso; sem bônus",
    "criticalFailure": "−4 Dados de Recurso no próximo turno; −1 em Loyalty"
  },
  "page": 30
},
{
  "id": "trade-commodities",
  "name": "Trade Commodities",
  "namePt": "Negociar Mercadorias",
  "summary": "Na fase de Comércio, gasta até 4 de uma Mercadoria estocada para ganhar Dados de Recurso extras no próximo turno: 1 por ponto (sucesso) ou 2 por ponto (crítico). +1 se negociar com grupo com relações diplomáticas.",
  "tags": ["commerce", "downtime"],
  "general": false,
  "step": "commerce-commodities",
  "skills": [
    {"skill": "Industry", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "frequency": "On a critical failure, gain 1 Unrest if you Traded Commodities the previous turn.",
  "stats": {"Etapa": "Comércio 3: Usar Mercadorias", "Perícias": "Industry (destreinado)", "CD": "CD de Controle", "Custo": "Até 4 de uma Mercadoria", "Página": "30"},
  "text": "There are five different categories of [[rule:commodities|Commodities]]: Food, Lumber, Luxuries, Ore, and Stone. When you Trade Commodities, select one Commodity that your kingdom currently stockpiles and reduce that Commodity’s stockpile by up to 4. Then attempt a basic check. If you trade with a group that you’ve established diplomatic relations with, you gain a +1 circumstance bonus to the check.",
  "outcomes": {
    "criticalSuccess": "At the beginning of the next Kingdom turn, you gain 2 bonus Resource Dice per point of stockpile expended from your Commodity now.",
    "success": "At the beginning of your next Kingdom turn, you gain 1 bonus Resource Die per point of stockpile expended from your Commodity now.",
    "failure": "You gain 1 bonus Resource Die at the beginning of your next Kingdom turn.",
    "criticalFailure": "You gain no bonus Resource Dice (though the Commodity remains depleted). If you Traded Commodities the previous turn, gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "+2 Dados de Recurso por Mercadoria gasta (próximo turno)",
    "success": "+1 Dado de Recurso por Mercadoria gasta (próximo turno)",
    "failure": "+1 Dado de Recurso no próximo turno",
    "criticalFailure": "Nada (Mercadorias perdidas); +1 Agitação se repetida"
  },
  "page": 30
},
{
  "id": "relocate-capital",
  "name": "Relocate Capital",
  "namePt": "Transferir Capital",
  "summary": "Muda a capital para outro assentamento com Castelo, Palácio ou Prefeitura; consome todas as atividades de liderança do turno. CD de Controle +5; mesmo o sucesso dá +1 Agitação, e não pode repetir por 3 turnos.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Industry", "proficiency": "trained"}
  ],
  "dc": "CD de Controle + 5",
  "oncePerTurn": true,
  "frequency": "Uses all leaders’ leadership activities for the turn; you cannot Relocate your Capital again for at least 3 Kingdom turns.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Industry (treinado)", "CD": "CD de Controle + 5", "Limite": "Todas as atividades de liderança; recarga de 3 turnos", "Página": "30"},
  "requirements": "One of your settlements that is not your current capital must contain a [[structure:castle|Castle]], [[structure:palace|Palace]], or [[structure:town-hall|Town Hall]]. All leaders must spend all of their leadership activities during the Activity phase of a Kingdom turn on this activity.",
  "text": "The kingdom leaders announce that they are uprooting the seat of government from its current home and reestablishing it in another settlement. Attempt a check with a DC equal to the kingdom’s Control DC + 5. You cannot Relocate your Capital again for at least 3 Kingdom turns.",
  "outcomes": {
    "criticalSuccess": "The move goes off splendidly, with people excited about the new capital and celebrating the leadership’s wisdom.",
    "success": "The move goes smoothly and with minimal disruption, but some folks are upset or homesick. Increase Unrest by 1.",
    "failure": "The move causes unhappiness. Gain 1 Unrest and increase two Ruins of your choice by 1.",
    "criticalFailure": "The people reject the idea of the new capital and demand you move it back. The move is unsuccessful, and your capital remains unchanged. Gain 1d4 Unrest. Increase three Ruins of your choice by 1 and the fourth Ruin by 3."
  },
  "quick": {
    "criticalSuccess": "Capital transferida sem custo",
    "success": "Capital transferida; +1 Agitação",
    "failure": "Capital transferida; +1 Agitação; +1 em duas Ruínas",
    "criticalFailure": "Não transfere; +1d4 Agitação; +1 em três Ruínas e +3 na quarta"
  },
  "page": 30
},
{
  "id": "infiltration",
  "name": "Infiltration",
  "namePt": "Infiltração",
  "summary": "Envia espiões para obter informações sobre um alvo (nação, culto, Freehold, ruína) ou sobre a saúde do reino; neste caso reduz Agitação (1, ou 1d4/−1 Ruína no crítico). Falha crítica dá −2 em todos os testes até o fim do próximo turno.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Intrigue", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Intrigue (destreinado)", "CD": "CD de Controle", "Página": "30"},
  "text": "You send spies out to gather intelligence on a neighboring nation, a cult or thieves’ guild within your borders, an unclaimed Freehold, or even an unexplored adventure site. Alternately, you can simply send your spies out to investigate the current health of your kingdom. Attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "You learn something valuable or helpful. If you were infiltrating a specific target, the GM decides what is learned, but the information is exact and precise. For example, if you were infiltrating an unexplored ruin, you might learn that the site is infested with web lurkers and spider swarms. If you were investigating your kingdom’s health, your spies reveal easy methods to address citizen dissatisfaction, allowing you to choose one of the following: reduce Unrest by 1d4 or reduce a Ruin of your choice by 1.",
    "success": "You learn something helpful about the target, but the information is vague and imprecise. For example, if you were infiltrating the same ruin mentioned in the critical success above, you might learn that some sort of aberration uses the ruins as its lair. If you were investigating your kingdom’s health, your spies learn enough that you can take action. Reduce your kingdom’s Unrest by 1.",
    "failure": "Your spies fail to learn anything of import, but they are not themselves compromised.",
    "criticalFailure": "You never hear from your spies again, but someone certainly does! You take a –2 circumstance penalty on all kingdom checks until the end of the next Kingdom turn as counter-infiltration from an unknown enemy tampers with your kingdom’s inner workings."
  },
  "quick": {
    "criticalSuccess": "Informação precisa; ou (reino) −1d4 Agitação ou −1 numa Ruína",
    "success": "Informação vaga; ou (reino) −1 Agitação",
    "failure": "Nada",
    "criticalFailure": "−2 em todos os testes de reino até o fim do próximo turno"
  },
  "page": 30
},
{
  "id": "clandestine-business",
  "name": "Clandestine Business",
  "namePt": "Negócios Clandestinos",
  "summary": "Cobra propinas do crime organizado: RP = 2 Dados de Recurso e/ou 1d4 Luxos, mas gera Agitação e Corrupção exceto no crítico. A CD sobe 2 a cada turno consecutivo de uso.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Intrigue", "proficiency": "trained"}
  ],
  "dc": "CD de Controle (+2 por turno consecutivo de uso; −1 por turno sem uso)",
  "oncePerTurn": false,
  "frequency": "Every subsequent Kingdom turn you pursue Clandestine Business, the DC increases by 2; every Kingdom turn that passes without it reduces the DC by 1 (until you reach your Control DC).",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Intrigue (treinado)", "CD": "CD de Controle (+2 por uso consecutivo)", "Página": "31"},
  "text": "You know there are criminals in your kingdom, and they know you know. You encourage them to send kickbacks in the form of resources and Commodities to the government, but the common citizens will be more than upset if they find out! This starts as a basic check against your Control DC, but every subsequent Kingdom turn you pursue Clandestine Business, the DC increases by 2. Every Kingdom turn that passes without Clandestine Business reduces the DC by 1 (until you reach your Control DC).",
  "outcomes": {
    "criticalSuccess": "Immediately roll 2 Resource Dice. Gain RP equal to the result. In addition, you gain 1d4 Luxury Commodities. The public is none the wiser.",
    "success": "Either immediately roll 2 Resource Dice and gain RP equal to the result, or gain 1d4 Luxury Commodities. Regardless of your choice, rumors spread about where the government is getting these “gifts.” Increase Unrest by 1.",
    "failure": "Immediately roll 1 Resource Die and gain RP equal to the result. Rumors are backed up with eyewitness accounts. Increase Unrest by 1 and Corruption by 1.",
    "criticalFailure": "You gain nothing from the Clandestine Business but angry citizens. Increase Unrest by 1d6, Corruption by 2, and one other Ruin of your choice by 1."
  },
  "quick": {
    "criticalSuccess": "RP = 2 Dados de Recurso e +1d4 Luxos, sem consequências",
    "success": "RP = 2 Dados de Recurso ou +1d4 Luxos; +1 Agitação",
    "failure": "RP = 1 Dado de Recurso; +1 Agitação; +1 Corrupção",
    "criticalFailure": "+1d6 Agitação; +2 Corrupção; +1 noutra Ruína"
  },
  "page": 31
},
{
  "id": "supernatural-solution",
  "name": "Supernatural Solution",
  "namePt": "Solução Sobrenatural",
  "summary": "Prepara uma solução mágica: uma vez neste turno, rola Magic junto de qualquer teste de reino e fica com o melhor resultado (custa 1d4 RP no sucesso; grátis no crítico). Se não usar, ganha 10 XP de reino.",
  "tags": ["downtime", "fortune", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Magic", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "frequency": "On a critical failure, you cannot attempt a Supernatural Solution again for 2 Kingdom turns.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Magic (destreinado)", "CD": "CD de Controle", "Página": "31"},
  "text": "Your spellcasters try to resolve issues when mundane solutions just aren’t enough. Attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "You can call upon your spellcasters’ supernatural solution to aid in resolving any Kingdom skill check made during the remainder of this Kingdom turn. Do so just before a Kingdom skill check is rolled (by yourself or any other PC). Attempt a Magic check against the same DC in addition to the Kingdom skill check, and take whichever of the two results you prefer. If you don’t use your Supernatural Solution by the end of this Kingdom turn, this benefit ends and you gain 10 kingdom XP instead.",
    "success": "As critical success, but the solution costs the kingdom 1d4 RP to research. This cost is paid now, whether or not you use your supernatural solution.",
    "failure": "Your attempt at researching a supernatural solution costs the kingdom 2d6 RP, but is ultimately a failure, providing no advantage.",
    "criticalFailure": "As failure, but your spellcasters’ resources and morale are impacted such that you cannot attempt a Supernatural Solution again for 2 Kingdom turns."
  },
  "quick": {
    "criticalSuccess": "Rola Magic junto de um teste e escolhe o melhor (ou +10 XP)",
    "success": "Igual ao crítico, mas custa 1d4 RP",
    "failure": "Perde 2d6 RP",
    "criticalFailure": "Perde 2d6 RP; bloqueada por 2 turnos"
  },
  "special": "You cannot influence a check with Supernatural Solution and [[activity:creative-solution|Creative Solution]] simultaneously.",
  "page": 31
},
{
  "id": "prognostication",
  "name": "Prognostication",
  "namePt": "Prognóstico",
  "summary": "Conjuradores leem presságios para o próximo evento: +1 para resolver eventos aleatórios neste turno; no crítico, rola o evento duas vezes, os jogadores escolhem e ganham +2.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Magic", "proficiency": "trained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Magic (treinado)", "CD": "CD de Controle", "Página": "32"},
  "text": "Your kingdom’s spellcasters read the omens and provide advice on how best to prepare for near-future events. Attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "If you have a random kingdom event this turn, roll twice to determine the event that takes place. The players choose which of the two results occurs, and the kingdom gains a +2 circumstance bonus to the check to resolve the event.",
    "success": "Gain a +1 circumstance bonus to checks made to resolve random kingdom events this turn.",
    "failure": "Your spellcasters divine no aid.",
    "criticalFailure": "Your spellcasters provide inaccurate readings of the future. You automatically have a random kingdom event this turn. Roll twice to determine the event that takes place; the GM decides which of the two results occurs."
  },
  "quick": {
    "criticalSuccess": "Evento rolado 2× (jogadores escolhem); +2 para resolvê-lo",
    "success": "+1 para resolver eventos aleatórios neste turno",
    "failure": "Nada",
    "criticalFailure": "Evento aleatório garantido; rolado 2×, o Mestre escolhe"
  },
  "page": 32
},
{
  "id": "improve-lifestyle",
  "name": "Improve Lifestyle",
  "namePt": "Melhorar Estilo de Vida",
  "summary": "Na fase de Comércio, usa o tesouro para melhorar a vida dos cidadãos: +1 (ou +2 no crítico) em testes de Culture pelo resto do turno; na falha também −1 em Economy.",
  "tags": ["commerce", "downtime"],
  "general": false,
  "step": "commerce-expenses",
  "skills": [
    {"skill": "Politics", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "frequency": "Only during the Commerce phase of a Kingdom turn.",
  "stats": {"Etapa": "Comércio 2: Aprovar Despesas", "Perícias": "Politics (destreinado)", "CD": "CD de Controle", "Página": "32"},
  "text": "Attempt a basic check to draw upon your kingdom’s treasury to enhance the quality of life for your citizens. This activity can be taken only during the [[rule:commerce-phase|Commerce phase]] of a Kingdom turn.",
  "outcomes": {
    "criticalSuccess": "Your push to Improve Lifestyles affords your citizens significant free time to pursue recreational activities. For the remainder of the Kingdom turn, you gain a +2 circumstance bonus to Culture-based checks.",
    "success": "Your push to Improve Lifestyles helps your citizens enjoy life. For the remainder of the Kingdom turn, you gain a +1 circumstance bonus to Culture‑based checks.",
    "failure": "As success, but you’ve strained your treasury. Take a –1 circumstance penalty to Economy-based checks for the remainder of this Kingdom turn.",
    "criticalFailure": "Your attempt to Improve Lifestyles backfires horribly as criminal elements in your kingdom abuse your generosity. You take a –1 circumstance penalty to Economy-based checks for the remainder of the Kingdom turn, gain 1 Unrest, and add 1 to a Ruin of your choice."
  },
  "quick": {
    "criticalSuccess": "+2 em Culture pelo resto do turno",
    "success": "+1 em Culture pelo resto do turno",
    "failure": "+1 em Culture, mas −1 em Economy pelo resto do turno",
    "criticalFailure": "−1 em Economy; +1 Agitação; +1 numa Ruína"
  },
  "page": 32
},
{
  "id": "creative-solution",
  "name": "Creative Solution",
  "namePt": "Solução Criativa",
  "summary": "Prepara uma solução criativa: uma vez neste turno, rerrola um teste de reino com +2 (antes de saber o resultado), ficando com o novo. Custa 1d4 RP no sucesso; se não usar, ganha 10 XP de reino.",
  "tags": ["downtime", "fortune", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Scholarship", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Scholarship (destreinado)", "CD": "CD de Controle", "Página": "32"},
  "text": "You work with your kingdom’s scholars, thinkers, and practitioners of magical and mundane experimentation to come up with new ways to resolve issues when business as usual is just not working. Attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "You can call upon the solution to aid in resolving any Kingdom skill check made during the remainder of this Kingdom turn. Do so when a Kingdom skill check is rolled, but before you learn the result. Immediately reroll that check with a +2 circumstance bonus; you must take the new result. If you don’t use your Creative Solution by the end of this turn, you lose this benefit and gain 10 kingdom XP instead.",
    "success": "As critical success, but the Creative Solution costs the kingdom 1d4 RP to research. This cost is paid now, whether or not you use your Creative Solution.",
    "failure": "Your attempt at researching a Creative Solution costs the kingdom 2d6 RP but is ultimately a failure. It provides no advantage.",
    "criticalFailure": "As failure, but your scholars and thinkers are so frustrated that you take a –1 circumstance penalty to Culture-based checks until the end of the next Kingdom turn."
  },
  "quick": {
    "criticalSuccess": "Rerrola um teste com +2 (ou +10 XP se não usar)",
    "success": "Igual ao crítico, mas custa 1d4 RP",
    "failure": "Perde 2d6 RP",
    "criticalFailure": "Perde 2d6 RP; −1 em Culture até o fim do próximo turno"
  },
  "special": "You cannot influence a check with [[activity:supernatural-solution|Supernatural Solution]] and Creative Solution simultaneously.",
  "page": 32
},
{
  "id": "tap-treasury",
  "name": "Tap Treasury",
  "namePt": "Sacar do Tesouro",
  "summary": "Saca ouro do tesouro do reino para uso pessoal dos PJs (valor de “moeda por PJ adicional” do nível do reino) ou para financiar um evento. Após um sucesso, novas tentativas pioram dois graus até devolver via Capital Investment.",
  "tags": ["commerce", "downtime"],
  "general": false,
  "step": "commerce-expenses",
  "skills": [
    {"skill": "Statecraft", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "frequency": "After you succeed or critically succeed, all future attempts have their results worsened two degrees until the funds are repaid via Capital Investment.",
  "stats": {"Etapa": "Comércio 2: Aprovar Despesas", "Perícias": "Statecraft (destreinado)", "CD": "CD de Controle", "Página": "33"},
  "text": "You tap into the cash reserves of your kingdom for the PCs’ personal use or to provide emergency funding for an event. This is a basic check, but after you succeed or critically succeed at this activity, all future attempts to Tap Treasury have their results worsened two degrees. This penalty persists until funds equal to those taken from the treasury are repaid via [[activity:capital-investment|Capital Investment]].",
  "outcomes": {
    "criticalSuccess": "You withdraw funds equal to the Currency per Additional PC column on Table 10–9: Party Treasure By Level on page 509 of the *Pathfinder Core Rulebook* (using your kingdom’s level to set the amount), or you successfully fund the unexpected event that required you to Tap your Treasury.",
    "success": "As critical success, but you overdraw your treasury in the attempt. You take a –1 circumstance penalty to all Economy-based checks until the end of your next Kingdom turn.",
    "failure": "You fail to secure the funds you need, and rumors about the kingdom’s potential shortfall of cash cause you to take a –1 circumstance penalty to all Loyalty- and Economy-based checks until the end of your next Kingdom turn.",
    "criticalFailure": "As failure, but the rumors spiral out of control. Increase Unrest by 1 and add 1 to a Ruin of your choice."
  },
  "quick": {
    "criticalSuccess": "Saca o ouro (ou financia o evento)",
    "success": "Saca o ouro; −1 em Economy até o fim do próximo turno",
    "failure": "Nada; −1 em Loyalty e Economy até o fim do próximo turno",
    "criticalFailure": "Como falha; +1 Agitação; +1 numa Ruína"
  },
  "page": 33
},
{
  "id": "request-foreign-aid",
  "name": "Request Foreign Aid",
  "namePt": "Pedir Ajuda Estrangeira",
  "summary": "Pede socorro a um aliado com relações diplomáticas: no crítico, +4 num teste de reino e RP = 2 Dados de Recurso; no sucesso, escolhe +2 num teste ou RP = 1 Dado de Recurso. CD de Negociação +2.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Statecraft", "proficiency": "trained"}
  ],
  "dc": "CD de Negociação do grupo + 2",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Statecraft (treinado)", "CD": "CD de Negociação + 2", "Página": "33"},
  "requirements": "You have diplomatic relations with the group you are requesting aid from.",
  "text": "When disaster strikes, you send out a call for help to another nation with whom you have diplomatic relations. The DC of this check is equal to the other group’s Negotiation DC +2 (see the Negotiation DCs sidebar under [[activity:establish-trade-agreement|Establish Trade Agreement]]).",
  "outcomes": {
    "criticalSuccess": "Your ally’s aid grants a +4 circumstance bonus to any one Kingdom skill check attempted during the remainder of this Kingdom turn. You can choose to apply this bonus to any Kingdom skill check after the die is rolled, but must do so before the result is known. In addition, immediately roll 2 Resource Dice and gain RP equal to the result; this RP does not accrue into XP at the end of the turn if you don’t spend it.",
    "success": "As success, but choose the benefit given by the aid: either roll 1 Resource Die and gain RP equal to the result or gain a +2 circumstance bonus to a check.",
    "failure": "Your ally marshals its resources but cannot get aid to you in time to deal with your current situation. At the start of your next Kingdom turn, gain 1d4 RP.",
    "criticalFailure": "Your ally is tangled up in its own problems and is unable to assist you, is insulted by your request for aid, or might even have an interest in seeing your kingdom struggle against one of your ongoing events. Whatever the case, your pleas for aid make your kingdom look desperate. You gain no aid, but you do increase Unrest by 1d4."
  },
  "quick": {
    "criticalSuccess": "+4 num teste de reino neste turno e RP = 2 Dados de Recurso (não vira XP)",
    "success": "Escolha: RP = 1 Dado de Recurso ou +2 num teste",
    "failure": "+1d4 RP no início do próximo turno",
    "criticalFailure": "+1d4 Agitação"
  },
  "page": 33
},
{
  "id": "send-diplomatic-envoy",
  "name": "Send Diplomatic Envoy",
  "namePt": "Enviar Emissário Diplomático",
  "summary": "Envia emissários para estabelecer relações diplomáticas com um grupo (pré-requisito de acordos comerciais e ajuda estrangeira). A primeira vez que consegue na campanha rende 60 XP de reino.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Statecraft", "proficiency": "trained"}
  ],
  "dc": "CD de Negociação do grupo (−4 e um grau pior contra nação em guerra)",
  "oncePerTurn": false,
  "frequency": "After a critical failure, you cannot attempt to Send a Diplomatic Envoy to the same target for the next 3 Kingdom turns.",
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Statecraft (treinado)", "CD": "CD de Negociação do grupo", "Página": "34"},
  "text": "You send emissaries to another group to foster positive relations and communication. The DC of this check is the group’s Negotiation DC (see the Negotiation DCs sidebar under [[activity:establish-trade-agreement|Establish Trade Agreement]]). Attempts to Send a Diplomatic Envoy to a nation with which your kingdom is at war take a –4 circumstance penalty to the check and have the result worsened one degree. At the GM’s option, some wars might be so heated that this activity has no chance of success.\n\nThe first time your kingdom succeeds at establishing diplomatic relations in the campaign, gain 60 [[rule:kingdom-xp|kingdom XP]] as a milestone award.",
  "outcomes": {
    "criticalSuccess": "Your envoys are received quite warmly and make a good first impression. You establish diplomatic relations with the group and gain a +2 circumstance bonus to all checks made with that group until the next Kingdom turn.",
    "success": "You establish diplomatic relations.",
    "failure": "Your envoys are received, but the target organization isn’t ready to engage in diplomatic relations. If you attempt to Send a Diplomatic Envoy to the group next Kingdom turn, you gain a +2 circumstance bonus to that check.",
    "criticalFailure": "Disaster! Your envoy fails to reach their destination, is turned back at the border, or is taken prisoner or executed, at the GM’s discretion. The repercussions on your kingdom’s morale and reputation are significant. Choose one of the following results: gain 1d4 Unrest, add 1 to a Ruin of your choice, or immediately roll 2 Resource Dice and spend RP equal to the result. In any event, you cannot attempt to Send a Diplomatic Envoy to this same target for the next 3 Kingdom turns."
  },
  "quick": {
    "criticalSuccess": "Relações diplomáticas; +2 em testes com o grupo até o próximo turno",
    "success": "Relações diplomáticas estabelecidas",
    "failure": "Nada; +2 se tentar de novo no próximo turno",
    "criticalFailure": "+1d4 Agitação, +1 Ruína ou paga 2 Dados de Recurso; bloqueio de 3 turnos"
  },
  "page": 34
},
{
  "id": "capital-investment",
  "name": "Capital Investment",
  "namePt": "Investimento de Capital",
  "summary": "Um PJ investe ouro pessoal (valor fixo pelo nível do reino) num assentamento com Banco para gerar RP: 2 Dados de Recurso (4 no crítico). Também serve para devolver o que foi sacado com Tap Treasury, sem teste.",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Trade", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Trade (destreinado)", "CD": "CD de Controle", "Custo": "Ouro = “Currency per Additional PC” do nível do reino", "Página": "34"},
  "requirements": "You must be within the influence of a settlement that contains at least one [[structure:bank|Bank]].",
  "text": "You contribute funds from your personal wealth for the good of the kingdom, including coinage, gems, jewelry, weapons and armor salvaged from enemies, magical or alchemical items, and so on. Your contribution generates economic activity in the form of RP that can be used during your current Kingdom turn or on the next Kingdom turn (your choice).\n\nYou can use Capital Investment to repay funds from [[activity:tap-treasury|Tap Treasury]]. In this case, no roll is needed and you simply deduct the appropriate amount of funds from your personal wealth to pay back that which was borrowed.\n\nWhen you use Capital Investment to generate RP, the amount of gp required to make an investment is set by your kingdom’s level. Investments below this amount cause your attempt to suffer an automatic critical failure, while investments above this amount are lost. The investment required is equal to the value listed on Table 10–9: Party Treasure by Level in the *Pathfinder Core Rulebook* (page 509); use the value for your kingdom’s level under Currency per Additional PC as the required investment value. This is a basic check.",
  "outcomes": {
    "criticalSuccess": "Your kingdom reaps the benefits of your investment. Immediately roll 4 Resource Dice. Gain RP equal to the result.",
    "success": "Your investment helps the economy. Immediately roll 2 Resource Dice. Gain RP equal to the result.",
    "failure": "Your investment ends up being used to shore up shortfalls elsewhere. Gain 1d4 RP.",
    "criticalFailure": "Your investment is embezzled, lost, or otherwise misappropriated. Choose one of the following: either roll 1 Resource Die and gain RP equal to the result and also increase your Crime by an equal amount, or gain 0 RP and increase Crime by 1."
  },
  "quick": {
    "criticalSuccess": "RP = 4 Dados de Recurso",
    "success": "RP = 2 Dados de Recurso",
    "failure": "+1d4 RP",
    "criticalFailure": "RP = 1 Dado de Recurso e Crime +igual, ou 0 RP e Crime +1"
  },
  "page": 34
},
{
  "id": "manage-trade-agreements",
  "name": "Manage Trade Agreements",
  "namePt": "Gerenciar Acordos Comerciais",
  "summary": "Na fase de Comércio, paga 2 RP por acordo comercial: no sucesso, ganha 1 Dado de Recurso ou 1 Mercadoria por acordo no próximo turno (ambos no crítico). CD +5 se usado no turno anterior.",
  "tags": ["commerce", "downtime"],
  "general": false,
  "step": "commerce-trade",
  "skills": [
    {"skill": "Trade", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle (+5 se usada no turno anterior)",
  "oncePerTurn": false,
  "frequency": "If you Managed Trade Agreements on the previous turn, the DC increases by 5; after a critical failure, you can’t use it for 1 Kingdom turn.",
  "stats": {"Etapa": "Comércio 4: Gerenciar Acordos Comerciais", "Perícias": "Trade (destreinado)", "CD": "CD de Controle (+5 se repetida)", "Custo": "2 RP por acordo", "Página": "34"},
  "text": "You send agents out to attend to established trade agreements. Spend 2 RP per Trade Agreement you wish to manage. Then attempt a basic check. If you Managed Trade Agreements on the previous turn, increase this DC by 5.",
  "outcomes": {
    "criticalSuccess": "At the start of your next Kingdom turn, you gain 1 bonus Resource Die per trade agreement, and 1 Commodity of your choice per trade agreement (no more than half of these Commodities may be Luxuries).",
    "success": "As critical success, but you must choose between gaining Resource Dice or Commodities.",
    "failure": "You gain 1 RP per trade agreement at the start of your next turn.",
    "criticalFailure": "You gain no benefit, as your traders and merchants met with bad luck on the road. You can’t Manage Trade Agreements for 1 Kingdom turn."
  },
  "quick": {
    "criticalSuccess": "Por acordo: +1 Dado de Recurso e +1 Mercadoria (máx. metade Luxos)",
    "success": "Por acordo: +1 Dado de Recurso ou +1 Mercadoria",
    "failure": "+1 RP por acordo no próximo turno",
    "criticalFailure": "Nada; bloqueada por 1 turno"
  },
  "page": 34
},
{
  "id": "purchase-commodities",
  "name": "Purchase Commodities",
  "namePt": "Comprar Mercadorias",
  "summary": "Compra Mercadorias com RP: 4 RP (8 para Luxos) rendem 2 do tipo escolhido no sucesso, 1 na falha, e no crítico 4 + 2 de outro tipo (exceto Luxos).",
  "tags": ["downtime", "leadership"],
  "general": false,
  "step": "leadership",
  "skills": [
    {"skill": "Trade", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 1: Liderança", "Perícias": "Trade (destreinado)", "CD": "CD de Controle", "Custo": "4 RP (8 RP para Luxos)", "Página": "34"},
  "text": "You can spend RP to Purchase Commodities, but doing so is more expensive than gathering them or relying upon trade agreements. When you Purchase Commodities, select the Commodity you wish to purchase (Food, Lumber, Luxuries, Ore, or Stone). Expend 8 RP if you’re purchasing Luxuries or 4 RP if you’re purchasing any other Commodity. Then attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "You immediately gain 4 Commodities of the chosen type and 2 Commodities of any other type (except Luxuries).",
    "success": "You gain 2 Commodities of the chosen type.",
    "failure": "You gain 1 Commodity of the chosen type.",
    "criticalFailure": "You gain no Commodities."
  },
  "quick": {
    "criticalSuccess": "+4 do tipo escolhido e +2 de outro tipo (não Luxos)",
    "success": "+2 do tipo escolhido",
    "failure": "+1 do tipo escolhido",
    "criticalFailure": "Nada (RP perdido)"
  },
  "page": 34
},
{
  "id": "collect-taxes",
  "name": "Collect Taxes",
  "namePt": "Coletar Impostos",
  "summary": "No início da fase de Comércio, cobra impostos: +1 (ou +2 no crítico) em testes de Economy pelo resto do turno. Cobrar em turnos seguidos gera Agitação; falha também gera Agitação.",
  "tags": ["commerce", "downtime"],
  "general": false,
  "step": "commerce-taxes",
  "skills": [
    {"skill": "Trade", "proficiency": "trained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "frequency": "If you attempted to Collect Taxes during the previous turn, a success or failure causes additional Unrest.",
  "stats": {"Etapa": "Comércio 1: Coletar Impostos", "Perícias": "Trade (treinado)", "CD": "CD de Controle", "Página": "35"},
  "text": "Tax collectors travel through the lands to collect funds for the betterment of the kingdom. Attempt a basic check.",
  "outcomes": {
    "criticalSuccess": "Your tax collectors are wildly successful! For the remainder of the Kingdom turn, gain a +2 circumstance bonus to Economy-based checks.",
    "success": "Your tax collectors gather enough to grant you a +1 circumstance bonus to Economy-based checks for the remainder of the Kingdom turn. If you attempted to Collect Taxes during the previous turn, increase Unrest by 1.",
    "failure": "As success, but the people are unhappy about taxes—increase Unrest by 1 (or by 2 if you attempted to Collect Taxes the previous turn).",
    "criticalFailure": "Your tax collectors encounter resistance from the citizens and their attempts to gather taxes are rebuffed. While the tax collectors still manage to gather enough taxes to support essential government needs, they have angered the kingdom’s citizens and encouraged rebellious acts. Increase Unrest by 2, and choose one Ruin to increase by 1."
  },
  "quick": {
    "criticalSuccess": "+2 em Economy pelo resto do turno",
    "success": "+1 em Economy; +1 Agitação se cobrou no turno anterior",
    "failure": "+1 em Economy; +1 Agitação (+2 se cobrou no turno anterior)",
    "criticalFailure": "+2 Agitação; +1 numa Ruína"
  },
  "page": 35
},
{
  "id": "gather-livestock",
  "name": "Gather Livestock",
  "namePt": "Reunir Rebanhos",
  "summary": "Reúne gado excedente da fauna, ranchos e fazendas: +1 Comida (1d4 no crítico). Falha crítica perde 1d4 Comida (ou +1 Agitação).",
  "tags": ["downtime", "region"],
  "general": false,
  "step": "region",
  "skills": [
    {"skill": "Wilderness", "proficiency": "untrained"}
  ],
  "dc": "CD de Controle",
  "oncePerTurn": false,
  "stats": {"Etapa": "Atividade 2: Região", "Perícias": "Wilderness (destreinado)", "CD": "CD de Controle", "Página": "35"},
  "text": "Attempt a basic check to gather excess livestock from local wildlife, ranches, and farms. This generates a number of Food commodities.",
  "outcomes": {
    "criticalSuccess": "Gain 1d4 Food commodities.",
    "success": "Gain 1 Food commodity.",
    "failure": "Gain no Food commodities.",
    "criticalFailure": "Lose 1d4 Food commodities to spoilage. If you have no Food to lose, you instead gain 1 Unrest."
  },
  "quick": {
    "criticalSuccess": "+1d4 Comida",
    "success": "+1 Comida",
    "failure": "Nada",
    "criticalFailure": "−1d4 Comida (ou +1 Agitação se não tiver)"
  },
  "page": 35
}
]
