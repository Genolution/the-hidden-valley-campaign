window.KM = window.KM || {};
// Ficha do reino (aba "Reino"). Editável só no modo mestre (?mestre), que publica este arquivo
// no GitHub (☁ Publicar) ou o gera para download. Esquema em docs/modelo-de-dados.md ("Ficha do reino").
// Guarde só os valores-base: modificadores, totais das perícias, CD de Controle, estoques e
// Dados de Recurso são calculados pelo site a partir das regras.
KM.reino = {
  "name": "",
  "level": 1,
  "xp": 0,
  "capital": "",
  "charter": "",
  "heartland": "",
  "government": "",
  "languages": "",
  "size": 0,
  "fameType": "fame",
  "fame": 0,
  "unrest": 0,
  "abilities": {
    "culture": 10,
    "economy": 10,
    "loyalty": 10,
    "stability": 10
  },
  "ruin": {
    "corruption": {
      "value": 0,
      "threshold": 10,
      "penalty": 0
    },
    "crime": {
      "value": 0,
      "threshold": 10,
      "penalty": 0
    },
    "decay": {
      "value": 0,
      "threshold": 10,
      "penalty": 0
    },
    "strife": {
      "value": 0,
      "threshold": 10,
      "penalty": 0
    }
  },
  "rp": 0,
  "resourceDice": {
    "bonus": 0,
    "penalty": 0
  },
  "commodities": {
    "food": {
      "stock": 0,
      "extra": 0
    },
    "lumber": {
      "stock": 0,
      "extra": 0
    },
    "luxuries": {
      "stock": 0,
      "extra": 0
    },
    "ore": {
      "stock": 0,
      "extra": 0
    },
    "stone": {
      "stock": 0,
      "extra": 0
    }
  },
  "consumption": {
    "armies": 0,
    "modifier": 0
  },
  "leaders": {},
  "skills": {},
  "modifiers": [],
  "feats": [],
  "settlements": [],
  "notes": ""
};
