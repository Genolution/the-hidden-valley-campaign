window.KM = window.KM || {};
KM.warfareRules = [
{
  "id": "warfare",
  "name": "Warfare",
  "namePt": "Guerra",
  "category": "guerra",
  "summary": "Regras opcionais de combate em massa como encontro de Downtime. Se o grupo preferir ignorá-las, cada turno com guerra dá +1d6 Agitação e +1 em uma Ruína à escolha.",
  "tags": ["warfare"],
  "stats": {"Página": "61"},
  "text": "Pathfinder focuses on events that directly affect (and can thus be solved by) PCs on an individual basis, but as Kingmaker progresses, some conflicts with bands of trolls or barbarians, the armies of Pitax, or supernatural incursions from the First World must be met on the field of battle. While it’s difficult enough for a band of PCs to face off against dozens of foes at once, the rules of the game make it all but impossible to play out such a conflict round by round against hundreds or thousands of foes.\n\nWhen mass conflicts occur in the course of your Kingmaker campaign, you have a choice. The simplest solution is to simply gloss over these parts of the Adventure Path—to have the battles play out in the narrative background and assume that as long as the PCs continue to persevere, their kingdom does as well. If you opt for this simple solution but are using the kingdom management rules from page 71 onwards, then at the start of any Kingdom turn during which warfare took place, the kingdom gains 1d6 [[rule:unrest|Unrest]] and increases one [[rule:ruin|Ruin]] of the party’s choice by 1 point.\n\nBut if you want to expand the kingdom rules to include a method of resolving mass combat in play as downtime events, read on! These rules provide an abstract system for warfare that lets you play out a complex battle as a downtime encounter using victory points. These rules are not intended to accurately represent complex wars, but instead seek to incorporate warfare into a campaign that stays primarily focused on traditional, small-scale adventuring and roleplaying.\n\n### Preparing for War\n\nBefore sending armies into battle, you need to gather, train, arm, and maintain those forces at the end of a Kingdom turn’s Activity phase.",
  "page": 61
},
{
  "id": "army-activities",
  "name": "Army Activities",
  "namePt": "Atividades de Exército",
  "category": "guerra",
  "summary": "Após as Atividades Cívicas, cada exército mantido pelo reino pode fazer UMA atividade de exército (ordem escolhida pelos jogadores). Recrutar Exército é atividade de Liderança.",
  "tags": ["army"],
  "stats": {"Etapa": "Após Atividades Cívicas", "Limite": "1 atividade por exército", "Página": "61–63"},
  "text": "After the PCs complete the Civic Activities step of a Kingdom turn, they may take an Army Activities step, in which each army currently maintained by the kingdom may take a single Army activity. The order in which they are attempted is chosen by the players.\n\nArmy activities are presented below, and may only be taken during the Army Activities step (but note that [[activity:recruit-army|Recruit Army]] is a Leadership activity instead).\n\n### Army Activities\n\n| Skill | Key Attribute | Untrained Activities | Trained Activities |\n|---|---|---|---|\n| — | — | Disband Army | — |\n| Arts | Culture | Recover Shaken Army | Recover Weary Army (expert) |\n| Boating | Economy | Deploy Army | — |\n| Defense | Stability | Garrison Army; Recover Damaged Army; Recover Weary Army | — |\n| Engineering | Stability | Garrison Army; Outfit Army; Recover Mired or Pinned Army | — |\n| Exploration | Economy | Deploy Army; Recover Lost Army | — |\n| Folklore | Culture | — | Recover Damaged Army (expert) |\n| Intrigue | Loyalty | Offensive Gambit | — |\n| Magic | Culture | Outfit Army | Deploy Army (master); Recover Mired or Pinned Army (expert) |\n| Politics | Loyalty | Garrison Army | Recover Defeated Army (master) |\n| Scholarship | Culture | Train Army | — |\n| Statecraft | Loyalty | Recruit Army | — |\n| Trade | Economy | Outfit Army | — |\n| Warfare | Loyalty | Offensive Gambit; Outfit Army; Recruit Army; Train Army | Recover Defeated Army (expert); Recover Shaken Army (expert) |\n| Wilderness | Stability | — | Recover Lost Army (expert) |",
  "page": 61
},
{
  "id": "recovering-army-conditions",
  "name": "Recovering Army Conditions",
  "namePt": "Recuperando Condições de Exército",
  "category": "guerra",
  "summary": "Tabela de perícias para a atividade Recuperar Exército, por condição. Derrotado exige Política (mestre) ou Guerra (especialista) e a CD sobe +5.",
  "tags": ["army"],
  "stats": {"Página": "64"},
  "text": "The skill required for the [[activity:recover-army|Recover Army]] check depends on the affliction.\n\n| Condition | Skill Check to Recover |\n|---|---|\n| Damaged | Defense or Folklore (expert) |\n| Defeated | Politics (master) or Warfare (expert) |\n| Lost | Exploration or Wilderness (expert) |\n| Mired or Pinned | Engineering or Magic (expert) |\n| Shaken | Arts or Warfare (expert) |\n| Weary | Arts (expert) or Defense |",
  "page": 64
},
{
  "id": "army-stat-block",
  "name": "Army Stat Block",
  "namePt": "Bloco de Estatísticas de Exército",
  "category": "guerra",
  "summary": "Como ler a ficha de um exército: Escaneamento (iniciativa; CD = +10), CD de Recrutamento, Consumo, CA, salvamentos de Manobra e Moral, PV com Limiar de Debandada (RT), ataques (1 dano; 2 no crítico), táticas e equipamento.",
  "tags": ["army"],
  "stats": {"Dano por acerto": "1 (2 no crítico)", "Disparos à distância": "5 por encontro", "Página": "64–65"},
  "text": "For generic armies, the alignment trait is listed as “Any.” An army comprised primarily of one type of creature has an alignment that’s representative of that type of creature.\n\nArmies have one of four type traits. **Infantry** consists of soldiers or creatures that move on foot. **Cavalry** consists of mounted combat units. **Skirmishers** consist of a small number of highly mobile units. **Siege** armies focus on the deployment of siege engines rather than personal combat.\n\n### Army Name — Army (Level)\n\n*Rarity trait, alignment abbreviation, type trait*\n\n**Scouting** This entry lists the modifier for an army’s initiative—typically equal to the Perception modifier of the army’s individual creatures—or the Scouting DC to detect an army that lies in ambush in a hex (to generate a Scouting DC, add 10 to the Scouting modifier).\n\n**Recruitment DC** This lists the DC required to recruit the army (as a general rule, this DC is equal to the standard DC for the army’s level)—see [[rule:recruiting-an-army|Recruiting an Army]]; **Consumption** This lists the number of Food Commodities the army consumes during the Kingdom turn’s Upkeep Phase; see [[rule:consumption|Pay Consumption]]. If you fail to pay Consumption during a Kingdom turn, all of your armies increase their [[condition:shaken|shaken]] and [[condition:weary|weary]] conditions by 1. An army whose shaken or weary conditions reach 4 or higher as a result of this increase immediately disbands; this causes the kingdom to gain 1d4 Unrest and increases one Ruin of the party’s choice by 1.\n\n**Description** This gives a brief description of the army.\n\n**AC** This lists the army’s Armor Class; **Saves** Armies have two saving throws: a Maneuver save and a Morale save. **Maneuver** This modifier applies to all checks made by the army to maneuver, be it to execute a complex tactic or to minimize damage and effects from unusual physical dangers; **Morale** This modifier applies to all checks made by the army to avoid becoming shaken or to resist effects that undermine cooperation, bravery, loyalty, and such.\n\n**HP** This lists the army’s Hit Points. When an army’s Hit Points reach zero, it becomes [[condition:defeated|defeated]]. An army cannot be reduced to fewer than 0 Hit Points. The army’s Rout Threshold (RT) is listed in parenthesis after its Hit Points. RT is typically half its maximum HP. An army that is resistant to fear or is particularly brave generally has a lower RT, while the rare army composed of creatures that are entirely immune to fear won’t have an RT listed at all.\n\n**Melee** The name of the attack the army uses for a melee Strike, followed by the attack modifier. An army inflicts 1 point of damage on a hit and 2 points on a critical hit. Melee Strikes can only be used against [[condition:engaged|engaged]] armies.\n\n**Ranged** The name of the attack the army uses for a ranged Strike, followed by the attack modifier. An army inflicts 1 point of damage on a hit and 2 points on a critical hit. An army can use its ranged Strike up to 5 times in each war encounter before its ammunition is depleted (unless it has the [[tactic:increased-ammunition|Increased Ammunition]] tactic). An army automatically replenishes its ranged Strike shots at the end of a war encounter.\n\n**Tactics** Any tactics known by the army are listed here.\n\n**Gear** Any gear outfitted by the army is listed here.\n\n**Special Abilities** Additional unique abilities possessed by the army are detailed here.",
  "page": 64
},
{
  "id": "army-types",
  "name": "Army Types",
  "namePt": "Tipos de Exército",
  "category": "guerra",
  "summary": "Quatro tipos: Infantaria (a pé), Cavalaria (montada), Escaramuçadores (pequenos e móveis) e Cerco (máquinas de guerra). O tipo limita quais táticas e ações de guerra o exército pode usar.",
  "tags": ["army", "infantry", "cavalry", "skirmisher", "siege"],
  "stats": {"Infantaria": "Nível mín. 1", "Cavalaria": "Nível mín. 3", "Escaramuçadores": "Nível mín. 5", "Cerco": "Nível mín. 7", "Página": "64"},
  "text": "Armies have one of four type traits. **Infantry** consists of soldiers or creatures that move on foot. **Cavalry** consists of mounted combat units. **Skirmishers** consist of a small number of highly mobile units. **Siege** armies focus on the deployment of siege engines rather than personal combat.\n\n**Army Type Trait:** A war action that lists an army type trait (Infantry, Cavalry, Skirmisher, or Siege) can be used only by army units that have that trait.\n\nTo qualify for a tactic, the army’s level must be greater than or equal to that tactic’s level, and the army’s type must be listed as a trait for that tactic.\n\n### Basic Armies\n\n- [[army:infantry|Infantry]] (Army 1)\n- [[army:cavalry|Cavalry]] (Army 3)\n- [[army:skirmishers|Skirmishers]] (Army 5)\n- [[army:siege-engines|Siege Engines]] (Army 7)",
  "page": 64
},
{
  "id": "army-consumption",
  "name": "Army Consumption",
  "namePt": "Consumo de Exércitos",
  "category": "guerra",
  "summary": "Cada exército soma seu Consumo (em Comida) ao do reino, pago na fase de Manutenção. Se não pagar, todos os exércitos ganham +1 abalado e +1 cansado; quem chegar a 4 debanda (+1d4 Agitação e +1 Ruína).",
  "tags": ["army", "upkeep"],
  "stats": {"Infantaria": "1", "Cavalaria": "2", "Escaramuçadores": "1", "Cerco": "1", "Página": "64–65"},
  "text": "**Consumption** This lists the number of Food Commodities the army consumes during the Kingdom turn’s Upkeep Phase; see [[rule:consumption|Pay Consumption]]. If you fail to pay Consumption during a Kingdom turn, all of your armies increase their [[condition:shaken|shaken]] and [[condition:weary|weary]] conditions by 1. An army whose shaken or weary conditions reach 4 or higher as a result of this increase immediately disbands; this causes the kingdom to gain 1d4 [[rule:unrest|Unrest]] and increases one [[rule:ruin|Ruin]] of the party’s choice by 1.\n\n**Step 6—Adjust Consumption** When you recruit an army, your kingdom’s Consumption score increases by the army’s Consumption score. You don’t have to pay Food Commodities for the army immediately, but you will need to do so during the Upkeep phase of your next Kingdom turn.\n\nA disbanded army no longer contributes to your kingdom’s Consumption.",
  "page": 64
},
{
  "id": "recruiting-an-army",
  "name": "Recruiting an Army",
  "namePt": "Recrutando um Exército",
  "category": "guerra",
  "summary": "Sete passos: escolher o tipo básico, usar Recrutar Exército (Liderança), ajustar estatísticas ao nível do reino, escolher táticas iniciais, posicionar num assentamento, somar o Consumo e dar um nome.",
  "tags": ["army", "leadership"],
  "stats": {"Página": "65"},
  "text": "When you recruit an army from a specialized group, the GM provides you with the army’s statistics, but the majority of your kingdom’s armies will be recruited from its citizens. When you recruit an army, follow these steps.\n\n### Step 1—Choose a Basic Army Type\n\n(Skip this step when recruiting a specialized army—its type is listed in its stat block.) Choose the basic type of army you want to recruit from infantry, cavalry, skirmishers, or siege engines. Statistics for all four basic armies are found below.\n\nYou cannot choose an army whose minimum level is higher than your current kingdom level.\n\n### Step 2—Recruit the Army\n\nTake the [[activity:recruit-army|Recruit Army]] activity during the Leadership Activities step of a Kingdom turn to recruit the army.\n\n### Step 3—Adjust Statistics\n\nWhen you recruit an army, be it a, its level adjusts to match your kingdom level. Unless you recruit an army at minimum level when your kingdom is the same level, this means you must adjust the army’s DCs and check modifiers as detailed under [[rule:basic-armies-by-level|Basic Armies by Level]].\n\n### Step 4—Choose Initial Tactics\n\nAll armies can know at least one tactic. When you recruit a basic army, choose its tactics from any that it qualifies for (but note cavalries and siege engines “spend” their first tactic on Overrun and Engines of War respectively). Specialized armies already have one or more tactics listed in their stat blocks; you only add tactics to these armies after they increase their level.\n\n### Step 5—Place the Army\n\nA basic army starts in the same hex as one of your kingdom’s settlements. A specialized army starts in the hex in which you first encountered and recruited them. A settlement can support any number of armies.\n\n### Step 6—Adjust Consumption\n\nWhen you recruit an army, your kingdom’s Consumption score increases by the army’s Consumption score. You don’t have to pay Food Commodities for the army immediately, but you will need to do so during the Upkeep phase of your next Kingdom turn.\n\n### Step 7—Name the Army\n\nGive your army a unique name and decide on any other flavorful elements for the army at this time if you wish. While the quality and magical nature of gear affects your army’s statistics, the specific weapon and armor types do not.\n\n### Basic Armies\n\nThe statistics for each of the basic armies present them at their minimum level.",
  "page": 65
},
{
  "id": "basic-armies-by-level",
  "name": "Basic Armies by Level",
  "namePt": "Exércitos Básicos por Nível",
  "category": "guerra",
  "summary": "Tabela de Escaneamento, CD padrão, CA, salvamentos alto/baixo, ataque e máximo de táticas por nível (1–20). O exército sobe de nível junto com o reino; ajustes de tipo (ex.: escaramuçadores –2 CA/+2 salvamentos) se aplicam por cima.",
  "tags": ["army"],
  "stats": {"Página": "66, 69"},
  "text": "The Basic Armies table lists the standard values for basic armies by level. These values can be adjusted by tactics, conditions, and gear.\n\n**Scouting** gives the army’s base scouting check, typically used to roll initiative in a War encounter.\n\n**Standard DC** is used for the army’s Recruitment DC as well as for any special abilities it might learn.\n\n**AC, Saves, and Attacks** have the values listed. Armies have a high save and a low save, but which is which depends on the army. An army uses the same attack modifier for melee and ranged Strikes, but not all have both forms of attack.\n\n**Max Tactics** lists the maximum number of tactics the army can know at any one time. (Armies learn tactics with the [[activity:train-army|Train Army]] activity.)\n\n### Basic Armies\n\n| Level | Scouting | Standard DC | AC | High Save | Low Save | Attack | Max Tactics |\n|---|---|---|---|---|---|---|---|\n| 1 | +7 | 15 | 16 | +10 | +4 | +9 | 1 |\n| 2 | +8 | 16 | 18 | +11 | +5 | +11 | 1 |\n| 3 | +9 | 18 | 19 | +12 | +6 | +12 | 1 |\n| 4 | +11 | 19 | 21 | +14 | +8 | +14 | 2 |\n| 5 | +12 | 20 | 22 | +15 | +9 | +15 | 2 |\n| 6 | +14 | 22 | 24 | +17 | +11 | +17 | 2 |\n| 7 | +15 | 23 | 25 | +18 | +12 | +18 | 2 |\n| 8 | +16 | 24 | 27 | +19 | +13 | +20 | 3 |\n| 9 | +18 | 26 | 28 | +21 | +15 | +21 | 3 |\n| 10 | +19 | 27 | 30 | +22 | +16 | +23 | 3 |\n| 11 | +21 | 28 | 31 | +24 | +18 | +24 | 3 |\n| 12 | +22 | 30 | 33 | +25 | +19 | +26 | 4 |\n| 13 | +23 | 31 | 34 | +26 | +20 | +27 | 4 |\n| 14 | +25 | 32 | 36 | +28 | +22 | +29 | 4 |\n| 15 | +26 | 34 | 37 | +29 | +23 | +30 | 4 |\n| 16 | +28 | 35 | 39 | +30 | +25 | +32 | 5 |\n| 17 | +29 | 36 | 40 | +32 | +26 | +33 | 5 |\n| 18 | +30 | 38 | 42 | +33 | +27 | +35 | 5 |\n| 19 | +32 | 39 | 43 | +35 | +29 | +36 | 5 |\n| 20 | +33 | 40 | 45 | +36 | +30 | +38 | 6 |",
  "page": 69
},
{
  "id": "leveling-up-your-armies",
  "name": "Leveling Up Your Armies",
  "namePt": "Subindo o Nível dos Exércitos",
  "category": "guerra",
  "summary": "Quando o reino sobe de nível, todos os exércitos também sobem e usam os valores da tabela. Novos espaços de tática não vêm de graça: é preciso Treinar Exército.",
  "tags": ["army"],
  "stats": {"Página": "66"},
  "text": "When your kingdom gains a level, each army gains a level as well, increasing its stats as detailed on the [[rule:basic-armies-by-level|Basic Armies]] table. When an army increases its level, it may also increase the maximum number of tactics it can know—these new tactics are not gained automatically, but must instead be learned through the use of the [[activity:train-army|Train Army]] activity.",
  "page": 66
},
{
  "id": "specialized-armies",
  "name": "Specialized Armies",
  "namePt": "Exércitos Especializados",
  "category": "guerra",
  "summary": "Exige relações diplomáticas com o grupo e Recrutar Exército via Statecraft; só um por grupo. Sobe ao nível do reino usando a tabela básica + ajustes próprios; táticas únicas não podem ser trocadas.",
  "tags": ["army"],
  "stats": {"Perícia": "Statecraft", "Página": "66–67"},
  "text": "To recruit a specialized army, you must first establish diplomatic relations with the associated group, after which you can attempt the [[activity:recruit-army|Recruit Army]] activity using a Statecraft check. Only one specialized army can be recruited from each group. Your GM has additional details on specialized armies and can provide their stats when needed.\n\n**DC and Modifier Adjustments:** As with basic armies, specialized armies immediately adjust upward in level to match the level of the PCs’ kingdom, but unlike basic armies, the DCs and checks for specialized armies have different baselines. In stat blocks for specialized armies, the DCs and modifiers are given for that army at its minimum level, followed by an adjustment value in parenthesis. When the PCs recruit a specialized army at a level above its minimum, calculate its DCs and modifiers by starting with the values for a basic army of that level from the [[rule:basic-armies-by-level|Basic Armies]] table then applying the adjustment values given here.\n\n**Unique Tactics:** Specialized armies possess at least one unique tactic. These tactics count against the maximum tactics the army can know, and these unique tactics cannot be replaced.",
  "page": 66
},
{
  "id": "army-hit-points",
  "name": "Army Hit Points",
  "namePt": "Pontos de Vida de Exército",
  "category": "guerra",
  "summary": "PV de exército só caem por ações de guerra: um Golpe bem-sucedido tira 1 PV (2 no crítico). PV não se recuperam sozinhos após a batalha.",
  "tags": ["army"],
  "stats": {"Página": "66"},
  "text": "As with creatures and objects, armies have Hit Points, but an army’s HP cannot be reduced by damage—they are reduced only as the result of a war action. Typically, a successful army Strike reduces the target army’s HP by 1, or by 2 on a critical hit. An army’s HP doesn’t automatically recover at the end of a battle.",
  "page": 66
},
{
  "id": "army-gear",
  "name": "Army Gear",
  "namePt": "Equipamento de Exército",
  "category": "guerra",
  "summary": "Exércitos começam com equipamento básico cosmético; melhorias vêm de Equipar Exército. Equipamento novo do mesmo tipo substitui o antigo (abate o RP já gasto). Pode ser transferido entre exércitos no mesmo hexágono.",
  "tags": ["army", "gear"],
  "stats": {"Página": "67–68"},
  "text": "When you recruit a new army, it’s outfitted with basic gear. The exact nature of this gear is largely cosmetic—an infantry army armed with longswords will do the same potential amount of damage as one armed with clubs or spears or scythes. You can upgrade an army’s gear by taking the [[activity:outfit-army|Outfit Army]] activity.\n\nIf you outfit an army with a type of gear the army is already outfitted with, the new gear replaces the old gear; if you spent RP on the old gear, you can deduct that RP cost from the cost of the new gear.\n\n### Army Gear Name — Item [Level]\n\n*Traits*\n\n**Price** This lists the gear’s price in RP. (Gear that has multiple types includes a Price for each type instead.) The section after the line describes the gear.\n\n**Type** If multiple types of the gear exist, entries here indicate the name of each type, its level, its price, and any other relevant details or alterations from the above description.\n\n### Transferring Gear\n\nYou may transfer gear from one army to another, provided the army receiving the gear is high enough level to utilize the gear in question, and provided both armies are located in the same hex. This transfer does not require an activity to perform, but it must take place during Downtime.\n\nIf an army with gear is destroyed, all of its gear is destroyed. If an army with gear is disbanded, you can transfer its gear to another army as part of the [[activity:disband-army|Disband Army]] activity; if you don’t do so, the gear is lost.",
  "page": 67
},
{
  "id": "whos-in-an-army",
  "name": "Who’s in an Army?",
  "namePt": "Quem Compõe um Exército?",
  "category": "guerra",
  "summary": "Exércitos básicos são majoritariamente humanos; outras ancestralidades não mudam as estatísticas. Um exército de outra ancestralidade (opção do Mestre) deve pegar Visão no Escuro, Olhos Aguçados ou Visão na Penumbra como 1ª tática.",
  "tags": ["army"],
  "stats": {"Página": "68"},
  "text": "As the majority of citizens of the PCs’ kingdom are assumed to be humans, the majority of the soldiers in a basic army are humans as well. Other ancestries may also be part of the army, but not enough to adjust the basic assumptions of the army’s abilities. For example, having some dwarves in a mostly human army won’t grant the entire army darkvision. There are some tactics that allow armies to specifically train to take advantage of ancestry abilities like this, and some of the specialized armies you’ll eventually have the chance to recruit are made up entirely of ancestries other than humans.\n\nAt the GM’s option, the PCs could recruit a basic army comprised entirely of one of the core ancestries other than human. The easiest way to model these armies is to require them to take [[tactic:darkvision|Darkvision]], [[tactic:keen-eyed|Keen Eyes]], or [[tactic:low-light-vision|Low-Light vision]] (as appropriate for the ancestry) as their first tactic.",
  "page": 68
},
{
  "id": "army-tactics",
  "name": "Army Tactics",
  "namePt": "Táticas de Exército",
  "category": "guerra",
  "summary": "Táticas são aprendidas com Treinar Exército. Requisitos: nível do exército ≥ nível da tática e tipo do exército listado nos traços. Nenhuma tática pode ser tomada duas vezes (salvo quando o texto permite).",
  "tags": ["army", "tactic"],
  "stats": {"Página": "68"},
  "text": "When you recruit a basic army, choose its initial tactics from the following list; when you recruit a specialized army, it may already know tactics from this list in addition to its own unique tactics. Armies can learn new tactics using the [[activity:train-army|Train Army]] activity. To qualify for a tactic, the army’s level must be greater than or equal to that tactic’s level, and the army’s type must be listed as a trait for that tactic. An army cannot have a single tactic more than once.",
  "page": 68
},
{
  "id": "war-encounters",
  "name": "War Encounters",
  "namePt": "Encontros de Guerra",
  "category": "guerra",
  "summary": "Batalhas abstratas jogadas em Downtime, iniciadas por Ofensiva Estratégica (resolvida logo após o turno de reino) ou ao topar com exércitos inimigos durante a hexploração.",
  "tags": ["warfare", "downtime"],
  "stats": {"Página": "70"},
  "text": "War encounters aren’t meant to serve as a precise and detailed simulation of the complexities of a mass combat event, but rather as a quick and engaging way to play out these clashes without detracting too much from the focus of a Kingmaker Campaign: the stories and adventures of the PCs themselves.\n\nA war encounter plays out during Downtime, as the result of an Offensive Gambit or hexploration.\n\n**Offensive Gambit:** You can initiate an [[activity:offensive-gambit|Offensive Gambit]] activity against the enemy during the Army Activities step of the Kingdom turn. In this case, the war encounter takes place immediately after the Kingdom turn resolves.\n\n**Hexploration:** During hexploration, if the PCs are traveling with at least one army, they can encounter enemy armies. If either the PCs or the enemy initiate an attack, it immediately starts a war encounter.",
  "page": 70
},
{
  "id": "player-characters-in-battles",
  "name": "Player Characters in Battles",
  "namePt": "Personagens Jogadores nas Batalhas",
  "category": "guerra",
  "summary": "Um PJ lutando num exército dá +1 de status nos testes de Moral dele. Melhor: PJs enfrentam um inimigo específico; vencer melhora o resultado da batalha em 1 grau, perder (ou deixar fugir) piora em 1 grau.",
  "tags": ["warfare"],
  "stats": {"Bônus de PJ": "+1 status em Moral", "Página": "70–71"},
  "text": "In a war encounter, the focus is on a clash between opposing armies on the field of battle. These rules don’t work particularly well when an army attacks a single target—such encounters are better played out with the PCs facing the threat themselves.\n\nBut what if the PCs want to fight with their soldiers on the field of battle? For the most part, a PC who fights in an army won’t noticeably affect that army’s stats. Having a famous (or infamous) founder of the kingdom fighting at your side in battle can bolster an army’s mindset, though, so if a PC chooses to fight in this way, they grant a +1 status bonus to that army’s Morale checks.\n\nA better way to incorporate PCs in battles is to have them confront specific singular enemies on the field of battle while the armies themselves fight it out all around them. In such a case, play out the war encounter to its completion to determine the degree of success achieved (see [[rule:victory-or-defeat|Victory or Defeat]]), then play out the battle between the PCs and their foe(s). If the PCs win this battle, the result of the war encounter is improved one degree, but if the PCs lose their battle or the enemy escapes, the result of the war encounter is worsened one degree.",
  "page": 70
},
{
  "id": "the-battlefield",
  "name": "The Battlefield",
  "namePt": "O Campo de Batalha",
  "category": "guerra",
  "summary": "Posições abstratas: Próximo (só ataques à distância), Engajado (corpo a corpo; até 4 inimigos) e Distante (fora da grade; ataques à distância com –5).",
  "tags": ["warfare"],
  "stats": {"Engajado": "até 4 exércitos", "Distante": "–5 em Golpes à distância", "Página": "71"},
  "text": "Armies can move across the battlefield to engage enemies, to retreat and regroup, and seek terrain advantages during their war actions, but their relative positions on the battlefield remain abstract throughout the encounter. What does matter is relative position between armies. During a war encounter, armies can be in one of the following three relative positions. Two of these positions—engaged and distant—are also conditions.\n\n**Near:** When war encounters begin, the armies involved are normally considered near—close enough to advance and engage with a foe, but far enough to avoid direct conflict. An army cannot attempt melee Strikes against an enemy that is near—only ranged Strikes. Indicate an army is near by placing its token on the grid in any square not adjacent to another army.\n\n**Engaged:** An army that is engaged can attempt melee Strikes against other armies it is engaged with. Indicate armies that are engaged with each other by placing their tokens adjacent to one another. An army can be engaged with up to four armies at once. (See [[condition:engaged|Engaged]].)\n\n**Distant:** An army that attempts to disengage or retreat can move to a distant point on the battlefield. Attacks on a distant army are possible via ranged Strikes, but at a –5 penalty for the range. Indicate a distant army’s position by placing its token or miniature on the table just off the edge of the grid. (Armies that manage to flee the battle entirely are taken off the table.) (See [[condition:distant|Distant]].)",
  "page": 71
},
{
  "id": "battlefield-terrain-features",
  "name": "Battlefield Terrain Features",
  "namePt": "Características de Terreno do Campo de Batalha",
  "category": "guerra",
  "summary": "Escuridão/névoa densa: todos ocultos, distantes não detectados, –4 Escaneamento. Terreno difícil: –2 Manobra. Penumbra/névoa leve/chuva: +1 Manobra, –2 Escaneamento, distantes ocultos. Vento: –1/–2 à distância (–10 contra distantes).",
  "tags": ["warfare", "terrain", "weather"],
  "stats": {"Página": "71"},
  "text": "While some battles take place in open terrain, some battlefields contain additional terrain features. Relatively common battlefield terrain features are detailed below; some of the scripted war encounters in the Adventure Path feature other, specific terrain features.\n\n**Darkness or Heavy Fog:** All armies become [[condition:concealed|concealed]], and distant armies become undetected. Armies in these conditions take a –4 circumstance penalty on Scouting checks. Armies with darkvision ignore the terrain effects of darkness.\n\n**Difficult Terrain:** A war encounter that takes place in rugged mountains, swampland, or dense forests are examples of difficult battlefield terrain. Armies take a –2 circumstance penalty on Maneuver checks in difficult terrain.\n\n**Dim Light, Light Fog, or Rain:** Armies in these conditions gain a +1 circumstance bonus on Maneuver checks and take a –2 circumstance penalty on Scouting checks. Distant armies become concealed. Armies with low-light vision or darkvision ignore the terrain effects of dim light.\n\n**Wind:** Ranged Strikes take a –1 circumstance penalty in strong wind, or a –2 circumstance penalty in windstorms. The penalty for a ranged Strike on a distant army is doubled to –10 (this penalty stacks with the standard penalty to ranged Strikes in wind).",
  "page": 71
},
{
  "id": "fortifications",
  "name": "Fortifications",
  "namePt": "Fortificações",
  "category": "guerra",
  "summary": "Exércitos guarnecidos (Guarnecer Exército) ficam fortificados enquanto não usarem ações de manobra. Só exércitos de cerco danificam fortificações; se destruída, os ocupantes perdem a condição e ganham +1 abalado.",
  "tags": ["warfare", "siege"],
  "stats": {"Página": "71"},
  "text": "Some battlefields include a fortification (such as a keep, castle, wall, or trench) that can house one or more armies. An army can’t seek defense in a fortification once a battle begins; it must prepare itself and its defenses in advance during a Kingdom turn via the [[activity:garrison-army|Garrison Army]] activity. Once an army is successfully garrisoned, it gains the [[condition:fortified|fortified]] condition as long as it avoids using Maneuver war actions.\n\nIt’s possible to destroy a fortification, but only with the use of siege armies. If a fortification is destroyed, all armies that were fortified within lose that condition and increase their shaken condition value by 1. Typical AC and HP values for fortifications against siege army attacks are listed below, along with how many armies each can contain.\n\n### Fortification Statistics\n\n| Fortification Type | AC | HP | Max. Armies |\n|---|---|---|---|\n| Castle | 30 | 8 | 6 |\n| Keep | 25 | 5 | 4 |\n| Tower | 20 | 2 | 1 |\n| Trench | 15 | 1 | 1 |\n| Wall, stone | 20 | 3 | 2 |\n| Wall, wooden | 15 | 2 | 2 |",
  "page": 71
},
{
  "id": "war-encounter-structure",
  "name": "War Encounter Structure",
  "namePt": "Estrutura do Encontro de Guerra",
  "category": "guerra",
  "summary": "Cada rodada = 1 hora. Iniciativa por Escaneamento; cada exército faz 3 ações de guerra; ao fim da rodada, quem está no Limiar de Debandada testa Moral. Termina quando um lado inteiro é derrotado ou debandado.",
  "tags": ["warfare"],
  "stats": {"Rodada": "1 hora", "Ações por turno": "3", "Página": "71–72"},
  "text": "A war encounter takes place over the course of several rounds, with each round representing an hour of battle. The battle continues until all armies on one side are defeated (reduced to 0 HP) or [[condition:routed|routed]].\n\n### Step 1: Roll Initiative\n\nEach army in the battle makes a Scouting check to determine its initiative. On the first round of a war encounter, armies are usually near. (Armies that have the [[tactic:ambush|Ambush]] tactic may be able to begin a war encounter engaged; armies that have the [[tactic:opening-salvo|Opening Salvo]] tactic may be able to begin a war encounter distant.)\n\n### Step 2: Play a Round\n\nEach army takes three war actions on its turn, chosen from [[rule:war-actions|Basic War Actions]] or from any other war actions the army may have access to.\n\n### Step 3: Check for Routs\n\nAt the end of the round, after every army has acted, there’s a chance that armies might rout. An army whose HP is at or below its Rout Threshold must attempt a Morale check; the DC is equal to the highest Morale DC among the remaining enemy armies. On a critical success, that army no longer has to check for routs at this step for the remainder of the encounter (but it can still become routed from other effects). On a failure, the army increases the value of its shaken condition by 1. On a critical failure, the army becomes routed.\n\n### Step 4: Begin the Next Round\n\nAfter checking for routs, the round is over and the next one begins.\n\n### Step 5: End the Encounter\n\nOnce all armies on a side are routed or destroyed, the encounter ends; see [[rule:victory-or-defeat|Victory or Defeat]] to determine the final results of the encounter.",
  "page": 71
},
{
  "id": "morale-and-routing",
  "name": "Morale and Routing",
  "namePt": "Moral e Debandada",
  "category": "guerra",
  "summary": "Ao fim de cada rodada, exército com PV ≤ Limiar de Debandada (RT, ~metade dos PV) testa Moral contra a maior CD de Moral inimiga: crítico = imune a esse teste; falha = +1 abalado; falha crítica = debandado. Abalado 4 também causa debandada.",
  "tags": ["warfare", "morale"],
  "stats": {"CD": "Maior CD de Moral inimiga", "Página": "65, 72, 77"},
  "text": "**Morale** This modifier applies to all checks made by the army to avoid becoming shaken or to resist effects that undermine cooperation, bravery, loyalty, and such.\n\n**Rout Threshold** The army’s Rout Threshold (RT) is listed in parenthesis after its Hit Points. RT is typically half its maximum HP. An army that is resistant to fear or is particularly brave generally has a lower RT, while the rare army composed of creatures that are entirely immune to fear won’t have an RT listed at all.\n\n### Check for Routs\n\nAt the end of the round, after every army has acted, there’s a chance that armies might rout. An army whose HP is at or below its Rout Threshold must attempt a Morale check; the DC is equal to the highest Morale DC among the remaining enemy armies. On a critical success, that army no longer has to check for routs at this step for the remainder of the encounter (but it can still become routed from other effects). On a failure, the army increases the value of its shaken condition by 1. On a critical failure, the army becomes routed.\n\nSee also the [[condition:shaken|Shaken]] and [[condition:routed|Routed]] conditions, the [[waraction:rally|Rally]] war action, and the [[tactic:hold-the-line|Hold the Line]] tactic.",
  "page": 72
},
{
  "id": "victory-or-defeat",
  "name": "Victory or Defeat",
  "namePt": "Vitória ou Derrota",
  "category": "guerra",
  "summary": "Se todos os inimigos forem debandados ou derrotados, o grupo vence (teste de Warfare); se todos os seus caírem, perde (teste de Defense). Em ambos os casos o reino ganha XP de reino como se derrotasse adversários do mesmo nível.",
  "tags": ["warfare"],
  "stats": {"Vitória": "Warfare básico", "Derrota": "Defense básico", "Página": "72"},
  "text": "If all of the enemy armies were routed or defeated, the PCs won the battle; see [[rule:determining-victory|Determining Victory]] below. If all of the PCs’ armies were routed or defeated, the PCs lost the battle; see [[rule:determining-loss|Determining Loss]] below. In either case, your kingdom gains experience: each army you defeated provides the same amount of XP as defeating an adversary of the same level in encounter mode, but in this case, the rewards are in [[rule:kingdom-xp|kingdom XP]].",
  "page": 72
},
{
  "id": "determining-victory",
  "name": "Determining Victory",
  "namePt": "Determinando a Vitória",
  "category": "guerra",
  "summary": "Após vencer, faça um teste básico de Warfare para ver as consequências: no crítico, +1 PV a cada exército ferido, +1 Fama/Infâmia e –1 Agitação.",
  "tags": ["warfare"],
  "stats": {"Perícia": "Warfare", "CD": "Básica (Control DC)", "Página": "72"},
  "text": "The PCs won the battle! Roll a basic Warfare check to determine the repercussions for the kingdom.",
  "outcomes": {
    "criticalSuccess": "The damage suffered in the battle was relatively minor. Restore 1 HP to every damaged army, and at the start of your next Kingdom turn, gain one bonus Fame or Infamy point and reduce Unrest by 1.",
    "success": "The damage wasn’t as bad as it seemed. Restore 1 HP to every damaged army.",
    "failure": "The battle was hard fought, but your armies bore the results of the clash as well as could be expected.",
    "criticalFailure": "Although you won the battle, it took its toll on some of your armies. Any army that was damaged in the battle increases its shaken or weary condition value (the party chooses which) by 1."
  },
  "quick": {
    "criticalSuccess": "+1 PV a cada exército ferido; próximo turno +1 Fama/Infâmia e –1 Agitação",
    "success": "+1 PV a cada exército ferido",
    "failure": "Sem efeito adicional",
    "criticalFailure": "Exércitos feridos ganham +1 abalado ou cansado (à escolha)"
  },
  "page": 72
},
{
  "id": "determining-loss",
  "name": "Determining Loss",
  "namePt": "Determinando a Derrota",
  "category": "guerra",
  "summary": "Após perder, faça um teste básico de Defense para limitar o estrago: no crítico, derrotados voltam a 1 PV; na falha crítica, +2 abalado/cansado em todos e +1d4 Agitação.",
  "tags": ["warfare"],
  "stats": {"Perícia": "Defense", "CD": "Básica (Control DC)", "Página": "72"},
  "text": "The PCs lost the battle! Roll a basic Defense check to try to minimize damage and to determine repercussions.",
  "outcomes": {
    "criticalSuccess": "Many soldiers survived the lost battle. All defeated armies are restored to 1 HP, and one damaged army of your choice heals 1 HP.",
    "success": "One damaged army of your choice escaped the brunt of the loss—that army heals 1 HP. Gain 1 Unrest.",
    "failure": "The battle was a loss. Gain 1 Unrest.",
    "criticalFailure": "The loss has crushed your armies’ spirits. Each army that participated in the battle increases its shaken or weary condition (the party chooses which) by 2. Gain 1d4 Unrest."
  },
  "quick": {
    "criticalSuccess": "Derrotados voltam a 1 PV; um exército ferido recupera 1 PV",
    "success": "Um exército ferido recupera 1 PV; +1 Agitação",
    "failure": "+1 Agitação",
    "criticalFailure": "Todos os participantes +2 abalado ou cansado; +1d4 Agitação"
  },
  "page": 72
},
{
  "id": "traveling-with-an-army",
  "name": "Traveling with an Army",
  "namePt": "Viajando com um Exército",
  "category": "guerra",
  "summary": "PJs podem levar exércitos na hexploração: em encontros comuns o exército fica para trás; contra exércitos inimigos, inicia-se um encontro de guerra. Exército deixado para trás fica no hexágono até ser guiado ou Mobilizado.",
  "tags": ["warfare", "exploration"],
  "stats": {"Página": "73"},
  "text": "Normally, armies move through the Stolen Lands during Kingdom turns via the [[activity:deploy-army|Deploy Army]] activity, but if the PCs wish to travel with armies during hexploration—a particularly wise choice during the War of the River Kings—they can do so. In this case, when the PCs come across a non-army encounter, assume the PCs’ forces hang back while the PCs play out the encounter in encounter mode as usual. When the PCs encounter an army, they can engage it with their own army in a war encounter. If the PCs leave an army during hexploration, that army remains in its hex until the PCs return to guide it in hexploration mode again or until they move it with the Deploy Army activity during a Kingdom turn.",
  "page": 73
},
{
  "id": "war-actions",
  "name": "War Actions",
  "namePt": "Ações de Guerra",
  "category": "guerra",
  "summary": "Cada exército tem 3 ações de guerra por turno. As ações básicas (Avançar, Batalhar, Desengajar, Guardar, Reagrupar, Recuar) estão disponíveis a todos; as táticas exigem a tática correspondente.",
  "tags": ["warfare"],
  "stats": {"Página": "73–75"},
  "text": "### Basic War Actions\n\nBasic war actions are available to all armies.\n\n- [[waraction:advance|Advance]]\n- [[waraction:battle|Battle]]\n- [[waraction:disengage|Disengage]]\n- [[waraction:guard|Guard]]\n- [[waraction:rally|Rally]]\n- [[waraction:retreat|Retreat]]\n\n### Tactical War Actions\n\nThe following war actions are available only to armies with the appropriate tactic.\n\n- [[waraction:all-out-assault|All-Out Assault]]\n- [[waraction:battlefield-medicine|Battlefield Medicine]]\n- [[waraction:counterattack|Counterattack]]\n- [[waraction:covering-fire|Covering Fire]]\n- [[waraction:defensive-stance|Defensive Stance]]\n- [[waraction:dirty-fighting|Dirty Fighting]]\n- [[waraction:false-retreat|False Retreat]]\n- [[waraction:feint|Feint]]\n- [[waraction:outflank|Outflank]]\n- [[waraction:overwhelming-bombardment|Overwhelming Bombardment]]\n- [[waraction:taunt|Taunt]]",
  "page": 73
},
{
  "id": "key-terms",
  "name": "Key Terms",
  "namePt": "Termos-Chave (Traços de Ações de Guerra)",
  "category": "guerra",
  "summary": "Traços das ações de guerra: tipo de exército (só esse tipo usa), Ataque (contra CA; aumenta penalidade de ataques múltiplos), Manobra (teste de Manobra contra CD de Manobra) e Moral (teste de Moral contra CD de Moral).",
  "tags": ["warfare"],
  "stats": {"Página": "77"},
  "text": "You’ll see the following traits in some war actions.\n\n**Army Type Trait:** A war action that lists an army type trait (Infantry, Cavalry, Skirmisher, or Siege) can be used only by army units that have that trait.\n\n**Attack:** An attack war action functions as any other attack action. They resolve against an enemy unit’s AC, and each attack action made in a round increases the army’s multiple attack penalty (*Core Rulebook* 446).\n\n**Maneuver:** This war action pits one army’s mobility against another’s. When an army attempts such an action, it must attempt a Maneuver check against the opposing army’s Maneuver DC.\n\n**Morale:** This war action pits one army’s conviction and bravery against another’s. When an army attempts such an action, it must attempt a Morale check against the opposing army’s Morale DC.",
  "page": 77
},
{
  "id": "powerful-magic",
  "name": "Powerful Magic",
  "namePt": "Magia Poderosa",
  "category": "guerra",
  "summary": "Opcional: PJs podem derrotar automaticamente (sem XP) exércitos 5+ níveis abaixo; contra exércitos de nível próximo, magia dá +1 a +2 de circunstância em testes do encontro ou altera o terreno.",
  "tags": ["warfare", "magic"],
  "stats": {"Bônus": "+1 a +2 circunstância", "Página": "75"},
  "text": "Some spells and magic items, particularly at higher levels, could potentially have significant effects on the outcome of mass conflict. For example, a *fireball* can burn many targets at once. *Earthquake* can not only destroy large portions of a battlefield, but they can potentially devastate entire armies. And powerful monsters like dragons can simply fly above an army and rain down devastation in the form of breath weapons. The rules presented here do not allow for this level of interaction between individual characters and full-scale armies, but you can allow it if you wish.\n\nIn cases where the PCs wish to use powerful magic to help resolve potential war encounters, feel free to let them automatically defeat armies that are 5 levels or more lower than the party’s level—this represents the PCs using their resources to defeat trivial foes, and the PCs shouldn’t earn XP for such a tactic. Of course, most of the armies the PCs encounter in this adventure will be close to their own levels, so such methods aren’t appropriate. In these cases, the easiest solution is to simply give the PCs a +1 to +2 circumstance bonus to any war encounter checks they make to represent the advantage they have using this magic. Alternately, powerful spells can simply alter the landscape of the battlefield—see [[rule:battlefield-terrain-features|Battlefield Terrain Features]] for more details.\n\nNote that if you allow the PCs to do this, consider allowing NPC enemies the same for their forces as you see fit.",
  "page": 75
},
{
  "id": "army-conditions",
  "name": "Army Conditions",
  "namePt": "Condições de Exército",
  "category": "guerra",
  "summary": "Condições duram até a duração acabar ou serem removidas; algumas sobrepõem outras. Condições com valor costumam dar bônus/penalidade igual ao valor e caem com Recuperar Exército ou com o tempo; valor 0 encerra.",
  "tags": ["army", "condition"],
  "stats": {"Página": "76"},
  "text": "When an army becomes affected by a condition, that condition’s effects last until the condition’s stated duration ends or the condition is removed. As with character conditions, some army conditions override others (*Core Rulebook* 618).\n\nSome army conditions have a numerical condition value. This value conveys the severity of a condition, and such conditions often give a bonus or penalty equal to their value. These values can often be reduced by taking the [[activity:recover-army|Recover Army]] activity or simply by waiting, as described in the condition itself. If a condition value is ever reduced to 0, the condition ends.\n\n- [[condition:concealed|Concealed]]\n- [[condition:defeated|Defeated]]\n- [[condition:destroyed|Destroyed]]\n- [[condition:distant|Distant]]\n- [[condition:efficient|Efficient]]\n- [[condition:engaged|Engaged]]\n- [[condition:fortified|Fortified]]\n- [[condition:lost|Lost]]\n- [[condition:mired|Mired]]\n- [[condition:outflanked|Outflanked]]\n- [[condition:pinned|Pinned]]\n- [[condition:routed|Routed]]\n- [[condition:shaken|Shaken]]\n- [[condition:weary|Weary]]",
  "page": 76
}
];

KM.armyActivities = [
{
  "id": "deploy-army",
  "name": "Deploy Army",
  "namePt": "Mobilizar Exército",
  "step": "army",
  "skills": [
    {"skill": "exploration", "proficiency": "untrained", "note": "Destino a até 20 hexágonos; estrada entre origem e destino melhora 1 grau"},
    {"skill": "boating", "proficiency": "untrained", "note": "Origem e destino ligados por água; até 20 hexágonos pela rota"},
    {"skill": "magic", "proficiency": "master", "note": "Qualquer local a até 30 hexágonos"}
  ],
  "dc": "Control DC; +5 se cruzar a fronteira do seu reino, +10 se cruzar a de um reino inimigo",
  "tags": ["downtime", "army"],
  "summary": "Move o exército pelo mês: até 20 hexágonos (Exploration/Boating) ou 30 (Magic, mestre). Marcha forçada dá +4 no teste, mas +1 cansado (+2 se falhar).",
  "quick": {
    "criticalSuccess": "Chega ao destino e fica eficiente",
    "success": "Chega ao destino",
    "failure": "Chega; +1 cansado; CD 6 simples ou –1 PV",
    "criticalFailure": "Fica perdido; +1d4 Agitação; CD 11 simples ou –1 PV"
  },
  "text": "The army moves through your kingdom or beyond. Since this travel occurs over the course of the entire month that preceded the Kingdom turn, the ground an army covers when it deploys can be quite extensive. You can Deploy an Army with an Exploration, Boating, or Magic check.\n\nWhen you use an Exploration check, choose a location within 20 hexes of the army’s current hex. If the army’s starting point and ending point are connected by a road, increase the result one degree of success. Count roadless hexes that contain swamps or mountains, or each hex where you must cross a river or lake without the aid of a bridge, as two hexes. You can issue orders to force march. Doing so grants a +4 circumstance bonus on the check, but causes the army to increase its [[condition:weary|weary]] condition by 1 (or by 2, if you fail the check).\n\nWhen you use a Boating check, the army’s starting point and ending point must be connected by a body of water; choose any location within 20 hexes along this route.\n\nYou must be at least master in Magic to attempt a Magic check. When you do so, choose any location within 30 hexes of the army’s current hex, then roll your check.\n\nIf the army’s deployment causes it to cross your kingdom’s border, the DC increases by 5. If the army’s deployment causes it to cross an enemy kingdom’s border, the DC instead increases by 10.",
  "outcomes": {
    "criticalSuccess": "The army arrives much more quickly than you anticipated; it arrives at its destination and then becomes [[condition:efficient|efficient]].",
    "success": "The army arrives at its destination.",
    "failure": "The army arrives at its destination, but ran into some sort of trouble along the way. Increase the army’s weary condition by 1 and attempt a DC 6 flat check; on a failure, reduce the army’s HP by 1.",
    "criticalFailure": "Rather than arriving at its destination, the army becomes [[condition:lost|lost]] until it recovers from this condition. Increase Unrest by 1d4, and attempt a DC 11 flat check; on a failure, reduce the army’s HP by 1."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Exploration, Boating; Magic (mestre)", "CD": "Control DC (+5 fronteira própria / +10 fronteira inimiga)", "Alcance": "20 hexágonos (30 com Magic)", "Página": "62"},
  "page": 62
},
{
  "id": "disband-army",
  "name": "Disband Army",
  "namePt": "Dispersar Exército",
  "step": "army",
  "skills": [],
  "dc": "Nenhum (sem teste)",
  "tags": ["downtime", "army"],
  "summary": "Dispensa o exército sem teste, removendo seu Consumo do reino. O equipamento pode ser transferido para outro exército nesse momento ou se perde.",
  "text": "You can choose to disband an army with no check needed. If the army consisted of conscripts from your kingdom, the soldiers revert to being citizens. If the army was recruited from creatures encountered in the wilds, they return to their homes. A disbanded army no longer contributes to your kingdom’s Consumption.",
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "—", "CD": "—", "Página": "62"},
  "page": 62
},
{
  "id": "garrison-army",
  "name": "Garrison Army",
  "namePt": "Guarnecer Exército",
  "step": "army",
  "skills": [
    {"skill": "defense", "proficiency": "untrained", "note": "Em hexágono com Refúgio"},
    {"skill": "politics", "proficiency": "untrained", "note": "Em assentamento"},
    {"skill": "engineering", "proficiency": "untrained", "note": "Em hexágono com Local de Trabalho"}
  ],
  "dc": "Control DC; +5 se o hexágono não for do seu reino, +10 se for de um reino inimigo",
  "tags": ["downtime", "army"],
  "summary": "Põe o exército numa fortificação (Refúgio, assentamento ou Local de Trabalho), tornando-o fortificado (+4 CA). No crítico ainda reduz o Consumo dele em 2 (mín. 1).",
  "quick": {
    "criticalSuccess": "Fortificado até ser mobilizado; Consumo –2 (mín. 1)",
    "success": "Fortificado até ser mobilizado",
    "failure": "Fortificado só até o próximo turno de reino",
    "criticalFailure": "Não fortifica; bloqueado ali por 4 turnos; +1 Agitação"
  },
  "requirements": "The army is in the same hex as a Refuge, Settlement, or Work Site.",
  "text": "You move an army into a fortification and assign them to guard it. In order to garrison, the army must be located in a hex that contains a Refuge, Settlement, or Work Site. If you’re garrisoning the army in a Refuge hex, attempt a basic Defense check. If you’re garrisoning the army in a settlement, attempt a basic Politics check. If you’re garrisoning the army in a Work Site hex, attempt a basic Engineering check. This check’s DC increases by 5 if the hex is not part of your kingdom, or by 10 if the location is part of an enemy kingdom.",
  "outcomes": {
    "criticalSuccess": "The army becomes [[condition:fortified|fortified]] until it is deployed. Additionally, the efficiency of the garrisoning reduces this army’s Consumption by 2 (to a minimum of 1) until it is deployed.",
    "success": "The army becomes fortified until it is deployed.",
    "failure": "The army becomes fortified until the next Kingdom turn begins, at which point you must use this activity again to maintain the fortified condition.",
    "criticalFailure": "Your army clashes with local citizens, abuses their authority, lets their watchful readiness slack, and/or provokes confrontations where they are not needed. It does not become fortified, and you cannot attempt to garrison that army at this location again for 4 Kingdom turns. Increase Unrest by 1."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Defense (Refúgio), Politics (assentamento), Engineering (Local de Trabalho)", "CD": "Control DC (+5 fora do reino / +10 reino inimigo)", "Página": "62"},
  "page": 62
},
{
  "id": "offensive-gambit",
  "name": "Offensive Gambit",
  "namePt": "Ofensiva Estratégica",
  "step": "army",
  "skills": [
    {"skill": "intrigue", "proficiency": "untrained", "note": "Para surpreender o inimigo"},
    {"skill": "warfare", "proficiency": "untrained", "note": "Para intimidar o inimigo"}
  ],
  "dc": "CD de Escaneamento (Scouting DC) do exército inimigo",
  "tags": ["downtime", "army"],
  "summary": "Ordena um ataque a um exército inimigo no mesmo hexágono; o encontro de guerra ocorre após o turno de reino. O teste (opcional) dá +2 de circunstância na iniciativa.",
  "quick": {
    "criticalSuccess": "+2 iniciativa para seus exércitos; um inimigo fica abalado 1",
    "success": "+2 iniciativa para seus exércitos no hexágono",
    "failure": "Nenhuma vantagem",
    "criticalFailure": "Inimigos do hexágono ganham +4 na iniciativa"
  },
  "requirements": "You have at least one army in the same hex as an enemy army.",
  "text": "You order an attack against an enemy army, causing a [[rule:war-encounters|war encounter]] to begin after this Kingdom turn ends. No check is necessary if you wish to engage the enemy without attempting to gain an advantage in initiative. If you want to gain an advantage by surprising the enemy, attempt an Intrigue check. If you want to gain an advantage by intimidating the enemy, attempt a Warfare check. In either case, the DC is equal to the enemy army’s Scouting DC.",
  "outcomes": {
    "criticalSuccess": "Your approach surprises or intimidates the enemy. Your armies in this hex gain a +2 circumstance bonus on their initiative checks, and one enemy army of the party’s choice in this hex becomes [[condition:shaken|shaken]] 1.",
    "success": "Your approach gives you an advantage. Your armies in this hex gain a +2 circumstance bonus on their initiative checks.",
    "failure": "You gain no advantage in the battle.",
    "criticalFailure": "Not only do you fail to gain advantage, but the enemy forces have anticipated the attack. Enemy armies in this hex at the time of the Offensive Gambit gain a +4 circumstance bonus on their initiative checks in any resulting war encounters."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Intrigue ou Warfare", "CD": "Scouting DC do inimigo", "Página": "62–63"},
  "page": 62
},
{
  "id": "outfit-army",
  "name": "Outfit Army",
  "namePt": "Equipar Exército",
  "step": "army",
  "skills": [
    {"skill": "trade", "proficiency": "untrained", "note": "Comprando o equipamento (custa RP)"},
    {"skill": "warfare", "proficiency": "untrained", "note": "Distribuindo equipamento ganho em batalha (sem custo)"},
    {"skill": "engineering", "proficiency": "untrained", "note": "Listado na tabela de Atividades de Exército"},
    {"skill": "magic", "proficiency": "untrained", "note": "Listado na tabela de Atividades de Exército"}
  ],
  "dc": "Control DC (teste básico)",
  "tags": ["downtime", "army"],
  "summary": "Dá equipamento melhor ao exército (nível ≤ nível do exército e do reino). Comprar usa Trade e custa o RP do item; equipamento mágico exige reino especialista em Magic. Distribuir espólio usa Warfare e é grátis.",
  "quick": {
    "criticalSuccess": "Equipado e fica eficiente",
    "success": "Equipado imediatamente",
    "failure": "Falha; RP gasto é devolvido",
    "criticalFailure": "Falha; RP gasto NÃO é devolvido"
  },
  "text": "You provide your army with better gear. Choose what sort of gear you wish to provide your army with from the list of [[rule:army-gear|army gear]]. The level of the gear chosen must be equal to or less than the army’s level. If you’re crafting or purchasing gear, the level of the gear chosen must be equal to or less than your kingdom level. If you’re distributing resources gained from battle, the level of the gear chosen must be equal to or less than the highest level of an enemy army defeated in that battle.\n\nIf you’re purchasing the gear, this activity requires a basic Trade check and costs the standard amount of RP for the gear; you cannot purchase magic gear unless your kingdom is at least expert rank in Magic.\n\nIf you’re distributing gear gained from battle, this activity requires a basic Warfare check and does not cost RP.",
  "outcomes": {
    "criticalSuccess": "The gear proved particularly easy to outfit, and the army becomes [[condition:efficient|efficient]].",
    "success": "The gear is sufficient, and your army becomes outfitted with it immediately.",
    "failure": "The gear proves to be unusable and the attempt to outfit the army fails. If you spent RP on the check, it is refunded.",
    "criticalFailure": "As failure, but spent RP is not refunded."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Trade (comprar), Warfare (espólio); tabela também lista Engineering e Magic", "CD": "Control DC", "Custo": "Preço do equipamento em RP (se comprado)", "Página": "63"},
  "page": 63
},
{
  "id": "recover-army",
  "name": "Recover Army",
  "namePt": "Recuperar Exército",
  "step": "army",
  "skills": [
    {"skill": "defense", "proficiency": "untrained", "note": "Danificado ou Cansado"},
    {"skill": "folklore", "proficiency": "expert", "note": "Danificado"},
    {"skill": "politics", "proficiency": "master", "note": "Derrotado"},
    {"skill": "warfare", "proficiency": "expert", "note": "Derrotado ou Abalado"},
    {"skill": "exploration", "proficiency": "untrained", "note": "Perdido"},
    {"skill": "wilderness", "proficiency": "expert", "note": "Perdido"},
    {"skill": "engineering", "proficiency": "untrained", "note": "Atolado ou Imobilizado"},
    {"skill": "magic", "proficiency": "expert", "note": "Atolado ou Imobilizado"},
    {"skill": "arts", "proficiency": "untrained", "note": "Abalado"},
    {"skill": "arts", "proficiency": "expert", "note": "Cansado"}
  ],
  "dc": "Control DC (teste básico); +5 para recuperar de derrotado",
  "tags": ["downtime", "army"],
  "summary": "Remove ou reduz uma aflição do exército (abalado, cansado, atolado, perdido etc.) ou recupera PV; a perícia depende da condição. Falha crítica num exército derrotado o destrói.",
  "quick": {
    "criticalSuccess": "Valor da aflição –2 (ou +2 PV); sem valor: removida",
    "success": "Valor da aflição –1 (ou +1 PV); sem valor: removida",
    "failure": "Aflição não é removida",
    "criticalFailure": "Não remove; +1 Agitação; exército derrotado é destruído"
  },
  "text": "When an army endures ill fortune, it can become afflicted by negative conditions. You can use the Recover Army activity to work at removing an affliction with a basic skill check (this DC increases by 5 if you are attempting to Recover from the [[condition:defeated|defeated]] condition); the skill required for the check depends on the affliction (see the table below).\n\n### Recovering Army Conditions\n\n| Condition | Skill Check to Recover |\n|---|---|\n| Damaged | Defense or Folklore (expert) |\n| Defeated | Politics (master) or Warfare (expert) |\n| Lost | Exploration or Wilderness (expert) |\n| Mired or Pinned | Engineering or Magic (expert) |\n| Shaken | Arts or Warfare (expert) |\n| Weary | Arts (expert) or Defense |",
  "outcomes": {
    "criticalSuccess": "You reduce the affliction’s value by 2 (or in the case of a damaged army, increase its HP by 2 up to its maximum). If the affliction does not have a value, it is removed.",
    "success": "As critical success but you reduce the affliction’s value by 1 (or in the case of a damaged army, increase its HP by 1 up to its maximum).",
    "failure": "You fail to remove the affliction.",
    "criticalFailure": "You fail to remove the affliction and your soldier’s lowered morale spreads discontent; increase Unrest by 1. If you were attempting to recover a defeated army, the army is destroyed."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Depende da condição (ver tabela)", "CD": "Control DC (+5 se derrotado)", "Página": "63–64"},
  "page": 63
},
{
  "id": "recruit-army",
  "name": "Recruit Army",
  "namePt": "Recrutar Exército",
  "step": "leadership",
  "skills": [
    {"skill": "warfare", "proficiency": "untrained", "note": "Exército básico recrutado entre os cidadãos"},
    {"skill": "statecraft", "proficiency": "untrained", "note": "Exército especializado (exige relações diplomáticas)"}
  ],
  "dc": "CD de Recrutamento do exército (CD padrão do nível)",
  "tags": ["downtime", "leadership"],
  "summary": "Atividade de Liderança: recruta um exército básico (Warfare) ou especializado (Statecraft) contra a CD de Recrutamento. Soma o Consumo do exército ao reino.",
  "quick": {
    "criticalSuccess": "Exército recrutado e eficiente",
    "success": "Exército recrutado",
    "failure": "Falha no recrutamento",
    "criticalFailure": "+1 Agitação; não pode recrutar de novo até o próximo turno"
  },
  "text": "Note that you pursue this activity during the Leadership step of the Activity phase. Either you recruit an army from your kingdom’s citizens, or you secure the allegiance of a specialized army you encountered in the Stolen Lands. If you’re recruiting an army from your kingdom’s citizens, choose one of the [[rule:recruiting-an-army|basic armies]] and attempt a Warfare check against the army’s Recruitment DC. If you’re securing a specialized army, you must attempt a Statecraft check against the Recruitment DC; statistics for these armies are available to your GM and will be revealed during play.",
  "outcomes": {
    "criticalSuccess": "You recruit the army; it becomes [[condition:efficient|efficient]].",
    "success": "You recruit the army.",
    "failure": "You fail to recruit the army.",
    "criticalFailure": "Many of the individuals in the army you attempted to recruit took offense at the attempt. Gain 1 Unrest, and you cannot attempt to recruit an army again until the next Kingdom turn."
  },
  "stats": {"Etapa": "Liderança", "Perícia": "Warfare (básico) ou Statecraft (especializado)", "CD": "Recruitment DC do exército", "Página": "63–64"},
  "page": 63
},
{
  "id": "train-army",
  "name": "Train Army",
  "namePt": "Treinar Exército",
  "step": "army",
  "skills": [
    {"skill": "scholarship", "proficiency": "untrained", "note": ""},
    {"skill": "warfare", "proficiency": "untrained", "note": ""}
  ],
  "dc": "CD de Treinamento da tática",
  "tags": ["downtime", "army"],
  "summary": "Ensina uma tática ao exército (Scholarship ou Warfare contra a CD de Treinamento). Se já estiver no máximo de táticas, a nova substitui uma antiga à sua escolha.",
  "quick": {
    "criticalSuccess": "Aprende a tática e fica eficiente",
    "success": "Aprende a tática",
    "failure": "Não aprende",
    "criticalFailure": "Não aprende; +1 cansado"
  },
  "text": "You train an army in the use of a tactic. Choose one of the [[rule:army-tactics|tactics]], then attempt a Scholarship or Warfare check against the tactic’s Training DC. If your army has already learned its maximum number of tactics, the newly learned tactic replaces a previously learned tactic of your choice.",
  "outcomes": {
    "criticalSuccess": "The army learns the tactic and then becomes [[condition:efficient|efficient]].",
    "success": "The army learns the tactic.",
    "failure": "The army fails to learn the tactic.",
    "criticalFailure": "The army not only fails to learn the tactic but becomes frustrated and exhausted from the training; increase the army’s [[condition:weary|weary]] condition by 1."
  },
  "stats": {"Etapa": "Atividades de Exército", "Perícia": "Scholarship ou Warfare", "CD": "Training DC da tática", "Página": "64"},
  "page": 64
}
];

KM.conditions = [
{
  "id": "concealed",
  "name": "Concealed",
  "namePt": "Oculto",
  "summary": "+2 de circunstância em testes de Manobra; ataques contra o exército sofrem –2 de circunstância. Dura enquanto durar o efeito que concede a ocultação.",
  "tags": ["army", "condition"],
  "stats": {"Efeito": "+2 Manobra; –2 em ataques contra", "Página": "76"},
  "text": "A concealed army is tougher to target, and gains a +2 circumstance bonus on its Maneuver checks. Attacks against it take a –2 circumstance penalty. This condition lasts as long as the event granting the concealment persists.",
  "page": 76
},
{
  "id": "defeated",
  "name": "Defeated",
  "namePt": "Derrotado",
  "summary": "Exército com 0 PV: não faz ações de guerra, só se move 1 hexágono por Mobilizar e só pode ser Dispersado ou Recuperado (CD +5). Se sofrer dano, CD 16 simples ou é destruído.",
  "tags": ["army", "condition"],
  "stats": {"Recuperação": "Politics (mestre) ou Warfare (especialista); CD +5", "Dano enquanto derrotado": "CD 16 simples ou destruído", "Página": "76"},
  "text": "When an army has zero Hit Points, it becomes defeated. A defeated army cannot take war actions. A defeated army can be restored to 1 Hit Point with the [[activity:recover-army|Recover Army]] activity (although the basic DC is increased by 5 for this check). Any effect that restores a defeated army to at least 1 Hit Point removes the defeated condition. A defeated army can only be moved one hex at a time with the [[activity:deploy-army|Deploy Army]] activity. A defeated army can be [[activity:disband-army|Disbanded]] normally. It can’t be used for any other Army activity as long as it remains defeated.\n\nIf a defeated army takes damage, it must succeed at a DC 16 flat check or be [[condition:destroyed|destroyed]]. If all armies on a side are defeated, those armies are destroyed.",
  "page": 76
},
{
  "id": "destroyed",
  "name": "Destroyed",
  "namePt": "Destruído",
  "summary": "O exército foi aniquilado e não pode ser restaurado, só substituído por um novo. Todo o equipamento dele se perde.",
  "tags": ["army", "condition"],
  "stats": {"Página": "76"},
  "text": "The army has been completely devastated, and it cannot be restored—it can only be replaced by a new army. Any gear the army had is ruined.",
  "page": 76
},
{
  "id": "distant",
  "name": "Distant",
  "namePt": "Distante",
  "summary": "O exército recuou para longe dos inimigos e pode fugir do campo. Só pode ser atingido por Golpes à distância, com –5.",
  "tags": ["army", "condition"],
  "stats": {"Efeito": "Golpes à distância contra ele: –5", "Página": "76"},
  "text": "An army that has the distant condition has managed to retreat a fair range away from enemy armies, and is potentially poised to make an escape from the field of battle. Armies can attempt ranged Strikes against distant armies, but they take a –5 penalty on that Strike.",
  "page": 76
},
{
  "id": "efficient",
  "name": "Efficient",
  "namePt": "Eficiente",
  "summary": "Permite uma 2ª atividade de exército imediata (com –5 e sem poder gerar eficiente de novo). Se não usar, perde a condição e reduz em 1 o valor de outra condição.",
  "tags": ["army", "condition"],
  "stats": {"2ª atividade": "–5 no teste", "Alternativa": "Reduz 1 condição em 1", "Página": "76"},
  "text": "The army has performed an Army activity with such speed that it can be used to attempt a second Army activity immediately, but doing so causes it to lose the efficient condition. The second Army activity suffers a –5 penalty on its check, and the result of this second Army activity check cannot grant the efficient condition. If the army doesn’t attempt a second Army activity, it instead loses the efficient condition and reduces the value of one condition of its choice by 1.",
  "page": 76
},
{
  "id": "engaged",
  "name": "Engaged",
  "namePt": "Engajado",
  "summary": "Em combate corpo a corpo com inimigos; é necessário para fazer Golpes corpo a corpo. Usar manobra para desengajar provoca reações dos inimigos engajados.",
  "tags": ["army", "condition"],
  "stats": {"Máx. inimigos": "4", "Página": "76"},
  "text": "An army that is in close combat with one or more enemy armies becomes engaged. An army must be engaged in order to attempt melee Strikes. If an army is engaged and attempts a maneuver war action that would cause it to disengage, it provokes reactions from any enemy armies they were engaged with.",
  "page": 76
},
{
  "id": "fortified",
  "name": "Fortified",
  "namePt": "Fortificado",
  "summary": "Em posição defensiva (Guarnecer Exército): não engaja nem pode ser engajado, +4 de item na CA e em Moral para Reagrupar. Perde a condição ao usar ação de manobra.",
  "tags": ["army", "condition"],
  "stats": {"Efeito": "+4 item em CA e Moral (Reagrupar)", "Página": "76"},
  "text": "The army is in a defensive position as the result of a [[activity:garrison-army|Garrison Army]] activity. While fortified, enemy armies cannot engage the army and the army cannot engage enemy armies. A fortified army gains a +4 item bonus to its AC and to Morale checks made to rally. A fortified army that uses a maneuver war action immediately loses its fortified condition.",
  "page": 76
},
{
  "id": "lost",
  "name": "Lost",
  "namePt": "Perdido",
  "summary": "Após falha crítica em Mobilizar: o exército só pode usar Recuperar (para sair dessa condição). Ao se recuperar, o Mestre define o novo local (geralmente a meio caminho).",
  "tags": ["army", "condition"],
  "stats": {"Recuperação": "Exploration ou Wilderness (especialista)", "Página": "76–77"},
  "text": "When an army’s attempt to deploy to a new location fails, it can become lost. A lost army can take no Army activity other than [[activity:recover-army|Recover]], and that only in an attempt to remove the lost condition. When an army recovers from the lost condition, the GM decides what the army’s new location is (typically this is at an approximate midpoint between the army’s starting point and its intended destination).",
  "page": 76
},
{
  "id": "mired",
  "name": "Mired",
  "namePt": "Atolado",
  "summary": "Movimento impedido: penalidade de circunstância igual ao valor em todas as manobras e em Mobilizar Exército. Atolado 4 vira imobilizado.",
  "tags": ["army", "condition"],
  "stats": {"Valor": "Sempre tem valor", "Recuperação": "Engineering ou Magic (especialista)", "Página": "77"},
  "text": "The army’s movement is severely impaired. It may be bogged down in mud, snow, underbrush, rubble, or similar terrain, encumbered by carrying heavy burdens, or any other reason. Mired always has a value. A mired army takes a circumstance penalty on all maneuvers equal to its mired value and to [[activity:deploy-army|Deploy Army]] checks. If an army ever becomes mired 4, it becomes [[condition:pinned|pinned]].",
  "page": 77
},
{
  "id": "outflanked",
  "name": "Outflanked",
  "namePt": "Flanqueado",
  "summary": "Inimigos vindo de todos os lados: –2 de circunstância na CA.",
  "tags": ["army", "condition"],
  "stats": {"Efeito": "–2 CA", "Página": "77"},
  "text": "The army has enemies coming at it from many directions and must split its forces to deal with threats on every side. The army takes a –2 circumstance penalty to its AC.",
  "page": 77
},
{
  "id": "pinned",
  "name": "Pinned",
  "namePt": "Imobilizado",
  "summary": "Não se move livremente: fica flanqueado (–2 CA), não usa ações de manobra e não pode ser mobilizado.",
  "tags": ["army", "condition"],
  "stats": {"Recuperação": "Engineering ou Magic (especialista)", "Página": "77"},
  "text": "The army and cannot move freely. It has the [[condition:outflanked|outflanked]] condition and cannot use any maneuver war actions. A pinned army cannot be deployed.",
  "page": 77
},
{
  "id": "routed",
  "name": "Routed",
  "namePt": "Debandado",
  "summary": "O exército foge: deve usar Recuar no seu turno e tem –2 em Moral. Acaba ao fim do encontro, mas dá +1 abalado. Se todo um lado debandar, a batalha termina.",
  "tags": ["army", "condition"],
  "stats": {"Efeito": "Deve Recuar; –2 Moral", "Página": "77"},
  "text": "The army retreats, whether due to magical compulsion or simply broken morale. On its turn, a routed army must use the [[waraction:retreat|Retreat]] war action. While routed, the army takes a –2 circumstance penalty to Morale checks. This condition ends automatically once a war encounter is resolved, but the routed army increases its shaken value by 1 in this case. If all armies on one side of a battle are routed simultaneously, the battle ends and the other army is victorious.",
  "page": 77
},
{
  "id": "shaken",
  "name": "Shaken",
  "namePt": "Abalado",
  "summary": "Penalidade em Moral igual ao valor; ao sofrer dano, CD 11 simples ou +1. Abalado 4 = debandado. Cai 1 por turno de reino sem atividade nem batalha.",
  "tags": ["army", "condition"],
  "stats": {"Valor": "Sempre tem valor", "Ao sofrer dano": "CD 11 simples ou +1", "Recuperação": "Arts ou Warfare (especialista)", "Página": "77"},
  "text": "The army’s morale has begun to falter, be it fear in the face of a powerful enemy, a supernatural effect such as a dragon’s frightful presence, or simply the result of ill fortune in the tide of battle. Shaken always has a numerical value. The army’s Morale checks take a circumstance penalty equal to its shaken value, and whenever the army takes damage, it must succeed on a DC 11 flat check or its shaken value increases by 1. An army that becomes shaken 4 is automatically [[condition:routed|routed]]. An army reduces the value of this condition by 1 each Kingdom turn that passes during which it does not attempt an Army activity or engage in a war encounter.",
  "page": 77
},
{
  "id": "weary",
  "name": "Weary",
  "namePt": "Cansado",
  "summary": "Penalidade igual ao valor na CA, em Manobra e em atividades de exército (dobrada em Mobilizar Exército). Cai 1 por turno de reino sem atividade nem batalha.",
  "tags": ["army", "condition"],
  "stats": {"Valor": "Sempre tem valor", "Recuperação": "Arts (especialista) ou Defense", "Página": "77"},
  "text": "The army is exhausted. Weary always has a numerical value. A weary army takes a circumstance penalty equal to its weary value to its AC, to its Maneuver checks, and to its Army activity checks; it takes double this circumstance penalty on [[activity:deploy-army|Deploy Army]] checks. An army reduces the value of this condition by 1 each Kingdom turn that passes during which it does not attempt an Army activity or engage in a war encounter.",
  "page": 77
}
];
KM.armies = [
{
  "id": "infantry",
  "name": "Infantry",
  "namePt": "Infantaria",
  "armyType": "infantry",
  "level": 1,
  "summary": "Exército básico de nível 1: pelotão blindado com armas corpo a corpo. Barato (Consumo 1), Moral alta e Manobra baixa; sem ataque à distância.",
  "tags": ["any", "infantry"],
  "stats": {"Tipo": "Infantaria", "Nível": "1", "Escaneamento (Scouting)": "+7", "CD de Recrutamento": "15", "Consumo": "1", "CA": "16", "Manobra": "+4 (baixa)", "Moral": "+10 (alta)", "PV": "4 (RT 2)", "Corpo a corpo": "weapons +9", "À distância": "—", "Munição": "—", "Habilidades": "—", "Página": "66"},
  "text": "**Scouting** +7\n\n**Recruitment DC** 15; **Consumption** 1\n\n**Description** This is a platoon of armored soldiers armed with melee weapons.\n\n**AC** 16; **Maneuver** +4 (low); **Morale** +10 (high)\n\n**HP** 4 (RT 2)\n\n**Melee** weapons +9",
  "page": 66
},
{
  "id": "cavalry",
  "name": "Cavalry",
  "namePt": "Cavalaria",
  "armyType": "cavalry",
  "level": 3,
  "summary": "Exército básico de nível 3: soldados montados. Manobra alta, Moral baixa, Consumo 2. Atropelar: +1 de status em ataques contra infantaria e escaramuçadores.",
  "tags": ["any", "cavalry"],
  "stats": {"Tipo": "Cavalaria", "Nível": "3", "Escaneamento (Scouting)": "+9", "CD de Recrutamento": "18", "Consumo": "2", "CA": "19", "Manobra": "+12 (alta)", "Moral": "+6 (baixa)", "PV": "4 (RT 2)", "Corpo a corpo": "weapons +12", "À distância": "—", "Munição": "—", "Habilidades": "Overrun (Atropelar)", "Página": "66"},
  "text": "**Scouting** +9\n\n**Recruitment DC** 18; **Consumption** 2\n\n**Description** Cavalry consists of armored soldiers armed with melee weapons and mounted on horses.\n\n**AC** 19; **Maneuver** +12 (high); **Morale** +6 (low)\n\n**HP** 4 (RT 2)\n\n**Melee** weapons +12\n\n**Overrun** Cavalry armies gain a +1 status bonus on weapon attacks against infantry and skirmisher armies, but they suffer a –1 status penalty on Maneuver and Morale saves against area attacks and mental attacks.",
  "page": 66
},
{
  "id": "skirmishers",
  "name": "Skirmishers",
  "namePt": "Escaramuçadores",
  "armyType": "skirmisher",
  "level": 5,
  "summary": "Exército básico de nível 5: tropas leves e móveis. CA 2 abaixo do normal para o nível, mas Manobra e Moral 2 acima. Consumo 1.",
  "tags": ["any", "skirmisher"],
  "stats": {"Tipo": "Escaramuçadores", "Nível": "5", "Escaneamento (Scouting)": "+12", "CD de Recrutamento": "20", "Consumo": "1", "CA": "20", "Manobra": "+17 (alta)", "Moral": "+11 (baixa)", "PV": "4 (RT 2)", "Corpo a corpo": "weapons +15", "À distância": "—", "Munição": "—", "Habilidades": "CA –2, Manobra e Moral +2 em relação à tabela", "Página": "66"},
  "text": "**Scouting** +12\n\n**Recruitment DC** 20; **Consumption** 1\n\n**Description** Skirmishers are lightly armored, but their ability to move quickly and to focus on individual tactics rather than working as a unit make them more resilient in other ways. A skirmisher army’s AC is two lower than normal for its level, but its Maneuver and Morale are two higher than normal for its level.\n\n**AC** 20; **Maneuver** +17 (high); **Morale** +11 (low)\n\n**HP** 4 (RT 2)\n\n**Melee** weapons +15",
  "page": 66
},
{
  "id": "siege-engines",
  "name": "Siege Engines",
  "namePt": "Máquinas de Cerco",
  "armyType": "siege",
  "level": 7,
  "summary": "Exército básico de nível 7: catapultas, balistas e trabucos. 6 PV, ataque à distância (5 disparos), danifica fortificações; não usa equipamento nem ataca exércitos engajados.",
  "tags": ["any", "siege"],
  "stats": {"Tipo": "Cerco", "Nível": "7", "Escaneamento (Scouting)": "+15", "CD de Recrutamento": "23", "Consumo": "1", "CA": "25", "Manobra": "+12 (baixa)", "Moral": "+18 (alta)", "PV": "6 (RT 3)", "Corpo a corpo": "—", "À distância": "siege engine +15", "Munição": "5 disparos", "Habilidades": "Engines of War (Máquinas de Guerra)", "Página": "66"},
  "text": "**Scouting** +15\n\n**Recruitment DC** 23; **Consumption** 1\n\n**Description** A siege engine army consists of several catapults, ballistae, trebuchets, or other mechanized engines of war.\n\n**AC** 25; **Maneuver** +12 (low); **Morale** +18 (high)\n\n**HP** 6 (RT 3)\n\n**Ranged** siege engine +15 (5 shots)\n\n**Engines of War** Siege engines cannot be outfitted with gear. They cannot attack engaged armies. They are more difficult to destroy due to their higher hit points than other basic armies. A siege engine can attack and damage fortifications with its ranged attacks as part of the [[waraction:battle|Battle]] or [[waraction:overwhelming-bombardment|Overwhelming Bombardment]] actions.",
  "page": 66
}
];
KM.gear = [
{
  "id": "additional-weapon",
  "name": "Additional Weapon",
  "namePt": "Arma Adicional",
  "level": 1,
  "summary": "Dá ao exército um Golpe do outro tipo (corpo a corpo ou à distância) com o modificador básico do nível. Ex.: infantaria ganha ataque à distância.",
  "tags": ["army"],
  "stats": {"Nível": "1", "Preço": "10 RP", "Página": "67"},
  "text": "Most armies have only one weapon—a melee or a ranged weapon. This gear outfits an army with an additional weapon of the other type. The army gains a melee or ranged Strike (as appropriate) at the basic modifier for their level.",
  "page": 67
},
{
  "id": "healing-potions",
  "name": "Healing Potions",
  "namePt": "Poções de Cura",
  "level": 1,
  "summary": "Cada dose recupera 1 PV como parte de qualquer ação de Manobra. Máximo 3 doses; não se repõem sozinhas após o encontro.",
  "tags": ["army", "consumable", "healing", "magical", "necromancy", "potion"],
  "stats": {"Nível": "1", "Preço": "15 RP por dose", "Máx. doses": "3", "Página": "67"},
  "text": "An army equipped with *healing potions* (these rules are the same if you instead supply the army with alchemical healing elixirs) can use a single dose as part of any Maneuver action. When an army uses a dose of healing potions, it regains 1 HP. An army can be outfitted with up to 3 doses of healing potions at a time; unlike ranged Strike shots, healing potion doses do not automatically replenish after a war encounter—new doses must be purchased.",
  "page": 67
},
{
  "id": "magic-armor",
  "name": "Magic Armor",
  "namePt": "Armadura Mágica",
  "level": 5,
  "summary": "Aumenta a CA do exército: +1 (nv 5, 25 RP), +2 (nv 11, 50 RP) ou +3 (nv 18, 75 RP).",
  "tags": ["abjuration", "army", "magical"],
  "stats": {"Nível": "5+", "Magic armor (nv 5)": "25 RP — CA +1", "Greater magic armor (nv 11)": "50 RP — CA +2", "Major magic armor (nv 18)": "75 RP — CA +3", "Página": "67"},
  "text": "Magic armor is magically enchanted to bolster the protection it affords to the soldiers.\n\n**Type** *magic armor*; **Level** 5; **Price** 25 RP\n\nThis armor increases the army’s AC by 1.\n\n**Type** *greater magic armor*; **Level** 11; **Price** 50 RP\n\nThis armor increases the army’s AC by 2.\n\n**Type** *major magic armor*; **Level** 18; **Price** 75 RP\n\nThis armor increases the army’s AC by 3.",
  "page": 67
},
{
  "id": "magic-weapons",
  "name": "Magic Weapons",
  "namePt": "Armas Mágicas",
  "level": 2,
  "summary": "Bônus nos Golpes de um tipo de arma: +1 (nv 2, 20 RP), +2 (nv 10, 40 RP), +3 (nv 16, 60 RP). Pode comprar separado para corpo a corpo e à distância; upgrade abate o custo anterior.",
  "tags": ["army", "evocation", "magical"],
  "stats": {"Nível": "2+", "Magic weapons (nv 2)": "20 RP — Golpe +1", "Greater magic weapons (nv 10)": "40 RP — Golpe +2", "Major magic weapons (nv 16)": "60 RP — Golpe +3", "Página": "67–68"},
  "text": "The army’s weapons are magic. If the army has melee and ranged weapons, choose which one is made magic when this gear is purchased. You can buy this gear twice—once for melee weapons and once for ranged weapons. If you purchase a more powerful version, it replaces the previous version, and the RP cost of the more powerful version is reduced by the RP cost of the replaced weapons.\n\n**Type** *magic weapons*; **Level** 2; **Price** 20 RP\n\nThese weapons increase the army’s Strike with that weapon by 1.\n\n**Type** *greater magic weapons*; **Level** 10; **Price** 40 RP\n\nThese weapons increase the army’s Strike with that weapon by 2.\n\n**Type** *major magic weapons*; **Level** 16; **Price** 60 RP\n\nThese weapons increase the army’s Strike with that weapon by 3.",
  "page": 67
}
];

KM.tactics = [
{
  "id": "ambush",
  "name": "Ambush",
  "namePt": "Emboscada",
  "level": 8,
  "armyTypes": ["skirmisher"],
  "summary": "Se agir antes de todos os inimigos na 1ª rodada, começa já engajado com um inimigo de iniciativa menor e ganha +2 de status no 1º Ataque contra ele.",
  "tags": ["skirmisher"],
  "stats": {"Nível": "8", "Tipos": "Escaramuçadores", "Página": "68"},
  "text": "Your skirmishers are experts at ambushing. On the first round of a war encounter, if your turn occurs before any enemy army turns, you can choose to start the encounter with your army already engaged with an enemy army whose initiative result is lower than yours. If you do so, your army gains a +2 status bonus on the first Attack war action they make against that army on the first round of the encounter.",
  "page": 68
},
{
  "id": "bloodied-but-unbroken",
  "name": "Bloodied but Unbroken",
  "namePt": "Ferido, mas Inquebrável",
  "level": 5,
  "armyTypes": ["cavalry", "infantry", "skirmisher"],
  "summary": "Com PV no Limiar de Debandada ou abaixo, ganha +1 de status em CA, Mobilidade, Moral e ataques (+2 a partir do 10º nível).",
  "tags": ["cavalry", "infantry", "skirmisher"],
  "stats": {"Nível": "5", "Tipos": "Cavalaria, Infantaria, Escaramuçadores", "Página": "68"},
  "text": "The army is at its greatest during the most desperate times. When the army’s hit points are at or below its Rout Threshold, it gains a +1 status bonus to its AC, Mobility, Morale, and attack rolls. At 10th level or higher, this bonus increases to +2.",
  "page": 68
},
{
  "id": "cavalry-experts",
  "name": "Cavalry Experts",
  "namePt": "Especialistas em Cavalaria",
  "level": 6,
  "armyTypes": ["cavalry"],
  "summary": "O bônus de Atropelar (Overrun) sobe para +2; no 12º nível ignora a penalidade de –1 em Manobra e Moral do Atropelar.",
  "tags": ["cavalry"],
  "stats": {"Nível": "6", "Tipos": "Cavalaria", "Página": "68"},
  "text": "The army’s expert training with mounts increases its status bonus from its Overrun ability to +2. At 12th level, the army ignores the status penalty to Maneuver and Morale saves from its Overrun ability.",
  "page": 68
},
{
  "id": "darkvision",
  "name": "Darkvision",
  "namePt": "Visão no Escuro",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "O exército funciona como se tivesse visão no escuro, ignorando os efeitos de terreno de escuridão e penumbra.",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Todos", "Página": "68"},
  "text": "The army includes several spotters and scouts who have darkvision, and the rest of the soldiers have been trained to follow their lead so that the army itself functions as if it had darkvision.",
  "page": 68
},
{
  "id": "defensive-tactics",
  "name": "Defensive Tactics",
  "namePt": "Táticas Defensivas",
  "level": 3,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "grantsWarActions": ["defensive-stance"],
  "summary": "+1 de status em Manobra para Guardar (+2 no 9º, +3 no 17º) e libera a ação de guerra Postura Defensiva.",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "3", "Tipos": "Todos", "Concede": "Defensive Stance", "Página": "68"},
  "text": "The army is especially good at enacting defensive tactics. The army gains a +1 status bonus on Maneuver checks made to [[waraction:guard|Guard]]. This bonus increases to +2 at 9th level, and +3 at 17th level. The army can use the [[waraction:defensive-stance|Defensive Stance]] tactical war action.",
  "page": 68
},
{
  "id": "explosive-shot",
  "name": "Explosive Shot",
  "namePt": "Disparo Explosivo",
  "level": 11,
  "armyTypes": ["siege"],
  "grantsWarActions": ["overwhelming-bombardment"],
  "summary": "Crítico com Golpe à distância contra exército não distante causa +1 dano a outro inimigo não distante. Libera Bombardeio Avassalador.",
  "tags": ["siege"],
  "stats": {"Nível": "11", "Tipos": "Cerco", "Concede": "Overwhelming Bombardment", "Página": "69"},
  "text": "The army’s ranged attacks explode and spray fire, shrapnel, or other damaging material in every direction. Whenever the army critically hits a non-distant army with a ranged Strike, inflict 1 point of additional damage to another non-distant enemy army of your choice. You can use the [[waraction:overwhelming-bombardment|Overwhelming Bombardment]] tactical war action with the army.",
  "page": 69
},
{
  "id": "field-triage",
  "name": "Field Triage",
  "namePt": "Triagem de Campo",
  "level": 6,
  "armyTypes": ["infantry", "skirmisher"],
  "grantsWarActions": ["battlefield-medicine"],
  "summary": "Libera a ação de guerra Medicina de Campo de Batalha (cura 1–2 PV de um aliado durante o encontro).",
  "tags": ["infantry", "skirmisher"],
  "stats": {"Nível": "6", "Tipos": "Infantaria, Escaramuçadores", "Concede": "Battlefield Medicine", "Página": "69"},
  "text": "The army’s soldiers are adept at using emergency methods to treat wounds. The army gains the [[waraction:battlefield-medicine|Battlefield Medicine]] tactical war action.",
  "page": 69
},
{
  "id": "flaming-shot",
  "name": "Flaming Shot",
  "namePt": "Disparo Flamejante",
  "level": 9,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "Ao acertar um Golpe à distância, o alvo faz teste de Manobra contra sua CD de ataque; se falhar, sofre +1 de dano.",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "9", "Tipos": "Todos", "Página": "69"},
  "text": "The army attacks with projectiles treated with alchemical or magical oils that ignite as they are fired. When your army succeeds at a ranged Strike, the target army must attempt a Maneuver check against your army’s attack DC; if it fails, the Strike inflicts 1 additional point of damage.",
  "page": 69
},
{
  "id": "flexible-tactics",
  "name": "Flexible Tactics",
  "namePt": "Táticas Flexíveis",
  "level": 5,
  "armyTypes": ["infantry", "skirmisher"],
  "grantsWarActions": ["dirty-fighting", "false-retreat", "feint", "counterattack"],
  "summary": "Libera quatro ações de guerra: Luta Suja, Falsa Retirada, Finta e a reação Contra-ataque.",
  "tags": ["infantry", "skirmisher"],
  "stats": {"Nível": "5", "Tipos": "Infantaria, Escaramuçadores", "Concede": "Dirty Fighting, False Retreat, Feint, Counterattack", "Página": "69"},
  "text": "The army uses unconventional tactics. You can use the [[waraction:dirty-fighting|Dirty Fighting]], [[waraction:false-retreat|False Retreat]], and [[waraction:feint|Feint]] tactical war actions, and the [[waraction:counterattack|Counterattack]] tactical reaction with the army.",
  "page": 69
},
{
  "id": "focused-devotion",
  "name": "Focused Devotion",
  "namePt": "Devoção Focada",
  "level": 3,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "grantsWarActions": ["taunt"],
  "summary": "+1 de status em Moral para Reagrupar (+2 no 9º, +3 no 17º) e libera a ação de guerra Provocar.",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "3", "Tipos": "Todos", "Concede": "Taunt", "Página": "69"},
  "text": "The army is particularly loyal to your cause. The army gains a +1 status bonus on Morale checks made to [[waraction:rally|Rally]]. This bonus increases to +2 at 9th level, and +3 at 17th level. The army can use the [[waraction:taunt|Taunt]] tactical war action.",
  "page": 69
},
{
  "id": "hold-the-line",
  "name": "Hold the Line",
  "namePt": "Manter a Linha",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "+1 de status em Moral para resistir à debandada, e o Limiar de Debandada cai para 1/4 dos PV totais (arredondado para cima).",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Todos", "Página": "69"},
  "text": "The army has trained to maintain position even in the face of overwhelming opponents. The army gains a +1 status bonus on Morale checks made to resist rout, and its Rout Threshold is equal to 1/4 it’s total Hit Points (rounded up).",
  "page": 69
},
{
  "id": "increased-ammunition",
  "name": "Increased Ammunition",
  "namePt": "Munição Ampliada",
  "level": 5,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "+2 Golpes à distância por encontro de guerra. Pode ser escolhida várias vezes (+2 a cada vez).",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "5", "Tipos": "Todos", "Cumulativa": "Sim", "Página": "69"},
  "text": "You increase the number of times your army can use ranged Strikes in each war encounter by 2. This tactic can be taken multiple times; each time you do so, increase the army’s maximum number of ranged Strikes by 2.",
  "page": 69
},
{
  "id": "keen-eyed",
  "name": "Keen Eyed",
  "namePt": "Olhos Aguçados",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "+2 de status nos testes de iniciativa (Escaneamento).",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Todos", "Página": "69"},
  "text": "The army includes several spotters and scouts who are particularly keen-eyed. The army gains a +2 status bonus on initiative checks.",
  "page": 69
},
{
  "id": "keep-up-the-pressure",
  "name": "Keep Up the Pressure",
  "namePt": "Manter a Pressão",
  "level": 3,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "Penalidade de ataques múltiplos contra o MESMO alvo cai para –4/–8 (em vez de –5/–10).",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "3", "Tipos": "Todos", "Página": "69–70"},
  "text": "The commander’s swift, decisive directions help the army attack more accurately. If an army attacks the same target a second time in a round, its multiple attack penalty is –4 rather than –5, and if they attack that same army a third time in a round, its multiple attack penalty is –8 rather than –10.",
  "page": 69
},
{
  "id": "live-off-the-land",
  "name": "Live off the Land",
  "namePt": "Viver da Terra",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "skirmisher"],
  "summary": "Na fase de Manutenção, se estiver em hexágono sem assentamento e não guarnecido, o Consumo do exército cai 1.",
  "tags": ["cavalry", "infantry", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Cavalaria, Infantaria, Escaramuçadores", "Página": "70"},
  "text": "The army is trained to be self-sufficient and sustains itself via hunting and gathering when they’re in the wild. If during a Kingdom turn’s Upkeep phase this army is located in a hex that doesn’t include a settlement, and if the army is not garrisoned, it reduces its Consumption by 1.",
  "page": 70
},
{
  "id": "low-light-vision",
  "name": "Low-Light Vision",
  "namePt": "Visão na Penumbra",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "O exército funciona como se tivesse visão na penumbra, ignorando os efeitos de terreno de luz fraca.",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Todos", "Página": "70"},
  "text": "The army includes several spotters and scouts who have low-light vision, and the rest of the soldiers have been trained to follow their lead so that the army itself functions as if it had low-light vision.",
  "page": 70
},
{
  "id": "merciless",
  "name": "Merciless",
  "namePt": "Impiedoso",
  "level": 5,
  "armyTypes": ["cavalry", "infantry"],
  "grantsWarActions": ["all-out-assault"],
  "summary": "+2 de status na CD de Mobilidade quando inimigos tentam Desengajar dele, e libera Ataque Total.",
  "tags": ["cavalry", "infantry"],
  "stats": {"Nível": "5", "Tipos": "Cavalaria, Infantaria", "Concede": "All-Out Assault", "Página": "70"},
  "text": "This army is difficult to escape from. The army’s Mobility DC gains a +2 status bonus when other armies attempt Mobility checks against it while attempting to [[waraction:disengage|Disengage]]. This army can use the [[waraction:all-out-assault|All-Out Assault]] tactical war action.",
  "page": 70
},
{
  "id": "opening-salvo",
  "name": "Opening Salvo",
  "namePt": "Salva de Abertura",
  "level": 8,
  "armyTypes": ["cavalry", "siege", "skirmisher"],
  "summary": "Se agir antes de todos os inimigos na 1ª rodada, pode começar o encontro distante de todos os exércitos inimigos.",
  "tags": ["cavalry", "siege", "skirmisher"],
  "stats": {"Nível": "8", "Tipos": "Cavalaria, Cerco, Escaramuçadores", "Página": "70"},
  "text": "Your army has trained to take the first shot at distant foes. On the first round of a war encounter, if your turn occurs before any enemy army turns, you can choose to start the encounter with your army [[condition:distant|distant]] from all enemy armies.",
  "page": 70
},
{
  "id": "reckless-flankers",
  "name": "Reckless Flankers",
  "namePt": "Flanqueadores Imprudentes",
  "level": 5,
  "armyTypes": ["cavalry", "skirmisher"],
  "grantsWarActions": ["outflank"],
  "summary": "Ao engajar com Avançar, pode trocar –2 de CA por +1 em ataques enquanto engajado. Libera Flanquear.",
  "tags": ["cavalry", "skirmisher"],
  "stats": {"Nível": "5", "Tipos": "Cavalaria, Escaramuçadores", "Concede": "Outflank", "Página": "70"},
  "text": "Your army is skilled at surrounding their foes and distracting them, at the cost of spreading out too much and being more vulnerable. When you use the [[waraction:advance|Advance]] war action to successfully engage an army, you can choose to take a –2 circumstance penalty to your AC in order to gain a +1 circumstance bonus on attack rolls. If you do so, these modifiers remain in effect until you are no longer engaged. You can use the [[waraction:outflank|Outflank]] tactical war action.",
  "page": 70
},
{
  "id": "sharpshooter",
  "name": "Sharpshooter",
  "namePt": "Atirador de Elite",
  "level": 5,
  "armyTypes": ["cavalry", "infantry", "skirmisher"],
  "grantsWarActions": ["covering-fire"],
  "summary": "+1 de status em Golpes à distância, mas –2 em corpo a corpo (–1 no 9º, sem penalidade no 15º). Libera Fogo de Cobertura.",
  "tags": ["cavalry", "infantry", "skirmisher"],
  "stats": {"Nível": "5", "Tipos": "Cavalaria, Infantaria, Escaramuçadores", "Concede": "Covering Fire", "Página": "70"},
  "text": "The commander drills the army in precision ranged attacks. You gain a +1 status bonus on attacks with ranged Strikes, but suffer a –2 status bonus on attacks with melee Strikes. At 9th level, the penalty to melee Strikes is reduced to –1, and at 15th level the penalty to melee Strikes is removed. The army can use the [[waraction:covering-fire|Covering Fire]] tactical war action.",
  "page": 70
},
{
  "id": "toughened-soldiers",
  "name": "Toughened Soldiers",
  "namePt": "Soldados Calejados",
  "level": 1,
  "armyTypes": ["cavalry", "infantry", "siege", "skirmisher"],
  "summary": "+1 PV máximo. Pode ser escolhida várias vezes (+1 PV a cada vez).",
  "tags": ["cavalry", "infantry", "siege", "skirmisher"],
  "stats": {"Nível": "1", "Tipos": "Todos", "Cumulativa": "Sim", "Página": "70"},
  "text": "The army is particularly hardy. Increase its maximum Hit Points by 1. You can take this tactic multiple times; each time you do, increase the army’s maximum Hit Points by 1.",
  "page": 70
}
];

KM.warActions = [
{
  "id": "advance",
  "name": "Advance",
  "namePt": "Avançar",
  "actions": "1",
  "category": "basic",
  "tags": ["maneuver"],
  "summary": "Teste de Manobra para encurtar a distância até um inimigo não engajado: engaja (ou tira a condição distante).",
  "quick": {
    "criticalSuccess": "Engaja o alvo, mesmo se estava distante",
    "success": "Alvo distante deixa de ser; senão, engaja",
    "failure": "O avanço falha",
    "criticalFailure": "Falha e fica atolado 1 até seu próximo turno"
  },
  "text": "Your army attempts to close the distance with a target enemy army it is not engaged with by attempting a Maneuver check.",
  "outcomes": {
    "criticalSuccess": "The enemy army becomes [[condition:engaged|engaged]] with your army, even if it previously had the [[condition:distant|distant]] condition (in which case it loses that condition and becomes engaged).",
    "success": "If the target army is distant, it loses that condition; otherwise, it becomes engaged.",
    "failure": "Your army’s attempt to advance fails.",
    "criticalFailure": "Your army’s attempt to advance fails, and it becomes disorganized, becoming [[condition:mired|mired]] 1 until the start of its next turn."
  },
  "stats": {"Ações": "1", "Traços": "Maneuver", "Teste": "Manobra vs CD de Manobra", "Página": "73"},
  "page": 73
},
{
  "id": "battle",
  "name": "Battle",
  "namePt": "Batalhar",
  "actions": "1",
  "category": "basic",
  "tags": ["attack"],
  "summary": "Golpe contra a CA inimiga: corpo a corpo só se engajado, senão à distância (máx. 5 por encontro). 1 dano (2 no crítico); sofre penalidade de ataques múltiplos.",
  "quick": {
    "criticalSuccess": "2 de dano",
    "success": "1 de dano"
  },
  "text": "Your army attacks an enemy army with a Strike against the enemy army’s AC. You can do so with a melee Strike only if you are engaged with the target army. Otherwise, you must use a ranged Strike. An army can attempt a maximum of 5 ranged Strikes per war encounter (unless it has the [[tactic:increased-ammunition|Increased Ammunition]] tactic). As with any attack, multiple Strikes in a single round suffer a multiple attack penalty.\n\nA siege engine can use the Battle action to attack and damage a [[rule:fortifications|fortification]].",
  "outcomes": {
    "criticalSuccess": "You deal 2 points of damage to the army.",
    "success": "You deal 1 point of damage to the army."
  },
  "stats": {"Ações": "1", "Traços": "Attack", "Teste": "Golpe vs CA", "Página": "73"},
  "page": 73
},
{
  "id": "disengage",
  "name": "Disengage",
  "namePt": "Desengajar",
  "actions": "2",
  "category": "basic",
  "tags": ["maneuver"],
  "summary": "Teste de Manobra contra cada exército engajado para se soltar dele; no crítico, solta-se automaticamente dos restantes.",
  "quick": {
    "criticalSuccess": "Solta-se do alvo e de todos os ainda não testados",
    "success": "Deixa de estar engajado com o alvo",
    "failure": "Continua engajado",
    "criticalFailure": "Continua engajado e não pode tentar de novo neste turno"
  },
  "text": "Your army attempts to disengage from enemy armies to put some distance between itself and the enemy. Attempt a Maneuver check against each army your army is engaged with.",
  "outcomes": {
    "criticalSuccess": "Your army is no longer engaged with the target army. In addition, your army is automatically no longer engaged with any armies you haven’t yet rolled a Maneuver check against during this war action.",
    "success": "Your army breaks free and is no longer engaged with the target army.",
    "failure": "Your army remains engaged with the target army.",
    "criticalFailure": "Your army remains engaged with the target army and, for the remainder of this turn, your army cannot attempt to disengage from any army with which it is still engaged."
  },
  "stats": {"Ações": "2", "Traços": "Maneuver", "Teste": "Manobra vs CD de Manobra de cada engajado", "Página": "73"},
  "page": 73
},
{
  "id": "guard",
  "name": "Guard",
  "namePt": "Guardar",
  "actions": "1",
  "category": "basic",
  "tags": ["maneuver"],
  "summary": "Teste de Manobra contra um inimigo para ganhar +2 de item na CA até seu próximo turno (contra todos no crítico).",
  "quick": {
    "criticalSuccess": "+2 item na CA contra todos até seu próximo turno",
    "success": "+2 item na CA contra o alvo até seu próximo turno",
    "failure": "Sem efeito",
    "criticalFailure": "Fica atolado 1"
  },
  "text": "Your army spends a war action to adopt a defensive pose—raising shields, focusing on parrying attacks, or seeking cover. Attempt a Maneuver check against a target army.",
  "outcomes": {
    "criticalSuccess": "Your army gains a +2 item bonus to its AC until the start of your next turn; this bonus applies to all attacks against this army, not just from the targeted army.",
    "success": "Your army gains a +2 item bonus to its AC until the start of your next turn against attacks from the target army.",
    "failure": "Your army fails to guard against the target army.",
    "criticalFailure": "Your army fails spectacularly to guard against the target army and becomes [[condition:mired|mired]] 1."
  },
  "stats": {"Ações": "1", "Traços": "Maneuver", "Teste": "Manobra vs CD de Manobra", "Página": "73"},
  "page": 73
},
{
  "id": "rally",
  "name": "Rally",
  "namePt": "Reagrupar",
  "actions": "2",
  "category": "basic",
  "tags": ["morale"],
  "summary": "Teste de Moral contra um inimigo à escolha para reduzir abalado (1, ou 2 e remover debandado no crítico).",
  "quick": {
    "criticalSuccess": "Remove debandado; abalado –2",
    "success": "Abalado –1",
    "failure": "Sem efeito",
    "criticalFailure": "Abalado +1"
  },
  "text": "Your army’s leaders attempt to bolster the soldiers’ morale and fight back the effects of fear and panic. Attempt a Morale check against a target enemy army of your choice.",
  "outcomes": {
    "criticalSuccess": "If your army is [[condition:routed|routed]], it loses the routed condition. Reduce your army’s [[condition:shaken|shaken]] condition by 2.",
    "success": "Reduce your army’s shaken condition by 1.",
    "criticalFailure": "Your attempt to rally backfires—increase your army’s shaken condition by 1."
  },
  "stats": {"Ações": "2", "Traços": "Morale", "Teste": "Moral vs CD de Moral", "Página": "73"},
  "page": 73
},
{
  "id": "retreat",
  "name": "Retreat",
  "namePt": "Recuar",
  "actions": "3",
  "category": "basic",
  "tags": [],
  "summary": "Sem estar engajado, o exército fica distante; se já estava distante, foge da batalha e fica debandado.",
  "requirements": "Your army is not engaged.",
  "text": "Your army tries to escape from the battlefield. If your army is already [[condition:distant|distant]], it flees the battlefield, is no longer part of the war encounter, and becomes [[condition:routed|routed]]. Otherwise, your army gains the distant condition.",
  "stats": {"Ações": "3", "Pré-requisito": "Não estar engajado", "Teste": "Nenhum", "Página": "73–74"},
  "page": 73
},
{
  "id": "all-out-assault",
  "name": "All-Out Assault",
  "namePt": "Ataque Total",
  "actions": "2",
  "category": "tactical",
  "tactic": "merciless",
  "tags": ["attack", "cavalry", "infantry"],
  "summary": "Golpe corpo a corpo brutal: 3 dano no crítico, 2 no sucesso e 1 mesmo na falha.",
  "quick": {
    "criticalSuccess": "3 de dano; +1 no próximo ataque contra outro alvo",
    "success": "2 de dano",
    "failure": "1 de dano",
    "criticalFailure": "Sem dano; fica flanqueado até seu próximo turno"
  },
  "requirements": "[[tactic:merciless|Merciless]]",
  "text": "Your army attacks with frightening vigor. Attempt a melee Strike against an enemy army’s AC.",
  "outcomes": {
    "criticalSuccess": "Your army inflicts 3 points of damage to the target army. If your army’s next war action this turn is an attack war action against a different target army, you gain a +1 circumstance bonus to the Strike as your fury continues to the new target.",
    "success": "Your army deals 2 points of damage to the target army.",
    "failure": "Your army falters, but still deals 1 point of damage to the target army.",
    "criticalFailure": "Your army deals no damage to the target army and becomes [[condition:outflanked|outflanked]] until the start of its next turn."
  },
  "stats": {"Ações": "2", "Traços": "Attack, Cavalry, Infantry", "Requisito": "Merciless", "Teste": "Golpe corpo a corpo vs CA", "Página": "74"},
  "page": 74
},
{
  "id": "battlefield-medicine",
  "name": "Battlefield Medicine",
  "namePt": "Medicina de Campo de Batalha",
  "actions": "3",
  "category": "tactical",
  "tactic": "field-triage",
  "tags": ["infantry", "skirmisher"],
  "summary": "Teste de Escaneamento CD 25 para curar 1 PV (2 no crítico) de um aliado; cada exército só pode receber uma vez por encontro.",
  "quick": {
    "criticalSuccess": "Aliado recupera 2 PV",
    "success": "Aliado recupera 1 PV",
    "failure": "Sem efeito",
    "criticalFailure": "Falha; aliado ganha +1 cansado"
  },
  "requirements": "[[tactic:field-triage|Field Triage]]",
  "text": "Your army attempts to patch up an allied army’s wounds during battle. Once you attempt this war action on an army, that army is temporarily immune to Battlefield Medicine for the remainder of the war encounter. Attempt a DC 25 Scouting check to successfully sort the army’s wounded and provide swift aid.",
  "outcomes": {
    "criticalSuccess": "You restore 2 HP to the target army.",
    "success": "You restore 1 HP to the target army",
    "criticalFailure": "Your attempt to heal the army fails, and that army’s [[condition:weary|weary]] condition value increases by 1."
  },
  "stats": {"Ações": "3", "Traços": "Infantry, Skirmisher", "Requisito": "Field Triage", "Teste": "Escaneamento (Scouting) CD 25", "Página": "74"},
  "page": 74
},
{
  "id": "counterattack",
  "name": "Counterattack",
  "namePt": "Contra-ataque",
  "actions": "reaction",
  "category": "tactical",
  "tactic": "flexible-tactics",
  "tags": ["infantry", "skirmisher"],
  "summary": "Reação: quando um inimigo engajado faz uma ação de manobra, Golpe corpo a corpo grátis, sem penalidade de ataques múltiplos e sem aumentá-la.",
  "quick": {
    "criticalSuccess": "1 de dano e alvo +1 abalado",
    "success": "1 de dano"
  },
  "requirements": "[[tactic:flexible-tactics|Flexible Tactics]]",
  "trigger": "An army you are engaged with attempts a maneuver war action.",
  "text": "Your army lashes out at the foe as they attempt to perform a maneuver. Attempt a melee Strike against the triggering army’s AC. Counterattack doesn’t count toward your multiple attack penalty, and your multiple attack penalty doesn’t apply to this Strike.",
  "outcomes": {
    "criticalSuccess": "You inflict 1 point of damage on the army and increase its [[condition:shaken|shaken]] condition value by 1.",
    "success": "You inflict 1 point of damage on the army."
  },
  "stats": {"Ações": "Reação", "Traços": "Infantry, Skirmisher", "Requisito": "Flexible Tactics", "Teste": "Golpe corpo a corpo vs CA", "Página": "74"},
  "page": 74
},
{
  "id": "covering-fire",
  "name": "Covering Fire",
  "namePt": "Fogo de Cobertura",
  "actions": "2",
  "category": "tactical",
  "tactic": "sharpshooter",
  "tags": ["attack", "cavalry", "infantry", "skirmisher"],
  "summary": "Golpe à distância que causa dano até na falha e, se acertar, impede o alvo de reagir a ações de manobra até seu próximo turno.",
  "quick": {
    "criticalSuccess": "2 de dano; alvo sem reações a manobras",
    "success": "1 de dano; alvo sem reações a manobras",
    "failure": "1 de dano, sem cobertura",
    "criticalFailure": "Falha"
  },
  "requirements": "[[tactic:sharpshooter|Sharpshooter]]",
  "text": "Your army’s ranged fire provides cover and protection for an allied army to maneuver. Attempt a ranged Strike against a target army’s AC.",
  "outcomes": {
    "criticalSuccess": "You inflict 2 points of damage to the target army, and it cannot take reactions triggered by maneuver war actions from any army until the start of your next turn.",
    "success": "You inflict 1 point of damage to the target army, and it can’t take reactions triggered by maneuver war actions from any army until the start of your next turn.",
    "failure": "Your attack fails to provide covering fire, but you inflict 1 point of damage to the target army.",
    "criticalFailure": "Your attempt fails."
  },
  "stats": {"Ações": "2", "Traços": "Attack, Cavalry, Infantry, Skirmisher", "Requisito": "Sharpshooter", "Teste": "Golpe à distância vs CA", "Página": "74"},
  "page": 74
},
{
  "id": "defensive-stance",
  "name": "Defensive Stance",
  "namePt": "Postura Defensiva",
  "actions": "2",
  "category": "tactical",
  "tactic": "defensive-tactics",
  "tags": ["infantry", "maneuver"],
  "summary": "Teste de Manobra contra um inimigo para livrar um aliado da condição flanqueado (de todos os inimigos no crítico).",
  "quick": {
    "criticalSuccess": "Aliado deixa de estar flanqueado por qualquer exército",
    "success": "Aliado deixa de estar flanqueado pelo alvo",
    "failure": "Sem efeito",
    "criticalFailure": "Seu exército fica flanqueado pelo alvo"
  },
  "requirements": "[[tactic:defensive-tactics|Defensive Tactics]]",
  "text": "Your army hunkers down behind its shields, presents pole arms in a wall of blades, or moves into position to protect a target allied army that is [[condition:outflanked|outflanked]]. Attempt a Maneuver check against an enemy army.",
  "outcomes": {
    "criticalSuccess": "The target allied army is no longer outflanked by any army.",
    "success": "The target allied army is no longer outflanked by the target army.",
    "criticalFailure": "Your defensive stance fails, and your army is now outflanked by the target enemy army."
  },
  "stats": {"Ações": "2", "Traços": "Infantry, Maneuver", "Requisito": "Defensive Tactics", "Teste": "Manobra vs CD de Manobra", "Página": "74"},
  "page": 74
},
{
  "id": "dirty-fighting",
  "name": "Dirty Fighting",
  "namePt": "Luta Suja",
  "actions": "1",
  "category": "tactical",
  "tactic": "flexible-tactics",
  "tags": ["attack", "skirmisher"],
  "summary": "Golpe contra um inimigo flanqueado e não distante que o deixa cansado 1 (2 no crítico) até seu próximo turno.",
  "quick": {
    "criticalSuccess": "Alvo cansado 2 até seu próximo turno",
    "success": "Alvo cansado 1 até seu próximo turno",
    "failure": "Sem efeito",
    "criticalFailure": "Sem dano; cansado do alvo –1"
  },
  "requirements": "[[tactic:flexible-tactics|Flexible Tactics]]",
  "text": "Your army uses trickery, deception, and unfair tactics to attempt a devastating attack against an outflanked army. Attempt a melee Strike or a ranged Strike against the AC of a target [[condition:outflanked|outflanked]] army that is not distant.",
  "outcomes": {
    "criticalSuccess": "The target army becomes [[condition:weary|weary]] 2 until the start of your next turn.",
    "success": "The target army becomes weary 1 until the start of your next turn.",
    "criticalFailure": "Your attack deals no damage to the target army, which is emboldened by your failed attempt at dirty fighting. This reduces the target army’s weary value by 1."
  },
  "stats": {"Ações": "1", "Traços": "Attack, Skirmisher", "Requisito": "Flexible Tactics", "Teste": "Golpe vs CA (alvo flanqueado, não distante)", "Página": "74"},
  "page": 74
},
{
  "id": "false-retreat",
  "name": "False Retreat",
  "namePt": "Falsa Retirada",
  "actions": "reaction",
  "category": "tactical",
  "tactic": "flexible-tactics",
  "tags": ["infantry", "morale", "skirmisher"],
  "summary": "Reação após passar num teste de Moral: novo teste de Moral contra um inimigo para deixá-lo flanqueado (e sem reações, no crítico).",
  "quick": {
    "criticalSuccess": "Alvo flanqueado e sem reações até seu próximo turno",
    "success": "Alvo flanqueado até o próximo turno dele",
    "failure": "Sem efeito",
    "criticalFailure": "Você fica flanqueado até seu próximo turno"
  },
  "requirements": "[[tactic:flexible-tactics|Flexible Tactics]]",
  "trigger": "Your army succeeds at a morale check.",
  "text": "Your army feigns defeat to trick an enemy army. Attempt a Morale check against a target army.",
  "outcomes": {
    "criticalSuccess": "The target army is caught off guard by your army’s deception. It becomes [[condition:outflanked|outflanked]] and is unable to take reactions until the start of your next turn.",
    "success": "The target army is caught off guard by your army’s deception and is outflanked until the start of its next turn.",
    "criticalFailure": "The enemy anticipated your tactic and moves to take advantage of the situation. Your army becomes outflanked until the start of your next turn."
  },
  "stats": {"Ações": "Reação", "Traços": "Infantry, Morale, Skirmisher", "Requisito": "Flexible Tactics", "Teste": "Moral vs CD de Moral", "Página": "74–75"},
  "page": 74
},
{
  "id": "feint",
  "name": "Feint",
  "namePt": "Finta",
  "actions": "1",
  "category": "tactical",
  "tactic": "flexible-tactics",
  "tags": ["attack", "infantry", "skirmisher"],
  "summary": "Ataque de sondagem que deixa o alvo flanqueado (até o fim do seu turno no crítico; só contra seu próximo Golpe corpo a corpo no sucesso).",
  "quick": {
    "criticalSuccess": "Alvo flanqueado até o fim do seu turno",
    "success": "Alvo flanqueado contra seu próximo Golpe corpo a corpo neste turno",
    "failure": "Sem efeito",
    "criticalFailure": "Você fica flanqueado pelo alvo até o fim do seu próximo turno"
  },
  "requirements": "[[tactic:flexible-tactics|Flexible Tactics]]",
  "text": "Your army launches a probing attack meant to trick the enemy into thinking you are attacking from one quarter while your real thrust comes elsewhere.",
  "outcomes": {
    "criticalSuccess": "The target army’s defenses are thrown off; it is [[condition:outflanked|outflanked]] until the end of your turn.",
    "success": "The target army is fooled, but only momentarily. It is outflanked against the next melee Strike your army attempts against it before the end of your current turn.",
    "criticalFailure": "The enemy anticipates your feint and presses the advantage. You are outflanked by the target army until the end of your next turn."
  },
  "stats": {"Ações": "1", "Traços": "Attack, Infantry, Skirmisher", "Requisito": "Flexible Tactics", "Página": "75"},
  "page": 75
},
{
  "id": "outflank",
  "name": "Outflank",
  "namePt": "Flanquear",
  "actions": "2",
  "category": "tactical",
  "tactic": "reckless-flankers",
  "tags": ["cavalry", "maneuver", "skirmisher"],
  "summary": "Sem estar engajado, teste de Manobra para deixar o alvo flanqueado (–2 CA) até seu próximo turno e engajá-lo.",
  "quick": {
    "criticalSuccess": "Alvo flanqueado; engaja se quiser",
    "success": "Alvo flanqueado; fica engajado com ele",
    "failure": "Sem efeito",
    "criticalFailure": "Você fica flanqueado até seu próximo turno"
  },
  "requirements": "[[tactic:reckless-flankers|Reckless Flankers]], you aren’t engaged",
  "text": "You send your army around an enemy’s flank to get a better attacking position and to push your enemy into disorder. Attempt a Maneuver check against the target army.",
  "outcomes": {
    "criticalSuccess": "The target army becomes [[condition:outflanked|outflanked]] until the start of your next turn. You can choose to become engaged with that army or not.",
    "success": "The target army is outflanked until the start of your next turn. You are now engaged with that army.",
    "criticalFailure": "You underestimate the target army’s position, and the blunder causes your army to become outflanked until the start of your next turn."
  },
  "stats": {"Ações": "2", "Traços": "Cavalry, Maneuver, Skirmisher", "Requisito": "Reckless Flankers; não engajado", "Teste": "Manobra vs CD de Manobra", "Página": "75"},
  "page": 75
},
{
  "id": "overwhelming-bombardment",
  "name": "Overwhelming Bombardment",
  "namePt": "Bombardeio Avassalador",
  "actions": "2",
  "category": "tactical",
  "tactic": "explosive-shot",
  "tags": ["attack", "siege"],
  "summary": "Golpe à distância contra a CA de uma fortificação (gasta 2 disparos): 1–2 de dano nela e dano extra a exércitos dentro dela.",
  "quick": {
    "criticalSuccess": "2 dano à fortificação + 1 a até dois exércitos dentro",
    "success": "1 dano à fortificação + 1 nela ou num exército dentro",
    "failure": "1 dano à fortificação",
    "criticalFailure": "Sem dano; fica flanqueado até seu próximo turno"
  },
  "requirements": "[[tactic:explosive-shot|Explosive Shot]]",
  "text": "Your siege engines focus all their fire on a [[rule:fortifications|fortification]]. This war action counts as using two ranged Strikes for the purposes of depleting an army’s shots. Attempt a ranged Strike against the target fortification’s AC.",
  "outcomes": {
    "criticalSuccess": "You deal 2 points of damage to the fortification. You also deal 1 point of damage to up to two armies of your choice that are within the fortification.",
    "success": "You deal 1 point of damage to the fortification, and an additional 1 point of damage either to the fortification or to an army within the fortification (your choice of which).",
    "failure": "You deal 1 damage to the fortification.",
    "criticalFailure": "You deal no damage, and your army becomes [[condition:outflanked|outflanked]] until the start of its next turn."
  },
  "stats": {"Ações": "2", "Traços": "Attack, Siege", "Requisito": "Explosive Shot", "Teste": "Golpe à distância vs CA da fortificação", "Munição": "Gasta 2 disparos", "Página": "75"},
  "page": 75
},
{
  "id": "taunt",
  "name": "Taunt",
  "namePt": "Provocar",
  "actions": "1",
  "category": "tactical",
  "tactic": "focused-devotion",
  "tags": ["morale"],
  "summary": "Teste de Moral para deixar o alvo abalado 1 (2 no crítico) até seu próximo turno.",
  "quick": {
    "criticalSuccess": "Alvo abalado 2 até seu próximo turno",
    "success": "Alvo abalado 1 até seu próximo turno",
    "failure": "Sem efeito",
    "criticalFailure": "Abalado do alvo –1"
  },
  "requirements": "[[tactic:focused-devotion|Focused Devotion]]",
  "text": "Your army attempts to frighten and cow an enemy army. Attempt a Morale check against the target army.",
  "outcomes": {
    "criticalSuccess": "The target army becomes [[condition:shaken|shaken]] 2 until the start of your next turn.",
    "success": "The target army becomes shaken 1 until the start of your next turn.",
    "criticalFailure": "Your failed attempt bolsters the enemy’s spirits. This reduces the target army’s shaken value by 1."
  },
  "stats": {"Ações": "1", "Traços": "Morale", "Requisito": "Focused Devotion", "Teste": "Moral vs CD de Moral", "Página": "75–76"},
  "page": 75
}
];
