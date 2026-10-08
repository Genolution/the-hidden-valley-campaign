# Guia do Reino — Kingmaker (PF2e)

Referência rápida das regras de gerenciamento de reino do *Kingmaker Player's Guide*.
Abra `index.html` direto no navegador (não precisa de servidor nem internet; só a fonte do título vem do Google Fonts).

## Abas
- **Reino** — a ficha do reino, mantida pelo mestre (só leitura para os jogadores): atributos e ruína, situação (nível, XP, tamanho, CD de Controle, Unrest, Fama), recursos e commodities, líderes, perícias, bônus extras, talentos, assentamentos e notas. Os totais são calculados pelas regras; o detalhe de cada perícia aparece na coluna **Composição**. **🎲 Rolar** rola os Dados de Recurso do turno (qualquer pessoa pode rolar; só o mestre aplica o resultado ao RP).
  Cada perícia tem um **🎲**: rola d20 + total contra a CD (padrão: CD de Controle, editável), mostra o grau de sucesso (±10 = crítico; 20/1 natural mudam um grau) e permite **Rerrolar com Fama** (o mestre desconta o ponto na ficha). O modal de cada atividade tem o mesmo **Rolar teste do reino**, só com as perícias aceitas pela atividade (🔒 = o reino não tem o grau exigido) e com o texto do resultado. Informe **Seu nome** (fica salvo no navegador); se o site tiver chat configurado, a rolagem vai também para o **Discord** (desmarque "enviar ao Discord" para rolar só na tela).
- **Turno do Reino** — as 4 fases e suas etapas, com as atividades de cada etapa (clique para abrir o modal).
- **Atividades** — todas as atividades (reino + exército) com filtros por etapa, perícia e proficiência.
- **Estruturas** — tabela ordenável (nível, lotes, custo, CD, "Melhora para") e filtro "Bônus em <perícia>". A coluna "Melhora para" lista as estruturas para as quais aquela pode ser melhorada (clique para abrir).
- **Guerra**, **Talentos**, **Regras**, **Criação do Reino**.

Atalhos: `/` foca a busca global · `Esc` fecha o modal · `Backspace` volta no modal.
As proficiências da ficha do reino marcam com 🔒 as atividades que o reino ainda não pode fazer; na aba Atividades, **ocultar indisponíveis** as esconde (preferência salva no navegador). Com a ficha sem nenhuma perícia treinada, tudo aparece disponível.
Links diretos: `index.html#/estruturas/structure:town-hall` abre a aba e o modal.

## Dados
Ficam em `data/*.js` (JS em vez de JSON para funcionar via `file://`):

| Arquivo | Conteúdo | Págs. |
|---|---|---|
| `turn.js` | estrutura do turno (resumos PT) | 42–45 |
| `rules.js` | regras gerais, cargos de liderança, criação | 10–21, 38–45 |
| `activities.js` | atividades do reino | 22–37 |
| `skills.js` | perícias e talentos | 20–38 |
| `structures.js` | estruturas e regras de assentamento | 45–60 |
| `warfare.js` | exércitos, táticas, ações de guerra, condições | 61–77 |
| `campanha.js` | **conteúdo próprio da campanha** (estruturas, atividades… fora do livro) | — |
| `reino.js` | **ficha do reino** (valores-base; o resto é calculado) | — |
| `site.js` | configuração da publicação (repositório, branch) | — |

Cada item tem `summary` (PT), `text` (texto original em inglês) e opcionalmente `quick`/`outcomes`.
Referências cruzadas no texto usam `[[tipo:id|Rótulo]]`.
Para verificar os dados após editar: abra `index.html?check` — ao fim da página aparece um relatório com referências quebradas e campos faltando.
Ou, pelo terminal (da pasta acima): `powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1`.

**Conteúdo da campanha:** adicione em `data/campanha.js` (objeto `KM.campaign`, com listas `activities`, `structures`, `feats`…) no mesmo formato dos arquivos do livro. Esses itens ganham o selo **Campanha** e podem ser filtrados pelo campo **Origem** nas abas Atividades e Estruturas. Detalhes em `../docs/modelo-de-dados.md`.

**Ativar conteúdo:** cada item da campanha só aparece com `"active": true`. Deixe tudo cadastrado com `false` e troque para `true` quando o item entrar em jogo. Para ver os inativos (selo **Inativo** + condição), abra o site com `?mestre` — ex.: `index.html?mestre#/estruturas`.

**Link do card:** no campo **Fonte / link do card** (`sourceRef`), cole o link do card (ex.: do pf2 template tools). No site aparece o botão **Ver card ↗**, que abre o card numa nova aba.

**Editar pelo site (modo mestre):** na faixa do topo, use **☰ Gerenciar campanha** (lista, ativar/desativar, editar, excluir), **+ Atividade** ou **+ Estrutura**; no modal de um item da campanha há **✎ Editar**. As mudanças valem na hora para você, mas ficam salvas só no seu navegador (rascunho). Para os jogadores verem, clique em **☁ Publicar**: o `campanha.js` é gravado no GitHub e o provedor (Netlify etc.) atualiza o site em instantes; o aviso acompanha até o site estar no ar e então o rascunho é descartado sozinho. **Descartar rascunho** volta ao arquivo publicado.

**Ficha do reino (modo mestre):** na aba **Reino**, os campos ficam editáveis e cada alteração é salva no rascunho na hora. Use **☁ Publicar ficha**, **⤓ Baixar reino.js** ou **Descartar rascunho** na faixa do topo da ficha. Cargos sem ocupante contam como vagos (com a penalidade de vacância); marque **Investido** nos cargos investidos do turno. Em **Bônus e penalidades extras**, informe tipo (status, item, circunstância, sem tipo), valor, alcance (todos os testes, um atributo ou uma perícia) e motivo.

Na primeira vez, o Publicar abre o **assistente de configuração** (repositório, branch e token), que grava `data/site.js`; depois pede só o **token do GitHub**, criado uma única vez, com acesso só ao repositório do site e permissão *Contents: Read and write*. O próprio site mostra o passo a passo; o token fica guardado só naquele navegador. Para trocar o token ou o repositório, use **⚙ GitHub** no painel. Sem token, dá para publicar à mão: use **⤓ Baixar** e envie o arquivo para `guia-reino/data/` no GitHub (*Add file → Upload files*).

**⚙ Configurações** (aba que só aparece no modo mestre): versão do site e a mais recente do repositório base (com aviso na faixa do mestre quando há atualização), repositório de publicação e token, hospedagens e chats suportados (hoje: Netlify e Discord), estado da variável do chat no servidor e **Enviar mensagem de teste**. Como configurar o Discord: `README.md` do repositório.

**Nova campanha:** no fim do painel **☰ Gerenciar campanha**, publica `campanha.js` e `reino.js` vazios (pede confirmação duas vezes).

**Vitrine:** no endereço da vitrine do projeto o modo mestre funciona só para experimentar (nada é publicado) e aparece o botão **Crie o seu**, que leva ao fork no GitHub. Para usar na sua mesa, veja o `README.md` do repositório.
