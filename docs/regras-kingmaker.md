# Regras do Kingmaker (PF2e) — referência para validação

Fonte: `Kingmaker+Players+Guide.pdf` (Paizo, ~40 MB). **Não leia o PDF para validar regras**:
o texto original em inglês de cada regra/atividade/estrutura já está transcrito no campo `text`
(e `outcomes`, `effects`, `requirements`, `special`) dos arquivos `guia-reino/data/*.js`, com o
número de página impresso em `page`. Procure lá com Grep pelo `"id"` ou por um trecho do texto.

Abra o PDF só para conferir algo que **não** está nos dados (ex.: arte, mapas, barras laterais
não transcritas). Neste ambiente o Read de PDF não funciona (falta poppler) e não há Python/Node.

## Mapa capítulo → arquivo de dados

| Págs. | Assunto | Arquivo | ids / coleção |
|---|---|---|---|
| 11–15 | Criação do reino: 10 passos, charters, heartlands, governos | `rules.js` | `KM.creation.{steps,charters,heartlands,governments}`, regras `category:"criacao"` |
| 15–21 | Atributos, modificadores, CD de Controle, progressão, cargos de liderança, vacância, proficiência | `rules.js` | `kingdom-ability-scores`, `control-dc`, `kingdom-advancement`, `leadership-roles`, `vacancy-penalty`, `proficiency-bonuses`, `KM.leaders` |
| 22–35 | Perícias do reino (cada uma abre sua seção) e atividades | `skills.js`, `activities.js` | `KM.skills` (16), `KM.activities` (41) |
| 36–38 | Talentos do reino | `skills.js` | `KM.feats` (17) |
| 38–41 | Recursos, Ruína, Unrest, território, terrain features, XP | `rules.js` | categorias `recursos`, `problemas`, `territorio`, `progressao` |
| 42–45 | Turno do reino (4 fases), Fama/Infâmia | `turn.js` (resumo PT) + `rules.js` (`*-phase`, `*-step-N`) | `KM.turn` |
| 45–49 | Assentamentos, Urban Grid, influência, melhoria de estruturas | `structures.js` | `KM.settlementRules` (16) |
| 49–59 | Estruturas | `structures.js` | `KM.structures` (74) |
| 61–77 | Guerra: regras, atividades de exército (62–64), exércitos (66), equipamento (67), táticas (68–70), ações (73–75), condições (76–77) | `warfare.js` | `KM.warfareRules`, `armyActivities`, `armies`, `gear`, `tactics`, `warActions`, `conditions` |

Eventos do reino (kingdom events) **não** estão no Player's Guide (ficam no livro do GM);
existe só a regra-ponteiro `kingdom-events` em `structures.js`.

## Números-chave

**Teste do reino:** d20 + atributo + proficiência + bônus − penalidades vs. CD. ±10 = crítico; 20 natural sobe 1 grau, 1 natural desce. Todo sucesso crítico dá +1 Fama/Infâmia. (p. 21)

**Proficiência:** destreinado +0 · treinado nível+2 · especialista nível+4 · mestre nível+6 · lendário nível+8. (p. 15, 21)

**Progressão / CD de Controle** (p. 16)

| Nv | CD | Ganhos |
|---|---|---|
| 1 | 14 | charter, governo, heartland, proficiências iniciais, favored land, assentamento (village) |
| 2 | 15 | talento |
| 3 | 16 | assentamento (town), aumento de perícia |
| 4 | 18 | expansion expert, fine living, talento |
| 5 | 20 | aumentos de atributo, ruin resistance, aumento de perícia |
| 6 | 22 | talento |
| 7 | 23 | aumento de perícia |
| 8 | 24 | experienced leadership +2, talento, ruin resistance |
| 9 | 26 | expansion expert (Claim Hex 3×/turno), assentamento (city), aumento de perícia |
| 10 | 27 | aumentos de atributo, talento, life of luxury |
| 11 | 28 | ruin resistance, aumento de perícia |
| 12 | 30 | civic planning, talento |
| 13 | 31 | aumento de perícia |
| 14 | 32 | talento, ruin resistance |
| 15 | 34 | aumentos de atributo, assentamento (metropolis), aumento de perícia |
| 16 | 35 | experienced leadership +3, talento |
| 17 | 36 | ruin resistance, aumento de perícia |
| 18 | 38 | talento |
| 19 | 39 | aumento de perícia |
| 20 | 40 | aumentos de atributo, envy of the world, talento, ruin resistance |

**Tamanho do reino** (hexes; p. 38)

| Tamanho | Tipo | Dado de Recurso | Mod. CD de Controle | Estoque por commodity |
|---|---|---|---|---|
| 1–9 | Territory | d4 | +0 | 4 |
| 10–24 | Province | d6 | +1 | 8 |
| 25–49 | State | d8 | +2 | 12 |
| 50–99 | Country | d10 | +3 | 16 |
| 100+ | Dominion | d12 | +4 | 20 |

Tamanhos 10/25/50/100 dão XP de marco.

**Recursos:** Dados de Recurso = nível + 4 + dados bônus − dados de penalidade (mín. 0). Cada Work Site gera 1 commodity (2 em hex de Resource); excedente ao estoque é perdido. Consumo = assentamentos + exércitos − Farmlands na influência ± eventos; o não pago custa 5 RP por ponto ou +1d4 Unrest. (p. 38, 43)

**Unrest:** 1+ → −1 status em todos os testes · 5+ → −2 · 10+ → −3 e, na Manutenção, +1d10 Ruína e teste plano CD 11 (falha = perde 1 hex) · 15+ → −4 · 20+ → anarquia (só Quell Unrest; todos os testes pioram 1 grau). +1 por assentamento Overcrowded, +1 se em guerra. (p. 39, 43)

**Ruína:** Corrupção (Culture), Crime (Economy), Decadência (Stability), Discórdia (Loyalty). Limiar inicial 10: ao atingir, subtrai o limiar e a penalidade de item do atributo sobe 1. (p. 38–39)

**Fama/Infâmia:** máx. 3; +1 no início do turno e a cada sucesso crítico; 1 ponto = rerrolagem (fortuna); sobra se perde ao fim do turno. (p. 42)

**Limites da Fase de Atividades:** 3 atividades de Liderança por PC (2 se não houver Castle, Palace ou Town Hall na capital) · 3 de Região no total · 1 Cívica por assentamento.

**Vacância do Governante (Ruler):** −1 em todos os testes, +1d4 Unrest no início do turno, CD de Controle +2. (p. 19)

**Assentamentos** (p. 46–47)

| Tipo (nv. mín. do reino) | Quadras | Nível do assentamento | Consumo | Bônus de item máx. | Influência | XP do 1º |
|---|---|---|---|---|---|---|
| Village (1) | 1 | 1 | 1 | +1 | 0 | — |
| Town (3) | até 4 | 2–4 | 2 | +1 | 1 hex | 60 |
| City (9) | 9 | 5–9 | 4 | +2 | 2 hexes | 80 |
| Metropolis (15) | 10+ | 10+ | 6 | +3 | 3 hexes | 120 |

Bônus de item da linha "Item Bonus" de estruturas iguais no mesmo assentamento se somam até o máximo do tipo; bônus da linha "Effects" não acumulam.

## Melhoria de estruturas (upgrade)

Regra (p. 49, `upgrading-structures`): subtraia do custo novo o RP e as commodities já pagos
pela estrutura original; os efeitos novos substituem os antigos; não é preciso ter construído a
forma menor; não dá para melhorar para uma estrutura com mais lotes se não houver espaço na quadra.

Cadeias (campos `upgradeFrom`/`upgradeTo` em `structures.js`, conferidos com o texto em 2026-10-08 — 39 estruturas, vínculos simétricos):

- Tenement (0) → Houses (1) → Mansion (5) → Noble Villa (9)
- Houses (1) → Orphanage (2)
- Shrine (1) → Temple (7) → Cathedral (15)
- General Store (1) → Marketplace (4)
- General Store (1) → Luxury Store (6) → Magic Shop (8) → Occult Shop (13)
- Library (2) → Academy (10) → Military Academy (12) | University (15)
- Town Hall (2) → Castle (9) → Palace (15)
- Tavern, Dive (1) → Popular (3) → Luxury (9) → World-Class (15)
- Herbalist (1) → Hospital (9)
- Barracks (3) → Garrison (5)
- Festival Hall (3) → Theater (9) → Opera House (15)
- Park (3) → Menagerie (12)
- Pier (3) → Waterfront (8)
- Trade Shop (3) → Guildhall (5)
- Wall, Wooden (1) → Wall, Stone (5)
