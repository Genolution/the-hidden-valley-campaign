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
KM.campaign = {
  "activities": [
    {
      "id": "silken-diplomacy",
      "active": false,
      "condition": "Vesper Silkthorn se torna a Emissária do reino.",
      "name": "Silken Diplomacy",
      "namePt": "Diplomacia de Seda",
      "summary": "Exige Vesper Silkthorn como Emissário. Gaste 1 Luxuries: neste turno, o próximo teste de Intrigue, Politics ou Statecraft melhora um grau. Sem teste.",
      "tags": ["leadership"],
      "step": "leadership",
      "skills": [],
      "dc": "Sem teste",
      "oncePerTurn": false,
      "stats": {"Etapa": "Atividade 1: Liderança", "Requisito": "Vesper Silkthorn é o Emissário", "Custo": "1 Luxuries", "Efeito": "Próximo teste de Intrigue, Politics ou Statecraft no turno melhora 1 grau", "Origem": "Campanha"},
      "requirements": "This activity requires Vesper Silkthorn is the [[leader:emissary|Emissary]].",
      "text": "Vesper hosts lavish galas, exclusive gambling parlors, and private indulgences for visiting dignitaries, merchant lords, and foreign envoys, using vice and luxury to soften their resolve and secure favorable terms for the kingdom.\n\nSpend 1 Luxury [[rule:commodities|Commodity]]. During this Kingdom turn, the next time you attempt an [[skill:intrigue|Intrigue]], [[skill:politics|Politics]], or [[skill:statecraft|Statecraft]] check, improve the result of that check by one degree.",
      "sourceRef": "silken_diplomacy.pdf"
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
      "tags": ["building"],
      "stats": {"Nível": "3", "Traços": "Building", "Lotes": "2", "Custo": "12 RP, 4 Lumber", "Construção": "Trade DC 18", "Bônus de item": "+1 item bonus to Claim Hex", "Origem": "Campanha"},
      "text": "A large, multi-purpose hall that blends a theatrical stage at the front with lodgings and storage at the back, serving as a gathering point for explorers and a venue for relic auctions.\n\n**Lots** 2; **Cost** 12 RP, 4 Lumber\n\n**Construction** Trade DC 18\n\n**Item Bonus** +1 item bonus to [[activity:claim-hex|Claim Hex]]\n\n**Effects** During the Activity Phase of the kingdom turn, a settlement with an Expedition Pavilion can use the **Sponsor Expedition** civic activity.",
      "level": 3,
      "lots": 2,
      "traits": ["building"],
      "cost": {"rp": 12, "lumber": 4},
      "costText": "12 RP, 4 Lumber",
      "construction": {"skill": "Trade", "proficiency": "untrained", "dc": 18, "text": "Trade DC 18"},
      "requirements": null,
      "upgradeFrom": [],
      "upgradeTo": [],
      "ruin": null,
      "effects": "During the Activity Phase of the kingdom turn, a settlement with an Expedition Pavilion can use the **Sponsor Expedition** civic activity.",
      "itemBonuses": [
        {"value": 1, "activity": "claim-hex", "note": "Claim Hex"}
      ],
      "sourceRef": "expedition_pavilion.pdf"
    }
  ]
};
