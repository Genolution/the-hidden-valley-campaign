window.KM = window.KM || {};
// Ficha do reino (aba "Reino"). Editável só no modo mestre (?mestre), que publica este arquivo
// no GitHub (☁ Publicar) ou o gera para download. Esquema em docs/modelo-de-dados.md ("Ficha do reino").
// Guarde só os valores-base: modificadores, totais das perícias, CD de Controle, estoques e
// Dados de Recurso são calculados pelo site a partir das regras.
KM.reino = {
  "name": "Valedouro",
  "level": 1,
  "xp": 381,
  "capital": "Ursal",
  "charter": "open",
  "heartland": "hill-or-plain",
  "government": "yeomanry",
  "languages": "Comum",
  "size": 4,
  "fameType": "fame",
  "fame": 3,
  "unrest": 0,
  "abilities": {
    "culture": 12,
    "economy": 16,
    "loyalty": 14,
    "stability": 12
  },
  "ruin": {
    "corruption": {
      "value": 2,
      "threshold": 10,
      "penalty": 0
    },
    "crime": {
      "value": 1,
      "threshold": 12,
      "penalty": 0
    },
    "decay": {
      "value": 5,
      "threshold": 11,
      "penalty": 0
    },
    "strife": {
      "value": 8,
      "threshold": 11,
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
      "stock": 3,
      "extra": 0
    },
    "lumber": {
      "stock": 2,
      "extra": 0
    },
    "luxuries": {
      "stock": 2,
      "extra": 0
    },
    "ore": {
      "stock": 0,
      "extra": 0
    },
    "stone": {
      "stock": 1,
      "extra": 0
    }
  },
  "consumption": {
    "armies": 0,
    "modifier": 0,
    "farmland": 1
  },
  "leaders": {
    "ruler": {
      "name": "Muradin Barbabronze",
      "pc": true,
      "invested": true
    },
    "counselor": {
      "name": "Dante Chainlust",
      "pc": false,
      "invested": false
    },
    "general": {
      "name": "Ishvan",
      "pc": true,
      "invested": true
    },
    "emissary": {
      "name": "Vesper Silkthorn",
      "pc": false,
      "invested": false
    },
    "magister": {
      "name": "Kusho Farris",
      "pc": false,
      "invested": false
    },
    "treasurer": {
      "name": "Tribulus Daflange",
      "pc": true,
      "invested": true
    },
    "viceroy": {
      "name": "Albus Glimmerfoot",
      "pc": true,
      "invested": true
    },
    "warden": {
      "name": "Strall Goldbend",
      "pc": false,
      "invested": false
    }
  },
  "skills": {
    "agriculture": 1,
    "arts": 0,
    "boating": 0,
    "defense": 0,
    "engineering": 0,
    "exploration": 0,
    "folklore": 0,
    "industry": 0,
    "intrigue": 1,
    "magic": 1,
    "politics": 0,
    "scholarship": 0,
    "statecraft": 0,
    "trade": 1,
    "warfare": 1,
    "wilderness": 1
  },
  "modifiers": [],
  "feats": [
    "muddle-through"
  ],
  "settlements": [
    {
      "name": "Ursal",
      "type": "village",
      "consumption": 1,
      "notes": ""
    }
  ],
  "notes": "-1 on Culture on the next kingdown turn.",
  "worksites": {
    "lumber": {
      "normal": 1,
      "resource": 0
    },
    "ore": {
      "normal": 0,
      "resource": 0
    },
    "stone": {
      "normal": 1,
      "resource": 0
    }
  }
};
