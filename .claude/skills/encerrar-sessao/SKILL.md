---
name: encerrar-sessao
description: Registra o conhecimento de uma sessão de edição do Guia do Reino — atualiza docs/HISTORICO.md, docs/BACKLOG.md, LEIAME.md e CLAUDE.md/docs quando necessário. Use ao fim de uma sessão de mudanças ou quando o usuário pedir para registrar/documentar o que foi feito.
---

# Encerrar sessão

Objetivo: a próxima sessão deve entender o estado do projeto lendo só `CLAUDE.md` e o topo dos `docs/`, sem varrer o código.

1. Rode a skill `verificar` (ou `tools\verificar.ps1`) e anote a linha "Entidades:".
2. **`docs/HISTORICO.md`** — adicione no topo uma entrada `## AAAA-MM-DD — <título curto>` com:
   - o que mudou (arquivo + função/coleção, sem colar código);
   - decisões e o porquê (principalmente alternativas descartadas);
   - nova linha de base do check, se as contagens mudaram;
   - pendências conhecidas.
3. **`docs/BACKLOG.md`** — remova itens concluídos; acrescente ideias/pendências que surgiram.
4. **`guia-reino/LEIAME.md`** — atualize se algo visível ao usuário mudou (aba, filtro, coluna, atalho).
5. **`CLAUDE.md`** — atualize só se mudou arquitetura, convenção, ferramenta ou fluxo. Mantenha-o curto.
6. **`docs/modelo-de-dados.md`** — atualize se surgiu campo/tipo novo nos dados.
7. **`docs/regras-kingmaker.md`** — atualize se você confirmou ou corrigiu alguma regra/número.

8. **Git** — faça commit das mudanças com mensagem descritiva em português (`git status` antes: nenhum `.pdf` pode entrar). **Pergunte antes do `git push`**: o push dispara o deploy no Netlify e publica para os jogadores.

Seja conciso: entradas de histórico com 3–8 tópicos. Use datas absolutas.
