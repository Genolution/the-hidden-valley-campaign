window.KM = window.KM || {};
// Estrutura do Turno do Reino (Player's Guide, págs. 42–45).
// `activityStep` liga a etapa às atividades cujo campo `step` (ou `steps`) tem o mesmo valor.
KM.turn = [
  {
    "id": "upkeep",
    "name": "Upkeep Phase",
    "namePt": "Fase de Manutenção",
    "ruleId": "upkeep-phase",
    "summary": "Ajuste as estatísticas do reino com base no mês anterior. No início do turno o reino ganha automaticamente 1 ponto de Fama/Infâmia.",
    "steps": [
      {
        "id": "upkeep-1",
        "name": "Step 1: Assign Leadership Roles",
        "namePt": "Atribuir Cargos de Liderança",
        "activityStep": "upkeep-leadership",
        "summary": "Use New Leadership quantas vezes quiser para trocar líderes e reescolha os 4 cargos investidos. Depois verifique vacâncias: cargos vazios aplicam sua penalidade; o líder que não passou 1 semana de downtime no cargo perde 1 atividade de Liderança ou aplica a penalidade até o próximo turno."
      },
      {
        "id": "upkeep-2",
        "name": "Step 2: Adjust Unrest",
        "namePt": "Ajustar Unrest",
        "summary": "Pule no 1º turno. +1 Unrest por assentamento Overcrowded, +1 se o reino estiver em guerra, mais ajustes de eventos contínuos. Se Unrest ≥ 10: +1d10 pontos de Ruína (distribuídos à escolha) e teste plano CD 11 — na falha o reino perde 1 hex. Unrest ≥ 20: anarquia.",
        "alert": "Anarquia: só é possível Quell Unrest e todos os testes do reino pioram 1 grau.",
        "refs": ["rule:unrest", "rule:ruin", "rule:anarchy"]
      },
      {
        "id": "upkeep-3",
        "name": "Step 3: Resource Collection",
        "namePt": "Coleta de Recursos",
        "summary": "Dados de Recurso = nível do reino + 4 + dados bônus − dados de penalidade (mínimo 0). Role-os: o total são os RP do turno. Cada Work Site gera 1 Commodity (2 se estiver em hex de Recurso); o que exceder o estoque é perdido.",
        "formula": "Dados de Recurso = nível + 4 + bônus − penalidades",
        "refs": ["rule:resource-dice", "rule:commodities", "rule:work-sites"]
      },
      {
        "id": "upkeep-4",
        "name": "Step 4: Pay Consumption",
        "namePt": "Pagar Consumo",
        "summary": "Pule no 1º turno. Gaste Food igual ao Consumo. O que não for pago custa 5 RP por ponto ou +1d4 Unrest.",
        "formula": "Consumo = assentamentos + exércitos − hexes de Farmland na influência de assentamentos ± eventos",
        "refs": ["rule:consumption", "rule:farmland"]
      }
    ]
  },
  {
    "id": "commerce",
    "name": "Commerce Phase",
    "namePt": "Fase de Comércio",
    "ruleId": "commerce-phase",
    "summary": "O reino gera receita, gasta fundos e negocia.",
    "steps": [
      {
        "id": "commerce-1",
        "name": "Step 1: Collect Taxes",
        "namePt": "Coletar Impostos",
        "activityStep": "commerce-taxes",
        "summary": "Uma vez por turno, Collect Taxes para ganhar bônus nos testes de Economia pelo resto do turno. Se não coletar, faça um teste plano CD 11: no sucesso, reduza Unrest em 1."
      },
      {
        "id": "commerce-2",
        "name": "Step 2: Approve Expenses",
        "namePt": "Aprovar Despesas",
        "activityStep": "commerce-expenses",
        "summary": "Use os fundos do reino para melhorar o padrão de vida (Improve Lifestyle) ou faça um saque (Tap Treasury)."
      },
      {
        "id": "commerce-3",
        "name": "Step 3: Tap Commodities",
        "namePt": "Usar Commodities",
        "activityStep": "commerce-commodities",
        "summary": "Se houver estoques de Commodities, use Trade Commodities para reforçar os RP do turno."
      },
      {
        "id": "commerce-4",
        "name": "Step 4: Manage Trade Agreements",
        "namePt": "Gerenciar Acordos Comerciais",
        "activityStep": "commerce-trade",
        "summary": "Se o reino tiver acordos comerciais estabelecidos, use Manage Trade Agreements."
      }
    ]
  },
  {
    "id": "activity",
    "name": "Activity Phase",
    "namePt": "Fase de Atividades",
    "ruleId": "activity-phase",
    "summary": "Proclamações, expansão do território e desenvolvimento dos assentamentos — onde acontece a maior parte do crescimento do reino.",
    "steps": [
      {
        "id": "activity-1",
        "name": "Step 1: Leadership Activities",
        "namePt": "Atividades de Liderança",
        "activityStep": "leadership",
        "limit": "Cada PC em cargo de liderança: até 3 atividades se a capital tem Castle, Palace ou Town Hall; senão, até 2. Um líder não repete a mesma atividade no turno (salvo indicação).",
        "summary": "O grupo escolhe a ordem em que os líderes agem."
      },
      {
        "id": "activity-2",
        "name": "Step 2: Region Activities",
        "namePt": "Atividades de Região",
        "activityStep": "region",
        "limit": "Até 3 atividades de Região no total, para todo o grupo. Favored Land: 1×/turno, duas atividades simultâneas no mesmo hex do terreno natal (−2 nos testes).",
        "summary": "Os jogadores decidem quem rola cada teste."
      },
      {
        "id": "activity-3",
        "name": "Step 3: Civic Activities",
        "namePt": "Atividades Cívicas",
        "activityStep": "civic",
        "limit": "1 atividade Cívica por assentamento. Civic Planning (nível 12): um assentamento faz 2.",
        "summary": "O grupo escolhe a ordem e quem rola os testes."
      },
      {
        "id": "activity-4",
        "name": "Step 4: Army Activities",
        "namePt": "Atividades de Exército",
        "activityStep": "army",
        "limit": "Apenas em tempos de guerra.",
        "summary": "Manobras, recuperação e equipamento dos exércitos. Veja a aba Guerra para combate."
      }
    ]
  },
  {
    "id": "event",
    "name": "Event Phase",
    "namePt": "Fase de Evento",
    "ruleId": "event-phase",
    "summary": "Eventos afetam o reino inteiro, hexes ou assentamentos — alguns são bons, outros ruins, e alguns duram vários turnos.",
    "steps": [
      {
        "id": "event-1",
        "name": "Step 1: Check for a Random Event",
        "namePt": "Verificar Evento Aleatório",
        "summary": "Teste plano CD 16: no sucesso ocorre um evento aleatório. Se nenhum evento ocorrer, a CD do próximo turno cai 5; volta a 16 quando um evento ocorre."
      },
      {
        "id": "event-2",
        "name": "Step 2: Event Resolution",
        "namePt": "Resolver Eventos",
        "summary": "Resolva os eventos do turno; alguns pedem que o grupo saia em exploração ou encontro (ex.: um monstro à solta)."
      },
      {
        "id": "event-3",
        "name": "Step 3: Apply Kingdom XP",
        "namePt": "Aplicar XP do Reino",
        "summary": "O GM concede o XP do turno: 30 XP por evento aleatório; RP não gastos viram XP na razão 1:1 (máx. 120 XP por turno); marcos atingidos (ex.: primeira vez gastando 100 RP em um turno = 80 XP).",
        "refs": ["rule:kingdom-xp", "rule:milestone-xp"]
      },
      {
        "id": "event-4",
        "name": "Step 4: Increase Kingdom Level",
        "namePt": "Subir de Nível",
        "summary": "Se o XP passar de 1.000 e o reino estiver abaixo do nível máximo (= nível do grupo), sobe 1 nível e subtrai 1.000 XP. Exércitos também sobem de nível.",
        "refs": ["rule:kingdom-advancement"]
      }
    ]
  }
];
