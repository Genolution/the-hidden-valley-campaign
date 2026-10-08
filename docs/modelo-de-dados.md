# Modelo de dados (`guia-reino/data/*.js`)

Cada arquivo é JS (não JSON) para funcionar via `file://`: começa com `window.KM = window.KM || {};`
e atribui coleções `KM.<nome> = [ ... ];`. O conteúdo de cada coleção é JSON válido.

Formatação: `structures.js` está indentado com 4 espaços no estilo do `ConvertTo-Json` do
PowerShell (`"chave":  valor` com dois espaços); os outros usam 2 espaços. Mantenha o estilo do
arquivo que estiver editando.

## Campos comuns (todas as entidades)

| Campo | Uso |
|---|---|
| `id` | kebab-case, único dentro do tipo. Usado em links `[[tipo:id]]` e na URL `#/aba/tipo:id`. |
| `name` | nome original em inglês |
| `namePt` | nome em português (opcional; omitido se igual) |
| `summary` | resumo em PT (aparece em cartões, busca e topo do modal) — obrigatório |
| `text` | texto original em inglês, em mini-markdown (ver abaixo) — obrigatório salvo se houver `outcomes` |
| `tags` | strings (viram chips) |
| `stats` | objeto `{ "Rótulo PT": "valor" }` exibido como tabela no modal; costuma incluir `"Página"` |
| `page` | página impressa do Player's Guide (número) |
| `quick` | `{criticalSuccess, success, failure, criticalFailure}` — resumo PT dos resultados |
| `outcomes` | mesmas chaves, texto original EN |

## Tipos (`_kind` no registro do app) e campos específicos

| Kind | Coleção | Campos específicos |
|---|---|---|
| `activity` | `KM.activities`, `KM.armyActivities` (marcadas `_army`) | `step` (+`steps[]`): `upkeep-leadership`, `commerce-taxes`, `commerce-expenses`, `commerce-commodities`, `commerce-trade`, `leadership`, `region`, `civic`, `army`; `skills[]: {skill, proficiency, note?}`; `dc`; `oncePerTurn`; `general`; `requirements`; `special` |
| `skill` | `KM.skills` | `ability`; `untrained[]`, `trained[]` (ids de atividade); `notes` |
| `feat` | `KM.feats` | `level`, `prerequisites`, `benefit` |
| `leader` | `KM.leaders` | `ability`, `vacancy` |
| `rule` | `KM.rules`, `KM.settlementRules`, `KM.warfareRules` | `category` (`basico`, `turno`, `recursos`, `problemas`, `territorio`, `assentamentos`, `progressao`, `reputacao`, `criacao`, …); `steps[]` (fases do turno) |
| `structure` | `KM.structures` | `level`, `lots` (0/ausente = infraestrutura), `traits[]`, `cost {rp, lumber, ore, stone, luxuries}`, `costText`, `construction {skill, proficiency, dc, text}`, `upgradeFrom[]`, `upgradeTo[]` (ids de estrutura; o app completa o lado oposto ao carregar), `itemBonuses[] {value, skill, activity?, note}`, `effects`, `ruin` |
| `army` | `KM.armies` | `armyType`, `level` |
| `gear` | `KM.gear` | `level` |
| `tactic` | `KM.tactics` | `level`, `armyTypes[]` |
| `waraction` | `KM.warActions` | `actions` (`"1"`, `"2"`, `"reaction"`, `"free"`), `category` |
| `condition` | `KM.conditions` | — |
| `charter` / `heartland` / `government` / `cstep` | `KM.creation.{charters,heartlands,governments,steps}` | `boosts[]`, `flaw`, `bonusFeat` (governo) |
| `step` | `KM.turn[].steps` | `activityStep` (liga às atividades com o mesmo `step`), `formula`, `limit`, `alert`, `refs[]` (`"tipo:id"`). O `text` vem da regra `ruleId` da fase em tempo de execução. |

## Mini-markdown do campo `text` (renderizado por `rich()` em `app.js`)

- `**negrito**`, `*itálico*`, parágrafos separados por linha em branco
- `- item` → lista; `### Título` → subtítulo
- tabelas `| a | b |` com linha `|---|---|`
- linhas que começam com `Critical Success`, `Success`, `Failure`, `Critical Failure` viram blocos de grau
- referências cruzadas: `[[tipo:id|Rótulo]]` (rótulo opcional). Ids não encontrados são resolvidos por
  `ALIAS` em `app.js`, variações singular/plural e busca em outros tipos; se nada achar, aparecem
  sublinhados em cinza e o `?check` acusa.

## Conteúdo da campanha (`data/campanha.js`)

Conteúdo próprio da mesa (fora do Player's Guide) fica **só** em `data/campanha.js`, nunca nos arquivos do livro.

```js
KM.campaign = {
  "activities": [ { ...mesmo formato de KM.activities... } ],
  "structures": [ { ...mesmo formato de KM.structures... } ]
  // também aceita feats, rules, settlementRules, armyActivities, tactics, warActions, gear, armies, conditions…
};
```

- Ao carregar, `app.js` anexa cada lista à coleção `KM.<chave>` de mesmo nome e marca os itens com `source: "campanha"`. Chave sem coleção correspondente aparece em `campaignUnknownKeys` no `?check`. As coleções de `KM.creation` (charters etc.) e `KM.turn` **não** são suportadas.
- Na interface: selo **Campanha** (cartões, tabela de estruturas, modal), subtítulo "Conteúdo da campanha · <sourceRef>" no lugar da página do livro, título "Texto completo (campanha)" e filtro **Origem** (livro/campanha) nas abas Atividades e Estruturas.
- Campos extras: **`sourceRef`**, **`active`** e **`condition`** (não use `page`).
- **`sourceRef`:** se for um link `http(s)://…` (ex.: o card no pf2 template tools), vira o botão **"Ver card ↗ <domínio>"** no modal, visível a todos e aberto em nova aba. Texto livre (ex.: `handout.pdf`) aparece só no modo mestre, no subtítulo do modal.
- **Ativação:** só itens com `"active": true` entram no site. Os demais ficam cadastrados mas ocultos (nem busca, nem links: um `[[...]]` apontando para eles aparece como texto cinza). `condition` é uma anotação livre do que ativa o item.
- **Modo mestre:** `index.html?mestre` (ex.: `?mestre#/estruturas`) carrega também os inativos, com selo "Inativo", a condição no topo do modal, banner no alto da página e a opção "campanha inativa" no filtro Origem. O `?check` também carrega tudo, para validar os inativos.
- Oculto ≠ secreto: o `campanha.js` publicado é legível por quem abrir o arquivo.
- **Editor no navegador** (modo mestre → "☰ Gerenciar campanha", "+ Atividade", "+ Estrutura", ou "✎ Editar" no modal de um item): formulários para atividades e estruturas, modo JSON para qualquer coleção, ativar/desativar e excluir. Gera automaticamente `stats` (se vazio), `costText`, `construction.text`, `tags` e — em estruturas novas sem texto — o `text` no formato do livro. As mudanças ficam num rascunho local (`localStorage['km-campaign-draft']`) até serem publicadas: **☁ Publicar** (grava via API do GitHub com `assets/github.js`; token em `localStorage['km-gh-token']`, repositório em `data/site.js`) ou baixar o `campanha.js` e enviá-lo manualmente.
- O `id` não pode repetir um id do livro (o `?check` acusa em `duplicateIds`).
- Melhorias entre campanha e livro: declare só no item da campanha (`upgradeFrom: ["houses"]` ou `upgradeTo: [...]`). O `app.js` completa o lado oposto ao carregar, então a estrutura do livro passa a mostrar o vínculo sem editar `structures.js`.

## Ficha do reino (`data/reino.js`)

`KM.reino` guarda só valores-base; `assets/ficha.js` completa campos ausentes (`normalize()`) e calcula o resto.
Vem vazia no repositório base (nível 1, atributos 10, o resto 0/vazio).

| Campo | Conteúdo |
|---|---|
| `name`, `capital`, `languages`, `notes` | texto (`notes` aceita o mini-markdown) |
| `charter`, `heartland`, `government` | id de `KM.creation.*` (vira link) |
| `level`, `xp`, `size` (hexes), `unrest`, `rp` | números |
| `fameType` / `fame` | `"fame"` ou `"infamy"` / pontos (0–3) |
| `abilities` | `{culture, economy, loyalty, stability}` → valor do atributo (modificador = ⌊(valor−10)/2⌋) |
| `ruin` | `{corruption, crime, decay, strife}` → `{value, threshold, penalty}`; `penalty` = penalidade de item no atributo ligado (Culture, Economy, Stability, Loyalty) |
| `resourceDice` | `{bonus, penalty}` → dados extras/a menos (total = nível + 4 + bônus − penalidade; dado pelo tamanho) |
| `commodities` | `{food, lumber, luxuries, ore, stone}` → `{stock, extra}`; limite = estoque do tamanho + `extra` (estruturas) |
| `consumption` | `{armies, modifier}`; total = soma do consumo dos assentamentos + `armies` + `modifier` |
| `leaders` | id de `KM.leaders` → `{name, pc, invested}`; `name` vazio = cargo vago |
| `skills` | id de `KM.skills` → grau 0–4 (destreinado … lendário); também decide a disponibilidade das atividades |
| `modifiers` | `[{type: "status"\|"item"\|"circumstance"\|"untyped", value, scope: "all"\|"ability:<id>"\|"skill:<id>", note}]` |
| `feats` | ids de `KM.feats` |
| `settlements` | `[{name, type: "village"\|"town"\|"city"\|"metropolis", consumption, notes}]` |

**Total de uma perícia** (`skillTotal()`): modificador do atributo + proficiência (nível + 2×grau, se treinada) + bônus e
penalidades. Bônus de status de cargo investido (+1; +2 no nível 8; +3 no 16) para o atributo-chave do cargo; Unrest
(−1/−2/−3/−4 de status com 1/5/10/15+); ruína (item); vacância sem tipo (Ruler −1 em tudo; Counselor/Emissary/Treasurer/Viceroy
−1 no atributo da regra — veja `VACANCY`); `modifiers`. **Mesmo tipo não soma**: vale o maior bônus e a pior penalidade de
status, item e circunstância; "sem tipo" soma tudo. **CD de Controle** = tabela por nível + mod. de tamanho + 2 se o Ruler
estiver vago. Bônus de item de estruturas não entram (são por atividade e dependem das construções de cada assentamento).

## Configuração do site (`data/site.js`)

`KM.site = {repo, branch, root, deploysUrl, upstream, showcaseHost}` — repositório e branch onde o modo mestre publica
(`repo` vazio = Publicar abre o assistente que grava este arquivo), pasta do site no repositório, link opcional dos deploys,
repositório base (botão "Crie o seu") e endereço da vitrine (lá, ou com `?vitrine`, a publicação fica desativada).

## Ao adicionar/alterar dados

1. Respeite os campos obrigatórios (`id`, `name`, `summary`, `text`/`outcomes`).
2. Se criar vínculo (`upgradeTo`, `itemBonuses[].activity`, `untrained/trained`, `[[...]]`), confira que o alvo existe e, no caso de upgrade, preencha os dois lados.
3. Rode `tools/verificar.ps1`.
