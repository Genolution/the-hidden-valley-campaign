window.KM = window.KM || {};
KM.structures = [
    {
        "id":  "academy",
        "name":  "Academy",
        "namePt":  "Academia",
        "summary":  "+2 em Creative Solution; PCs na cidade ganham +2 em Recall Knowledge (Lore) investigando, Research e Decipher Writing. Melhora de Library.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "10",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "2",
                      "Custo":  "52 RP, 12 Lumber, 6 Luxuries, 12 Stone",
                      "Construção":  "Scholarship (expert) DC 27",
                      "Melhora de":  "library",
                      "Melhora para":  "military academy, university",
                      "Bônus de item":  "+2 item bonus to Creative Solution",
                      "Página":  "49"
                  },
        "text":  "An academy gives your citizens—and the PCs themselves—an institution where advanced study in many fields can be pursued, researched, and referenced.\n\n**Lots** 2; **Cost** 52 RP, 12 Lumber, 6 Luxuries, 12 Stone\n\n**Construction** Scholarship (expert) DC 27\n\n**Upgrade From** [[structure:library|library]]\n\n**Upgrade To** [[structure:military-academy|military academy]], [[structure:university|university]]\n\n**Item Bonus** +2 item bonus to [[activity:creative-solution|Creative Solution]]\n\n**Effects** While in a settlement with an Academy, you gain a +2 item bonus to Lore checks made to Recall Knowledge while Investigating, to all checks made while Researching (*Gamemastery Guide* 154), and to Decipher Writing.",
        "page":  49,
        "level":  10,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  52,
                     "lumber":  12,
                     "luxuries":  6,
                     "stone":  12
                 },
        "costText":  "52 RP, 12 Lumber, 6 Luxuries, 12 Stone",
        "construction":  {
                             "skill":  "Scholarship",
                             "proficiency":  "expert",
                             "dc":  27,
                             "text":  "Scholarship (expert) DC 27"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "library"
                        ],
        "upgradeTo":  [
                          "military-academy",
                          "university"
                      ],
        "ruin":  null,
        "effects":  "While in a settlement with an Academy, you gain a +2 item bonus to Lore checks made to Recall Knowledge while Investigating, to all checks made while Researching (*Gamemastery Guide* 154), and to Decipher Writing.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Scholarship",
                                "activity":  "creative-solution",
                                "note":  "Creative Solution"
                            }
                        ]
    },
    {
        "id":  "alchemy-laboratory",
        "name":  "Alchemy Laboratory",
        "namePt":  "Laboratório Alquímico",
        "summary":  "+1 em Demolish; +1 nível efetivo para itens alquímicos à venda (acumula até 3x) e +1 em Identify Alchemy.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "18 RP, 2 Ore, 5 Stone",
                      "Construção":  "Industry (trained) DC 16",
                      "Bônus de item":  "+1 item bonus to Demolish",
                      "Página":  "50"
                  },
        "text":  "An alchemy laboratory serves as a factory for alchemists and their apprentices for the crafting of potions, elixirs, and all manner of alchemical items. An infamous kingdom’s laboratory might specialize in poisons as well.\n\n**Lots** 1; **Cost** 18 RP, 2 Ore, 5 Stone\n\n**Construction** Industry (trained) DC 16\n\n**Item Bonus** +1 item bonus to [[activity:demolish|Demolish]]\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining which alchemical items are readily available for sale in that settlement. This effect stacks up to three times.\n\nChecks attempted to Identify Alchemy in any settlement with at least one alchemy laboratory gain a +1 item bonus.",
        "page":  50,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  18,
                     "ore":  2,
                     "stone":  5
                 },
        "costText":  "18 RP, 2 Ore, 5 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  16,
                             "text":  "Industry (trained) DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining which alchemical items are readily available for sale in that settlement. This effect stacks up to three times.\n\nChecks attempted to Identify Alchemy in any settlement with at least one alchemy laboratory gain a +1 item bonus.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "demolish",
                                "note":  "Demolish"
                            }
                        ]
    },
    {
        "id":  "arcanists-tower",
        "name":  "Arcanist’s Tower",
        "namePt":  "Torre do Arcanista",
        "summary":  "+1 em Quell Unrest usando Magic; +1 nível efetivo para itens arcanos (até 3x); +1 em Borrow an Arcane Spell e Learn a Spell.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "30 RP, 6 Stone",
                      "Construção":  "Magic (trained) DC 20",
                      "Bônus de item":  "+1 item bonus to Quell Unrest using Magic",
                      "Página":  "50"
                  },
        "text":  "An arcanist’s tower is a home and laboratory for an arcane spellcaster (usually a wizard) and their apprentices, servants, and students.\n\n**Lots** 1; **Cost** 30 RP, 6 Stone\n\n**Construction** Magic (trained) DC 20\n\n**Item Bonus** +1 item bonus to [[activity:quell-unrest|Quell Unrest]] using Magic\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining which arcane magic items are readily available for sale in that settlement. This effect stacks up to three times.\n\nWhile in a settlement with an arcanist’s tower, you gain a +1 item bonus to checks made to Borrow an Arcane Spell or Learn a Spell.",
        "page":  50,
        "level":  5,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  30,
                     "stone":  6
                 },
        "costText":  "30 RP, 6 Stone",
        "construction":  {
                             "skill":  "Magic",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Magic (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining which arcane magic items are readily available for sale in that settlement. This effect stacks up to three times.\n\nWhile in a settlement with an arcanist’s tower, you gain a +1 item bonus to checks made to Borrow an Arcane Spell or Learn a Spell.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Magic",
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest using Magic"
                            }
                        ]
    },
    {
        "id":  "arena",
        "name":  "Arena",
        "namePt":  "Arena",
        "summary":  "+2 em Celebrate Holiday e em Quell Unrest usando Warfare; retreinar talentos de combate leva 5 dias em vez de 1 semana.",
        "tags":  [
                     "edifice",
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Edifice, Yard",
                      "Lotes":  "4",
                      "Custo":  "40 RP, 6 Lumber, 12 Stone",
                      "Construção":  "Warfare (expert) DC 26",
                      "Bônus de item":  "+2 item bonus to Celebrate Holiday and to Warfare checks made to Quell Unrest",
                      "Página":  "50"
                  },
        "text":  "An Arena is a large public structure, traditionally open to the air, surrounded by seating and viewing areas. It’s used for staging competitions, athletics, gladiatorial combats, and elaborate entertainments and spectacles.\n\n**Lots** 4; **Cost** 40 RP, 6 Lumber, 12 Stone\n\n**Construction** Warfare (expert) DC 26\n\n**Item Bonus** +2 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]] and to Warfare checks made to [[activity:quell-unrest|Quell Unrest]]\n\n**Effects** An arena lets you to retrain combat-themed feats more efficiently while in the settlement; doing so takes only 5 days rather than a week of downtime.",
        "page":  50,
        "level":  9,
        "lots":  4,
        "traits":  [
                       "edifice",
                       "yard"
                   ],
        "cost":  {
                     "rp":  40,
                     "lumber":  6,
                     "stone":  12
                 },
        "costText":  "40 RP, 6 Lumber, 12 Stone",
        "construction":  {
                             "skill":  "Warfare",
                             "proficiency":  "expert",
                             "dc":  26,
                             "text":  "Warfare (expert) DC 26"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "An arena lets you to retrain combat-themed feats more efficiently while in the settlement; doing so takes only 5 days rather than a week of downtime.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            },
                            {
                                "value":  2,
                                "skill":  "Warfare",
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest using Warfare"
                            }
                        ]
    },
    {
        "id":  "bank",
        "name":  "Bank",
        "namePt":  "Banco",
        "summary":  "+1 em Tap Treasury; necessário para usar Capital Investment na área de influência do assentamento.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "28 RP, 4 Ore, 6 Stone",
                      "Construção":  "Trade (trained) DC 20",
                      "Bônus de item":  "+1 item bonus to Tap Treasury",
                      "Página":  "50"
                  },
        "text":  "A bank is a secure building for storing valuables, granting loans, and collecting and transferring deposits.\n\n**Lots** 1; **Cost** 28 RP, 4 Ore, 6 Stone\n\n**Construction** Trade (trained) DC 20\n\n**Item Bonus** +1 item bonus to [[activity:tap-treasury|Tap Treasury]]\n\n**Effect** The [[activity:capital-investment|Capital Investment]] Leadership activity can be used only within the influence area of a settlement with a bank.",
        "page":  50,
        "level":  5,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  28,
                     "ore":  4,
                     "stone":  6
                 },
        "costText":  "28 RP, 4 Ore, 6 Stone",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Trade (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "The [[activity:capital-investment|Capital Investment]] Leadership activity can be used only within the influence area of a settlement with a bank.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Statecraft",
                                "activity":  "tap-treasury",
                                "note":  "Tap Treasury"
                            }
                        ]
    },
    {
        "id":  "barracks",
        "name":  "Barracks",
        "namePt":  "Quartel",
        "summary":  "Residencial barato; +1 em Garrison/Recover/Recruit Army; o primeiro quartel construído reduz Unrest em 1.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 2 Lumber, 1 Stone",
                      "Construção":  "Defense DC 16",
                      "Melhora para":  "garrison",
                      "Bônus de item":  "+1 item bonus to Garrison Army, Recover Army, or Recruit Army (see the appendix starting on page 71)",
                      "Ruína/Unrest":  "The first time you build a barracks in any settlement, reduce Unrest by 1.",
                      "Página":  "50"
                  },
        "text":  "Barracks are focused on housing and training guards, militia, soldiers, and military forces.\n\n**Lots** 1; **Cost** 6 RP, 2 Lumber, 1 Stone\n\n**Construction** Defense DC 16\n\n**Upgrade To** [[structure:garrison|garrison]]\n\n**Item Bonus** +1 item bonus to [[activity:garrison-army|Garrison Army]], [[activity:recover-army|Recover Army]], or [[activity:recruit-army|Recruit Army]] (see the appendix starting on page 71)\n\n**Effects** Barracks aid in the recruitment of armies and in helping soldiers recover from battle. The first time you build a barracks in any settlement, reduce Unrest by 1.",
        "page":  50,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  2,
                     "stone":  1
                 },
        "costText":  "6 RP, 2 Lumber, 1 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "untrained",
                             "dc":  16,
                             "text":  "Defense DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "garrison"
                      ],
        "ruin":  "The first time you build a barracks in any settlement, reduce Unrest by 1.",
        "effects":  "Barracks aid in the recruitment of armies and in helping soldiers recover from battle. The first time you build a barracks in any settlement, reduce Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "garrison-army",
                                "note":  "Garrison Army"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "recover-army",
                                "note":  "Recover Army"
                            },
                            {
                                "value":  1,
                                "skill":  "Warfare",
                                "activity":  "recruit-army",
                                "note":  "Recruit Army"
                            }
                        ]
    },
    {
        "id":  "brewery",
        "name":  "Brewery",
        "namePt":  "Cervejaria",
        "summary":  "+1 em Establish Trade Agreement; cada cervejaria reduz Unrest em 1 ao ser construída (enquanto houver menos de 4 no assentamento).",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 2 Lumber",
                      "Construção":  "Agriculture DC 15",
                      "Bônus de item":  "+1 item bonus to Establish Trade Agreement",
                      "Ruína/Unrest":  "When you build a brewery, reduce Unrest by 1 as long as you have fewer than 4 breweries in the settlement at that time.",
                      "Página":  "50"
                  },
        "text":  "A brewery is devoted to crafting alcohol, be it beer, wine, or spirits. This building can represent bottlers, vineyards, or even structures that produce non-alcoholic drinks.\n\n**Lots** 1; **Cost** 6 RP, 2 Lumber\n\n**Construction** Agriculture DC 15\n\n**Item Bonus** +1 item bonus to [[activity:establish-trade-agreement|Establish Trade Agreement]]\n\n**Effects** When you build a brewery, reduce Unrest by 1 as long as you have fewer than 4 breweries in the settlement at that time.",
        "page":  50,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  2
                 },
        "costText":  "6 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Agriculture",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Agriculture DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "When you build a brewery, reduce Unrest by 1 as long as you have fewer than 4 breweries in the settlement at that time.",
        "effects":  "When you build a brewery, reduce Unrest by 1 as long as you have fewer than 4 breweries in the settlement at that time.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "establish-trade-agreement",
                                "note":  "Establish Trade Agreement"
                            }
                        ]
    },
    {
        "id":  "bridge",
        "name":  "Bridge",
        "namePt":  "Ponte",
        "summary":  "Infraestrutura em Water Border: dá influência a assentamento-ilha, anula a penalidade de Trade de ilha e acelera a travessia.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "6 RP, 1 Lumber or 1 Stone",
                      "Construção":  "Engineering DC 16",
                      "Requisitos":  "Bridges can only be built on Water Borders.",
                      "Página":  "50"
                  },
        "text":  "Bridges give settlements that have water borders a connection to land (but at the GM’s option, a border on a lake might not be able to use bridges).\n\n**Lots** —; **Cost** 6 RP, 1 Lumber or 1 Stone\n\n**Construction** Engineering DC 16\n\n**Effects** A bridge allows an island settlement to provide influence (see [[rule:influence|Influence]]), negates the Trade penalty for island settlements (see [[rule:urban-grid-borders|Land Borders]]), and allows travel over its associated Water Border with ease (see [[rule:navigating-an-urban-grid|Navigating an Urban Grid]]). Bridges can only be built on Water Borders. When you build a bridge, check the “Bridge” box on one of the Water Borders on your Urban Grid to indicate its location.",
        "page":  50,
        "level":  2,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  1,
                     "stone":  1,
                     "or":  [
                                "lumber",
                                "stone"
                            ]
                 },
        "costText":  "6 RP, 1 Lumber or 1 Stone",
        "construction":  {
                             "skill":  "Engineering",
                             "proficiency":  "untrained",
                             "dc":  16,
                             "text":  "Engineering DC 16"
                         },
        "requirements":  "Bridges can only be built on Water Borders.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A bridge allows an island settlement to provide influence (see [[rule:influence|Influence]]), negates the Trade penalty for island settlements (see [[rule:urban-grid-borders|Land Borders]]), and allows travel over its associated Water Border with ease (see [[rule:navigating-an-urban-grid|Navigating an Urban Grid]]). Bridges can only be built on Water Borders. When you build a bridge, check the “Bridge” box on one of the Water Borders on your Urban Grid to indicate its location.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "castle",
        "name":  "Castle",
        "namePt":  "Castelo",
        "summary":  "+2 em New Leadership, Pledge of Fealty, Send Diplomatic Envoy e atividades de exército; –1d4 Unrest; na capital, 3 atividades de Leadership por PC.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Building, Edifice, Famous, Infamous",
                      "Lotes":  "4",
                      "Custo":  "54 RP, 12 Lumber, 12 Stone",
                      "Construção":  "Defense (expert), Industry (expert), Magic (expert), or Statecraft (expert) DC 26",
                      "Melhora de":  "town hall",
                      "Melhora para":  "palace",
                      "Bônus de item":  "+2 item bonus to New Leadership, Pledge of Fealty, Send Diplomatic Envoy, and +2 item bonus to Garrison Army, Recover Army, or Recruit Army (see the appendix starting on page 71)",
                      "Ruína/Unrest":  "The first time you build a castle each Kingdom turn, reduce Unrest by 1d4.",
                      "Página":  "51"
                  },
        "text":  "A castle is a fortified structure that often serves as the seat of government for a kingdom.\n\n**Lots** 4; **Cost** 54 RP, 12 Lumber, 12 Stone\n\n**Construction** Defense (expert), Industry (expert), Magic (expert), or Statecraft (expert) DC 26\n\n**Upgrade From** [[structure:town-hall|town hall]]\n\n**Upgrade To** [[structure:palace|palace]]\n\n**Item Bonus** +2 item bonus to [[activity:new-leadership|New Leadership]], [[activity:pledge-of-fealty|Pledge of Fealty]], [[activity:send-diplomatic-envoy|Send Diplomatic Envoy]], and +2 item bonus to [[activity:garrison-army|Garrison Army]], [[activity:recover-army|Recover Army]], or [[activity:recruit-army|Recruit Army]] (see the appendix starting on page 71)\n\n**Effects** The first time you build a castle each Kingdom turn, reduce Unrest by 1d4. A castle in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than 2.",
        "page":  51,
        "level":  9,
        "lots":  4,
        "traits":  [
                       "building",
                       "edifice",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  54,
                     "lumber":  12,
                     "stone":  12
                 },
        "costText":  "54 RP, 12 Lumber, 12 Stone",
        "construction":  {
                             "skill":  "Defense/Industry/Magic/Statecraft",
                             "skills":  [
                                            "Defense",
                                            "Industry",
                                            "Magic",
                                            "Statecraft"
                                        ],
                             "proficiency":  "expert",
                             "dc":  26,
                             "text":  "Defense (expert), Industry (expert), Magic (expert), or Statecraft (expert) DC 26"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "town-hall"
                        ],
        "upgradeTo":  [
                          "palace"
                      ],
        "ruin":  "The first time you build a castle each Kingdom turn, reduce Unrest by 1d4.",
        "effects":  "The first time you build a castle each Kingdom turn, reduce Unrest by 1d4. A castle in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than 2.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  null,
                                "activity":  "new-leadership",
                                "note":  "New Leadership"
                            },
                            {
                                "value":  2,
                                "skill":  null,
                                "activity":  "pledge-of-fealty",
                                "note":  "Pledge of Fealty"
                            },
                            {
                                "value":  2,
                                "skill":  "Statecraft",
                                "activity":  "send-diplomatic-envoy",
                                "note":  "Send Diplomatic Envoy"
                            },
                            {
                                "value":  2,
                                "skill":  null,
                                "activity":  "garrison-army",
                                "note":  "Garrison Army"
                            },
                            {
                                "value":  2,
                                "skill":  null,
                                "activity":  "recover-army",
                                "note":  "Recover Army"
                            },
                            {
                                "value":  2,
                                "skill":  "Warfare",
                                "activity":  "recruit-army",
                                "note":  "Recruit Army"
                            }
                        ]
    },
    {
        "id":  "cathedral",
        "name":  "Cathedral",
        "namePt":  "Catedral",
        "summary":  "+3 em Celebrate Holiday, Provide Care e Repair Reputation (Corruption); –4 Unrest; +3 níveis para itens divinos à venda.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice, Famous, Infamous",
                      "Lotes":  "4",
                      "Custo":  "58 RP, 20 Lumber, 20 Stone",
                      "Construção":  "Folklore (master) DC 34",
                      "Melhora de":  "temple",
                      "Bônus de item":  "+3 item bonus to Celebrate Holiday, Provide Care, and Repair Reputation (Corruption)",
                      "Ruína/Unrest":  "The first time you build a cathedral in a turn, reduce Unrest by 4.",
                      "Página":  "51"
                  },
        "text":  "A cathedral serves as a focal point of spiritual worship in the settlement and the seat of regional power for a religion. Most cathedrals are astounding works of art and eye‑catching marvels of architecture.\n\n**Lots** 4; **Cost** 58 RP, 20 Lumber, 20 Stone\n\n**Construction** Folklore (master) DC 34\n\n**Upgrade From** [[structure:temple|temple]]\n\n**Item Bonus** +3 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]], [[activity:provide-care|Provide Care]], and [[activity:repair-reputation|Repair Reputation]] (Corruption)\n\n**Effects** The first time you build a cathedral in a turn, reduce Unrest by 4. While in a settlement with a cathedral, you gain a +3 item bonus to Lore and Religion checks made to Recall Knowledge while Investigating, and to all faith-themed checks made while Researching (*Gamemastery Guide* 154). Treat the settlement’s level as three levels higher than its actual level for the purposes of determining what divine magic items are available for sale in that settlement. This effect does not stack with the similar effect granted by shrines or temples.",
        "page":  51,
        "level":  15,
        "lots":  4,
        "traits":  [
                       "building",
                       "edifice",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  58,
                     "lumber":  20,
                     "stone":  20
                 },
        "costText":  "58 RP, 20 Lumber, 20 Stone",
        "construction":  {
                             "skill":  "Folklore",
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Folklore (master) DC 34"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "temple"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a cathedral in a turn, reduce Unrest by 4.",
        "effects":  "The first time you build a cathedral in a turn, reduce Unrest by 4. While in a settlement with a cathedral, you gain a +3 item bonus to Lore and Religion checks made to Recall Knowledge while Investigating, and to all faith-themed checks made while Researching (*Gamemastery Guide* 154). Treat the settlement’s level as three levels higher than its actual level for the purposes of determining what divine magic items are available for sale in that settlement. This effect does not stack with the similar effect granted by shrines or temples.",
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            },
                            {
                                "value":  3,
                                "skill":  "Defense",
                                "activity":  "provide-care",
                                "note":  "Provide Care"
                            },
                            {
                                "value":  3,
                                "skill":  "Arts",
                                "activity":  "repair-reputation",
                                "note":  "Repair Reputation (Corruption)"
                            }
                        ]
    },
    {
        "id":  "cemetery",
        "name":  "Cemetery",
        "namePt":  "Cemitério",
        "summary":  "Reduz em 1 o Unrest de eventos perigosos no assentamento (até 4 com quatro cemitérios); afeta alguns eventos.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "4 RP, 1 Stone",
                      "Construção":  "Folklore DC 15",
                      "Ruína/Unrest":  "Reduce Unrest gained from any dangerous settlement events in that settlement by 1 (to a maximum of 4 for four cemeteries).",
                      "Página":  "51"
                  },
        "text":  "A cemetery sets aside a plot of land to bury the dead and can also include above-ground vaults or underground catacombs.\n\n**Lots** 1; **Cost** 4 RP, 1 Stone\n\n**Construction** Folklore DC 15\n\n**Effects** Giving the citizens a place to bury and remember their departed loved ones helps to temper Unrest gained from dangerous events. If you have at least one cemetery in a settlement, reduce Unrest gained from any dangerous settlement events in that particular settlement by 1 (to a maximum of 4 for four cemeteries). The presence of a cemetery provides additional effects during certain kingdom events.",
        "page":  51,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  4,
                     "stone":  1
                 },
        "costText":  "4 RP, 1 Stone",
        "construction":  {
                             "skill":  "Folklore",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Folklore DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "Reduce Unrest gained from any dangerous settlement events in that settlement by 1 (to a maximum of 4 for four cemeteries).",
        "effects":  "Giving the citizens a place to bury and remember their departed loved ones helps to temper Unrest gained from dangerous events. If you have at least one cemetery in a settlement, reduce Unrest gained from any dangerous settlement events in that particular settlement by 1 (to a maximum of 4 for four cemeteries). The presence of a cemetery provides additional effects during certain kingdom events.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "construction-yard",
        "name":  "Construction Yard",
        "namePt":  "Canteiro de Obras",
        "summary":  "+1 em Build Structure e em Repair Reputation (Decay).",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "10",
                      "Traços":  "Yard",
                      "Lotes":  "4",
                      "Custo":  "40 RP, 10 Lumber, 10 Stone",
                      "Construção":  "Engineering DC 27",
                      "Bônus de item":  "+1 item bonus to Build Structure and to Repair Reputation (Decay)",
                      "Página":  "51"
                  },
        "text":  "A construction yard supports the building of structures by providing a centralized place to gather supplies and craft components for larger projects.\n\n**Lots** 4; **Cost** 40 RP, 10 Lumber, 10 Stone\n\n**Construction** Engineering DC 27\n\n**Item Bonus** +1 item bonus to [[activity:build-structure|Build Structure]] and to [[activity:repair-reputation|Repair Reputation]] (Decay)",
        "page":  51,
        "level":  10,
        "lots":  4,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  40,
                     "lumber":  10,
                     "stone":  10
                 },
        "costText":  "40 RP, 10 Lumber, 10 Stone",
        "construction":  {
                             "skill":  "Engineering",
                             "proficiency":  "untrained",
                             "dc":  27,
                             "text":  "Engineering DC 27"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "build-structure",
                                "note":  "Build Structure"
                            },
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "repair-reputation",
                                "note":  "Repair Reputation (Decay)"
                            }
                        ]
    },
    {
        "id":  "dump",
        "name":  "Dump",
        "namePt":  "Lixão",
        "summary":  "+1 em Demolish; protege contra certos eventos. Não pode ficar em quadra com estrutura Residential.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "4 RP",
                      "Construção":  "Industry DC 16",
                      "Bônus de item":  "+1 item bonus to Demolish",
                      "Requisitos":  "A dump can’t be located in a block with any Residential structures.",
                      "Página":  "51"
                  },
        "text":  "A dump is a centralized place for the disposal of refuse, often including a shack for a caretaker to live in.\n\n**Lots** 1; **Cost** 4 RP\n\n**Construction** Industry DC 16\n\n**Item Bonus** +1 item bonus to [[activity:demolish|Demolish]]\n\n**Effects** Certain events have a more dangerous impact on settlements that don’t include a dump. A dump can’t be located in a block with any Residential structures.",
        "page":  51,
        "level":  2,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  4
                 },
        "costText":  "4 RP",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "untrained",
                             "dc":  16,
                             "text":  "Industry DC 16"
                         },
        "requirements":  "A dump can’t be located in a block with any Residential structures.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Certain events have a more dangerous impact on settlements that don’t include a dump. A dump can’t be located in a block with any Residential structures.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "demolish",
                                "note":  "Demolish"
                            }
                        ]
    },
    {
        "id":  "embassy",
        "name":  "Embassy",
        "namePt":  "Embaixada",
        "summary":  "+1 em Send Diplomatic Envoy e Request Foreign Aid.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "8",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "26 RP, 10 Lumber, 6 Luxuries, 4 Stone",
                      "Construção":  "Politics DC 24",
                      "Bônus de item":  "+1 item bonus to Send Diplomatic Envoy and Request Foreign Aid",
                      "Página":  "52"
                  },
        "text":  "An embassy gives a place for diplomatic visitors to your kingdom to stay and bolsters international relations.\n\n**Lots** 2; **Cost** 26 RP, 10 Lumber, 6 Luxuries, 4 Stone\n\n**Construction** Politics DC 24\n\n**Item Bonus** +1 item bonus to [[activity:send-diplomatic-envoy|Send Diplomatic Envoy]] and [[activity:request-foreign-aid|Request Foreign Aid]]",
        "page":  52,
        "level":  8,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  26,
                     "lumber":  10,
                     "luxuries":  6,
                     "stone":  4
                 },
        "costText":  "26 RP, 10 Lumber, 6 Luxuries, 4 Stone",
        "construction":  {
                             "skill":  "Politics",
                             "proficiency":  "untrained",
                             "dc":  24,
                             "text":  "Politics DC 24"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Statecraft",
                                "activity":  "send-diplomatic-envoy",
                                "note":  "Send Diplomatic Envoy"
                            },
                            {
                                "value":  1,
                                "skill":  "Statecraft",
                                "activity":  "request-foreign-aid",
                                "note":  "Request Foreign Aid"
                            }
                        ]
    },
    {
        "id":  "festival-hall",
        "name":  "Festival Hall",
        "namePt":  "Salão de Festas",
        "summary":  "+1 em Celebrate Holiday. Melhora para Theater.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "7 RP, 3 Lumber",
                      "Construção":  "Arts DC 18",
                      "Melhora para":  "theater",
                      "Bônus de item":  "+1 item bonus to Celebrate Holiday",
                      "Página":  "52"
                  },
        "text":  "A festival hall is a small building that gives performers a venue to entertain and citizens a place to gather for celebrations or simply to relax.\n\n**Lots** 1; **Cost** 7 RP, 3 Lumber\n\n**Construction** Arts DC 18\n\n**Upgrade To** [[structure:theater|theater]]\n\n**Item Bonus** +1 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]]",
        "page":  52,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  7,
                     "lumber":  3
                 },
        "costText":  "7 RP, 3 Lumber",
        "construction":  {
                             "skill":  "Arts",
                             "proficiency":  "untrained",
                             "dc":  18,
                             "text":  "Arts DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "theater"
                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            }
                        ]
    },
    {
        "id":  "foundry",
        "name":  "Foundry",
        "namePt":  "Fundição",
        "summary":  "+1 em Establish Work Site (mina); +1 capacidade máxima de Ore por fundição. Não pode dividir quadra com Residential.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "16 RP, 5 Lumber, 2 Ore, 3 Stone",
                      "Construção":  "Industry (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Establish Work Site (mine)",
                      "Requisitos":  "A foundry cannot share a block with a Residential structure.",
                      "Página":  "52"
                  },
        "text":  "A foundry is a facility used to refine ore into finished metal.\n\n**Lots** 2; **Cost** 16 RP, 5 Lumber, 2 Ore, 3 Stone\n\n**Construction** Industry (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:establish-work-site|Establish Work Site]] (mine)\n\n**Effects** By processing ore in a foundry, your settlements grow more efficient at storing your kingdom’s Commodities. Each foundry in your kingdom increases your maximum Ore Commodity capacity by 1. A foundry cannot share a block with a Residential structure.",
        "page":  52,
        "level":  3,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  16,
                     "lumber":  5,
                     "ore":  2,
                     "stone":  3
                 },
        "costText":  "16 RP, 5 Lumber, 2 Ore, 3 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Industry (trained) DC 18"
                         },
        "requirements":  "A foundry cannot share a block with a Residential structure.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "By processing ore in a foundry, your settlements grow more efficient at storing your kingdom’s Commodities. Each foundry in your kingdom increases your maximum Ore Commodity capacity by 1. A foundry cannot share a block with a Residential structure.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "establish-work-site",
                                "note":  "Establish Work Site (mine)"
                            }
                        ]
    },
    {
        "id":  "garrison",
        "name":  "Garrison",
        "namePt":  "Guarnição",
        "summary":  "Residencial; +1 em Outfit Army e Train Army; –1 Unrest ao construir. Melhora de Barracks.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building, Residential",
                      "Lotes":  "2",
                      "Custo":  "28 RP, 6 Lumber, 3 Stone",
                      "Construção":  "Warfare (trained) DC 20",
                      "Melhora de":  "barracks",
                      "Bônus de item":  "+1 item bonus to Outfit Army or Train Army (see the appendix starting on page 71)",
                      "Ruína/Unrest":  "When you build a garrison, reduce Unrest by 1.",
                      "Página":  "52"
                  },
        "text":  "A garrison is a complex of barracks, training yards, and weapons storage and repair for maintaining your military.\n\n**Lots** 2; **Cost** 28 RP, 6 Lumber, 3 Stone\n\n**Construction** Warfare (trained) DC 20\n\n**Upgrade From** [[structure:barracks|barracks]]\n\n**Item Bonus** +1 item bonus to [[activity:outfit-army|Outfit Army]] or [[activity:train-army|Train Army]] (see the appendix starting on page 71)\n\n**Effects** A garrison helps outfit armies with new gear or trains them. When you build a garrison, reduce Unrest by 1.",
        "page":  52,
        "level":  5,
        "lots":  2,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  28,
                     "lumber":  6,
                     "stone":  3
                 },
        "costText":  "28 RP, 6 Lumber, 3 Stone",
        "construction":  {
                             "skill":  "Warfare",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Warfare (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "barracks"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "When you build a garrison, reduce Unrest by 1.",
        "effects":  "A garrison helps outfit armies with new gear or trains them. When you build a garrison, reduce Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "outfit-army",
                                "note":  "Outfit Army"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "train-army",
                                "note":  "Train Army"
                            }
                        ]
    },
    {
        "id":  "general-store",
        "name":  "General Store",
        "namePt":  "Armazém Geral",
        "summary":  "Sem armazém geral ou mercado, o nível do assentamento para compra de itens cai 2. Melhora para Luxury Store ou Marketplace.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "8 RP, 1 Lumber",
                      "Construção":  "Trade DC 15",
                      "Melhora para":  "luxury store, marketplace",
                      "Página":  "52"
                  },
        "text":  "**Lots** 1; **Cost** 8 RP, 1 Lumber\n\n**Construction** Trade DC 15\n\n**Upgrade To** [[structure:luxury-store|luxury store]], [[structure:marketplace|marketplace]]\n\n**Effects** A settlement without a general store or marketplace reduces its level for the purposes of determining what items can be purchased there by 2.",
        "page":  52,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  8,
                     "lumber":  1
                 },
        "costText":  "8 RP, 1 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Trade DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "luxury-store",
                          "marketplace"
                      ],
        "ruin":  null,
        "effects":  "A settlement without a general store or marketplace reduces its level for the purposes of determining what items can be purchased there by 2.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "granary",
        "name":  "Granary",
        "namePt":  "Celeiro",
        "summary":  "+1 capacidade máxima de Food por celeiro no reino.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "12 RP, 2 Lumber",
                      "Construção":  "Agriculture DC 15",
                      "Página":  "52"
                  },
        "text":  "A granary consists of silos and warehouses for the storage of grain and other preserved foodstuffs.\n\n**Lots** 1; **Cost** 12 RP, 2 Lumber\n\n**Construction** Agriculture DC 15\n\n**Effects** Each granary in your kingdom increases your maximum Food Commodity capacity by 1.",
        "page":  52,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  12,
                     "lumber":  2
                 },
        "costText":  "12 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Agriculture",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Agriculture DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Each granary in your kingdom increases your maximum Food Commodity capacity by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "guildhall",
        "name":  "Guildhall",
        "namePt":  "Sede de Guilda",
        "summary":  "+1 em testes de perícias de Economy ligados ao foco da guilda; PCs ganham +1 em Earn Income/Repair relacionados. Melhora de Trade Shop.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "34 RP, 8 Lumber",
                      "Construção":  "Trade (expert) DC 20",
                      "Melhora de":  "trade shop",
                      "Bônus de item":  "+1 item bonus to Economy skill checks associated with the guildhall’s specific trade focus",
                      "Página":  "52"
                  },
        "text":  "A guildhall serves as the headquarters for a trade guild or similar organization. It includes offices for its leaders and functionaries as well as workshops for its craftspeople and a storefront for customers. Guildhalls always specialize in a certain type of trade or pursuit, but typically, only the largest cities have multiple guildhalls. Smaller settlements tend to focus on one particular trade.\n\n**Lots** 2; **Cost** 34 RP, 8 Lumber\n\n**Construction** Trade (expert) DC 20\n\n**Upgrade From** [[structure:trade-shop|trade shop]]\n\n**Item Bonus** +1 item bonus to Economy skill checks associated with the guildhall’s specific trade focus\n\n**Effects** When you build a guildhall, indicate what sort of organization (such as bakers, grocers, smiths, etc.) it serves as a headquarters for. While in a settlement with a guildhall, you gain a +1 item bonus to all related skill checks to Earn Income or to Repair.",
        "page":  52,
        "level":  5,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  34,
                     "lumber":  8
                 },
        "costText":  "34 RP, 8 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "expert",
                             "dc":  20,
                             "text":  "Trade (expert) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "trade-shop"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "When you build a guildhall, indicate what sort of organization (such as bakers, grocers, smiths, etc.) it serves as a headquarters for. While in a settlement with a guildhall, you gain a +1 item bonus to all related skill checks to Earn Income or to Repair.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Economy",
                                "activity":  null,
                                "note":  "Economy skill checks tied to the guild’s trade focus"
                            }
                        ]
    },
    {
        "id":  "herbalist",
        "name":  "Herbalist",
        "namePt":  "Herbanário",
        "summary":  "+1 em Provide Care. Melhora para Hospital.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 1 Lumber",
                      "Construção":  "Wilderness DC 15",
                      "Melhora para":  "hospital",
                      "Bônus de item":  "+1 item bonus to Provide Care",
                      "Página":  "52"
                  },
        "text":  "An herbalist consists of small medicinal gardens tended by those with knowledge of herbs and their uses to heal or to harm, as well as a storefront for customers.\n\n**Lots** 1; **Cost** 10 RP, 1 Lumber\n\n**Construction** Wilderness DC 15\n\n**Upgrade To** [[structure:hospital|hospital]]\n\n**Item Bonus** +1 item bonus to [[activity:provide-care|Provide Care]]",
        "page":  52,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  1
                 },
        "costText":  "10 RP, 1 Lumber",
        "construction":  {
                             "skill":  "Wilderness",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Wilderness DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "hospital"
                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Defense",
                                "activity":  "provide-care",
                                "note":  "Provide Care"
                            }
                        ]
    },
    {
        "id":  "hospital",
        "name":  "Hospital",
        "namePt":  "Hospital",
        "summary":  "+1 em Provide Care e Quell Unrest; PCs ganham +2 em Medicine para Treat Disease e Treat Wounds.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "30 RP, 10 Lumber, 6 Stone",
                      "Construção":  "Defense (expert) DC 26",
                      "Melhora de":  "herbalist",
                      "Bônus de item":  "+1 item bonus to Provide Care and Quell Unrest",
                      "Página":  "52"
                  },
        "text":  "A hospital is a building dedicated to healing the sick through both magical and mundane means.\n\n**Lots** 2; **Cost** 30 RP, 10 Lumber, 6 Stone\n\n**Construction** Defense (expert) DC 26\n\n**Upgrade From** [[structure:herbalist|herbalist]]\n\n**Item Bonus** +1 item bonus to [[activity:provide-care|Provide Care]] and [[activity:quell-unrest|Quell Unrest]]\n\n**Effects** While in a settlement with a hospital, you gain a +2 item bonus to Medicine checks to Treat Disease and Treat Wounds.",
        "page":  52,
        "level":  9,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  30,
                     "lumber":  10,
                     "stone":  6
                 },
        "costText":  "30 RP, 10 Lumber, 6 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "expert",
                             "dc":  26,
                             "text":  "Defense (expert) DC 26"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "herbalist"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "While in a settlement with a hospital, you gain a +2 item bonus to Medicine checks to Treat Disease and Treat Wounds.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Defense",
                                "activity":  "provide-care",
                                "note":  "Provide Care"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest"
                            }
                        ]
    },
    {
        "id":  "houses",
        "name":  "Houses",
        "namePt":  "Casas",
        "summary":  "Residencial mais barato sem Ruin; –1 Unrest na primeira construção do turno.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "3 RP, 1 Lumber",
                      "Construção":  "Industry DC 15",
                      "Melhora de":  "tenement",
                      "Melhora para":  "mansion or orphanage",
                      "Ruína/Unrest":  "The first time you build houses each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "53"
                  },
        "text":  "Houses provide a neighborhood of single and multi-family dwellings for your citizens.\n\n**Lots** 1; **Cost** 3 RP, 1 Lumber\n\n**Construction** Industry DC 15\n\n**Upgrade From** [[structure:tenement|tenement]]\n\n**Upgrade To** [[structure:mansion|mansion]] or [[structure:orphanage|orphanage]]\n\n**Effects** The first time you build houses each Kingdom turn, reduce Unrest by 1.",
        "page":  53,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  3,
                     "lumber":  1
                 },
        "costText":  "3 RP, 1 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Industry DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "tenement"
                        ],
        "upgradeTo":  [
                          "mansion",
                          "orphanage"
                      ],
        "ruin":  "The first time you build houses each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build houses each Kingdom turn, reduce Unrest by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "illicit-market",
        "name":  "Illicit Market",
        "namePt":  "Mercado Ilícito",
        "summary":  "+1 em Clandestine Business; +1 nível para itens à venda (até 3x). Custa +1 Crime.",
        "tags":  [
                     "building",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "6",
                      "Traços":  "Building, Infamous",
                      "Lotes":  "1",
                      "Custo":  "50 RP, 5 Lumber",
                      "Construção":  "Intrigue (trained) DC 22",
                      "Bônus de item":  "+1 item bonus to Clandestine Business",
                      "Ruína/Unrest":  "Ruin +1 Crime.",
                      "Página":  "53"
                  },
        "text":  "An illicit market uses a facade of shops, homes, and other innocent-seeming buildings to cover the fact that unregulated and illegal trade takes place within its walls.\n\n**Lots** 1; **Cost** 50 RP, 5 Lumber\n\n**Construction** Intrigue (trained) DC 22\n\n**Item Bonus** +1 item bonus to [[activity:clandestine-business|Clandestine Business]]\n\n**Ruin** +1 Crime\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining what items are readily available for sale in that settlement. This effect stacks up to three times.",
        "page":  53,
        "level":  6,
        "lots":  1,
        "traits":  [
                       "building",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  50,
                     "lumber":  5
                 },
        "costText":  "50 RP, 5 Lumber",
        "construction":  {
                             "skill":  "Intrigue",
                             "proficiency":  "trained",
                             "dc":  22,
                             "text":  "Intrigue (trained) DC 22"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "Ruin +1 Crime.",
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining what items are readily available for sale in that settlement. This effect stacks up to three times.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Intrigue",
                                "activity":  "clandestine-business",
                                "note":  "Clandestine Business"
                            }
                        ]
    },
    {
        "id":  "inn",
        "name":  "Inn",
        "namePt":  "Estalagem",
        "summary":  "Residencial; +1 em Hire Adventurers.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 2 Lumber",
                      "Construção":  "Trade DC 15",
                      "Bônus de item":  "+1 Item bonus to Hire Adventurers",
                      "Página":  "53"
                  },
        "text":  "An inn provides a safe and secure place for a settlement’s visitors to rest.\n\n**Lots** 1; **Cost** 10 RP, 2 Lumber\n\n**Construction** Trade DC 15\n\n**Item Bonus** +1 Item bonus to [[activity:hire-adventurers|Hire Adventurers]]",
        "page":  53,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  2
                 },
        "costText":  "10 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Trade DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Exploration",
                                "activity":  "hire-adventurers",
                                "note":  "Hire Adventurers"
                            }
                        ]
    },
    {
        "id":  "jail",
        "name":  "Jail",
        "namePt":  "Prisão",
        "summary":  "+1 em Quell Unrest usando Intrigue; –1 Crime na primeira construção do turno.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "14 RP, 4 Lumber, 2 Ore, 4 Stone",
                      "Construção":  "Defense DC 16",
                      "Bônus de item":  "+1 item bonus to Quell Unrest using Intrigue",
                      "Ruína/Unrest":  "The first time you build a jail each Kingdom turn, reduce Crime by 1.",
                      "Página":  "53"
                  },
        "text":  "A jail is a fortified structure that houses criminals, prisoners, or dangerous monsters separate from the rest of society.\n\n**Lots** 1; **Cost** 14 RP, 4 Lumber, 2 Ore, 4 Stone\n\n**Construction** Defense DC 16\n\n**Item Bonus** +1 item bonus to [[activity:quell-unrest|Quell Unrest]] using Intrigue\n\n**Effects** The first time you build a jail each a Kingdom turn, reduce Crime by 1.",
        "page":  53,
        "level":  2,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  14,
                     "lumber":  4,
                     "ore":  2,
                     "stone":  4
                 },
        "costText":  "14 RP, 4 Lumber, 2 Ore, 4 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "untrained",
                             "dc":  16,
                             "text":  "Defense DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a jail each Kingdom turn, reduce Crime by 1.",
        "effects":  "The first time you build a jail each a Kingdom turn, reduce Crime by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Intrigue",
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest using Intrigue"
                            }
                        ]
    },
    {
        "id":  "keep",
        "name":  "Keep",
        "namePt":  "Torre de Menagem",
        "summary":  "+1 em Deploy, Garrison e Train Army; –1 Unrest na primeira construção do turno.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "2",
                      "Custo":  "32 RP, 8 Lumber, 8 Stone",
                      "Construção":  "Defense (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Deploy Army, Garrison Army, or Train Army (see the appendix starting on page 71)",
                      "Ruína/Unrest":  "The first time you build a keep each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "53"
                  },
        "text":  "A keep is a high-walled defensive structure that guards the heart of a settlement. It includes practice and marshaling yards as well as a refuge for your leaders should danger strike the settlement.\n\n**Lots** 2; **Cost** 32 RP, 8 Lumber, 8 Stone\n\n**Construction** Defense (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:deploy-army|Deploy Army]], [[activity:garrison-army|Garrison Army]], or [[activity:train-army|Train Army]] (see the appendix starting on page 71)\n\n**Effects** The first time you build a keep each Kingdom turn, reduce Unrest by 1.",
        "page":  53,
        "level":  3,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  32,
                     "lumber":  8,
                     "stone":  8
                 },
        "costText":  "32 RP, 8 Lumber, 8 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Defense (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a keep each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build a keep each Kingdom turn, reduce Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "deploy-army",
                                "note":  "Deploy Army"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "garrison-army",
                                "note":  "Garrison Army"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "train-army",
                                "note":  "Train Army"
                            }
                        ]
    },
    {
        "id":  "library",
        "name":  "Library",
        "namePt":  "Biblioteca",
        "summary":  "+1 em Rest and Relax usando Scholarship; PCs ganham +1 em Recall Knowledge (Lore), Research e Decipher Writing.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 4 Lumber, 2 Stone",
                      "Construção":  "Scholarship (trained) DC 16",
                      "Melhora para":  "academy",
                      "Bônus de item":  "+1 item bonus to Rest and Relax using Scholarship checks",
                      "Página":  "53"
                  },
        "text":  "A library contains collections of books, scrolls, writings, and records conducive to research. Some libraries specialize in certain topics, but it’s best to assume these libraries are well-rounded in what books they cover\n\n**Lots** 1; **Cost** 6 RP, 4 Lumber, 2 Stone\n\n**Construction** Scholarship (trained) DC 16\n\n**Upgrade To** [[structure:academy|academy]]\n\n**Item Bonus** +1 item bonus to [[activity:rest-and-relax|Rest and Relax]] using Scholarship checks\n\n**Effects** While in a settlement with a library, you gain a +1 item bonus to Lore checks made to Recall Knowledge while Investigating, as well as to Researching (*Gamemastery Guide* 154), and to Decipher Writing.",
        "page":  53,
        "level":  2,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  4,
                     "stone":  2
                 },
        "costText":  "6 RP, 4 Lumber, 2 Stone",
        "construction":  {
                             "skill":  "Scholarship",
                             "proficiency":  "trained",
                             "dc":  16,
                             "text":  "Scholarship (trained) DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "academy"
                      ],
        "ruin":  null,
        "effects":  "While in a settlement with a library, you gain a +1 item bonus to Lore checks made to Recall Knowledge while Investigating, as well as to Researching (*Gamemastery Guide* 154), and to Decipher Writing.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Scholarship",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Scholarship"
                            }
                        ]
    },
    {
        "id":  "lumberyard",
        "name":  "Lumberyard",
        "namePt":  "Serraria",
        "summary":  "+1 em Establish Work Site (acampamento madeireiro); +1 capacidade máxima de Lumber. Precisa estar junto a Water Border.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Yard",
                      "Lotes":  "2",
                      "Custo":  "16 RP, 5 Lumber, 1 Ore",
                      "Construção":  "Industry (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Establish Work Site (lumber camp)",
                      "Requisitos":  "A lumberyard must be built in a lot next to a Water border.",
                      "Página":  "53"
                  },
        "text":  "A lumberyard is an open area used to store additional lumber. The yard includes a lumber mill used to process lumber into timbers for construction purposes.\n\n**Lots** 2; **Cost** 16 RP, 5 Lumber, 1 Ore\n\n**Construction** Industry (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:establish-work-site|Establish Work Site]] (lumber camp)\n\n**Effects** Each lumberyard in your kingdom increases maximum Lumber Commodity capacity by 1. A lumberyard must be built in a lot next to a Water border, both to give the yard a source of power to run saws to process timber, but more importantly to facilitate the shipment of trees to the yard.",
        "page":  53,
        "level":  3,
        "lots":  2,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  16,
                     "lumber":  5,
                     "ore":  1
                 },
        "costText":  "16 RP, 5 Lumber, 1 Ore",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Industry (trained) DC 18"
                         },
        "requirements":  "A lumberyard must be built in a lot next to a Water border.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Each lumberyard in your kingdom increases maximum Lumber Commodity capacity by 1. A lumberyard must be built in a lot next to a Water border, both to give the yard a source of power to run saws to process timber, but more importantly to facilitate the shipment of trees to the yard.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "establish-work-site",
                                "note":  "Establish Work Site (lumber camp)"
                            }
                        ]
    },
    {
        "id":  "luxury-store",
        "name":  "Luxury Store",
        "namePt":  "Loja de Luxo",
        "summary":  "+1 em Establish Trade Agreement; +1 nível para itens mágicos de luxo (até 3x). Exige Mansion ou Noble Villa na quadra.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "6",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "28 RP, 10 Lumber, 6 Luxuries",
                      "Construção":  "Trade (expert) DC 22",
                      "Melhora de":  "general store",
                      "Melhora para":  "magic shop",
                      "Bônus de item":  "+1 item bonus to Establish Trade Agreement",
                      "Requisitos":  "A luxury store must be built on a block that has either a mansion or a noble villa.",
                      "Página":  "53"
                  },
        "text":  "This collection of stores specializes in expensive, rare, and exotic goods that cater to the wealthy.\n\n**Lots** 1; **Cost** 28 RP, 10 Lumber, 6 Luxuries\n\n**Construction** Trade (expert) DC 22\n\n**Upgrade From** [[structure:general-store|general store]]\n\n**Upgrade To** [[structure:magic-shop|magic shop]]\n\n**Item Bonus** +1 item bonus to [[activity:establish-trade-agreement|Establish Trade Agreement]]\n\n**Effects** A luxury store must be built on a block that has either a [[structure:mansion|mansion]] or a [[structure:noble-villa|noble villa]]. Treat the settlement’s level as one level higher than its actual level for determining what luxury-themed magic items (subject to GM approval) are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items.",
        "page":  53,
        "level":  6,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  28,
                     "lumber":  10,
                     "luxuries":  6
                 },
        "costText":  "28 RP, 10 Lumber, 6 Luxuries",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "expert",
                             "dc":  22,
                             "text":  "Trade (expert) DC 22"
                         },
        "requirements":  "A luxury store must be built on a block that has either a mansion or a noble villa.",
        "upgradeFrom":  [
                            "general-store"
                        ],
        "upgradeTo":  [
                          "magic-shop"
                      ],
        "ruin":  null,
        "effects":  "A luxury store must be built on a block that has either a [[structure:mansion|mansion]] or a [[structure:noble-villa|noble villa]]. Treat the settlement’s level as one level higher than its actual level for determining what luxury-themed magic items (subject to GM approval) are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "establish-trade-agreement",
                                "note":  "Establish Trade Agreement"
                            }
                        ]
    },
    {
        "id":  "magic-shop",
        "name":  "Magic Shop",
        "namePt":  "Loja de Magia",
        "summary":  "+1 em Supernatural Solution; +1 nível para itens mágicos à venda (até 3x).",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "8",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "44 RP, 8 Lumber, 6 Luxuries, 6 Stone",
                      "Construção":  "Magic (expert) DC 24",
                      "Melhora de":  "luxury store",
                      "Melhora para":  "occult shop",
                      "Bônus de item":  "+1 item bonus to Supernatural Solution",
                      "Página":  "54"
                  },
        "text":  "These shops specialize in magic items and in connecting buyers with sellers of magical goods and services.\n\n**Lots** 1; **Cost** 44 RP, 8 Lumber, 6 Luxuries, 6 Stone\n\n**Construction** Magic (expert) DC 24\n\n**Upgrade From** [[structure:luxury-store|luxury store]]\n\n**Upgrade To** [[structure:occult-shop|occult shop]]\n\n**Item Bonus** +1 item bonus to [[activity:supernatural-solution|Supernatural Solution]]\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining what magic items are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items.",
        "page":  54,
        "level":  8,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  44,
                     "lumber":  8,
                     "luxuries":  6,
                     "stone":  6
                 },
        "costText":  "44 RP, 8 Lumber, 6 Luxuries, 6 Stone",
        "construction":  {
                             "skill":  "Magic",
                             "proficiency":  "expert",
                             "dc":  24,
                             "text":  "Magic (expert) DC 24"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "luxury-store"
                        ],
        "upgradeTo":  [
                          "occult-shop"
                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining what magic items are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Magic",
                                "activity":  "supernatural-solution",
                                "note":  "Supernatural Solution"
                            }
                        ]
    },
    {
        "id":  "magical-streetlamps",
        "name":  "Magical Streetlamps",
        "namePt":  "Postes Mágicos",
        "summary":  "Infraestrutura: ilumina todo o Urban Grid à noite; –1 Crime na primeira construção do turno.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "20 RP",
                      "Construção":  "Magic (expert) DC 20",
                      "Ruína/Unrest":  "The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.",
                      "Página":  "54"
                  },
        "text":  "Magical streetlamps are *everburning torches* that have been fitted within lampposts along the streets. At your option, these magical lights might even be free-floating spheres of light or other unusual forms of illumination.\n\n**Lots** —; **Cost** 20 RP\n\n**Construction** Magic (expert) DC 20\n\n**Effects** Magical streetlamps provide nighttime illumination for an entire Urban Grid. When you build magical streetlamps, check the magical streetlamps checkbox on your Urban Grid. The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.",
        "page":  54,
        "level":  5,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  20
                 },
        "costText":  "20 RP",
        "construction":  {
                             "skill":  "Magic",
                             "proficiency":  "expert",
                             "dc":  20,
                             "text":  "Magic (expert) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.",
        "effects":  "Magical streetlamps provide nighttime illumination for an entire Urban Grid. When you build magical streetlamps, check the magical streetlamps checkbox on your Urban Grid. The first time you build magical streetlamps in a Kingdom turn, reduce Crime by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "mansion",
        "name":  "Mansion",
        "namePt":  "Mansão",
        "summary":  "Residencial; +1 em Improve Lifestyle; habilita Luxury Store na quadra.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 6 Lumber, 6 Luxuries, 3 Stone",
                      "Construção":  "Industry (trained) DC 20",
                      "Melhora de":  "houses",
                      "Melhora para":  "noble villa",
                      "Bônus de item":  "+1 item bonus to Improve Lifestyle",
                      "Página":  "54"
                  },
        "text":  "This larger manor house houses a wealthy family.\n\n**Lots** 1; **Cost** 10 RP, 6 Lumber, 6 Luxuries, 3 Stone\n\n**Construction** Industry (trained) DC 20\n\n**Upgrade From** [[structure:houses|houses]]\n\n**Upgrade To** [[structure:noble-villa|noble villa]]\n\n**Item Bonus** +1 item bonus to [[activity:improve-lifestyle|Improve Lifestyle]]",
        "page":  54,
        "level":  5,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  6,
                     "luxuries":  6,
                     "stone":  3
                 },
        "costText":  "10 RP, 6 Lumber, 6 Luxuries, 3 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Industry (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "houses"
                        ],
        "upgradeTo":  [
                          "noble-villa"
                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Politics",
                                "activity":  "improve-lifestyle",
                                "note":  "Improve Lifestyle"
                            }
                        ]
    },
    {
        "id":  "marketplace",
        "name":  "Marketplace",
        "namePt":  "Mercado",
        "summary":  "Residencial; +1 em Establish Trade Agreement; evita a penalidade de –2 no nível para compra de itens.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "4",
                      "Traços":  "Building, Residential",
                      "Lotes":  "2",
                      "Custo":  "48 RP, 4 Lumber",
                      "Construção":  "Trade (trained) DC 19",
                      "Melhora de":  "general store",
                      "Bônus de item":  "+1 item bonus to Establish Trade Agreement",
                      "Página":  "54"
                  },
        "text":  "A marketplace is a large neighborhood of shops run by local vendors around an open area for traveling merchants and farmers to peddle their wares.\n\n**Lots** 2; **Cost** 48 RP, 4 Lumber\n\n**Construction** Trade (trained) DC 19\n\n**Upgrade From** [[structure:general-store|general store]]\n\n**Item Bonus** +1 item bonus to [[activity:establish-trade-agreement|Establish Trade Agreement]]\n\n**Effects** A town without a general store or marketplace reduces its effective level for the purposes of determining what items can be purchased there by 2.",
        "page":  54,
        "level":  4,
        "lots":  2,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  48,
                     "lumber":  4
                 },
        "costText":  "48 RP, 4 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "trained",
                             "dc":  19,
                             "text":  "Trade (trained) DC 19"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "general-store"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A town without a general store or marketplace reduces its effective level for the purposes of determining what items can be purchased there by 2.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "establish-trade-agreement",
                                "note":  "Establish Trade Agreement"
                            }
                        ]
    },
    {
        "id":  "menagerie",
        "name":  "Menagerie",
        "namePt":  "Zoológico",
        "summary":  "+2 em Rest and Relax usando Wilderness; adicionar criaturas capturadas (nível 6+) dá 1 Fame/Infamy ou –1 Ruin.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "12",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "4",
                      "Custo":  "26 RP, 14 Lumber, 10 Ore, 10 Stone",
                      "Construção":  "Wilderness (expert) DC 30",
                      "Melhora de":  "park",
                      "Bônus de item":  "+2 item bonus to Rest and Relax using Wilderness",
                      "Ruína/Unrest":  "Each time a qualifying creature is added, gain 1 Fame or Infamy point or reduce one Ruin of your choice by 1. A kingdom gains 1 Unrest at the start of a Kingdom turn for each sapient creature on display.",
                      "Página":  "54"
                  },
        "text":  "A menagerie is a large zoo that contains numerous enclosures, exhibits, tanks, or open preserves meant to display wildlife.\n\n**Lots** 4; **Cost** 26 RP, 14 Lumber, 10 Ore, 10 Stone\n\n**Construction** Wilderness (expert) DC 30\n\n**Upgrade From** [[structure:park|park]]\n\n**Item Bonus** +2 item bonus to [[activity:rest-and-relax|Rest and Relax]] using Wilderness\n\n**Effects** A menagerie typically contains a selection of level 5 or lower animals. If your party captures a living creature of level 6 or higher and can transport the creature back to a settlement with a menagerie, you can add that creature to the menagerie as long as your kingdom level is at least 4 higher than the creature’s level. Each time such a creature is added to a menagerie, gain 1 Fame or Infamy point (as appropriate) or reduce one Ruin of your choice by 1.\n\nOnly creatures with Intelligence modifiers of –4 or –5 are appropriate to place in a menagerie. A kingdom gains 1 Unrest at the start of a Kingdom turn for each sapient creature (anything with an Intelligence modifier of –3 or higher) on display in a menagerie.",
        "page":  54,
        "level":  12,
        "lots":  4,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  26,
                     "lumber":  14,
                     "ore":  10,
                     "stone":  10
                 },
        "costText":  "26 RP, 14 Lumber, 10 Ore, 10 Stone",
        "construction":  {
                             "skill":  "Wilderness",
                             "proficiency":  "expert",
                             "dc":  30,
                             "text":  "Wilderness (expert) DC 30"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "park"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "Each time a qualifying creature is added, gain 1 Fame or Infamy point or reduce one Ruin of your choice by 1. A kingdom gains 1 Unrest at the start of a Kingdom turn for each sapient creature on display.",
        "effects":  "A menagerie typically contains a selection of level 5 or lower animals. If your party captures a living creature of level 6 or higher and can transport the creature back to a settlement with a menagerie, you can add that creature to the menagerie as long as your kingdom level is at least 4 higher than the creature’s level. Each time such a creature is added to a menagerie, gain 1 Fame or Infamy point (as appropriate) or reduce one Ruin of your choice by 1.\n\nOnly creatures with Intelligence modifiers of –4 or –5 are appropriate to place in a menagerie. A kingdom gains 1 Unrest at the start of a Kingdom turn for each sapient creature (anything with an Intelligence modifier of –3 or higher) on display in a menagerie.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Wilderness",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Wilderness"
                            }
                        ]
    },
    {
        "id":  "military-academy",
        "name":  "Military Academy",
        "namePt":  "Academia Militar",
        "summary":  "+2 em Pledge of Fealty usando Warfare e +2 em Train Army.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "12",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "2",
                      "Custo":  "36 RP, 12 Lumber, 6 Ore, 10 Stone",
                      "Construção":  "Warfare (expert) DC 30",
                      "Melhora de":  "academy",
                      "Bônus de item":  "+2 item bonus to Pledge of Fealty using Warfare, +2 item bonus to Train Army (see the appendix starting on page 71)",
                      "Página":  "54"
                  },
        "text":  "A military academy is dedicated to the study of war and the training of elite soldiers and officers.\n\n**Lots** 2; **Cost** 36 RP, 12 Lumber, 6 Ore, 10 Stone\n\n**Construction** Warfare (expert) DC 30\n\n**Upgrade From** [[structure:academy|academy]]\n\n**Item Bonus** +2 item bonus to [[activity:pledge-of-fealty|Pledge of Fealty]] using Warfare, +2 item bonus to [[activity:train-army|Train Army]] (see the appendix starting on page 71)",
        "page":  54,
        "level":  12,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  36,
                     "lumber":  12,
                     "ore":  6,
                     "stone":  10
                 },
        "costText":  "36 RP, 12 Lumber, 6 Ore, 10 Stone",
        "construction":  {
                             "skill":  "Warfare",
                             "proficiency":  "expert",
                             "dc":  30,
                             "text":  "Warfare (expert) DC 30"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "academy"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Warfare",
                                "activity":  "pledge-of-fealty",
                                "note":  "Pledge of Fealty using Warfare"
                            },
                            {
                                "value":  2,
                                "skill":  null,
                                "activity":  "train-army",
                                "note":  "Train Army"
                            }
                        ]
    },
    {
        "id":  "mill",
        "name":  "Mill",
        "namePt":  "Moinho",
        "summary":  "+1 em Harvest Crops; se ao menos um moinho estiver junto a Water Border, Consumption do assentamento –1.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 2 Lumber, 1 Stone",
                      "Construção":  "Industry (trained) DC 16",
                      "Bônus de item":  "+1 item bonus to Harvest Crops",
                      "Página":  "54"
                  },
        "text":  "A mill grinds grain using the power of wind, water, or beasts of burden.\n\n**Lots** 1; **Cost** 6 RP, 2 Lumber, 1 Stone\n\n**Construction** Industry (trained) DC 16\n\n**Item Bonus** +1 item bonus to [[activity:harvest-crops|Harvest Crops]]\n\n**Effects** If a settlement includes at least one mill built on a lot adjacent to a Water border, the increased efficiency of these mills reduces the settlement’s [[rule:consumption|Consumption]] by 1 (to a minimum of 0).",
        "page":  54,
        "level":  2,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  2,
                     "stone":  1
                 },
        "costText":  "6 RP, 2 Lumber, 1 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  16,
                             "text":  "Industry (trained) DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "If a settlement includes at least one mill built on a lot adjacent to a Water border, the increased efficiency of these mills reduces the settlement’s [[rule:consumption|Consumption]] by 1 (to a minimum of 0).",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Agriculture",
                                "activity":  "harvest-crops",
                                "note":  "Harvest Crops"
                            }
                        ]
    },
    {
        "id":  "mint",
        "name":  "Mint",
        "namePt":  "Casa da Moeda",
        "summary":  "+3 em Capital Investment, Collect Taxes e Repair Reputation (Crime).",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "1",
                      "Custo":  "30 RP, 12 Lumber, 20 Ore, 16 Stone",
                      "Construção":  "Trade (master) DC 34",
                      "Bônus de item":  "+3 item bonus to Capital Investment, Collect Taxes, and to Repair Reputation (Crime)",
                      "Página":  "54"
                  },
        "text":  "A mint allows the kingdom to produce its own coinage to augment its economy. It can also include fortified underground chambers to help serve as a treasury.\n\n**Lots** 1; **Cost** 30 RP, 12 Lumber, 20 Ore, 16 Stone\n\n**Construction** Trade (master) DC 34\n\n**Item Bonus** +3 item bonus to [[activity:capital-investment|Capital Investment]], [[activity:collect-taxes|Collect Taxes]], and to [[activity:repair-reputation|Repair Reputation]] (Crime)",
        "page":  54,
        "level":  15,
        "lots":  1,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  30,
                     "lumber":  12,
                     "ore":  20,
                     "stone":  16
                 },
        "costText":  "30 RP, 12 Lumber, 20 Ore, 16 Stone",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Trade (master) DC 34"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  "Trade",
                                "activity":  "capital-investment",
                                "note":  "Capital Investment"
                            },
                            {
                                "value":  3,
                                "skill":  "Trade",
                                "activity":  "collect-taxes",
                                "note":  "Collect Taxes"
                            },
                            {
                                "value":  3,
                                "skill":  "Trade",
                                "activity":  "repair-reputation",
                                "note":  "Repair Reputation (Crime)"
                            }
                        ]
    },
    {
        "id":  "monument",
        "name":  "Monument",
        "namePt":  "Monumento",
        "summary":  "Barato: –1 Unrest e –1 em uma Ruin à escolha na primeira construção do turno.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 1 Stone",
                      "Construção":  "Arts (trained) DC 18",
                      "Ruína/Unrest":  "The first time you build a monument each Kingdom turn, reduce Unrest by 1 and reduce one Ruin of your choice by 1.",
                      "Página":  "55"
                  },
        "text":  "A monument is an impressive stone structure built to commemorate a historical event, honor a beloved leader, memorialize a tragedy, or simply serve as an artistic display.\n\n**Lots** 1; **Cost** 6 RP, 1 Stone\n\n**Construction** Arts (trained) DC 18\n\n**Effects** The first time you build a monument each Kingdom turn, reduce Unrest by 1 and reduce one Ruin of your choice by 1.",
        "page":  55,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  6,
                     "stone":  1
                 },
        "costText":  "6 RP, 1 Stone",
        "construction":  {
                             "skill":  "Arts",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Arts (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a monument each Kingdom turn, reduce Unrest by 1 and reduce one Ruin of your choice by 1.",
        "effects":  "The first time you build a monument each Kingdom turn, reduce Unrest by 1 and reduce one Ruin of your choice by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "museum",
        "name":  "Museum",
        "namePt":  "Museu",
        "summary":  "+1 em Rest and Relax usando Arts; doar item mágico relevante de nível 6+ reduz Unrest em 1.",
        "tags":  [
                     "building",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building, Famous, Infamous",
                      "Lotes":  "2",
                      "Custo":  "30 RP, 6 Lumber, 2 Stone",
                      "Construção":  "Exploration (trained) DC 20",
                      "Bônus de item":  "+1 item bonus to Rest and Relax using Arts",
                      "Ruína/Unrest":  "Each time a significant magic item (level 6+) is donated, reduce Unrest by 1; if it is later removed from display, increase Unrest by 1.",
                      "Página":  "55"
                  },
        "text":  "A museum displays art, objects of important cultural note, wonders of the natural world, and other marvels in a place where citizens can observe and learn.\n\n**Lots** 2; **Cost** 30 RP, 6 Lumber, 2 Stone\n\n**Construction** Exploration (trained) DC 20\n\n**Item Bonus** +1 item bonus to [[activity:rest-and-relax|Rest and Relax]] using Arts\n\n**Effects** A magic item of level 6 or higher that has a particular import or bears significant historical or regional value (at the GM’s discretion) can be donated to a museum. Each time such an item is donated, reduce Unrest by 1. If that item is later removed from display, increase Unrest by 1.",
        "page":  55,
        "level":  5,
        "lots":  2,
        "traits":  [
                       "building",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  30,
                     "lumber":  6,
                     "stone":  2
                 },
        "costText":  "30 RP, 6 Lumber, 2 Stone",
        "construction":  {
                             "skill":  "Exploration",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Exploration (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "Each time a significant magic item (level 6+) is donated, reduce Unrest by 1; if it is later removed from display, increase Unrest by 1.",
        "effects":  "A magic item of level 6 or higher that has a particular import or bears significant historical or regional value (at the GM’s discretion) can be donated to a museum. Each time such an item is donated, reduce Unrest by 1. If that item is later removed from display, increase Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Arts",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Arts"
                            }
                        ]
    },
    {
        "id":  "noble-villa",
        "name":  "Noble Villa",
        "namePt":  "Vila Nobre",
        "summary":  "Residencial; +1 em Improve Lifestyle e Quell Unrest usando Politics; –2 Unrest na primeira construção do turno.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Building, Residential",
                      "Lotes":  "2",
                      "Custo":  "24 RP, 10 Lumber, 6 Luxuries, 8 Stone",
                      "Construção":  "Politics (expert) DC 19",
                      "Melhora de":  "mansion",
                      "Bônus de item":  "+1 item bonus to Improve Lifestyle and to Quell Unrest using Politics",
                      "Ruína/Unrest":  "The first time you build a noble villa each Kingdom turn, reduce Unrest by 2.",
                      "Página":  "55"
                  },
        "text":  "This sprawling manor has luxurious grounds. It houses a noble family and their staff, and includes several smaller support structures such as servant’s quarters, stables, and groundskeeper’s cottages in addition to a manor.\n\n**Lots** 2; **Cost** 24 RP, 10 Lumber, 6 Luxuries, 8 Stone\n\n**Construction** Politics (expert) DC 19\n\n**Upgrade From** [[structure:mansion|mansion]]\n\n**Item Bonus** +1 item bonus to [[activity:improve-lifestyle|Improve Lifestyle]] and to [[activity:quell-unrest|Quell Unrest]] using Politics\n\n**Effects** The first time you build a noble villa each Kingdom turn, reduce Unrest by 2.",
        "page":  55,
        "level":  9,
        "lots":  2,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  24,
                     "lumber":  10,
                     "luxuries":  6,
                     "stone":  8
                 },
        "costText":  "24 RP, 10 Lumber, 6 Luxuries, 8 Stone",
        "construction":  {
                             "skill":  "Politics",
                             "proficiency":  "expert",
                             "dc":  19,
                             "text":  "Politics (expert) DC 19"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "mansion"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a noble villa each Kingdom turn, reduce Unrest by 2.",
        "effects":  "The first time you build a noble villa each Kingdom turn, reduce Unrest by 2.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Politics",
                                "activity":  "improve-lifestyle",
                                "note":  "Improve Lifestyle"
                            },
                            {
                                "value":  1,
                                "skill":  "Politics",
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest using Politics"
                            }
                        ]
    },
    {
        "id":  "occult-shop",
        "name":  "Occult Shop",
        "namePt":  "Loja de Ocultismo",
        "summary":  "+2 em Prognostication; +1 nível para itens mágicos (até 3x); PCs +2 em Research/Recall Knowledge de temas esotéricos.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "13",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "68 RP, 12 Lumber, 12 Luxuries, 6 Stone",
                      "Construção":  "Magic (master) DC 32",
                      "Melhora de":  "magic shop",
                      "Bônus de item":  "+2 item bonus to Prognostication",
                      "Página":  "55"
                  },
        "text":  "An occult shop is usually a sprawling, mysterious store that specializes in buying and selling obscure magic and strange curios. It often provides access to supernatural services like fortune-telling.\n\n**Lots** 1; **Cost** 68 RP, 12 Lumber, 12 Luxuries, 6 Stone\n\n**Construction** Magic (master) DC 32\n\n**Upgrade From** [[structure:magic-shop|magic shop]]\n\n**Item Bonus** +2 item bonus to [[activity:prognostication|Prognostication]]\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining what magic items are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items. While in a settlement with an occult shop, you gain a +2 item bonus to all checks made to Research esoteric subjects or to Recall Knowledge about the same.",
        "page":  55,
        "level":  13,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  68,
                     "lumber":  12,
                     "luxuries":  12,
                     "stone":  6
                 },
        "costText":  "68 RP, 12 Lumber, 12 Luxuries, 6 Stone",
        "construction":  {
                             "skill":  "Magic",
                             "proficiency":  "master",
                             "dc":  32,
                             "text":  "Magic (master) DC 32"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "magic-shop"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining what magic items are readily available for sale in that settlement. This effect stacks up to three times and overlaps with other stores that function in this way for more specific categories of magic items. While in a settlement with an occult shop, you gain a +2 item bonus to all checks made to Research esoteric subjects or to Recall Knowledge about the same.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Magic",
                                "activity":  "prognostication",
                                "note":  "Prognostication"
                            }
                        ]
    },
    {
        "id":  "opera-house",
        "name":  "Opera House",
        "namePt":  "Casa de Ópera",
        "summary":  "+3 em Celebrate Holiday e Create a Masterpiece; –4 Unrest; PCs +3 em Performance para Earn Income.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice, Famous, Infamous",
                      "Lotes":  "2",
                      "Custo":  "40 RP, 20 Lumber, 18 Luxuries, 16 Stone",
                      "Construção":  "Arts (master) DC 34",
                      "Melhora de":  "theater",
                      "Bônus de item":  "+3 item bonus to Celebrate Holiday and Create a Masterpiece",
                      "Ruína/Unrest":  "The first time you build an opera house each Kingdom turn, reduce Unrest by 4.",
                      "Página":  "55"
                  },
        "text":  "An opera house functions well as a venue for operas, plays, and concerts, but also includes extensive facilities to aid in the training of all manner of bardic pursuits. Often, an opera house becomes a grandiose landmark, either due to its outlandish colors or eye-catching architecture.\n\n**Lots** 2; **Cost** 40 RP, 20 Lumber, 18 Luxuries, 16 Stone\n\n**Construction** Arts (master) DC 34\n\n**Upgrade From** [[structure:theater|theater]]\n\n**Item Bonus** +3 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]] and [[activity:create-a-masterpiece|Create a Masterpiece]]\n\n**Effects** The first time you build an opera house each Kingdom turn, reduce Unrest by 4. While in a settlement with an opera house, you gain a +3 item bonus to Performance checks made to Earn Income.",
        "page":  55,
        "level":  15,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  40,
                     "lumber":  20,
                     "luxuries":  18,
                     "stone":  16
                 },
        "costText":  "40 RP, 20 Lumber, 18 Luxuries, 16 Stone",
        "construction":  {
                             "skill":  "Arts",
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Arts (master) DC 34"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "theater"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build an opera house each Kingdom turn, reduce Unrest by 4.",
        "effects":  "The first time you build an opera house each Kingdom turn, reduce Unrest by 4. While in a settlement with an opera house, you gain a +3 item bonus to Performance checks made to Earn Income.",
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            },
                            {
                                "value":  3,
                                "skill":  "Arts",
                                "activity":  "create-a-masterpiece",
                                "note":  "Create a Masterpiece"
                            }
                        ]
    },
    {
        "id":  "orphanage",
        "name":  "Orphanage",
        "namePt":  "Orfanato",
        "summary":  "Residencial barato; –1 Unrest na primeira construção do turno.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 2 Lumber",
                      "Construção":  "Industry DC 16",
                      "Melhora de":  "houses",
                      "Ruína/Unrest":  "The first time you build an orphanage each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "55"
                  },
        "text":  "This sprawling residential building provides housing for orphans or even homeless citizens, but it can also help supply housing for refugees—but preferably not all at the same time, though!\n\n**Lots** 1; **Cost** 6 RP, 2 Lumber\n\n**Construction** Industry DC 16\n\n**Upgrade From** [[structure:houses|houses]]\n\n**Effects** The first time you build an orphanage each Kingdom turn, reduce Unrest by 1.",
        "page":  55,
        "level":  2,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  2
                 },
        "costText":  "6 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "untrained",
                             "dc":  16,
                             "text":  "Industry DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "houses"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build an orphanage each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build an orphanage each Kingdom turn, reduce Unrest by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "palace",
        "name":  "Palace",
        "namePt":  "Palácio",
        "summary":  "+3 em New Leadership, Pledge of Fealty, Send Diplomatic Envoy e atividades de exército; –10 Unrest; 3 atividades de Leadership; Ruler +3 em Leadership. Só na capital.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice, Famous, Infamous",
                      "Lotes":  "4",
                      "Custo":  "108 RP, 20 Lumber, 12 Luxuries, 15 Ore, 20 Stone",
                      "Construção":  "Defense (master), Industry (master), Magic (master), or Statecraft (master) DC 34",
                      "Melhora de":  "castle",
                      "Bônus de item":  "+3 item bonus to New Leadership, Pledge of Fealty, and Send Diplomatic Envoy, and +3 item bonus to Garrison Army, Recover Army, or Recruit Army (see the appendix starting on page 71)",
                      "Requisitos":  "A palace can only be built in your capital.",
                      "Ruína/Unrest":  "The first time you build a palace, reduce Unrest by 10.",
                      "Página":  "55"
                  },
        "text":  "A palace is a grand and splendid seat of government for your leaders and other political functionaries.\n\n**Lots** 4; **Cost** 108 RP, 20 Lumber, 12 Luxuries, 15 Ore, 20 Stone\n\n**Construction** Defense (master), Industry (master), Magic (master), or Statecraft (master) DC 34\n\n**Upgrade From** [[structure:castle|castle]]\n\n**Item Bonus** +3 item bonus to [[activity:new-leadership|New Leadership]], [[activity:pledge-of-fealty|Pledge of Fealty]], and [[activity:send-diplomatic-envoy|Send Diplomatic Envoy]], and +3 item bonus to [[activity:garrison-army|Garrison Army]], [[activity:recover-army|Recover Army]], or [[activity:recruit-army|Recruit Army]] (see the appendix starting on page 71)\n\n**Effects** A palace can only be built in your capital. The first time you build a palace, reduce Unrest by 10.\n\nIf you [[activity:relocate-capital|Relocate your Capital]], a palace left behind in that capital instead functions as a noble villa that takes up 4 lots. (If you represent this by placing two noble villas in these lots, make sure to note that they constitute a single building and aren’t two separate structures.)\n\nA palace in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2. In addition, once your kingdom has a palace, a PC in the Ruler leadership role gains a +3 item bonus to checks made to resolve Leadership activities.",
        "page":  55,
        "level":  15,
        "lots":  4,
        "traits":  [
                       "building",
                       "edifice",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  108,
                     "lumber":  20,
                     "luxuries":  12,
                     "ore":  15,
                     "stone":  20
                 },
        "costText":  "108 RP, 20 Lumber, 12 Luxuries, 15 Ore, 20 Stone",
        "construction":  {
                             "skill":  "Defense/Industry/Magic/Statecraft",
                             "skills":  [
                                            "Defense",
                                            "Industry",
                                            "Magic",
                                            "Statecraft"
                                        ],
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Defense (master), Industry (master), Magic (master), or Statecraft (master) DC 34"
                         },
        "requirements":  "A palace can only be built in your capital.",
        "upgradeFrom":  [
                            "castle"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a palace, reduce Unrest by 10.",
        "effects":  "A palace can only be built in your capital. The first time you build a palace, reduce Unrest by 10.\n\nIf you [[activity:relocate-capital|Relocate your Capital]], a palace left behind in that capital instead functions as a noble villa that takes up 4 lots. (If you represent this by placing two noble villas in these lots, make sure to note that they constitute a single building and aren’t two separate structures.)\n\nA palace in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2. In addition, once your kingdom has a palace, a PC in the Ruler leadership role gains a +3 item bonus to checks made to resolve Leadership activities.",
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  null,
                                "activity":  "new-leadership",
                                "note":  "New Leadership"
                            },
                            {
                                "value":  3,
                                "skill":  null,
                                "activity":  "pledge-of-fealty",
                                "note":  "Pledge of Fealty"
                            },
                            {
                                "value":  3,
                                "skill":  "Statecraft",
                                "activity":  "send-diplomatic-envoy",
                                "note":  "Send Diplomatic Envoy"
                            },
                            {
                                "value":  3,
                                "skill":  null,
                                "activity":  "garrison-army",
                                "note":  "Garrison Army"
                            },
                            {
                                "value":  3,
                                "skill":  null,
                                "activity":  "recover-army",
                                "note":  "Recover Army"
                            },
                            {
                                "value":  3,
                                "skill":  "Warfare",
                                "activity":  "recruit-army",
                                "note":  "Recruit Army"
                            }
                        ]
    },
    {
        "id":  "park",
        "name":  "Park",
        "namePt":  "Parque",
        "summary":  "Só 5 RP, sem Commodities: +1 em Rest and Relax usando Wilderness; –1 Unrest na primeira construção do turno.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "5 RP",
                      "Construção":  "Wilderness DC 18",
                      "Melhora para":  "menagerie",
                      "Bônus de item":  "+1 item bonus to Rest and Relax using Wilderness checks",
                      "Ruína/Unrest":  "The first time you build a park each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "56"
                  },
        "text":  "A park is a plot of undeveloped land set aside for public use. This lot could be left as is, or the landscaping could be manipulated to have a specific look or type of terrain.\n\n**Lots** 1; **Cost** 5 RP\n\n**Construction** Wilderness DC 18\n\n**Upgrade To** [[structure:menagerie|menagerie]]\n\n**Item Bonus** +1 item bonus to [[activity:rest-and-relax|Rest and Relax]] using Wilderness checks\n\n**Effects** The first time you build a park each Kingdom turn, reduce Unrest by 1.",
        "page":  56,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  5
                 },
        "costText":  "5 RP",
        "construction":  {
                             "skill":  "Wilderness",
                             "proficiency":  "untrained",
                             "dc":  18,
                             "text":  "Wilderness DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "menagerie"
                      ],
        "ruin":  "The first time you build a park each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build a park each Kingdom turn, reduce Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Wilderness",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Wilderness"
                            }
                        ]
    },
    {
        "id":  "paved-streets",
        "name":  "Paved Streets",
        "namePt":  "Ruas Pavimentadas",
        "summary":  "Infraestrutura: deslocamento entre lotes cai de 15 para 5 minutos.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "4",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "12 RP, 6 Stone",
                      "Construção":  "Industry (trained) DC 19",
                      "Página":  "56"
                  },
        "text":  "Brick or cobblestone streets speed transportation and ease the passage of people, mounts, and vehicles.\n\n**Lots** —; **Cost** 12 RP, 6 Stone\n\n**Construction** Industry (trained) DC 19\n\n**Effects** It takes a character only 5 minutes to move from one lot to an adjacent lot in an Urban Grid when moving on paved streets. When you build paved streets, check the paved streets checkbox on your Urban Grid.",
        "page":  56,
        "level":  4,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  12,
                     "stone":  6
                 },
        "costText":  "12 RP, 6 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  19,
                             "text":  "Industry (trained) DC 19"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "It takes a character only 5 minutes to move from one lot to an adjacent lot in an Urban Grid when moving on paved streets. When you build paved streets, check the paved streets checkbox on your Urban Grid.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "pier",
        "name":  "Pier",
        "namePt":  "Píer",
        "summary":  "+1 em Go Fishing. Precisa estar junto a Water Border.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "16 RP, 2 Lumber",
                      "Construção":  "Boating DC 18",
                      "Melhora para":  "waterfront",
                      "Bônus de item":  "+1 item bonus to Go Fishing",
                      "Requisitos":  "A pier must be built in a lot next to a Water border.",
                      "Página":  "56"
                  },
        "text":  "Several wooden piers allow easy access to fishing and provide a convenient place to moor boats.\n\n**Lots** 1; **Cost** 16 RP, 2 Lumber\n\n**Construction** Boating DC 18\n\n**Upgrade To** [[structure:waterfront|waterfront]]\n\n**Item Bonus** +1 item bonus to [[activity:go-fishing|Go Fishing]]\n\n**Effects** A pier must be built in a lot next to a Water border.",
        "page":  56,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  16,
                     "lumber":  2
                 },
        "costText":  "16 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Boating",
                             "proficiency":  "untrained",
                             "dc":  18,
                             "text":  "Boating DC 18"
                         },
        "requirements":  "A pier must be built in a lot next to a Water border.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "waterfront"
                      ],
        "ruin":  null,
        "effects":  "A pier must be built in a lot next to a Water border.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Boating",
                                "activity":  "go-fishing",
                                "note":  "Go Fishing"
                            }
                        ]
    },
    {
        "id":  "rubble",
        "name":  "Rubble",
        "namePt":  "Escombros",
        "summary":  "Lote bloqueado por escombros (eventos ou Demolish falho); só pode construir após um Demolish bem-sucedido.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "—",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "—",
                      "Construção":  "—",
                      "Página":  "56"
                  },
        "text":  "An unsightly heap of rubble fills this lot.\n\n**Lots** 1; **Cost** —\n\n**Construction** —\n\n**Effects** Rubble is created accidentally, such as from a result of certain kingdom events or failed [[activity:demolish|Demolish]] activity. You cannot build in a lot with rubble; it must be removed via a successful Demolish activity.",
        "page":  56,
        "level":  null,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {

                 },
        "costText":  "—",
        "construction":  {
                             "skill":  null,
                             "proficiency":  null,
                             "dc":  null,
                             "text":  "—"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Rubble is created accidentally, such as from a result of certain kingdom events or failed [[activity:demolish|Demolish]] activity. You cannot build in a lot with rubble; it must be removed via a successful Demolish activity.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "sacred-grove",
        "name":  "Sacred Grove",
        "namePt":  "Bosque Sagrado",
        "summary":  "+1 em Quell Unrest usando Folklore; +1 nível para itens primais (até 3x). Sem Commodities.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "36 RP",
                      "Construção":  "Wilderness (trained) DC 20",
                      "Bônus de item":  "+1 item bonus to Quell Unrest using Folklore",
                      "Página":  "56"
                  },
        "text":  "This untouched land has been blessed by primal spirits, druids friendly with your settlement, or allied fey creatures.\n\n**Lots** 1; **Cost** 36 RP\n\n**Construction** Wilderness (trained) DC 20\n\n**Item Bonus** +1 item bonus to [[activity:quell-unrest|Quell Unrest]] using Folklore\n\n**Effects** Treat the settlement’s level as one level higher than its actual level for the purposes of determining what primal magic items are readily available for sale in that settlement. This effect stacks up to three times.",
        "page":  56,
        "level":  5,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  36
                 },
        "costText":  "36 RP",
        "construction":  {
                             "skill":  "Wilderness",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Wilderness (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level for the purposes of determining what primal magic items are readily available for sale in that settlement. This effect stacks up to three times.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Folklore",
                                "activity":  "quell-unrest",
                                "note":  "Quell Unrest using Folklore"
                            }
                        ]
    },
    {
        "id":  "secure-warehouse",
        "name":  "Secure Warehouse",
        "namePt":  "Armazém Seguro",
        "summary":  "+1 em Craft Luxuries; +1 capacidade máxima de Luxuries.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "6",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "24 RP, 6 Lumber, 4 Ore, 6 Stone",
                      "Construção":  "Industry (expert) DC 22",
                      "Bônus de item":  "+1 item bonus to Craft Luxuries",
                      "Página":  "56"
                  },
        "text":  "Secure warehouses are used to store valuables.\n\n**Lots** 2; **Cost** 24 RP, 6 Lumber, 4 Ore, 6 Stone\n\n**Construction** Industry (expert) DC 22\n\n**Item Bonus** +1 item bonus to [[activity:craft-luxuries|Craft Luxuries]]\n\n**Effects** Each secure warehouse in your kingdom increases your maximum Luxuries Commodity capacity by 1.",
        "page":  56,
        "level":  6,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  24,
                     "lumber":  6,
                     "ore":  4,
                     "stone":  6
                 },
        "costText":  "24 RP, 6 Lumber, 4 Ore, 6 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "expert",
                             "dc":  22,
                             "text":  "Industry (expert) DC 22"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Each secure warehouse in your kingdom increases your maximum Luxuries Commodity capacity by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Arts",
                                "activity":  "craft-luxuries",
                                "note":  "Craft Luxuries"
                            }
                        ]
    },
    {
        "id":  "sewer-system",
        "name":  "Sewer System",
        "namePt":  "Sistema de Esgoto",
        "summary":  "Infraestrutura: Consumption do assentamento –1; +1 em Clandestine Business; afeta alguns eventos.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "7",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "24 RP, 8 Lumber, 8 Stone",
                      "Construção":  "Engineering (expert) DC 23",
                      "Bônus de item":  "+1 item bonus to Clandestine Business",
                      "Página":  "56"
                  },
        "text":  "This underground sanitation system helps keep the settlement clean and disease-free.\n\n**Lots** —; **Cost** 24 RP, 8 Lumber, 8 Stone\n\n**Construction** Engineering (expert) DC 23\n\n**Item Bonus** +1 item bonus to [[activity:clandestine-business|Clandestine Business]]\n\n**Effects** A sewer system reduces the settlement’s [[rule:consumption|Consumption]] by 1. Having a sewer system can also affect certain kingdom events. When you build a sewer system, check the sewer system checkbox on its Urban Grid. (For metropolises, this infrastructure automatically applies to all of its Urban Grids.)",
        "page":  56,
        "level":  7,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  24,
                     "lumber":  8,
                     "stone":  8
                 },
        "costText":  "24 RP, 8 Lumber, 8 Stone",
        "construction":  {
                             "skill":  "Engineering",
                             "proficiency":  "expert",
                             "dc":  23,
                             "text":  "Engineering (expert) DC 23"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A sewer system reduces the settlement’s [[rule:consumption|Consumption]] by 1. Having a sewer system can also affect certain kingdom events. When you build a sewer system, check the sewer system checkbox on its Urban Grid. (For metropolises, this infrastructure automatically applies to all of its Urban Grids.)",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Intrigue",
                                "activity":  "clandestine-business",
                                "note":  "Clandestine Business"
                            }
                        ]
    },
    {
        "id":  "shrine",
        "name":  "Shrine",
        "namePt":  "Santuário",
        "summary":  "+1 em Celebrate Holiday; +1 nível para itens divinos (até 3x). Melhora para Temple.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "8 RP, 2 Lumber, 1 Stone",
                      "Construção":  "Folklore (trained) DC 15",
                      "Melhora para":  "temple",
                      "Bônus de item":  "+1 item bonus to Celebrate Holiday",
                      "Página":  "56"
                  },
        "text":  "A shrine is a small building devoted to the worship of a deity or faith. It can be attended by resident priests or visiting clergy.\n\n**Lots** 1; **Cost** 8 RP, 2 Lumber, 1 Stone\n\n**Construction** Folklore (trained) DC 15\n\n**Upgrade To** [[structure:temple|temple]]\n\n**Item Bonus** +1 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]]\n\n**Effects** Treat the settlement’s level as one level higher than its actual level when determining what divine magic items are readily available for sale in that settlement. This effect stacks up to three times but does not stack with the same effect granted by temples or cathedrals.",
        "page":  56,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  8,
                     "lumber":  2,
                     "stone":  1
                 },
        "costText":  "8 RP, 2 Lumber, 1 Stone",
        "construction":  {
                             "skill":  "Folklore",
                             "proficiency":  "trained",
                             "dc":  15,
                             "text":  "Folklore (trained) DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "temple"
                      ],
        "ruin":  null,
        "effects":  "Treat the settlement’s level as one level higher than its actual level when determining what divine magic items are readily available for sale in that settlement. This effect stacks up to three times but does not stack with the same effect granted by temples or cathedrals.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            }
                        ]
    },
    {
        "id":  "smithy",
        "name":  "Smithy",
        "namePt":  "Ferraria",
        "summary":  "+1 em Trade Commodities e Outfit Army; PCs +1 em Crafting com metal.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "8 RP, 2 Lumber, 1 Ore, 1 Stone",
                      "Construção":  "Industry (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Trade Commodities, +1 item bonus to Outfit Army (see the appendix starting on page 71)",
                      "Página":  "57"
                  },
        "text":  "A smithy consists of workshops and forges.\n\n**Lots** 1; **Cost** 8 RP, 2 Lumber, 1 Ore, 1 Stone\n\n**Construction** Industry (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:trade-commodities|Trade Commodities]], +1 item bonus to [[activity:outfit-army|Outfit Army]] (see the appendix starting on page 71)\n\n**Effects** While in a settlement with a smithy, you gain a +1 item bonus to Craft checks made to work with metal.",
        "page":  57,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  8,
                     "lumber":  2,
                     "ore":  1,
                     "stone":  1
                 },
        "costText":  "8 RP, 2 Lumber, 1 Ore, 1 Stone",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Industry (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "While in a settlement with a smithy, you gain a +1 item bonus to Craft checks made to work with metal.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Industry",
                                "activity":  "trade-commodities",
                                "note":  "Trade Commodities"
                            },
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  "outfit-army",
                                "note":  "Outfit Army"
                            }
                        ]
    },
    {
        "id":  "specialized-artisan",
        "name":  "Specialized Artisan",
        "namePt":  "Artesão Especializado",
        "summary":  "+1 em Craft Luxuries; PCs +1 em Crafting de bens especializados (joias etc.).",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "4",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 4 Lumber, 1 Luxury",
                      "Construção":  "Trade (expert) DC 19",
                      "Bônus de item":  "+1 item bonus to Craft Luxuries",
                      "Página":  "57"
                  },
        "text":  "These shops and homes are devoted to crafters who create fine jewelry, glassware, clockworks, and the like.\n\n**Lots** 1; **Cost** 10 RP, 4 Lumber, 1 Luxury\n\n**Construction** Trade (expert) DC 19\n\n**Item Bonus** +1 item bonus to [[activity:craft-luxuries|Craft Luxuries]]\n\n**Effects** While in a settlement with a specialized artisan, you gain a +1 item bonus to Craft checks made to craft specialized goods like jewelry.",
        "page":  57,
        "level":  4,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  4,
                     "luxuries":  1
                 },
        "costText":  "10 RP, 4 Lumber, 1 Luxury",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "expert",
                             "dc":  19,
                             "text":  "Trade (expert) DC 19"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "While in a settlement with a specialized artisan, you gain a +1 item bonus to Craft checks made to craft specialized goods like jewelry.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Arts",
                                "activity":  "craft-luxuries",
                                "note":  "Craft Luxuries"
                            }
                        ]
    },
    {
        "id":  "stable",
        "name":  "Stable",
        "namePt":  "Estábulo",
        "summary":  "+1 em Establish Trade Agreement.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Yard",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 2 Lumber",
                      "Construção":  "Wilderness (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Establish Trade Agreement",
                      "Página":  "57"
                  },
        "text":  "A stable consists of a yard and smaller structures to house, train, and sell mounts.\n\n**Lots** 1; **Cost** 10 RP, 2 Lumber\n\n**Construction** Wilderness (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:establish-trade-agreement|Establish Trade Agreement]]",
        "page":  57,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  2
                 },
        "costText":  "10 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Wilderness",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Wilderness (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  null,
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "establish-trade-agreement",
                                "note":  "Establish Trade Agreement"
                            }
                        ]
    },
    {
        "id":  "stockyard",
        "name":  "Stockyard",
        "namePt":  "Curral",
        "summary":  "+1 em Gather Livestock; Consumption do assentamento –1 (ocupa 4 lotes).",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Yard",
                      "Lotes":  "4",
                      "Custo":  "20 RP, 4 Lumber",
                      "Construção":  "Industry DC 18",
                      "Bônus de item":  "+1 item bonus to Gather Livestock",
                      "Página":  "57"
                  },
        "text":  "A stockyard includes several barns and pens used to house livestock and prepare them for slaughter.\n\n**Lots** 4; **Cost** 20 RP, 4 Lumber\n\n**Construction** Industry DC 18\n\n**Item Bonus** +1 item bonus to [[activity:gather-livestock|Gather Livestock]]\n\n**Effects** A settlement with at least one stockyard reduces its [[rule:consumption|Consumption]] by 1.",
        "page":  57,
        "level":  3,
        "lots":  4,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  20,
                     "lumber":  4
                 },
        "costText":  "20 RP, 4 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "untrained",
                             "dc":  18,
                             "text":  "Industry DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A settlement with at least one stockyard reduces its [[rule:consumption|Consumption]] by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Wilderness",
                                "activity":  "gather-livestock",
                                "note":  "Gather Livestock"
                            }
                        ]
    },
    {
        "id":  "stonemason",
        "name":  "Stonemason",
        "namePt":  "Cantaria",
        "summary":  "+1 em Establish Work Site (pedreira); +1 capacidade máxima de Stone.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "16 RP, 2 Lumber",
                      "Construção":  "Industry (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to Establish Work Site (quarry).",
                      "Página":  "57"
                  },
        "text":  "A stonemason is a large building used to store and work quarried stone for preparation in building.\n\n**Lots** 2; **Cost** 16 RP, 2 Lumber\n\n**Construction** Industry (trained) DC 18\n\n**Item Bonus** +1 item bonus to [[activity:establish-work-site|Establish Work Site]] (quarry).\n\n**Effects** Each stonemason in your kingdom increases your maximum Stone Commodity capacity by 1.",
        "page":  57,
        "level":  3,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  16,
                     "lumber":  2
                 },
        "costText":  "16 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Industry (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "Each stonemason in your kingdom increases your maximum Stone Commodity capacity by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Engineering",
                                "activity":  "establish-work-site",
                                "note":  "Establish Work Site (quarry)"
                            }
                        ]
    },
    {
        "id":  "tannery",
        "name":  "Tannery",
        "namePt":  "Curtume",
        "summary":  "+1 em Trade Commodities. Não pode dividir quadra com Residential (exceto Tenement).",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "6 RP, 2 Lumber",
                      "Construção":  "Industry (trained) DC 18",
                      "Bônus de item":  "+1 to Trade Commodities",
                      "Requisitos":  "A tannery cannot share a block with any Residential structure except tenements.",
                      "Página":  "57"
                  },
        "text":  "A tannery is a factory outfitted with racks, vats and tools for the preparation of hides and leather.\n\n**Lots** 1; **Cost** 6 RP, 2 Lumber\n\n**Construction** Industry (trained) DC 18\n\n**Item Bonus** +1 to [[activity:trade-commodities|Trade Commodities]]\n\n**Effects** A tannery cannot share a block with any Residential structure except tenements.",
        "page":  57,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  6,
                     "lumber":  2
                 },
        "costText":  "6 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Industry (trained) DC 18"
                         },
        "requirements":  "A tannery cannot share a block with any Residential structure except tenements.",
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A tannery cannot share a block with any Residential structure except tenements.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Industry",
                                "activity":  "trade-commodities",
                                "note":  "Trade Commodities"
                            }
                        ]
    },
    {
        "id":  "tavern-dive",
        "name":  "Tavern, Dive",
        "namePt":  "Taverna Pé-Sujo",
        "summary":  "–1 Unrest mas +1 Crime na primeira construção do turno. Melhora para Popular Tavern.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "12 RP, 1 Lumber",
                      "Construção":  "Trade (trained) DC 15",
                      "Melhora para":  "tavern, popular",
                      "Ruína/Unrest":  "The first time you build a dive tavern in a Kingdom turn, reduce Unrest by 1 but increase Crime by 1.",
                      "Página":  "57"
                  },
        "text":  "A dive tavern is a rough-and-tumble establishment for entertainment, eating, and drinking.\n\n**Lots** 1; **Cost** 12 RP, 1 Lumber\n\n**Construction** Trade (trained) DC 15\n\n**Upgrade To** [[structure:tavern-popular|tavern, popular]]\n\n**Effects** The first time you build a dive tavern in a Kingdom turn, reduce Unrest by 1 but increase Crime by 1.",
        "page":  57,
        "level":  1,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  12,
                     "lumber":  1
                 },
        "costText":  "12 RP, 1 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "trained",
                             "dc":  15,
                             "text":  "Trade (trained) DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "tavern-popular"
                      ],
        "ruin":  "The first time you build a dive tavern in a Kingdom turn, reduce Unrest by 1 but increase Crime by 1.",
        "effects":  "The first time you build a dive tavern in a Kingdom turn, reduce Unrest by 1 but increase Crime by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "tavern-popular",
        "name":  "Tavern, Popular",
        "namePt":  "Taverna Popular",
        "summary":  "+1 em Hire Adventurers e Rest and Relax usando Trade; –2 Unrest; PCs +1 em Performance (Earn Income) e Gather Information.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "24 RP, 6 Lumber, 2 Stone",
                      "Construção":  "Trade (expert) DC 18",
                      "Melhora de":  "tavern, dive",
                      "Melhora para":  "tavern, luxury",
                      "Bônus de item":  "+1 item bonus to Hire Adventurers and to Rest and Relax using Trade",
                      "Ruína/Unrest":  "The first time you build a popular tavern in a Kingdom turn, reduce Unrest by 2.",
                      "Página":  "57"
                  },
        "text":  "A popular tavern is a respectable establishment for entertainment, eating, and drinking.\n\n**Lots** 1; **Cost** 24 RP, 6 Lumber, 2 Stone\n\n**Construction** Trade (expert) DC 18\n\n**Upgrade From** [[structure:tavern-dive|tavern, dive]]\n\n**Upgrade To** [[structure:tavern-luxury|tavern, luxury]]\n\n**Item Bonus** +1 item bonus to [[activity:hire-adventurers|Hire Adventurers]] and to [[activity:rest-and-relax|Rest and Relax]] using Trade\n\n**Effects** The first time you build a popular tavern in a Kingdom turn, reduce Unrest by 2. If you attempt a Performance check to Earn Income in a settlement with a popular tavern, you gain a +1 item bonus to the check. All checks made to Gather Information in a settlement with at least one popular tavern gain a +1 item bonus.",
        "page":  57,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  24,
                     "lumber":  6,
                     "stone":  2
                 },
        "costText":  "24 RP, 6 Lumber, 2 Stone",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "expert",
                             "dc":  18,
                             "text":  "Trade (expert) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "tavern-dive"
                        ],
        "upgradeTo":  [
                          "tavern-luxury"
                      ],
        "ruin":  "The first time you build a popular tavern in a Kingdom turn, reduce Unrest by 2.",
        "effects":  "The first time you build a popular tavern in a Kingdom turn, reduce Unrest by 2. If you attempt a Performance check to Earn Income in a settlement with a popular tavern, you gain a +1 item bonus to the check. All checks made to Gather Information in a settlement with at least one popular tavern gain a +1 item bonus.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Exploration",
                                "activity":  "hire-adventurers",
                                "note":  "Hire Adventurers"
                            },
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Trade"
                            }
                        ]
    },
    {
        "id":  "tavern-luxury",
        "name":  "Tavern, Luxury",
        "namePt":  "Taverna de Luxo",
        "summary":  "+2 em Hire Adventurers e Rest and Relax usando Trade; –(1d4+1) Unrest; PCs +2 em Performance (Earn Income) e Gather Information.",
        "tags":  [
                     "building",
                     "famous"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Building, Famous",
                      "Lotes":  "2",
                      "Custo":  "48 RP, 10 Lumber, 8 Luxuries, 8 Stone",
                      "Construção":  "Trade (master) DC 26",
                      "Melhora de":  "tavern, popular",
                      "Melhora para":  "tavern, world-class",
                      "Bônus de item":  "+2 item bonus to Hire Adventurers and to Rest and Relax using Trade",
                      "Ruína/Unrest":  "The first time you build a luxury tavern in a Kingdom turn, reduce Unrest by 1d4+1.",
                      "Página":  "57"
                  },
        "text":  "A luxury tavern is a high-class establishment for entertainment, eating, and drinking. It may even include a built-in stage for performers to use.\n\n**Lots** 2; **Cost** 48 RP, 10 Lumber, 8 Luxuries, 8 Stone\n\n**Construction** Trade (master) DC 26\n\n**Upgrade From** [[structure:tavern-popular|tavern, popular]]\n\n**Upgrade To** [[structure:tavern-world-class|tavern, world-class]]\n\n**Item Bonus** +2 item bonus to [[activity:hire-adventurers|Hire Adventurers]] and to [[activity:rest-and-relax|Rest and Relax]] using Trade\n\n**Effects** The first time you build a luxury tavern in a Kingdom turn, reduce Unrest by 1d4+1. If attempt a Performance check to Earn Income in a settlement with a luxury tavern, you gain a +2 item bonus to the check. All checks made to Gather Information in a settlement with at least one luxury tavern gain a +2 item bonus.",
        "page":  57,
        "level":  9,
        "lots":  2,
        "traits":  [
                       "building",
                       "famous"
                   ],
        "cost":  {
                     "rp":  48,
                     "lumber":  10,
                     "luxuries":  8,
                     "stone":  8
                 },
        "costText":  "48 RP, 10 Lumber, 8 Luxuries, 8 Stone",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "master",
                             "dc":  26,
                             "text":  "Trade (master) DC 26"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "tavern-popular"
                        ],
        "upgradeTo":  [
                          "tavern-world-class"
                      ],
        "ruin":  "The first time you build a luxury tavern in a Kingdom turn, reduce Unrest by 1d4+1.",
        "effects":  "The first time you build a luxury tavern in a Kingdom turn, reduce Unrest by 1d4+1. If attempt a Performance check to Earn Income in a settlement with a luxury tavern, you gain a +2 item bonus to the check. All checks made to Gather Information in a settlement with at least one luxury tavern gain a +2 item bonus.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Exploration",
                                "activity":  "hire-adventurers",
                                "note":  "Hire Adventurers"
                            },
                            {
                                "value":  2,
                                "skill":  "Trade",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Trade"
                            }
                        ]
    },
    {
        "id":  "tavern-world-class",
        "name":  "Tavern, World-Class",
        "namePt":  "Taverna de Classe Mundial",
        "summary":  "+3 em Hire Adventurers, Rest and Relax usando Trade e Repair Reputation (Strife); –2d4 Unrest; PCs +3 em Performance e Gather Information.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice, Famous",
                      "Lotes":  "2",
                      "Custo":  "64 RP, 18 Lumber, 15 Luxuries, 15 Stone",
                      "Construção":  "Trade (master) DC 34",
                      "Melhora de":  "tavern, luxury",
                      "Bônus de item":  "+3 item bonus to Hire Adventurers, to Rest and Relax using Trade, and to Repair Reputation (Strife)",
                      "Ruína/Unrest":  "The first time you build a world-class tavern in a turn, reduce Unrest by 2d4.",
                      "Página":  "58"
                  },
        "text":  "A World-Class Tavern is a legendary establishment for entertainment, eating, and drinking. It has at least one venue for performances—perhaps multiple ones.\n\n**Lots** 2; **Cost** 64 RP, 18 Lumber, 15 Luxuries, 15 Stone\n\n**Construction** Trade (master) DC 34\n\n**Upgrade From** [[structure:tavern-luxury|tavern, luxury]]\n\n**Item Bonus** +3 item bonus to [[activity:hire-adventurers|Hire Adventurers]], to [[activity:rest-and-relax|Rest and Relax]] using Trade, and to [[activity:repair-reputation|Repair Reputation]] (Strife)\n\n**Effects** The first time you build a world-class tavern in a turn, reduce Unrest by 2d4. If you try a Performance check to Earn Income in a settlement with a world-class tavern, you gain a +3 item bonus to the check. All checks made to Gather Information in a settlement with a world-class tavern gain a +3 item bonus.",
        "page":  58,
        "level":  15,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice",
                       "famous"
                   ],
        "cost":  {
                     "rp":  64,
                     "lumber":  18,
                     "luxuries":  15,
                     "stone":  15
                 },
        "costText":  "64 RP, 18 Lumber, 15 Luxuries, 15 Stone",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Trade (master) DC 34"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "tavern-luxury"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a world-class tavern in a turn, reduce Unrest by 2d4.",
        "effects":  "The first time you build a world-class tavern in a turn, reduce Unrest by 2d4. If you try a Performance check to Earn Income in a settlement with a world-class tavern, you gain a +3 item bonus to the check. All checks made to Gather Information in a settlement with a world-class tavern gain a +3 item bonus.",
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  "Exploration",
                                "activity":  "hire-adventurers",
                                "note":  "Hire Adventurers"
                            },
                            {
                                "value":  3,
                                "skill":  "Trade",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Trade"
                            },
                            {
                                "value":  3,
                                "skill":  "Intrigue",
                                "activity":  "repair-reputation",
                                "note":  "Repair Reputation (Strife)"
                            }
                        ]
    },
    {
        "id":  "temple",
        "name":  "Temple",
        "namePt":  "Templo",
        "summary":  "+1 em Celebrate Holiday e Provide Care; –2 Unrest; +1 nível para itens divinos (até 3x).",
        "tags":  [
                     "building",
                     "famous",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "7",
                      "Traços":  "Building, Famous, Infamous",
                      "Lotes":  "2",
                      "Custo":  "32 RP, 6 Lumber, 6 Stone",
                      "Construção":  "Folklore (trained) DC 23",
                      "Melhora de":  "shrine",
                      "Melhora para":  "cathedral",
                      "Bônus de item":  "+1 item bonus to Celebrate Holiday and Provide Care",
                      "Ruína/Unrest":  "The first time you build a temple each Kingdom turn, reduce Unrest by 2.",
                      "Página":  "58"
                  },
        "text":  "A temple is a building devoted to worshipping a deity or faith.\n\n**Lots** 2; **Cost** 32 RP, 6 Lumber, 6 Stone\n\n**Construction** Folklore (trained) DC 23\n\n**Upgrade From** [[structure:shrine|shrine]]\n\n**Upgrade To** [[structure:cathedral|cathedral]]\n\n**Item Bonus** +1 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]] and [[activity:provide-care|Provide Care]]\n\n**Effects** The first time you build a temple each Kingdom turn, reduce Unrest by 2. Treat the settlement’s level as one level higher than its actual level for the purposes of determining what divine magic items are readily available for sale in that settlement. This effect stacks up to three times but does not stack with the same effect granted by shrines or cathedrals.",
        "page":  58,
        "level":  7,
        "lots":  2,
        "traits":  [
                       "building",
                       "famous",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  32,
                     "lumber":  6,
                     "stone":  6
                 },
        "costText":  "32 RP, 6 Lumber, 6 Stone",
        "construction":  {
                             "skill":  "Folklore",
                             "proficiency":  "trained",
                             "dc":  23,
                             "text":  "Folklore (trained) DC 23"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "shrine"
                        ],
        "upgradeTo":  [
                          "cathedral"
                      ],
        "ruin":  "The first time you build a temple each Kingdom turn, reduce Unrest by 2.",
        "effects":  "The first time you build a temple each Kingdom turn, reduce Unrest by 2. Treat the settlement’s level as one level higher than its actual level for the purposes of determining what divine magic items are readily available for sale in that settlement. This effect stacks up to three times but does not stack with the same effect granted by shrines or cathedrals.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            },
                            {
                                "value":  1,
                                "skill":  "Defense",
                                "activity":  "provide-care",
                                "note":  "Provide Care"
                            }
                        ]
    },
    {
        "id":  "tenement",
        "name":  "Tenement",
        "namePt":  "Cortiço",
        "summary":  "Residencial mais barato (1 RP, 1 Lumber, DC 14) e –1 Unrest, mas +1 em uma Ruin à escolha.",
        "tags":  [
                     "building",
                     "residential"
                 ],
        "stats":  {
                      "Nível":  "0",
                      "Traços":  "Building, Residential",
                      "Lotes":  "1",
                      "Custo":  "1 RP, 1 Lumber",
                      "Construção":  "Industry DC 14",
                      "Melhora para":  "Houses",
                      "Ruína/Unrest":  "Ruin +1 to a Ruin of your choice. The first time you build tenements each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "58"
                  },
        "text":  "Tenements are hastily built shantytowns of tightly packed, multi-family dwellings that are cheap and fast to build.\n\n**Lots** 1; **Cost** 1 RP, 1 Lumber\n\n**Construction** Industry DC 14\n\n**Upgrade To** [[structure:houses|Houses]]\n\n**Ruin** +1 to a Ruin of your choice\n\n**Effects** The first time you build tenements each Kingdom turn, reduce Unrest by 1.",
        "page":  58,
        "level":  0,
        "lots":  1,
        "traits":  [
                       "building",
                       "residential"
                   ],
        "cost":  {
                     "rp":  1,
                     "lumber":  1
                 },
        "costText":  "1 RP, 1 Lumber",
        "construction":  {
                             "skill":  "Industry",
                             "proficiency":  "untrained",
                             "dc":  14,
                             "text":  "Industry DC 14"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "houses"
                      ],
        "ruin":  "Ruin +1 to a Ruin of your choice. The first time you build tenements each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build tenements each Kingdom turn, reduce Unrest by 1.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "theater",
        "name":  "Theater",
        "namePt":  "Teatro",
        "summary":  "+2 em Celebrate Holiday; –1 Unrest; PCs +2 em Performance para Earn Income.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "9",
                      "Traços":  "Building",
                      "Lotes":  "2",
                      "Custo":  "24 RP, 8 Lumber, 3 Stone",
                      "Construção":  "Arts (expert) DC 26",
                      "Melhora de":  "festival hall",
                      "Melhora para":  "opera house",
                      "Bônus de item":  "+2 item bonus to Celebrate Holiday.",
                      "Ruína/Unrest":  "The first time you build a theater each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "58"
                  },
        "text":  "A theater is a venue for concerts, plays, and dances, but can double as a place for debates or other events.\n\n**Lots** 2; **Cost** 24 RP, 8 Lumber, 3 Stone\n\n**Construction** Arts (expert) DC 26\n\n**Upgrade From** [[structure:festival-hall|festival hall]]\n\n**Upgrade To** [[structure:opera-house|opera house]]\n\n**Item Bonus** +2 item bonus to [[activity:celebrate-holiday|Celebrate Holiday]].\n\n**Effects** The first time you build a theater each Kingdom turn, reduce Unrest by 1. While in a settlement with a theater, you gain a +2 item bonus to Performance checks made to Earn Income.",
        "page":  58,
        "level":  9,
        "lots":  2,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  24,
                     "lumber":  8,
                     "stone":  3
                 },
        "costText":  "24 RP, 8 Lumber, 3 Stone",
        "construction":  {
                             "skill":  "Arts",
                             "proficiency":  "expert",
                             "dc":  26,
                             "text":  "Arts (expert) DC 26"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "festival-hall"
                        ],
        "upgradeTo":  [
                          "opera-house"
                      ],
        "ruin":  "The first time you build a theater each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build a theater each Kingdom turn, reduce Unrest by 1. While in a settlement with a theater, you gain a +2 item bonus to Performance checks made to Earn Income.",
        "itemBonuses":  [
                            {
                                "value":  2,
                                "skill":  "Folklore",
                                "activity":  "celebrate-holiday",
                                "note":  "Celebrate Holiday"
                            }
                        ]
    },
    {
        "id":  "thieves-guild",
        "name":  "Thieves’ Guild",
        "namePt":  "Guilda dos Ladrões",
        "summary":  "+1 em Infiltration; PCs +1 em Create Forgeries. Custa +1 Crime.",
        "tags":  [
                     "building",
                     "infamous"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Building, Infamous",
                      "Lotes":  "1",
                      "Custo":  "25 RP, 4 Lumber",
                      "Construção":  "Intrigue (trained) DC 20",
                      "Bônus de item":  "+1 item bonus to Infiltration",
                      "Ruína/Unrest":  "Ruin +1 Crime.",
                      "Página":  "58"
                  },
        "text":  "The government knows this group exists but allows it to continue doing its business as long as the guild doesn’t overstep its bounds.\n\n**Lots** 1; **Cost** 25 RP, 4 Lumber\n\n**Construction** Intrigue (trained) DC 20\n\n**Item Bonus** +1 item bonus to [[activity:infiltration|Infiltration]]\n\n**Ruin** +1 Crime\n\n**Effects** While in a settlement with a thieves’ guild, you gain a +1 item bonus to Create Forgeries.",
        "page":  58,
        "level":  5,
        "lots":  1,
        "traits":  [
                       "building",
                       "infamous"
                   ],
        "cost":  {
                     "rp":  25,
                     "lumber":  4
                 },
        "costText":  "25 RP, 4 Lumber",
        "construction":  {
                             "skill":  "Intrigue",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Intrigue (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "Ruin +1 Crime.",
        "effects":  "While in a settlement with a thieves’ guild, you gain a +1 item bonus to Create Forgeries.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Intrigue",
                                "activity":  "infiltration",
                                "note":  "Infiltration"
                            }
                        ]
    },
    {
        "id":  "town-hall",
        "name":  "Town Hall",
        "namePt":  "Prefeitura",
        "summary":  "–1 Unrest; na capital, PCs líderes fazem 3 atividades de Leadership por turno em vez de 2. Melhora para Castle.",
        "tags":  [
                     "building",
                     "edifice"
                 ],
        "stats":  {
                      "Nível":  "2",
                      "Traços":  "Building, Edifice",
                      "Lotes":  "2",
                      "Custo":  "22 RP, 4 Lumber, 4 Stone",
                      "Construção":  "Defense (trained), Industry (trained), Magic (trained), or Statecraft (trained) DC 16",
                      "Melhora para":  "castle",
                      "Ruína/Unrest":  "The first time you build a town hall each Kingdom turn, reduce Unrest by 1.",
                      "Página":  "58"
                  },
        "text":  "A town hall is a public venue for town meetings and a repository for town history and records.\n\n**Lots** 2; **Cost** 22 RP, 4 Lumber, 4 Stone\n\n**Construction** Defense (trained), Industry (trained), Magic (trained), or Statecraft (trained) DC 16\n\n**Upgrade To** [[structure:castle|castle]]\n\n**Effects** The first time you build a town hall each Kingdom turn, reduce Unrest by 1. A town hall in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2.",
        "page":  58,
        "level":  2,
        "lots":  2,
        "traits":  [
                       "building",
                       "edifice"
                   ],
        "cost":  {
                     "rp":  22,
                     "lumber":  4,
                     "stone":  4
                 },
        "costText":  "22 RP, 4 Lumber, 4 Stone",
        "construction":  {
                             "skill":  "Defense/Industry/Magic/Statecraft",
                             "skills":  [
                                            "Defense",
                                            "Industry",
                                            "Magic",
                                            "Statecraft"
                                        ],
                             "proficiency":  "trained",
                             "dc":  16,
                             "text":  "Defense (trained), Industry (trained), Magic (trained), or Statecraft (trained) DC 16"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "castle"
                      ],
        "ruin":  "The first time you build a town hall each Kingdom turn, reduce Unrest by 1.",
        "effects":  "The first time you build a town hall each Kingdom turn, reduce Unrest by 1. A town hall in a capital allows PC leaders to take 3 Leadership activities during the Activity phase of a Kingdom turn rather than just 2.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "trade-shop",
        "name":  "Trade Shop",
        "namePt":  "Oficina Comercial",
        "summary":  "+1 em Purchase Commodities; PCs +1 em Crafting associado ao tipo da loja. Melhora para Guildhall.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "10 RP, 2 Lumber",
                      "Construção":  "Trade (trained) DC 18",
                      "Melhora para":  "guildhall",
                      "Bônus de item":  "+1 item bonus to Purchase Commodities",
                      "Página":  "58"
                  },
        "text":  "A trade shop is a store that focuses on providing services.\n\n**Lots** 1; **Cost** 10 RP, 2 Lumber\n\n**Construction** Trade (trained) DC 18\n\n**Upgrade To** [[structure:guildhall|guildhall]]\n\n**Item Bonus** +1 item bonus to [[activity:purchase-commodities|Purchase Commodities]]\n\n**Effects** When you build a trade shop, indicate the kind of shop it is, such as a bakery, carpenter, tailor, and so on. While in a settlement with a trade shop, you gain a +1 item bonus to all associated Crafting checks.",
        "page":  58,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  10,
                     "lumber":  2
                 },
        "costText":  "10 RP, 2 Lumber",
        "construction":  {
                             "skill":  "Trade",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Trade (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "guildhall"
                      ],
        "ruin":  null,
        "effects":  "When you build a trade shop, indicate the kind of shop it is, such as a bakery, carpenter, tailor, and so on. While in a settlement with a trade shop, you gain a +1 item bonus to all associated Crafting checks.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Trade",
                                "activity":  "purchase-commodities",
                                "note":  "Purchase Commodities"
                            }
                        ]
    },
    {
        "id":  "university",
        "name":  "University",
        "namePt":  "Universidade",
        "summary":  "+3 em Creative Solution; PCs +3 em Recall Knowledge (Lore), Research e Decipher Writing.",
        "tags":  [
                     "building",
                     "edifice",
                     "famous"
                 ],
        "stats":  {
                      "Nível":  "15",
                      "Traços":  "Building, Edifice, Famous",
                      "Lotes":  "4",
                      "Custo":  "78 RP, 18 Lumber, 18 Luxuries, 18 Stone",
                      "Construção":  "Scholarship (master) DC 34",
                      "Melhora de":  "academy",
                      "Bônus de item":  "+3 item bonus to Creative Solution",
                      "Página":  "59"
                  },
        "text":  "A university is a sprawling institution of higher learning.\n\n**Lots** 4; **Cost** 78 RP, 18 Lumber, 18 Luxuries, 18 Stone\n\n**Construction** Scholarship (master) DC 34\n\n**Upgrade From** [[structure:academy|academy]]\n\n**Item Bonus** +3 item bonus to [[activity:creative-solution|Creative Solution]]\n\n**Effects** While in a settlement with a university, you gain a +3 item bonus to Lore checks made to Recall Knowledge while Investigating, to Research checks (*Gamemastery Guide* 154), and to Decipher Writing.",
        "page":  59,
        "level":  15,
        "lots":  4,
        "traits":  [
                       "building",
                       "edifice",
                       "famous"
                   ],
        "cost":  {
                     "rp":  78,
                     "lumber":  18,
                     "luxuries":  18,
                     "stone":  18
                 },
        "costText":  "78 RP, 18 Lumber, 18 Luxuries, 18 Stone",
        "construction":  {
                             "skill":  "Scholarship",
                             "proficiency":  "master",
                             "dc":  34,
                             "text":  "Scholarship (master) DC 34"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "academy"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "While in a settlement with a university, you gain a +3 item bonus to Lore checks made to Recall Knowledge while Investigating, to Research checks (*Gamemastery Guide* 154), and to Decipher Writing.",
        "itemBonuses":  [
                            {
                                "value":  3,
                                "skill":  "Scholarship",
                                "activity":  "creative-solution",
                                "note":  "Creative Solution"
                            }
                        ]
    },
    {
        "id":  "wall-stone",
        "name":  "Wall, Stone",
        "namePt":  "Muralha de Pedra",
        "summary":  "Muralha em uma borda (Walled Border) para defesa em eventos e Warfare; –1 Unrest na primeira muralha de pedra do assentamento.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "5",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "4 RP, 8 Stone",
                      "Construção":  "Defense (trained) DC 20",
                      "Melhora de":  "wooden wall",
                      "Ruína/Unrest":  "The first time you build a stone wall in each settlement, reduce Unrest by 1.",
                      "Página":  "59"
                  },
        "text":  "Stone walls provide solid defenses to a settlement’s borders.\n\n**Lots** —; **Cost** 4 RP, 8 Stone\n\n**Construction** Defense (trained) DC 20\n\n**Upgrade From** [[structure:wall-wooden|wooden wall]]\n\n**Effects** A stone wall is built along the border of your settlement. The first time you build a stone wall in each settlement, reduce Unrest by 1. When you build a stone wall, choose a border on your Urban Grid and check the appropriate checkbox; if you’re upgrading from a wooden wall, uncheck that box.",
        "page":  59,
        "level":  5,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  4,
                     "stone":  8
                 },
        "costText":  "4 RP, 8 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "trained",
                             "dc":  20,
                             "text":  "Defense (trained) DC 20"
                         },
        "requirements":  null,
        "upgradeFrom":  [
                            "wall-wooden"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a stone wall in each settlement, reduce Unrest by 1.",
        "effects":  "A stone wall is built along the border of your settlement. The first time you build a stone wall in each settlement, reduce Unrest by 1. When you build a stone wall, choose a border on your Urban Grid and check the appropriate checkbox; if you’re upgrading from a wooden wall, uncheck that box.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "wall-wooden",
        "name":  "Wall, Wooden",
        "namePt":  "Paliçada de Madeira",
        "summary":  "Muralha barata em uma borda (Walled Border); –1 Unrest na primeira paliçada do assentamento.",
        "tags":  [
                     "infrastructure"
                 ],
        "stats":  {
                      "Nível":  "1",
                      "Traços":  "Infrastructure",
                      "Lotes":  "—",
                      "Custo":  "2 RP, 4 Lumber",
                      "Construção":  "Defense DC 15",
                      "Melhora para":  "stone wall",
                      "Ruína/Unrest":  "The first time you build a wooden wall in each settlement, reduce Unrest by 1.",
                      "Página":  "59"
                  },
        "text":  "Wooden walls provide serviceable defenses to a settlement.\n\n**Lots** —; **Cost** 2 RP, 4 Lumber\n\n**Construction** Defense DC 15\n\n**Upgrade To** [[structure:wall-stone|stone wall]]\n\n**Effects** A wooden wall is built along the border of your settlement. The first time you build a wooden wall in each settlement, reduce Unrest by 1. When you build a wooden wall, choose a border on your Urban Grid and check the appropriate checkbox.",
        "page":  59,
        "level":  1,
        "lots":  0,
        "traits":  [
                       "infrastructure"
                   ],
        "cost":  {
                     "rp":  2,
                     "lumber":  4
                 },
        "costText":  "2 RP, 4 Lumber",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "untrained",
                             "dc":  15,
                             "text":  "Defense DC 15"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [
                          "wall-stone"
                      ],
        "ruin":  "The first time you build a wooden wall in each settlement, reduce Unrest by 1.",
        "effects":  "A wooden wall is built along the border of your settlement. The first time you build a wooden wall in each settlement, reduce Unrest by 1. When you build a wooden wall, choose a border on your Urban Grid and check the appropriate checkbox.",
        "itemBonuses":  [

                        ]
    },
    {
        "id":  "watchtower",
        "name":  "Watchtower",
        "namePt":  "Torre de Vigia",
        "summary":  "+1 em testes para resolver eventos que afetem o assentamento; –1 Unrest na primeira construção do turno.",
        "tags":  [
                     "building"
                 ],
        "stats":  {
                      "Nível":  "3",
                      "Traços":  "Building",
                      "Lotes":  "1",
                      "Custo":  "12 RP, 4 Lumber or 4 Stone",
                      "Construção":  "Defense (trained) DC 18",
                      "Bônus de item":  "+1 item bonus to checks to resolve events affecting the settlement.",
                      "Ruína/Unrest":  "The first time you build a watchtower each Kingdom turn, decrease Unrest by 1.",
                      "Página":  "59"
                  },
        "text":  "A watchtower serves as a guard post that grants a settlement advance warning to upcoming dangerous events.\n\n**Lots** 1; **Cost** 12 RP, 4 Lumber or 4 Stone\n\n**Construction** Defense (trained) DC 18\n\n**Item Bonus** +1 item bonus to checks to resolve events affecting the settlement.\n\n**Effects** The first time you build a watchtower each Kingdom turn, decrease Unrest by 1.",
        "page":  59,
        "level":  3,
        "lots":  1,
        "traits":  [
                       "building"
                   ],
        "cost":  {
                     "rp":  12,
                     "lumber":  4,
                     "stone":  4,
                     "or":  [
                                "lumber",
                                "stone"
                            ]
                 },
        "costText":  "12 RP, 4 Lumber or 4 Stone",
        "construction":  {
                             "skill":  "Defense",
                             "proficiency":  "trained",
                             "dc":  18,
                             "text":  "Defense (trained) DC 18"
                         },
        "requirements":  null,
        "upgradeFrom":  [

                        ],
        "upgradeTo":  [

                      ],
        "ruin":  "The first time you build a watchtower each Kingdom turn, decrease Unrest by 1.",
        "effects":  "The first time you build a watchtower each Kingdom turn, decrease Unrest by 1.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  null,
                                "activity":  null,
                                "note":  "Checks to resolve kingdom events affecting the settlement"
                            }
                        ]
    },
    {
        "id":  "waterfront",
        "name":  "Waterfront",
        "namePt":  "Zona Portuária",
        "summary":  "+1 em Go Fishing e em Establish Trade Agreement/Rest and Relax usando Boating; +1 nível para compra de itens. Junto a Water Border.",
        "tags":  [
                     "yard"
                 ],
        "stats":  {
                      "Nível":  "8",
                      "Traços":  "Yard",
                      "Lotes":  "4",
                      "Custo":  "90 RP, 10 Lumber",
                      "Construção":  "Boating (expert) DC 24",
                      "Melhora de":  "pier",
                      "Bônus de item":  "+1 item bonus to Go Fishing, and to Establish Trade Agreement and Rest and Relax using Boating",
                      "Requisitos":  "A waterfront must be constructed next to a Water Border.",
                      "Página":  "59"
                  },
        "text":  "A waterfront serves as a bustling port for waterborne passengers and cargo. It’s supported by facilities for shipping and shipbuilding, but also features boardwalks for foot traffic and fishers to ply their trade as well.\n\n**Lots** 4; **Cost** 90 RP, 10 Lumber\n\n**Construction** Boating (expert) DC 24\n\n**Upgrade From** [[structure:pier|pier]]\n\n**Item Bonus** +1 item bonus to [[activity:go-fishing|Go Fishing]], and to [[activity:establish-trade-agreement|Establish Trade Agreement]] and [[activity:rest-and-relax|Rest and Relax]] using Boating\n\n**Effects** A waterfront must be constructed next to a Water Border. A settlement with at least 1 waterfront increases its effective level by 1 for the purposes of determining what level of items can be purchased in that settlement; this bonus stacks with similar bonuses in the settlement.",
        "page":  59,
        "level":  8,
        "lots":  4,
        "traits":  [
                       "yard"
                   ],
        "cost":  {
                     "rp":  90,
                     "lumber":  10
                 },
        "costText":  "90 RP, 10 Lumber",
        "construction":  {
                             "skill":  "Boating",
                             "proficiency":  "expert",
                             "dc":  24,
                             "text":  "Boating (expert) DC 24"
                         },
        "requirements":  "A waterfront must be constructed next to a Water Border.",
        "upgradeFrom":  [
                            "pier"
                        ],
        "upgradeTo":  [

                      ],
        "ruin":  null,
        "effects":  "A waterfront must be constructed next to a Water Border. A settlement with at least 1 waterfront increases its effective level by 1 for the purposes of determining what level of items can be purchased in that settlement; this bonus stacks with similar bonuses in the settlement.",
        "itemBonuses":  [
                            {
                                "value":  1,
                                "skill":  "Boating",
                                "activity":  "go-fishing",
                                "note":  "Go Fishing"
                            },
                            {
                                "value":  1,
                                "skill":  "Boating",
                                "activity":  "establish-trade-agreement",
                                "note":  "Establish Trade Agreement using Boating"
                            },
                            {
                                "value":  1,
                                "skill":  "Boating",
                                "activity":  "rest-and-relax",
                                "note":  "Rest and Relax using Boating"
                            }
                        ]
    }
];
KM.settlementRules = [
    {
        "id":  "urban-grid",
        "name":  "The Urban Grid",
        "namePt":  "O Urban Grid (Grade Urbana)",
        "category":  "assentamentos",
        "summary":  "Cada assentamento é uma grade de 3×3 quadras (blocks), cada uma com 4 lotes (2×2) — até 36 lotes por grade. Vila usa 1 quadra; cidade, as 9; metrópole adiciona grades.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "The Urban Grid presents a simple graphical representation of a settlement (see page 83 for an example). The grid divides a settlement into 9 large districts (blocks) arranged in a 3-by-3 square. Each district itself comprises 4 individual neighborhoods (lots) arranged in a 2-by-2 square. It is these neighborhood lots in which you’ll build structures to improve your settlement.\n\nWhile the Urban Grid diagrams your settlement as a square, this is simply an organizational abstraction—it doesn’t mean that your settlements are literally square. If it helps your sense of verisimilitude, feel free to cut up the Urban Grid and arrange blocks of four lots in any shape you wish. For a city hugging the shores of a great bay, you could draw out the bay and simply paste the blocks in a long row lining the coastline, or in any other arrangement that suits your taste.\n\nThough the Urban Grid depicts 9 blocks for each settlement, the number of blocks in which you can build is limited by the settlement’s category: a village consists of only a single block (and can thus host a maximum of only 4 lots of structures), while a city can expand to all 9 blocks (and can host up to 36 lots of structures). It’s even possible for your settlement to become a metropolis, expanding to more than one Urban Grid! (See [[rule:settlement-types|Settlement Types]] for complete details of settlement categories.)",
        "page":  45
    },
    {
        "id":  "settlement-level",
        "name":  "Settlement Level",
        "namePt":  "Nível do Assentamento",
        "category":  "assentamentos",
        "summary":  "O nível do assentamento (para Earn Income e itens à venda) é igual ao número de quadras com pelo menos uma estrutura (máx. 20); não é o nível do reino.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "In Pathfinder, a settlement’s level is used primarily to determine potential jobs on offer for the Earn Income activity, and to determine what level of items are commonly available for sale in that community. For the purposes of Kingmaker, it’s easiest to assume that a settlement created by the PCs using these rules has a settlement level equal to the number of blocks on the settlement’s Urban Grid that are completely filled, but you should feel free to adjust these levels as makes sense for their campaign. The levels assigned to NPC settlements in this book (such as Restov, Varnhold, and Pitax) have been set as appropriate for the story line and are not determined by the number of full city blocks.\n\n### Level (Settlement Types)\n\nThe settlement’s level generally falls within the range listed here, and is always equal to the number of blocks that have at least one structure (to a maximum of 20). A settlement level is separate from the kingdom level and is primarily used to determine potential jobs in the settlement (*Pathfinder Core Rulebook* 504). A settlement’s level also suggests what sort of magic items might be commonly available for purchase at shops or the market (subject to GM adjudication).",
        "page":  46
    },
    {
        "id":  "urban-grid-borders",
        "name":  "Urban Grid Borders",
        "namePt":  "Bordas do Urban Grid",
        "category":  "assentamentos",
        "summary":  "Bordas podem ser Land, Water ou Walled. Cada assentamento sem Land Border (e sem Bridge numa Water Border) dá –1 cumulativo em Trade; ilha sem ponte tem influência 0.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "The four sides of the Urban Grid are where you record the types of borders your settlement has.\n\n**Land Borders:** By default, all of your settlement’s borders are unremarkable transitions from urban to hinterland—these are known as Land Borders. You take a cumulative –1 item penalty on Trade checks for each settlement in your kingdom that has no Land Borders, unless it has at least one Water Border with a [[structure:bridge|Bridge]].\n\n**Water Borders:** When you place a settlement in a hex that has lake, river, or swamp terrain, you can locate it so that it has Water Borders. Water Borders provide natural defenses to your settlement during Warfare, and some structures can only be constructed in lots adjacent to Water Borders. However, crossing Water Borders that lack Bridges takes a long time (see [[rule:navigating-an-urban-grid|Navigating an Urban Grid]]).\n\nIf a settlement has only Water Borders, it is on an island; until you build at least one Bridge, that settlement’s [[rule:influence|influence]] is 0.\n\n**Walled Borders:** Building Walls ([[structure:wall-wooden|Wall, Wooden]] or [[structure:wall-stone|Wall, Stone]]) on your borders boosts your settlement’s defense in certain events and in Warfare.",
        "page":  46
    },
    {
        "id":  "navigating-an-urban-grid",
        "name":  "Navigating an Urban Grid",
        "namePt":  "Navegando pelo Urban Grid",
        "category":  "assentamentos",
        "summary":  "Mover-se de um lote a outro adjacente (ou cruzar uma borda) leva 15 minutos; 5 minutos com Paved Streets; cruzar Water Border sem ponte leva 1 hora.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "You can simulate travel in a settlement using the Urban Grid to approximate distances. Since moving through a settlement requires a character to follow twisting roads, navigate crowds, or endure minor distractions along the way, it takes 15 minutes to move from one lot to an adjacent lot, or to cross a border (including exiting the settlement). If the settlement has [[structure:paved-streets|Paved Streets]], this travel time is reduced to 5 minutes. Crossing a Water Border that doesn’t have a [[structure:bridge|Bridge]] takes an hour.",
        "page":  46
    },
    {
        "id":  "settlement-types",
        "name":  "Settlement Types",
        "namePt":  "Tipos de Assentamento",
        "category":  "assentamentos",
        "summary":  "Vila (nível 1 do reino, 1 quadra) → Town (3º, até 4 quadras, +60 XP) → City (9º, 9 quadras, +80 XP) → Metropolis (15º, 10+ quadras, +120 XP). Cada tipo define Consumption, bônus de item máximo e influência.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "As your kingdom levels up and your settlements grow, a settlement’s type can change, providing different benefits and costs to your kingdom (see the table and the descriptions below).\n\n| Settlement | Size | Population | Level | Consumption | Max. Item Bonus | Influence |\n|---|---|---|---|---|---|---|\n| Village (1st) | 1 block | 400 or less | 1 | 1 | +1 | 0 |\n| Town (3rd) | 4 blocks | 401–2,000 | 2–4 | 2 | +1 | 1 hex |\n| City (9th) | 9 blocks | 2,001–25,000 | 5–9 | 4 | +2 | 2 hexes |\n| Metropolis (15th) | 10+ blocks | 25,001+ | 10+ | 6 | +3 | 3 hexes |\n\n### Settlement\n\nThis indicates the type of settlement, with the minimum kingdom level to support such a settlement in parenthesis.\n\n**Village:** Settlements start as villages, consisting of a single block of 4 lots. When you [[activity:build-structure|Build a Structure]] in a lot, you must select a lot in that block.\n\n**Town:** Once your kingdom is 3rd level and you’ve filled all four lots in your village, as long as your settlement is not [[rule:overcrowded|Overcrowded]], the next time you Build a Structure in a lot, you may choose a lot in any block adjacent to your current block. As you do so, your village becomes a town. A town consists of 2 to 4 blocks of 4 lots each. The blocks must be contiguous, but they need not be a square—they could form a T, L, or S shape if you like. When your kingdom gains its first town, gain 60 kingdom XP as a [[rule:kingdom-xp|milestone award]].\n\n**City:** Once your kingdom is 9th level and you’ve filled in at least two lots in each of your town’s 4 blocks, if your settlement is not Overcrowded, you may choose a lot anywhere on the Urban Grid when you Build a Structure in a lot. The first time you do so, the town transitions into a city. When your kingdom gains its first city, gain 80 kingdom XP as a milestone award.\n\n**Metropolis:** When your kingdom reaches 15th level and you have filled at least two lots on each block in your city, if your settlement is not Overcrowded, you may expand into a metropolis by adding a second Urban Grid. (You may instead continue filling in the remaining lots and remain a city.) At this point, you can place new structures into any lot you wish in the newly added Urban Grid. You can add additional Urban Grids each time you have built at least two lots of structures in every available block and are not Overcrowded, but there are no further settlement types beyond metropolis to achieve. When your kingdom gains its first metropolis, gain 120 kingdom XP as a milestone award.\n\n### Size\n\nThis indicates the maximum number of blocks the settlement can occupy in an Urban Grid.\n\n### Population\n\nA settlement’s exact population is intentionally left abstract, but if you wish to estimate the numbers, you can use the values here as guidelines. Population density increases as a Settlement grows. In a village, each completed lot has an average population of 100 people or less. A town’s average population increases to 125 people per completed lot, whereas a city’s average population per lot increases to around 700. A metropolis can have an average population per completed lot of 1,000 people or more.\n\n### Level\n\nSee [[rule:settlement-level|Settlement Level]].\n\n### Consumption, Maximum Item Bonus, Influence\n\nSee [[rule:settlement-consumption|Consumption]], [[rule:item-bonus|Maximum Item Bonus]], and [[rule:influence|Influence]].",
        "page":  46
    },
    {
        "id":  "settlement-consumption",
        "name":  "Consumption (Settlements)",
        "namePt":  "Consumo (Assentamentos)",
        "category":  "assentamentos",
        "summary":  "Consumo base em Food por tipo: Village 1, Town 2, City 4, Metropolis 6. Mill (junto à água), Sewer System e Stockyard reduzem em 1 cada.",
        "tags":  [
                     "settlement",
                     "upkeep"
                 ],
        "text":  "Consumption is a numerical value that indicates the Food commodities the settlement requires in order to remain viable and functional. The number given here shows the settlement’s base consumption; specific structures in the settlements can increase or decrease its Consumption.\n\n| Settlement | Consumption |\n|---|---|\n| Village | 1 |\n| Town | 2 |\n| City | 4 |\n| Metropolis | 6 |\n\nSee also [[rule:consumption|Consumption]] in the Upkeep phase, and the [[structure:mill|Mill]], [[structure:sewer-system|Sewer System]], and [[structure:stockyard|Stockyard]] structures.",
        "page":  47
    },
    {
        "id":  "item-bonus",
        "name":  "Maximum Item Bonus",
        "namePt":  "Bônus de Item Máximo (Acúmulo)",
        "category":  "assentamentos",
        "summary":  "Bônus de item da linha “Item Bonus” de estruturas idênticas no mesmo assentamento se somam até o máximo do tipo (Village/Town +1, City +2, Metropolis +3). Bônus da linha “Effects” não acumulam.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "Many structures within a settlement grant an item bonus to specific kingdom activities. Normally, item bonuses do not stack, but if you build multiple structures of the same type in the same settlement, their item bonuses stack up to this limit. In a case where two settlements have overlapping influences from identical structures, only the higher item bonus from a single settlement’s structures applies.\n\n| Settlement | Max. Item Bonus |\n|---|---|\n| Village | +1 |\n| Town | +1 |\n| City | +2 |\n| Metropolis | +3 |\n\n### Item Bonus (structure stat blocks)\n\nThis entry indicates any item bonuses the structure grants to specific activities made within the settlement’s influence—or within the borders of your kingdom if the settlement is your capital. These bonuses are item bonuses, but they stack with those granted by identical structures within the same settlement, up to that settlement’s maximum item bonus.\n\n### Effects (structure stat blocks)\n\nIn many cases, these effects grant item bonuses to PCs while they are in the settlement, but unlike those granted by the Item Bonus above, item bonuses found in this section of the stat block do not stack with other item bonuses. Unless stated otherwise, effects in this section apply only within this settlement; they do not apply to areas influenced by this settlement.",
        "page":  47
    },
    {
        "id":  "influence",
        "name":  "Influence",
        "namePt":  "Influência",
        "category":  "assentamentos",
        "summary":  "Raio (em hexes reivindicados) dos efeitos do assentamento: Village 0 (só o próprio hex), Town 1, City 2, Metropolis 3. Bônus de item de estruturas na capital valem no reino inteiro.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "A settlement’s influence area is the area around a settlement where meaningful economic and productive activity can occur, as well as where the settlement’s beneficial effects extend. The numeric value indicates the number of hexes that the settlement’s influence extends. Thus, a village only influences the hex it’s located in, while a town influences all adjacent hexes. If a settlement has only Water Borders and no Bridges, that settlement’s influence is 0 regardless of its settlement type.\n\nCertain activities and the impact of some kingdom events are limited to a settlement’s influence. Structures in a settlement that provide a specific item bonus do so to all of the claimed hexes influenced by their settlement. (Structures in your capital city provide that bonus to all of the kingdom’s claimed hexes, regardless of the capital’s influence.)\n\nHexes not claimed by your kingdom are never part of your settlements’ influence areas, even if they are within the distance noted above. A hex can be influenced by multiple settlements.\n\n| Settlement | Influence |\n|---|---|\n| Village | 0 |\n| Town | 1 hex |\n| City | 2 hexes |\n| Metropolis | 3 hexes |",
        "page":  47
    },
    {
        "id":  "founding-a-village",
        "name":  "Founding a Village",
        "namePt":  "Fundando uma Vila",
        "category":  "assentamentos",
        "summary":  "Clear Hex num hex reivindicado sem assentamento, e no turno seguinte Establish Settlement; escolha Water Borders (definitivo), nomeie e construa com 1 atividade Civic por turno.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "Your kingdom’s first settlement is automatically founded in Step 8 of Kingdom Creation (see page 15). You can found new settlements and expand on existing settlements during the Civic Activities step of the Activity phase of the [[rule:kingdom-turn|Kingdom turn]]. When you found a village, follow the four steps presented below to get started.\n\n### Step 1: Select a Hex\n\nSelect a Claimed Hex in your kingdom that doesn’t already have a settlement as the site for your new settlement. Work with your GM to select the specific location of your settlement within the hex. If it contains lake, river, or swamp terrain, take into consideration the number of Water Borders ([[rule:urban-grid-borders|Urban Grid Borders]]) you have in mind for your settlement.\n\n### Step 2: Establish your Village\n\nYou must first [[activity:clear-hex|Clear the Hex]] to prepare it for your village. Since Clear Hex is a Region activity that can only happen during Step 2 of the activity phase of a Kingdom turn, and [[activity:establish-settlement|Establish Settlement]] is a Leadership activity that can only happen during Step 1, you have to wait until the Kingdom turn after you Clear the Hex to actually found the settlement. This simulates the time that it takes to prepare, such as setting up temporary quarters or tent cities, digging sanitation trenches, gathering materials, and managing all the other small tasks to get things ready to build.\n\nIf your hex contains lake, river, or swamp terrain, you may choose which of its borders are Land Borders and which are Water Borders (see [[rule:urban-grid-borders|Urban Grid Borders]]). On the Urban Grid, check the “Water” box next to as many of its borders as you like; you cannot change this decision later.\n\nIf your hex contains Ruins or a Structure, you can incorporate that building into your settlement at a reduced cost (for Ruins) or for free (for Structures). The exact type of structure is indicated in that hex’s encounter text in Chapter 2—the GM has full information about these structures and ruins and how they can impact settlements.\n\n### Step 3: Name Your Village\n\nEach settlement needs a name. Some leaders name settlements after themselves or their families, but the name can be anything suitable for the campaign and agreeable to the PCs.\n\n### Step 4: Start Building!\n\nYour brand new village is now ready to grow! A village must fill a single block of 4 lots before it can expand, so select one block on the Urban Grid for your village’s development. Each Kingdom turn, during the Civic Activities step of its Activity phase, your settlement has one Civic activity, which can be used to [[activity:build-structure|Build Structures]].",
        "page":  47
    },
    {
        "id":  "structures-and-lots",
        "name":  "Structures",
        "namePt":  "Estruturas e Lotes",
        "category":  "assentamentos",
        "summary":  "Estruturas são construídas com Build Structure na etapa Civic; cada lote representa um bairro inteiro dedicado àquela função, não um único prédio.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "You build structures using the [[activity:build-structure|Build Structure]] activity during the Civic Activities step of the Activity phase of the Kingdom turn.\n\nWhen you build in a lot within one of your settlements, you’re rarely literally constructing a single building. While an arena or cathedral might stand alone as a towering edifice, most lots represent a number of buildings whose focus is to support the type of improvement that lot supports. For example, a brewery could represent a collection of brewers and bottlers and the families who support them, while a luxury merchant would represent several specialized stores. Even sprawling, sizable improvements like dumps, cemeteries, or parks might include nearby dwellings or cottages for those who tend and manage the area or live along its margins.",
        "page":  48
    },
    {
        "id":  "overcrowded",
        "name":  "Residential Lots and Overcrowding",
        "namePt":  "Lotes Residenciais e Superlotação",
        "category":  "assentamentos",
        "summary":  "Precisa de 1 lote Residential por quadra com estruturas (em qualquer quadra). Sem isso o assentamento fica Overcrowded: +1 Unrest por turno na Upkeep e não pode crescer de tipo.",
        "tags":  [
                     "settlement",
                     "upkeep",
                     "residential"
                 ],
        "text":  "**Residential Lots and Overcrowding:** While almost every structure presumably includes a small amount of lodging, you need to build Residential lots in order to give your citizens enough places to live. You do so by building a structure that has the Residential trait in a chosen lot. Settlements require a number of Residential lots equal to the number of blocks that have any structures built within them, although these residential lots need not be located one per block. For example, when a village expands to a town, it initially occupies 2 blocks. It needs 2 Residential lots in total among those 2 blocks, either both in one block or one in each block. A settlement without this minimum number of Residential lots is Overcrowded (mark the “Overcrowded” box on your Urban Grid) and generates 1 Unrest for the kingdom during the [[rule:upkeep-phase|Upkeep phase]] of each Kingdom turn.",
        "page":  48
    },
    {
        "id":  "residential-structures",
        "name":  "Residential and Non-Residential Structures",
        "namePt":  "Estruturas Residenciais e Não Residenciais",
        "category":  "assentamentos",
        "summary":  "Estruturas com o traço Residential contam para evitar Overcrowded. Algumas estruturas (Dump, Foundry, Tannery) não podem ficar na mesma quadra que estruturas Residential.",
        "tags":  [
                     "settlement",
                     "residential"
                 ],
        "text":  "A Residential structure helps house the settlement’s citizens; a settlement requires at least one Residential lot per block to avoid being [[rule:overcrowded|Overcrowded]].\n\n### Structures with the Residential trait\n\n- [[structure:tenement|Tenement]] (level 0)\n- [[structure:houses|Houses]] (level 1)\n- [[structure:inn|Inn]] (level 1)\n- [[structure:orphanage|Orphanage]] (level 2)\n- [[structure:barracks|Barracks]] (level 3)\n- [[structure:marketplace|Marketplace]] (level 4)\n- [[structure:garrison|Garrison]] (level 5)\n- [[structure:mansion|Mansion]] (level 5)\n- [[structure:noble-villa|Noble Villa]] (level 9)\n\n### Placement restrictions involving Residential structures\n\n- [[structure:dump|Dump]]: A dump can’t be located in a block with any Residential structures.\n- [[structure:foundry|Foundry]]: A foundry cannot share a block with a Residential structure.\n- [[structure:tannery|Tannery]]: A tannery cannot share a block with any Residential structure except tenements.",
        "page":  49
    },
    {
        "id":  "reduced-to-rubble",
        "name":  "Reduced to Rubble",
        "namePt":  "Reduzido a Escombros",
        "category":  "assentamentos",
        "summary":  "Demolish falho ou eventos podem transformar lotes em Rubble; não causa Unrest, mas impede construir até um Demolish bem-sucedido. Estrutura de vários lotes vira vários lotes de escombros.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "**Reduced to Rubble:** It’s possible for structures in a settlement to be reduced to rubble by a failed attempt to [[activity:demolish|Demolish]] a structure or a poor result from a kingdom event. When a structure is reduced to rubble, replace the lots the structure once occupied on the Urban Grid with [[structure:rubble|rubble]]. Having rubble in a lot doesn’t itself impact a kingdom’s Unrest or other statistics negatively, but it does prevent you from building in those lots. You must Demolish that lot before you can build there again. When a single lot that contains part of a multi-lot structure is reduced to rubble, each of the lots that contained that structure are replaced with individual lots of rubble.",
        "page":  48
    },
    {
        "id":  "structure-format",
        "name":  "Structure Descriptions",
        "namePt":  "Como Ler as Estruturas",
        "category":  "assentamentos",
        "summary":  "Explica o bloco de estatísticas: nível mínimo do reino, traços (Building, Yard, Infrastructure, Edifice, Residential, Famous/Infamous), Lots, Cost, Construction, Upgrade, Item Bonus, Ruin e Effects.",
        "tags":  [
                     "settlement",
                     "building",
                     "yard",
                     "infrastructure",
                     "edifice",
                     "residential",
                     "famous",
                     "infamous"
                 ],
        "text":  "Structures are described in the following format.\n\n**STRUCTURE NAME — LEVEL**\n\nA structure’s level indicates the minimum kingdom level required to build it. Each structure has traits that convey its properties. The **Building** trait indicates the structure is a collection of indoor sites, while the **Yard** trait indicates the structure is primarily an outdoor site. **Infrastructure** indicates that the structure benefits all lots in an Urban Grid without occupying a lot. (For a metropolis, this means you’ll need to build Infrastructure separately for each Urban Grid that makes up the settlement.) The **Edifice** trait grants its benefits to a settlement only once; if you build that structure an additional time in the same settlement, it’s purely cosmetic. A **Residential** structure helps house the settlement’s citizens; a settlement requires at least one Residential lot per block to avoid being [[rule:overcrowded|Overcrowded]]. The **Famous** trait increases your Fame score when the structure is built, while the **Infamous** trait does the same for your Infamy score. Some structures have both Famous and Infamous traits; in this case apply the one that matches your kingdom’s preference (see [[rule:fame-and-infamy|Fame and Infamy]]). A short textual description rounds out the top of the structure stat block.\n\n**Lots** The number of contiguous lots that the structure occupies on the Urban Grid; **Cost** The cost in RP and Commodities (if any) you must spend before attempting the Build Structure check.\n\n**Construction** This entry lists the required skill, proficiency rank, and DC for the [[activity:build-structure|Build Structure]] check.\n\n**Upgrade From/Upgrade To** Some structures can be upgraded into a more advanced form of the existing structure, such as upgrading a [[structure:shrine|Shrine]] into a [[structure:temple|Temple]]. If you upgrade a structure, subtract the RP and Commodity cost used to build the original structure from the cost of the new structure. When the new structure is complete, its effects replace those of the previous structure. You can’t upgrade a structure to one that occupies more lots if there isn’t space in the block for the new structure’s size. (You do not need to build the lesser form of a structure before you build the advanced form.)\n\n**Item Bonus** This entry indicates any item bonuses the structure grants to specific activities made within the settlement’s influence—or within the borders of your kingdom if the settlement is your capital. These bonuses are item bonuses, but they stack with those granted by identical structures within the same settlement, up to that settlement’s maximum item bonus ([[rule:item-bonus|Maximum Item Bonus]]).\n\n**Ruin** Some structures negatively impact society. If this structure does so, it will increase one or more of your kingdom’s Ruins when constructed; this increase only happens once, when the structure is built. Increases to Ruin in this way aren’t removed if the structure is later demolished.\n\n**Effects** All additional game effects the structure grants to your kingdom are listed here. In many cases, these effects grant item bonuses to PCs while they are in the settlement, but unlike those granted by the Item Bonus above, item bonuses found in this section of the stat block do not stack with other item bonuses. Unless stated otherwise, effects in this section apply only within this settlement; they do not apply to areas influenced by this settlement.\n\n### Settlement Structures\n\nPresented below are stat blocks for a wide range of structures that serve a variety of purposes in settlements, both to bolster kingdom statistics and PC resources. Encourage your PCs to come up with flavorful specific names for individual structures they create!",
        "page":  48
    },
    {
        "id":  "upgrading-structures",
        "name":  "Upgrading Structures",
        "namePt":  "Melhorando Estruturas",
        "category":  "assentamentos",
        "summary":  "Ao melhorar uma estrutura (ex.: Shrine → Temple), subtraia do custo novo o RP e as Commodities pagos pela original; os efeitos novos substituem os antigos. Não é preciso construir a forma menor antes.",
        "tags":  [
                     "settlement"
                 ],
        "text":  "Some structures can be upgraded into a more advanced form of the existing structure, such as upgrading a [[structure:shrine|Shrine]] into a [[structure:temple|Temple]]. If you upgrade a structure, subtract the RP and Commodity cost used to build the original structure from the cost of the new structure. When the new structure is complete, its effects replace those of the previous structure. You can’t upgrade a structure to one that occupies more lots if there isn’t space in the block for the new structure’s size. (You do not need to build the lesser form of a structure before you build the advanced form.)",
        "page":  49
    },
    {
        "id":  "kingdom-events",
        "name":  "Kingdom Events",
        "namePt":  "Eventos do Reino",
        "category":  "assentamentos",
        "summary":  "Eventos de história (da campanha) e aleatórios (fase Event, flat check). Resolvem-se em downtime; DC = Control DC + modificador de nível do evento; os jogadores escolhem a ordem se houver vários.",
        "tags":  [
                     "event"
                 ],
        "text":  "As the PCs’ kingdom grows, all manner of unusual or irregular events will affect its fortunes and guide its growth. There are two categories of kingdom events: story events that occur as a result of the campaign plotline and random events.\n\n**Story events** are resolved when they occur, as detailed in the earlier chapters of this Adventure Path and often include greater details for how the PCs can take part in resolving the event. These events take place during regular play even though they draw upon kingdom statistics. They’re usually resolved during downtime.\n\n**Random events** are resolved entirely by the kingdom itself and take place within the [[rule:event-phase|Event phase]] of a Kingdom turn. A flat check at the start of this phase determines whether a random event occurs.\n\n### Resolving Kingdom Events\n\nAll kingdom events resolve in downtime, although for some story events, there may be periods of exploration or encounter mode before or after an event’s resolution. Some kingdom events grant boons or benefits, while others can harm a kingdom by costing resources, increasing Unrest or Ruin, penalizing activities, or damaging structures. In many cases, the PCs will be able to attempt Kingdom skill checks to bolster benefits or minimize disasters.\n\nIt’s possible to have more than one kingdom event occur during a Kingdom turn. In this case, the players decide the order of the events.\n\n### Kingdom Event DCs\n\nA kingdom event’s DC is always the kingdom’s [[rule:control-dc|Control DC]] modified by the event’s level modifier.\n\n**Event DC = Control DC + event’s level modifier**\n\n### Kingdom Event Descriptions\n\nYour GM has a full list of story kingdom events and random kingdom events—they are not duplicated here, so as to preserve plot spoilers. Note that kingdom events can be both beneficial and otherwise, but regardless of whether they bring weal or woe to your kingdom, completing kingdom events is one of the best ways to earn experience points for your kingdom.",
        "page":  59
    }
];
