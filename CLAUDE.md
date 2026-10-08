# Guia do Reino — Kingmaker (PF2e)

Site estático (HTML + JS puro, sem build, sem dependências) que resume as regras de gerenciamento
de reino do *Kingmaker Player's Guide* (Paizo) para uso da mesa. Interface em **português**; texto
original das regras em inglês. Abre direto via `file://` (`guia-reino/index.html`).

Projeto de longo prazo, evoluído em sessões. **Leia este arquivo primeiro e só abra o resto sob demanda.**

## Onde está cada coisa

| Caminho | O quê |
|---|---|
| `guia-reino/index.html` | casca: topo, abas, modal; carrega `data/*.js` e depois `assets/app.js` |
| `guia-reino/assets/app.js` | todo o app (~1000 linhas, IIFE, ES5) |
| `guia-reino/assets/editor.js` | editor do conteúdo da campanha (só no modo mestre): painel, formulários de atividade/estrutura, modo JSON, exportar `campanha.js` |
| `guia-reino/assets/style.css` | tema claro/escuro via variáveis CSS (`--surface`, `--ink-*`, `--link`, `--ph-*`…) |
| `guia-reino/data/*.js` | conteúdo do livro (grande: 7–250 KB cada). Esquema em `docs/modelo-de-dados.md` |
| `guia-reino/data/campanha.js` | conteúdo próprio da campanha (`KM.campaign`), mesclado às coleções do livro com `source: "campanha"`. **Conteúdo novo da mesa vai aqui**, nunca nos arquivos do livro |
| `*.pdf` na raiz (exceto o Player's Guide) | handouts da campanha (1 página cada), fonte dos itens de `campanha.js`; legíveis com Read |
| `guia-reino/LEIAME.md` | leia-me para usuários (abas, atalhos) |
| `docs/regras-kingmaker.md` | **referência de regras**: mapa página→arquivo/id, tabelas-chave, cadeias de upgrade |
| `docs/modelo-de-dados.md` | campos de cada tipo de entidade e mini-markdown do `text` |
| `docs/HISTORICO.md` | log das sessões (decisões, linha de base do check) |
| `docs/BACKLOG.md` | pendências e ideias |
| `tools/verificar.ps1` | verificação automática (sintaxe + selfCheck + screenshot opcional) |
| `Kingmaker+Players+Guide.pdf` | fonte original, ~40 MB — **não ler** (ver abaixo) |

## Regras do jogo / validação

- Não leia o PDF. O texto original de cada regra já está nos campos `text`/`outcomes`/`effects` dos
  `data/*.js`, com `page`. Para validar, use Grep pelo `"id": "<id>"` ou por trecho do texto.
- Números e tabelas recorrentes (CD de Controle, tamanho, Unrest, assentamentos, upgrades) estão em
  `docs/regras-kingmaker.md`.
- Este ambiente **não tem Python, Node nem poppler** (o Read de PDF falha). Use PowerShell, o
  JScript do Windows (`cscript`) e o Edge headless — já encapsulados em `tools/verificar.ps1`.

## Arquitetura do `app.js` (por nome de função; procure com Grep)

- **Campanha:** antes do registro, `KM.campaign.<chave>` é anexado a `KM.<chave>` com `source = 'campanha'` — só itens com `active: true`, exceto no modo mestre (`GM`, ativado por `?mestre` ou `?check`), em que os inativos entram com `_inactive = true`. UI: `srcChip()` (selos Campanha/Inativo), `bySource()` + `sourceSelect()` (filtro Origem), callout `.gm` no modal, `.gm-banner`.
- **Rascunho do mestre:** no modo mestre (fora do `?check`), se existir `localStorage['km-campaign-draft']` diferente do arquivo, ele substitui `KM.campaign` (igual ao arquivo → é apagado). `KMApp.campaign = {file, current, draft}` e `KMApp.util` (esc, kebab, store, clone, rich, showPanel…) são a interface usada pelo `editor.js`.
- **Editor (`editor.js`):** trabalha numa cópia (`work`) de `KMApp.campaign.current`; salvar grava o rascunho e recarrega a página (o registro é montado uma vez só). Delegação de eventos por atributos `data-ed-*`. Exporta `campanha.js` com cabeçalho fixo (`HEADER`) + `JSON.stringify(work, null, 2)`. Cuidado: nenhum campo de formulário pode se chamar `id`, `name`, `action` etc. — sombreia propriedades do `<form>` (o campo do id é `itemId`).
- **Registro:** `add(kind, list)` popula `registry[kind][id]` e `all`; `get`/`resolve` (com `ALIAS` e fallback singular/plural) resolvem referências. Etapas do turno (`step`) são montadas de `KM.turn` + texto da regra da fase.
- **Texto rico:** `inline()` (links `[[tipo:id|rótulo]]`, negrito, itálico), `rich()` (parágrafos, listas, tabelas, blocos de grau de sucesso).
- **UI comum:** `card()`, `cards()`, `skillChips()`, `quickDl()`, `badgeFor()`.
- **Modal:** `openEntity` / `renderModal` / `relatedHtml` (relações: estruturas com bônus, perícias, upgrades…). Pilha com botão voltar.
- **Busca global:** `search()` pontua nome/namePt/summary/text; `filterBy()` reaproveita para filtros das abas.
- **Abas:** pares `viewX()` (HTML) + `bindX()` (eventos): `viewTurno`, `viewAtividades/bindAtividades`, `viewEstruturas/bindEstruturas` (tabela ordenável: array `cols` = `[chave, rótulo, getterDeOrdenação]`), `viewGuerra/bindGuerra`, `viewTalentos/bindTalentos`, `viewRegras/bindRegras`, `viewCriacao`.
- **Roteamento:** hash `#/<aba>[/<tipo>:<id>]` → `ROUTES` / `route()`.
- **Estado no navegador** (`store()` → localStorage, chaves `km-*`): `km-kingdom` (perícias do reino), `km-act`, `km-st`, `km-war`, `km-open`, `km-theme`.
- **Cliques:** qualquer elemento com `data-open="tipo:id"` abre o modal (delegação global); por isso links dentro de linhas de tabela abrem o alvo, não a linha.
- **`selfCheck()`:** roda com `index.html?check` e despeja JSON em `<pre id="selfcheck">` (inclui `campaign`, `campaignInactive`, `duplicateIds`, `campaignUnknownKeys`).
- **Repositório e deploy:** site em https://pf2-easy-kingdom-management.netlify.app/ (use `?mestre` para o modo mestre). GitHub público `diego-duarte/pf2-easy-kingdom-management` (branch `main`). O Netlify publica a pasta `guia-reino/` (`netlify.toml`) a cada push. **Push = publicar para os jogadores**: só faça push com o ok do usuário. Todos os `*.pdf` ficam fora do Git (`.gitignore`: direitos da Paizo e spoilers).
- **Git:** instalado em `C:\Program Files\Git\cmd\git.exe` (terminais abertos antes da instalação não têm no PATH — use o caminho completo). Identidade configurada só no repo, com e-mail noreply do GitHub.

## Convenções

- ES5 puro (`var`, `function`, sem arrow/let/const/template strings) — mantenha.
- Strings de UI em PT-BR; nomes de regras em inglês com `namePt` ao lado.
- Sempre escape conteúdo com `esc()` ao montar HTML; use `inline()`/`rich()` para texto com markup.
- Nada de bibliotecas externas além da fonte do Google Fonts. O `netlify.toml` define um **CSP** (scripts só do próprio site, sem inline/eval; `connect-src` só `'self'` e `api.github.com`): qualquer origem externa nova, `<script>` inline ou `onclick=` quebra em produção — atualize o CSP junto. Testes locais via `file://` não aplicam o CSP; para testar, sirva a pasta com um HttpListener do PowerShell aplicando os cabeçalhos do `netlify.toml`.
- Comentários escassos, em português, como no código existente.

## Fluxo de uma sessão

1. Leia este arquivo e o topo de `docs/HISTORICO.md` e `docs/BACKLOG.md`.
2. Faça a mudança lendo só os trechos necessários (Grep por função/id; os data files são grandes).
3. Verifique: `powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1` (adicione `-Screenshot "#/estruturas" -Out <png>` para ver a tela e abra o PNG com Read). Skill: `/verificar`.
   Para testar interação (cliques, formulários): copie o `index.html` para o scratchpad trocando `src`/`href` por URLs `file:///` absolutas, acrescente um `test.js` que executa passos guardando a fase em `localStorage` e escreve o log num `<pre id="edtest">`, e rode o Edge headless (`--dump-dom`) algumas vezes com o mesmo `--user-data-dir` (cada recarga avança uma fase). Prints headless têm largura mínima de ~500px (abaixo disso saem cortados).
4. Registre: entrada no topo de `docs/HISTORICO.md`; atualize `BACKLOG.md`, `LEIAME.md` (se mudou algo visível ao usuário) e este arquivo/`docs/` se mudou arquitetura, esquema ou convenção. Skill: `/encerrar-sessao`.
