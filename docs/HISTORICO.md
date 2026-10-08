# Histórico de sessões

Registro curto de cada sessão de edição: o que mudou, decisões tomadas e pendências.
Entrada mais recente no topo. Datas absolutas (AAAA-MM-DD).

## 2026-10-08 — link do card (`sourceRef`) + Netlify

- `sourceRef` com URL `http(s)` vira o chip-link "Ver card ↗ <domínio>" no modal (todos os usuários; `target=_blank`, `rel=noopener`). Só URLs `http(s)` viram link (sem `javascript:`). Texto livre (nome do PDF) agora só aparece no modo mestre. Campo do editor renomeado para "Fonte / link do card".
- O usuário cria os cards no pf2 template tools; a ideia é colar o link do card em cada item da campanha.
- Netlify: site `https://pf2-easy-kingdom-management.netlify.app/` já serve a versão do repositório (conferido: `assets/editor.js` com `itemId`, `data/campanha.js` com `active`).

## 2026-10-08 — repositório no GitHub

- Git for Windows instalado (winget). Repositório público `diego-duarte/pf2-easy-kingdom-management`, branch `main`, commit inicial `08b06b3`.
- **Decisão (usuário):** todos os PDFs fora do Git (`*.pdf` no `.gitignore`) — livro da Paizo e handouts com spoilers.
- Identidade do commit só no repo local, e-mail `diego-duarte@users.noreply.github.com` (não expor e-mail real em repo público).
- Criados `netlify.toml` (publish = `guia-reino`, sem build) e `README.md` (página do repositório).
- Pendente (usuário): ligar o site do Netlify ao repositório. Depois disso: botão "Publicar" no editor via API do GitHub.

## 2026-10-08 — editor de campanha no modo mestre

- Novo `assets/editor.js` (carregado após `app.js`; inerte fora do modo mestre). Painel "Gerenciar campanha" (lista, ativar/desativar, editar, excluir), formulários de atividade e estrutura, modo JSON para qualquer coleção, botão "Editar" no modal de itens da campanha.
- **Decisão:** sem login/banco de dados. Edição grava um rascunho no `localStorage` do mestre, aplicado só no modo mestre; publicação = baixar `campanha.js` e subir no Netlify. Rascunho é apagado automaticamente quando o arquivo publicado fica igual. Próximo passo possível: botão "Publicar" via API do GitHub (ver BACKLOG).
- `app.js`: carrega o rascunho antes da mesclagem, guarda `_ckey` (coleção) nos itens, expõe `KMApp.campaign` e `KMApp.util` (+ `showPanel`). Faixa do modo mestre ganhou botões e aviso de rascunho.
- Bug encontrado no teste: campo `<input name="id">` sombreava `form.id` e o envio não era reconhecido; renomeado para `itemId` e o teste usa `getAttribute('id')`.
- Testado de ponta a ponta no Edge headless (criar estrutura e atividade, validação, id duplicado, vínculo de upgrade automático, painel, exportação sem campos internos, rascunho invisível no modo jogador).
- `campanha.js` do projeto não foi alterado (testes rodaram numa cópia no scratchpad).

## 2026-10-08 — ativação de conteúdo da campanha (`active`) + modo mestre

- Itens de `KM.campaign` só entram no site com `"active": true`; campo `condition` anota o gatilho. Ambos os itens atuais estão `false`.
- **Decisão:** flag por item (pedido do usuário) com padrão "oculto" (ausente = inativo), para não vazar spoiler por esquecimento; o `verificar.ps1` lista os inativos.
- Modo mestre via URL `?mestre` (sem login, sem estado salvo): mostra inativos com selo, condição no modal, banner com "Sair" e opção "campanha inativa" no filtro Origem. `?check` também carrega os inativos.
- Oculto ≠ secreto: o JS publicado é legível. Se algo precisar ser secreto, não deve estar no deploy.
- Linha de base do `?check` inalterada (ele carrega inativos): activity=50, structure=75. Visão de jogador hoje: 49 atividades, 74 estruturas.

## 2026-10-08 — conteúdo de campanha separado (`data/campanha.js`)

- Novo `data/campanha.js` com `KM.campaign = { activities, structures, … }`, carregado após `warfare.js`. O `app.js` anexa cada lista à coleção `KM.<chave>` e marca `source: "campanha"`.
- **Decisão:** conteúdo da mesa nunca vai nos arquivos do livro (que ficam fiéis ao Player's Guide); um campo `source` e o selo distinguem a origem.
- UI: selo "Campanha" (cartões, tabela, modal), subtítulo com `sourceRef` no lugar da página, "Texto completo (campanha)", filtro **Origem** em Atividades e Estruturas. Filtro "Lotes" agora é montado a partir dos dados.
- Melhorias: o app completa automaticamente o lado oposto de `upgradeTo`/`upgradeFrom`, para itens da campanha se ligarem a estruturas do livro sem editar `structures.js`.
- `?check` ganhou `campaign`, `duplicateIds` e `campaignUnknownKeys` (e o `verificar.ps1` os reporta).
- Itens adicionados (dos handouts na raiz): atividade **Silken Diplomacy** (`silken_diplomacy.pdf`) e estrutura **Expedition Pavilion** (`expedition_pavilion.pdf`).
  - Silken Diplomacy: o handout não diz a etapa; usei **Liderança** (exige o Emissário). Sem teste (`skills: []`).
  - Expedition Pavilion: o handout diz "12 PR"; tratei como **12 RP** (erro de digitação). O bônus de Claim Hex fica sem perícia fixa (vale para qualquer perícia usada na atividade). A atividade **Sponsor Expedition** que ele habilita não foi fornecida, então aparece em negrito, sem link.
- Nova linha de base do `?check`: activity=50, structure=75 (demais iguais); nenhum problema.

## 2026-10-08 — infraestrutura de manutenção + coluna "Melhora para"

- Criados `CLAUDE.md`, `docs/` (regras, modelo de dados, este histórico, backlog), `tools/verificar.ps1` + `tools/jscheck.js` e skills em `.claude/skills/`.
- **Decisão:** não re-extrair o PDF. Os `data/*.js` já contêm o texto original EN com página; `docs/regras-kingmaker.md` mapeia páginas → arquivos e resume números-chave. Ambiente sem Python/Node/poppler, então o PDF não é legível pelas ferramentas.
- Aba Estruturas (`app.js`, `bindEstruturas`): nova coluna **Melhora para** entre Construção e Bônus de item. Lista `upgradeTo` como links (abrem a estrutura de destino) com o nível de destino; ordenável (A→Z no 1º clique, sem melhoria no fim).
- Conferido: `upgradeFrom`/`upgradeTo` batem com as linhas "Upgrade From/To" do texto original em todas as 39 estruturas com vínculo, e são simétricos.
- Linha de base do `?check`: rule=103 activity=49 skill=16 feat=17 leader=8 structure=74 army=4 gear=4 tactic=21 waraction=17 condition=14 charter=5 heartland=4 government=6 cstep=10 step=16; nenhum problema.
