# Guia do Reino — Kingmaker (PF2e)

Referência rápida das regras de gerenciamento de reino do *Kingmaker Player's Guide*.
Abra `index.html` direto no navegador (não precisa de servidor nem internet; só a fonte do título vem do Google Fonts).

## Abas
- **Turno do Reino** — as 4 fases e suas etapas, com as atividades de cada etapa (clique para abrir o modal).
- **Atividades** — todas as atividades (reino + exército) com filtros por etapa, perícia e proficiência.
- **Estruturas** — tabela ordenável (nível, lotes, custo, CD, "Melhora para") e filtro "Bônus em <perícia>". A coluna "Melhora para" lista as estruturas para as quais aquela pode ser melhorada (clique para abrir).
- **Guerra**, **Talentos**, **Regras**, **Criação do Reino**.

Atalhos: `/` foca a busca global · `Esc` fecha o modal · `Backspace` volta no modal.
**⚙ Meu Reino**: informe a proficiência do reino em cada perícia para marcar/ocultar atividades indisponíveis (salvo no navegador).
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

Cada item tem `summary` (PT), `text` (texto original em inglês) e opcionalmente `quick`/`outcomes`.
Referências cruzadas no texto usam `[[tipo:id|Rótulo]]`.
Para verificar os dados após editar: abra `index.html?check` — ao fim da página aparece um relatório com referências quebradas e campos faltando.
Ou, pelo terminal (da pasta acima): `powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1`.

**Conteúdo da campanha:** adicione em `data/campanha.js` (objeto `KM.campaign`, com listas `activities`, `structures`, `feats`…) no mesmo formato dos arquivos do livro. Esses itens ganham o selo **Campanha** e podem ser filtrados pelo campo **Origem** nas abas Atividades e Estruturas. Detalhes em `../docs/modelo-de-dados.md`.

**Ativar conteúdo:** cada item da campanha só aparece com `"active": true`. Deixe tudo cadastrado com `false` e troque para `true` quando o item entrar em jogo. Para ver os inativos (selo **Inativo** + condição), abra o site com `?mestre` — ex.: `index.html?mestre#/estruturas`.

**Editar pelo site (modo mestre):** na faixa do topo, use **☰ Gerenciar campanha** (lista, ativar/desativar, editar, excluir), **+ Atividade** ou **+ Estrutura**; no modal de um item da campanha há **✎ Editar**. As mudanças valem na hora para você, mas ficam salvas só no seu navegador. Para os jogadores verem:
1. clique em **⤓ Baixar campanha.js**;
2. substitua `data/campanha.js` por esse arquivo;
3. publique o site no Netlify.

Depois de publicado, o rascunho local é descartado sozinho. **Descartar rascunho** volta ao arquivo publicado.
