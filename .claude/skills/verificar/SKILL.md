---
name: verificar
description: Verifica o Guia do Reino após uma edição — sintaxe de app.js e data/*.js, relatório selfCheck (referências quebradas, campos faltando) e, opcionalmente, screenshot de uma aba. Use depois de qualquer mudança em guia-reino/.
---

# Verificar o Guia do Reino

1. Rode, a partir da raiz do projeto:

   ```
   powershell -NoProfile -ExecutionPolicy Bypass -File tools\verificar.ps1
   ```

   Se a mudança for visual, acrescente `-Screenshot "#/<aba>" -Out "<scratchpad>\<nome>.png"`
   (abas: `turno`, `atividades`, `estruturas`, `guerra`, `talentos`, `regras`, `criacao`;
   para abrir um modal: `#/estruturas/structure:town-hall`). Depois abra o PNG com a ferramenta Read e confira.

2. Interprete:
   - `ERRO <arquivo>` → erro de sintaxe; corrija antes de seguir.
   - `selfCheck não rodou` → erro em tempo de execução no app.js (a sintaxe passou, mas algo quebrou ao carregar).
   - `PROBLEMA missingRefs` → `[[tipo:id]]`, `upgradeTo/From`, `itemBonuses[].activity` ou `untrained/trained` apontando para id inexistente.
   - `PROBLEMA noSummary/noText` → entidade sem `summary` ou sem `text`/`outcomes`.

3. Compare a linha "Entidades:" com a linha de base em `docs/HISTORICO.md`. Uma contagem que mudou sem você ter adicionado/removido entidades indica id duplicado ou coleção quebrada.

4. Relate o resultado ao usuário com honestidade (inclusive falhas).
