# Campanha: The Hidden Valley

Repositório da campanha (fork de `diego-duarte/pf2-easy-kingdom-management`). Aqui ficam só os **dados da mesa**:
`guia-reino/data/campanha.js` (conteúdo próprio), `guia-reino/data/reino.js` (ficha do reino) e
`guia-reino/data/site.js` (publicação neste repositório). Código e documentação geral vêm da base.

- **Site:** https://the-hidden-valey-campaign.netlify.app/ (mestre: `?mestre`). Deploys: https://app.netlify.com/projects/the-hidden-valey-campaign/deploys

- **Remotes:** `origin` = este fork; `upstream` = base (push desativado — mudanças de código são feitas na pasta `../Base`).
- **Atualizar com a base:** `git pull upstream main` e depois `git push origin main` (com o ok do usuário: push = publicar).
  Os arquivos de dados da base ficam vazios e raramente mudam; se houver conflito em `data/campanha.js`, `data/reino.js`
  ou `data/site.js`, **fique com a versão daqui** (`git checkout --ours <arquivo>` durante o merge).
- **Handouts** (fonte dos itens de `campanha.js`): PDFs na pasta-mãe (`../*.pdf`), fora do Git.
- O conteúdo foi recuperado do commit `34d73d3` da base (última publicação antes da separação, 2026-10-08).

## Pendências da campanha

- [ ] Token do GitHub com acesso a este repositório (Contents: Read and write) no navegador do mestre.
- [ ] Preencher a ficha do reino (aba Reino, `?mestre`) e publicar.
- [ ] **Sponsor Expedition** (atividade Cívica da campanha, habilitada pelo Expedition Pavilion): falta o texto. Quando chegar, cadastrar em `campanha.js` (`step: "civic"`) e trocar o negrito no texto do pavilhão por `[[activity:sponsor-expedition|Sponsor Expedition]]`.
- [ ] Confirmar com o mestre: Silken Diplomacy é atividade de Liderança? Tem limite por turno?
- [ ] Definir a `condition` real do Expedition Pavilion (hoje é um texto provisório).
- [ ] Preencher o `sourceRef` dos itens atuais com o link dos cards (pf2 template tools).
