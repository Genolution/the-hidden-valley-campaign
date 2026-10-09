window.KM = window.KM || {};
// Conteúdo próprio da campanha (fora do Player's Guide).
// Cada lista é anexada à coleção de mesmo nome (KM.activities, KM.structures, KM.feats, …)
// ao carregar o app, e todos os itens recebem source = "campanha" (selo "Campanha" na interface).
// Mesmo formato dos arquivos do livro; veja docs/modelo-de-dados.md (seção "Conteúdo da campanha").
// `page` não se aplica. `sourceRef`: link do card (https://…), que vira o botão "Ver card" para os
// jogadores, ou texto livre como o nome do PDF (visível só no modo mestre).
//
// ATIVAÇÃO: o item só aparece no site com "active": true. Com false (ou sem o campo) fica oculto,
// mas pode ser visto abrindo o site com ?mestre (ex.: index.html?mestre#/estruturas), com o selo
// "Inativo" e a "condition" (anotação livre do que ativa o item).
// Atenção: oculto não é secreto — quem abrir este arquivo no navegador vê todo o conteúdo.
//
// Este arquivo pode ser gerado pelo editor do modo mestre (☰ Gerenciar campanha → Publicar / Baixar).
KM.campaign = {
  "activities": [
    {
      "id": "silken-diplomacy",
      "active": true,
      "condition": "Vesper Silkthorn se torna a Emissária do reino.",
      "name": "Silken Diplomacy",
      "namePt": "Diplomacia de Silk",
      "summary": "Exige Vesper Silkthorn como Emissário. Gaste 1 Luxuries: neste turno, o próximo teste de Intrigue, Politics ou Statecraft melhora um grau. Sem teste.",
      "tags": [
        "leadership"
      ],
      "step": "leadership",
      "skills": [],
      "dc": "Sem teste",
      "oncePerTurn": false,
      "stats": {
        "Etapa": "Atividade 1: Liderança",
        "Requisito": "Vesper Silkthorn é o Emissário",
        "Custo": "1 Luxuries",
        "Efeito": "Próximo teste de Intrigue, Politics ou Statecraft no turno melhora 1 grau",
        "Origem": "Campanha"
      },
      "requirements": "This activity requires Vesper Silkthorn is the [[leader:emissary|Emissary]].",
      "text": "Vesper hosts lavish galas, exclusive gambling parlors, and private indulgences for visiting dignitaries, merchant lords, and foreign envoys, using vice and luxury to soften their resolve and secure favorable terms for the kingdom.\n\nSpend 1 Luxury [[rule:commodities|Commodity]]. During this Kingdom turn, the next time you attempt an [[skill:intrigue|Intrigue]], [[skill:politics|Politics]], or [[skill:statecraft|Statecraft]] check, improve the result of that check by one degree.",
      "sourceRef": "https://template.pf2.tools/v/mBMj7jYq-silken-diplomacy"
    },
    {
      "id": "call-reinforcements",
      "active": false,
      "condition": "Strall Goldbend deve ser o General",
      "name": "Call Reinforcements",
      "namePt": "Convocar Reforços",
      "summary": "Utiliza apoio de Abbandoned Keep para reduzir o custo de recursos (RP) gastos no turno",
      "step": "leadership",
      "skills": [],
      "sourceRef": "https://template.pf2.tools/v/w63b9opt-call-reinforcements",
      "dc": "sem teste",
      "oncePerTurn": false,
      "requirements": "This activity requires Strall Goldbend is the [[leader:general|General]].",
      "special": "If multiple leaders perform this activity during the same Kingdom turn, you pool the total RP reduction gained and can distribute it across any number of Region or Civic activities",
      "text": "Strall coordinates with the garrison of Abandoned Keep to dispatch veteran soldiers, laborers, and supply convoys, directly assisting with the realm's expansion, roadwork, and infrastructure projects. During this Kingdom turn, reduce the RP cost of one Region or Civic activity by 1 (to a minimum of 1 RP).",
      "tags": [
        "downtime",
        "leadership"
      ],
      "stats": {
        "Etapa": "Liderança",
        "Perícias": "Nenhuma (sem teste)",
        "CD": "sem teste",
        "Origem": "Campanha"
      }
    },
    {
      "id": "pioneer-reconnaissence",
      "active": false,
      "condition": "Dante Chainlust se torna o Vice-Rei",
      "name": "Pioneer Reconnaissance",
      "namePt": "Reconhecimento Pioneiro",
      "summary": "Dante coordena um grupo pioneiro para facilitar a remoção de encontros e perigos em uma hex",
      "step": "leadership",
      "skills": [
        {
          "skill": "Exploration",
          "proficiency": "untrained"
        },
        {
          "skill": "Wilderness",
          "proficiency": "untrained"
        }
      ],
      "sourceRef": "https://template.pf2.tools/v/9OTXcwrs-pioneer-reconnaissance",
      "dc": "CD de Controle",
      "oncePerTurn": false,
      "text": "*Note: This activity requires that Dante Chainlust is the Viceroy*\n\nDante leads scouts, hunting dogs, and cartographers to map safe paths, identify dens, and weaken threats in a hex to be cleared. Pay 1 RP and attempt an [[skill:exploration|Exploration]] or [[skill:wilderness|Wilderness]] check against the kingdown control DC.",
      "outcomes": {
        "criticalSuccess": "As **success**, and if clearing this hex yields [[commodities:luxury|Luxury]] Commodities, increase the amount gained by 1.",
        "success": "Scouts create secure routes and detailed reports about the threats in the hex. The [[activity:clearHex|Clear Hex]] activity on this hex during this Kingdom turn gains a +2 circumstance bonus (or a +4 circumstance bonus if the hex is unclaimed).",
        "failure": "The mission relies on false information or fails to detect a major hazard. Future [[activity:clear_hex|Clear He]] activities on this hex suffer a -2 circumstance penalty."
      },
      "tags": [
        "downtime",
        "leadership"
      ],
      "stats": {
        "Etapa": "Liderança",
        "Perícias": "Exploration, Wilderness",
        "CD": "CD de Controle",
        "Origem": "Campanha"
      }
    },
    {
      "id": "resourceful-salvage",
      "active": false,
      "condition": "Theodore Shoemaker se torna o Guardião",
      "name": "Resourceful Salvage",
      "namePt": "Recuperação Astuta",
      "summary": "Theodore coordena um grupo de exploração para identificar recursos que podem ser recuperados de perigos ambientais",
      "step": "region",
      "skills": [],
      "sourceRef": "https://template.pf2.tools/v/FQ6YvdrS-resourceful-salvage",
      "dc": "Sem Teste",
      "oncePerTurn": false,
      "text": "*Note: This activity requires Theodore Shoemaker is the Warden.*\n\nTheodore leads or directs specialized salvage crews to study hazardous environments, dangerous flora, or structural ruins in the region, finding ways to extract rare materials, refined components, or valuable resources during future cleanup efforts.\n\nDesignate one hex in the region containing a hazard. That hex is permanently marked for salvage: when resolving a Clear Hex activity on the designated hex, treat the hazard as a dangerous creature encounter for the purpose of recovering Luxury Commodities on a critical success. Once the hex is successfully cleared, this effect ends.",
      "tags": [
        "downtime",
        "region"
      ],
      "stats": {
        "Etapa": "Região",
        "Perícias": "Nenhuma (sem teste)",
        "CD": "Sem Teste",
        "Origem": "Campanha"
      }
    },
    {
      "id": "search-the-source",
      "active": false,
      "condition": "Evento Whispers of the Chain ficar ativo",
      "name": "Search the Source",
      "namePt": "Encontrar a Origem",
      "summary": "Você emprega recursos do reino para tentar localizar a origem dos cultistas",
      "step": "leadership",
      "skills": [
        {
          "skill": "Folklore",
          "proficiency": "untrained"
        }
      ],
      "sourceRef": "https://template.pf2.tools/v/3jQvTTxb-search-the-source",
      "dc": "Whispers of The Chain event DC",
      "oncePerTurn": false,
      "text": "Attempt a basic check against the continuous event's DC to deploy the kingdom's guards, scouts, and spymasters to sweep your settlements and countryside for traces of the Kuthite cell. Roll 1 Resource Die and spend RP equal to the result each time you attempt this activity.",
      "quick": {
        "criticalSuccess": "O reino localizar os cultista eficientemente",
        "success": "O reino localiza os cultistas",
        "criticalFailure": "A tentativa de localizar os cultistas falha impactando o reino"
      },
      "outcomes": {
        "criticalSuccess": "As **Success** but your kingdom also recover's half of the RP spent on this activity (rounded up).",
        "success": "Your agents locate the cult's exact lair. You discover the cult's location and can now confront them during gameplay.",
        "criticalFailure": "Your attempt backfires into a public panic or a deadly ambush. The kingdom gains 1 Ruin Point in whichever is lower between [[ruin:decay|Decay]] and [[ruin:strife|Strife]]."
      },
      "tags": [
        "downtime",
        "leadership"
      ],
      "stats": {
        "Etapa": "Liderança",
        "Perícias": "Folklore",
        "CD": "Whispers of The Chain event DC",
        "Origem": "Campanha"
      }
    },
    {
      "id": "soothe-the-people",
      "active": false,
      "condition": "Kusho Farris se torna a conselheira",
      "name": "Soothe the People",
      "namePt": "Acalmar o Povo",
      "summary": "Kusho usa de seu conhecimento e expertise para acalmar os ânimos da população",
      "step": "leadership",
      "skills": [
        {
          "skill": "Folklore",
          "proficiency": "untrained"
        }
      ],
      "sourceRef": "https://template.pf2.tools/v/XC2jpZX1-soothe-the-people",
      "dc": "CD de Controle",
      "oncePerTurn": false,
      "text": "*Note: This activity requires Kusho Farris is the Counselor.*\n\nKusho draws upon local folklore, cultural traditions, and community wisdom to address the citizens' grievances, calm civil unrest, and offer guidance during turbulent times. Pay 1 RP to adquire special caretaking material and attempt a basic Folklore check to determine how effective the support for citizens was.",
      "quick": {
        "criticalSuccess": "Kusho reduz a agitação e a ruína do reino",
        "success": "Kusho reduz a agitação do reino",
        "failure": "Kusho reduz um pouco a agitação do reino"
      },
      "outcomes": {
        "criticalSuccess": "Kusho's wisdom deeply resonates with the populace, soothing tensions across the realm. Reduce Unrest by 1d4 and reduce one Ruin of your choice by 1d4.",
        "success": "Kusho successfully reassures the citizens and de-escalates discontent; reduce Unrest by 1d4.",
        "failure": "Kusho's counsel fails to address the root causes of the people's anxiety, but his presence still offers minor reassurance. Reduce the Kingdom's Unrest by 1."
      },
      "tags": [
        "downtime",
        "leadership"
      ],
      "stats": {
        "Etapa": "Liderança",
        "Perícias": "Folklore",
        "CD": "CD de Controle",
        "Origem": "Campanha"
      }
    },
    {
      "id": "sponsor-expedition",
      "active": false,
      "condition": "Um [[structures:expeditionPavillon|Pavilhão de Expedição]] é construído em um assentamento",
      "name": "Sponsor Expedition",
      "namePt": "Patrocinar Expedição",
      "summary": "O reino financia a exploração de hexágonos tornado-os reinvindicáveis",
      "step": "civic",
      "skills": [
        {
          "skill": "Exploration",
          "proficiency": "untrained"
        },
        {
          "skill": "Trade",
          "proficiency": "untrained"
        }
      ],
      "sourceRef": "https://template.pf2.tools/v/SJYC8CpZ-sponsor-expedition",
      "dc": "CD de Controle",
      "oncePerTurn": false,
      "requirements": "The settlement has an Expedition Pavilion.",
      "text": "You finance and dispatch the Legends and Treasures Entourage to map the wilderness in the kingdom's name. Choose one uncharted hex adjacent to your kingdom's current borders and attempt an [[skills:exploration|Exploration]] or [[skil:trade|Trade]] check against your kingdom's Control DC.",
      "quick": {
        "criticalSuccess": "O hex fica explorado e o reino ganha recursos",
        "success": "O hex fica explorado",
        "failure": "A equipe falha em explorar o hex",
        "criticalFailure": "A equipe falha em explorar o hex e é perdida"
      },
      "outcomes": {
        "criticalSuccess": "The Entourage maps the area perfectly and puts on a spectacular show upon their return. The hex is Explored. The GM determines what the Entourage recovered based on the hidden contents of the hex. Typically, the kingdom gains 1d4 RP or 1 [[commodity:luxury|Luxury]] commodity. At the GM's discretion, the Entourage might return with a specific item, or their shady sales tactics might increase Unrest by 1.",
        "success": "The Entourage returns with accurate maps. The hex is Explored.",
        "failure": "Bad weather, getting lost, or fleeing from beasts forces the Entourage to retreat. The hex is not explored.",
        "criticalFailure": "Disaster strikes. The Entourage is ambushed or triggers a trap, losing members and returning empty-handed. The hex is not explored, and the kingdom loses 1 RP and gains 1 Unrest."
      },
      "tags": [
        "downtime",
        "civic"
      ],
      "stats": {
        "Etapa": "Cívica",
        "Perícias": "Exploration, Trade",
        "CD": "CD de Controle",
        "Origem": "Campanha"
      }
    }
  ],
  "structures": [
    {
      "id": "expedition-pavilion",
      "active": false,
      "condition": "Liberada após o evento que introduz o pavilhão (defina aqui).",
      "name": "Expedition Pavilion",
      "namePt": "Pavilhão de Expedições",
      "summary": "+1 em Claim Hex; permite ao assentamento usar a atividade Cívica Sponsor Expedition.",
      "tags": [
        "building"
      ],
      "stats": {
        "Nível": "3",
        "Traços": "Building",
        "Lotes": "2",
        "Custo": "12 RP, 4 Lumber",
        "Construção": "Trade DC 18",
        "Bônus de item": "+1 item bonus to Claim Hex",
        "Origem": "Campanha"
      },
      "text": "A large, multi-purpose hall that blends a theatrical stage at the front with lodgings and storage at the back, serving as a gathering point for explorers and a venue for relic auctions.\n\n**Lots** 2; **Cost** 12 RP, 4 Lumber\n\n**Construction** Trade DC 18\n\n**Item Bonus** +1 item bonus to [[activity:claim-hex|Claim Hex]]\n\n**Effects** During the Activity Phase of the kingdom turn, a settlement with an Expedition Pavilion can use the **Sponsor Expedition** civic activity.",
      "level": 3,
      "lots": 2,
      "traits": [
        "building"
      ],
      "cost": {
        "rp": 12,
        "lumber": 4
      },
      "costText": "12 RP, 4 Lumber",
      "construction": {
        "skill": "Trade",
        "proficiency": "untrained",
        "dc": 18,
        "text": "Trade DC 18"
      },
      "requirements": null,
      "upgradeFrom": [],
      "upgradeTo": [],
      "ruin": null,
      "effects": "During the Activity Phase of the kingdom turn, a settlement with an Expedition Pavilion can use the **Sponsor Expedition** civic activity.",
      "itemBonuses": [
        {
          "value": 1,
          "activity": "claim-hex",
          "note": "Claim Hex"
        }
      ],
      "sourceRef": "expedition_pavilion.pdf"
    }
  ]
};
