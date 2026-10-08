# Histórico de sessões

Registro curto de cada sessão de edição: o que mudou, decisões tomadas e pendências.
Entrada mais recente no topo. Datas absolutas (AAAA-MM-DD).

## 2026-10-08 — ficha do reino, repositório base/vitrine, site.js e Nova campanha

- **Decisão (usuário):** este repositório vira a **base** do projeto (conteúdo vazio). A campanha do usuário irá para um fork/repositório próprio com site próprio, criado por ele depois. O site atual do Netlify vira **vitrine** (sem publicar, com botão "Crie o seu" → fork).
- `campanha.js` esvaziado (`KM.campaign = {}`). O conteúdo anterior (Silken Diplomacy, Expedition Pavilion etc.) está no commit `34d73d3` — recupere de lá no repositório da campanha. Itens do backlog específicos da campanha foram removidos daqui pelo mesmo motivo.
- **Aba Reino** (`assets/ficha.js`, dados em `data/reino.js`): substitui o modal "⚙ Meu Reino" (perícias por navegador, `km-kingdom`). Todos veem; só o modo mestre edita (inline, rascunho `km-reino-draft` salvo a cada mudança). Calcula modificadores, totais das perícias (atributo + proficiência + bônus de status de cargo investido, Unrest, ruína, vacância e ajustes do mestre, **sem somar bônus do mesmo tipo**; a coluna Composição mostra a conta e o que não somou), CD de Controle, Dados de Recurso, limites de estoque e consumo. Botão **🎲 Rolar** (todos) + "Aplicar ao RP" (mestre). Assentamentos só com nome/tipo/consumo/notas.
- **Decisão (usuário):** bônus de item de estruturas ficam para depois — dependem de registrar as construções de cada assentamento (são por atividade, não por perícia).
- "Ocultar atividades indisponíveis" virou checkbox na aba Atividades (`km-hide-unavailable`); a disponibilidade vem das perícias da ficha (ficha sem nenhuma treinada = tudo disponível).
- **`assets/github.js`** (extraído do `editor.js`): `KMGitHub.publish()` para qualquer arquivo de `data/`, um commit por arquivo; assistente de configuração que grava `data/site.js` (repo/branch/pasta/deploys) quando `repo` está vazio; painel da vitrine. Repositório e link de deploys não estão mais fixos no código.
- **Nova campanha** (painel ☰ Gerenciar campanha): publica `campanha.js` e `reino.js` vazios com dupla confirmação; na vitrine só zera os rascunhos locais.
- CSP movido do `netlify.toml` para `guia-reino/_headers` (vale no Netlify e no Cloudflare Pages). README com a seção "Usar na sua campanha" (fork ou repo privado, Netlify/Cloudflare/GitHub Pages, assistente ou edição manual do `site.js`, token, proteção de branch).
- `app.js`: primeira renderização no `DOMContentLoaded` (a aba Reino é registrada por `ficha.js`); `?vitrine` simula a vitrine; selfCheck ganhou `site`, `kingdom` e `kingdomBadRefs` (também conferido pelo `verificar.ps1`, que agora checa a sintaxe de todos os `assets/*.js`).
- Testes headless (17 verificações): total de perícia com empilhamento (Trade = +8 no cenário de teste), CD de Controle 19 (nível 3, Province, Ruler vago), rascunho e recarga, rolagem 7d6 e aplicar ao RP, consumo de Town = 2, atividades bloqueadas pela ficha, Publicar sem repo → assistente, vitrine (botão Crie o seu, Publicar desativado, Nova campanha local), jogador sem campos editáveis. Não testado: publicação real no GitHub e o assistente gravando o `site.js` (precisam de token real).
- Conferido com o usuário: Magister e General têm de fato a mesma penalidade de vacância (–4 em atividades de Guerra).

## 2026-10-08 — botão Publicar (GitHub API) + cabeçalhos de segurança

- `netlify.toml`: CSP (scripts só do site, estilos inline permitidos, Google Fonts, `connect-src` com `api.github.com`), `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`. Testado com servidor local (HttpListener) aplicando os mesmos cabeçalhos; confirmado no ar.
- Editor: **☁ Publicar** (painel e faixa do modo mestre) grava `guia-reino/data/campanha.js` via API de conteúdo do GitHub com token fine-grained (Contents R/W, só este repo) salvo no `localStorage`. Tela "⚙ Token" com passo a passo, validação do token (GET) e "Esquecer token".
- Proteções: confirmação se o arquivo no GitHub mudou desde o carregamento da página (evita sobrescrever); mensagens de erro claras para 401/403/404/409; mensagem de commit lista as mudanças (+novo, −removido, ~alterado, ativado/desativado).
- Após o commit, acompanha o deploy consultando `data/campanha.js` a cada 5 s (até ~3 min); quando o site reflete a publicação, apaga o rascunho e recarrega.
- Testado com a API do GitHub simulada (sem commits reais): sem token, token salvo, nada a publicar, sucesso + espera do deploy, conflito cancelado, erro 403. Falta o teste real com o token do usuário.

## 2026-10-08 — link do card (`sourceRef`) + Netlify

- `sourceRef` com URL `http(s)` vira o chip-link "Ver card ↗ <domínio>" no modal (todos os usuários; `target=_blank`, `rel=noopener`). Só URLs `http(s)` viram link (sem `javascript:`). Texto livre (nome do PDF) agora só aparece no modo mestre. Campo do editor renomeado para "Fonte / link do card".
- O usuário cria os cards no pf2 template tools; a ideia é colar o link do card em cada item da campanha.
- Netlify: site `https://pf2-easy-kingdom-management.netlify.app/` ligado ao repositório; deploy automático confirmado (push de `bfbaac9` publicado em segundos).
- Regra `master-protection` (id 24729778) segue ativa na `main`, com bypass para a conta do usuário: push direto funciona e o GitHub responde "Bypassed rule violations" (aviso esperado, não erro). O futuro botão "Publicar" via API também depende desse bypass.

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
