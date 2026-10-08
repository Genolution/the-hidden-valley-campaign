# Guia do Reino — Kingmaker (PF2e)

Site estático (HTML + JS puro, sem build, sem dependências) que resume as regras de gerenciamento
de reino do *Kingmaker Player's Guide* (Paizo) para uso da mesa. Interface em **português**; texto
original das regras em inglês. Abre direto via `file://` (`guia-reino/index.html`).

Projeto de longo prazo, evoluído em sessões. **Leia este arquivo primeiro e só abra o resto sob demanda.**

## Onde está cada coisa

| Caminho | O quê |
|---|---|
| `guia-reino/index.html` | casca: topo, abas, modal; carrega `data/*.js`, depois `assets/app.js`, `github.js`, `editor.js`, `ficha.js` |
| `guia-reino/assets/app.js` | o app (~1100 linhas, IIFE, ES5): registro, abas, modal, busca, rascunhos, vitrine |
| `guia-reino/assets/github.js` | publicação no GitHub (só modo mestre): `KMGitHub.publish()`, token, assistente que grava `site.js`, painel da vitrine, `waitDeploy` |
| `guia-reino/assets/editor.js` | editor do conteúdo da campanha (só no modo mestre): painel, formulários de atividade/estrutura, modo JSON, exportar `campanha.js`, **Nova campanha** |
| `guia-reino/assets/ficha.js` | aba **Reino**: ficha do reino (`KM.reino`), cálculos pelas regras, edição inline no modo mestre, rolagem dos Dados de Recurso |
| `guia-reino/_headers` | cabeçalhos de segurança (CSP etc.) — formato Netlify/Cloudflare Pages |
| `guia-reino/assets/style.css` | tema claro/escuro via variáveis CSS (`--surface`, `--ink-*`, `--link`, `--ph-*`…) |
| `guia-reino/data/*.js` | conteúdo do livro (grande: 7–250 KB cada). Esquema em `docs/modelo-de-dados.md` |
| `guia-reino/data/campanha.js` | conteúdo próprio da campanha (`KM.campaign`), mesclado às coleções do livro com `source: "campanha"`. **Vazio neste repositório (base)**: conteúdo de mesa vai no fork/repositório da campanha, nunca nos arquivos do livro |
| `guia-reino/data/reino.js` | ficha do reino (`KM.reino`), só valores-base; vazia na base. Esquema em `docs/modelo-de-dados.md` |
| `guia-reino/data/site.js` | `KM.site`: repositório/branch/pasta onde o modo mestre publica (`repo` vazio na base), `upstream` e `showcaseHost` (vitrine) |
| `*.pdf` na raiz (exceto o Player's Guide) | handouts da campanha (1 página cada), fonte dos itens de `campanha.js` da campanha; legíveis com Read |
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
- **Rascunhos do mestre:** no modo mestre (fora do `?check`), `loadDraft()` troca `KM.campaign` por `localStorage['km-campaign-draft']` e `KM.reino` por `km-reino-draft` quando diferem do arquivo (igual → apagado). `KMApp.campaign` / `KMApp.reino = {file, current, draft}`, `KMApp.site`, `KMApp.showcase`, `KMApp.route` e `KMApp.util` (esc, kebab, store, clone, rich, showPanel…) são a interface usada por `github.js`, `editor.js` e `ficha.js`.
- **Vitrine:** `SHOWCASE` = `location.hostname === KM.site.showcaseHost` ou `?vitrine` (para testar). Mostra o botão "Crie o seu" (fork de `KM.site.upstream`) e desativa o Publicar (`KMGitHub.mode()` = `showcase`; sem `repo` = `setup`, abre o assistente; senão `ready`).
- **Publicação (`github.js`):** `KMGitHub.publish(items, {back, onCommit})` — um commit por arquivo (GET + PUT na API de conteúdo; `item = {file, varName, text, data, base, message, draftKey, force}`), avisa se o remoto difere de `base`, depois `waitDeploy()` consulta `data/<file>` até refletir `data` e então apaga os rascunhos e recarrega (em `file://` só avisa). `parseVar(txt, 'campaign'|'reino')` lê o objeto do arquivo. Use `.then(null, fn)` em vez de `.catch` (a checagem JScript do `verificar.ps1` não aceita `catch` como nome de método).
- **Editor (`editor.js`):** trabalha numa cópia (`work`) de `KMApp.campaign.current`; salvar grava o rascunho e recarrega a página (o registro é montado uma vez só). Delegação de eventos por atributos `data-ed-*` (os de publicação são `data-gh-*`). Exporta `campanha.js` com cabeçalho fixo (`HEADER`) + `JSON.stringify(work, null, 2)`; mensagem de commit por `changes()`. **Nova campanha** (`newCampaign()`): publica `campanha.js` e `reino.js` vazios (na vitrine, só zera os rascunhos). Cuidado: nenhum campo de formulário pode se chamar `id`, `name`, `action` etc. — sombreia propriedades do `<form>` (o campo do id é `itemId`).
- **Ficha (`ficha.js`):** edita `KMApp.reino.current` **no próprio objeto** (o `app.js` usa as perícias dele em `ranks()`/`available()`), salva o rascunho a cada `change` e re-renderiza a aba preservando o foco. Campos: `data-f="caminho.no.objeto"` + `data-t` (`num`/`text`/`bool`); ações `data-fi-*`. Cálculos: `skillTotal()` (empilhamento por tipo), `controlDC()`, `resourceDice()`, `storage()`, `consumption()`, tabelas `CONTROL_DC`, `SIZES`, `SETTLEMENTS`, `VACANCY`. A aba é registrada em `ROUTES.reino`; por isso o `app.js` só chama `route()` no `DOMContentLoaded`.
- **Registro:** `add(kind, list)` popula `registry[kind][id]` e `all`; `get`/`resolve` (com `ALIAS` e fallback singular/plural) resolvem referências. Etapas do turno (`step`) são montadas de `KM.turn` + texto da regra da fase.
- **Texto rico:** `inline()` (links `[[tipo:id|rótulo]]`, negrito, itálico), `rich()` (parágrafos, listas, tabelas, blocos de grau de sucesso).
- **UI comum:** `card()`, `cards()`, `skillChips()`, `quickDl()`, `badgeFor()`.
- **Modal:** `openEntity` / `renderModal` / `relatedHtml` (relações: estruturas com bônus, perícias, upgrades…). Pilha com botão voltar.
- **Busca global:** `search()` pontua nome/namePt/summary/text; `filterBy()` reaproveita para filtros das abas.
- **Abas:** pares `viewX()` (HTML) + `bindX()` (eventos): Reino (`KMFicha.view`), `viewTurno`, `viewAtividades/bindAtividades`, `viewEstruturas/bindEstruturas` (tabela ordenável: array `cols` = `[chave, rótulo, getterDeOrdenação]`), `viewGuerra/bindGuerra`, `viewTalentos/bindTalentos`, `viewRegras/bindRegras`, `viewCriacao`.
- **Roteamento:** hash `#/<aba>[/<tipo>:<id>]` → `ROUTES` / `route()`.
- **Estado no navegador** (`store()` → localStorage, chaves `km-*`): `km-hide-unavailable`, `km-act`, `km-st`, `km-war`, `km-open`, `km-theme`; no modo mestre `km-campaign-draft`, `km-reino-draft`, `km-gh-token`. (`km-kingdom`, a antiga configuração de perícias, é apagada ao carregar.)
- **Cliques:** qualquer elemento com `data-open="tipo:id"` abre o modal (delegação global); por isso links dentro de linhas de tabela abrem o alvo, não a linha.
- **`selfCheck()`:** roda com `index.html?check` e despeja JSON em `<pre id="selfcheck">` (inclui `campaign`, `campaignInactive`, `site`, `kingdom`, `duplicateIds`, `campaignUnknownKeys`, `kingdomBadRefs`).
- **Repositório e deploy:** este é o **repositório base** (`diego-duarte/pf2-easy-kingdom-management`, público, branch `main`), com `campanha.js`/`reino.js` vazios; o conteúdo da mesa do usuário vai num fork/repositório próprio da campanha (com site próprio). O site https://pf2-easy-kingdom-management.netlify.app/ é a **vitrine** (publicar desativado). O Netlify publica a pasta `guia-reino/` (`netlify.toml`) a cada push. **Push = publicar**: só faça push com o ok do usuário. Todos os `*.pdf` ficam fora do Git (`.gitignore`: direitos da Paizo e spoilers).
- **Git:** instalado em `C:\Program Files\Git\cmd\git.exe` (terminais abertos antes da instalação não têm no PATH — use o caminho completo). Identidade configurada só no repo, com e-mail noreply do GitHub.

## Convenções

- ES5 puro (`var`, `function`, sem arrow/let/const/template strings) — mantenha.
- Strings de UI em PT-BR; nomes de regras em inglês com `namePt` ao lado.
- Sempre escape conteúdo com `esc()` ao montar HTML; use `inline()`/`rich()` para texto com markup.
- Nada de bibliotecas externas além da fonte do Google Fonts. O `guia-reino/_headers` define um **CSP** (scripts só do próprio site, sem inline/eval; `connect-src` só `'self'` e `api.github.com`): qualquer origem externa nova, `<script>` inline ou `onclick=` quebra em produção — atualize o CSP junto. Testes locais via `file://` não aplicam o CSP; para testar, sirva a pasta com um HttpListener do PowerShell aplicando os cabeçalhos do `_headers`.
- Comentários escassos, em português, como no código existente.

## Fluxo de uma sessão

1. Leia este arquivo e o topo de `docs/HISTORICO.md` e `docs/BACKLOG.md`.
2. Faça a mudança lendo só os trechos necessários (Grep por função/id; os data files são grandes).
3. Verifique: `powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1` (adicione `-Screenshot "#/estruturas" -Out <png>` para ver a tela e abra o PNG com Read). Skill: `/verificar`.
   Para testar interação (cliques, formulários): copie o `index.html` para o scratchpad trocando `src`/`href` por URLs `file:///` absolutas, acrescente um `test.js` que executa passos guardando a fase em `localStorage` e escreve o log num `<pre id="edtest">`, e rode o Edge headless (`--dump-dom`) algumas vezes com o mesmo `--user-data-dir` (cada recarga avança uma fase; avance a fase **antes** de uma ação que recarrega a página, senão vira laço; use `timeout` no comando do Edge e um `--user-data-dir` novo por bateria; **nunca** `taskkill /IM msedge.exe`, que fecha o navegador do usuário). O `localStorage` de `file://` é compartilhado entre páginas locais, então dá para abrir o `index.html` real com o mesmo perfil para ver o estado deixado pelo teste. Prints headless têm largura mínima de ~500px (abaixo disso saem cortados).
4. Registre: entrada no topo de `docs/HISTORICO.md`; atualize `BACKLOG.md`, `LEIAME.md` (se mudou algo visível ao usuário) e este arquivo/`docs/` se mudou arquitetura, esquema ou convenção. Skill: `/encerrar-sessao`.
