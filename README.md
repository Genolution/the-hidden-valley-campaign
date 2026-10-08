# Guia do Reino — Kingmaker (PF2e)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b8d5a3f9-89cf-47f0-a91e-ce6c55a1a317/deploy-status)](https://app.netlify.com/projects/pf2-easy-kingdom-management/deploys)

**Vitrine:** https://pf2-easy-kingdom-management.netlify.app/ — experimente o modo mestre em [`?mestre`](https://pf2-easy-kingdom-management.netlify.app/?mestre#/reino) (as alterações ficam só no seu navegador; publicar fica desativado).

Referência rápida, em português, das regras de gerenciamento de reino do *Kingmaker Player's Guide* (Paizo), com:

- **Ficha do reino** (aba *Reino*) mantida pelo mestre: atributos, ruína, Unrest, recursos (com rolagem dos Dados de Recurso), líderes, perícias com totais calculados (incluindo o bônus de cargo investido e a regra de não somar bônus do mesmo tipo), talentos e assentamentos;
- **conteúdo próprio da campanha** (atividades, estruturas, talentos… fora do livro), com ativação item a item;
- **modo mestre** (`?mestre`) que edita tudo pelo próprio site e **publica** com um commit no GitHub;
- **rolagem dos testes do reino** (ficha e atividades), com envio opcional das rolagens ao **Discord**.

Versão atual e novidades: [`CHANGELOG.md`](CHANGELOG.md).

## Integrações suportadas

| Tipo | Suportado | Observação |
|---|---|---|
| Hospedagem com envio ao chat | **Netlify** | o site em si é estático e roda em qualquer hospedagem; o envio ao chat usa uma função do servidor |
| Chat (rolagens) | **Discord** | por webhook do canal, guardado numa variável de ambiente da hospedagem |

A arquitetura separa o núcleo (`integracoes/`) dos adaptadores de cada provedor, para facilitar incluir outros
(Cloudflare, Slack, Telegram…): veja [`docs/integracoes.md`](docs/integracoes.md). No site, o mestre vê essa lista e o
estado de cada integração na aba **⚙ Configurações**.

Site estático (HTML + JS, sem build, sem dependências), publicado a partir da pasta [`guia-reino/`](guia-reino/).

- Uso e abas: [`guia-reino/LEIAME.md`](guia-reino/LEIAME.md)
- Dados da campanha e da ficha: [`docs/modelo-de-dados.md`](docs/modelo-de-dados.md)
- Manutenção (para quem edita o código): [`CLAUDE.md`](CLAUDE.md), [`docs/`](docs/), [`tools/verificar.ps1`](tools/verificar.ps1)

## Usar na sua campanha

O conteúdo da campanha (`guia-reino/data/campanha.js`) e a ficha do reino (`guia-reino/data/reino.js`) são arquivos do
repositório: o modo mestre os grava com um commit e o provedor de hospedagem republica o site. Por isso cada mesa precisa
do **próprio repositório** e do **próprio site** ligado a ele. Neste repositório esses arquivos vêm vazios.

### 1. Copie o repositório

- **Fork** (recomendado): botão **Fork** no GitHub ([criar fork](https://github.com/diego-duarte/pf2-easy-kingdom-management/fork)).
  Para receber melhorias depois, use **Sync fork** na página do seu fork.
- Repositório **privado** (para esconder spoilers dos jogadores mais curiosos): crie um repositório vazio e envie uma cópia
  deste; para atualizar, adicione este como `upstream` e faça `git pull upstream main`.

> Num repositório público, qualquer pessoa pode ler `campanha.js` e `reino.js` — inclusive os itens marcados como inativos.

### 2. Publique o site

**Netlify** (recomendado; a configuração já está em [`netlify.toml`](netlify.toml)):
*Add new project → Import an existing project → GitHub* → escolha o seu repositório. Não mude nada: a pasta publicada
(`guia-reino`) e a ausência de build vêm do `netlify.toml`. Cada commit na branch `main` republica o site em segundos.

**Cloudflare Pages**: *Workers & Pages → Create → Pages → Connect to Git* → repositório; *Build command* vazio,
*Build output directory* `guia-reino`. Os cabeçalhos de segurança de [`guia-reino/_headers`](guia-reino/_headers) valem nos dois.
O envio de rolagens ao chat ainda não tem adaptador para o Cloudflare (o resto funciona).

GitHub Pages também serve o site (só arquivos estáticos), mas não aplica o `_headers` e publica apenas a raiz ou `/docs`
— seria preciso um workflow do GitHub Actions para publicar a pasta `guia-reino`.

### 3. Configure a publicação (uma vez)

**Pelo site (sem editar arquivos):** abra o seu site com `?mestre` (ex.: `https://meu-reino.netlify.app/?mestre`) e clique em
**☁ Publicar** (no painel *☰ Gerenciar campanha* ou na aba *Reino*). O assistente pede:

| Campo | Exemplo |
|---|---|
| Repositório | `maria/meu-reino` |
| Branch | `main` |
| Pasta do site | `guia-reino` |
| Página de deploys (opcional) | `https://app.netlify.com/projects/meu-reino/deploys` |
| Token do GitHub | ver abaixo |

e grava `guia-reino/data/site.js` no seu repositório. A partir daí o **☁ Publicar** funciona para a ficha e o conteúdo.

**À mão (alternativa):** edite [`guia-reino/data/site.js`](guia-reino/data/site.js) no GitHub e preencha `repo`
(`usuario/repositorio`), `branch` e, se quiser, `deploysUrl`. Os campos `upstream` e `showcaseHost` identificam a vitrine
do projeto base; pode deixá-los como estão (a vitrine só vale no endereço da vitrine).

**Token do GitHub** (o site mostra o mesmo passo a passo): [GitHub → Fine-grained token](https://github.com/settings/personal-access-tokens/new)
→ *Repository access: Only select repositories* → o seu repositório → *Permissions → Contents: Read and write* (nada mais)
→ *Generate token*. O token fica guardado **só no navegador** em que foi colado; não use em computador compartilhado.
Se a branch tiver regras de proteção (exigir pull request), libere o seu usuário no *bypass* ou os commits do Publicar serão recusados.

### 4. Rolagens no Discord (opcional)

1. No Discord: *Configurações do canal → Integrações → Webhooks → Novo webhook* → escolha o canal → **Copiar URL do webhook**.
2. No Netlify: *Site configuration → Environment variables → Add a variable* → chave `DISCORD_WEBHOOK_URL`, valor = a URL copiada.
   **Não** coloque a URL em nenhum arquivo do repositório (veja [`.env.example`](.env.example)).
3. Em `guia-reino/data/site.js`, acrescente `"chat": "discord"` (ou escolha *Discord* no assistente de configuração do modo mestre).
4. Republique (o commit do passo 3 já republica; mudanças só na variável pedem *Deploys → Trigger deploy*) e, na aba
   **⚙ Configurações** do modo mestre, use **Enviar mensagem de teste**.

Quem quiser trocar de canal ou suspeitar de abuso: apague o webhook no Discord e cadastre outro na variável.

### 5. Use

- **Jogadores:** o endereço do site, sem parâmetros.
- **Mestre:** o mesmo endereço com `?mestre`. Edite a ficha na aba *Reino* e o conteúdo da campanha em *☰ Gerenciar campanha*;
  tudo fica num rascunho no navegador até o **☁ Publicar**. Sem token, dá para **⤓ Baixar** o arquivo e enviá-lo para
  `guia-reino/data/` pelo GitHub (*Add file → Upload files*).
- **Rolagens:** jogadores e mestre rolam pelo 🎲 da ficha ou pelo modal de uma atividade, informando o próprio nome.
- **Atualizações:** o modo mestre avisa quando há versão nova no repositório base. Atualize com **Sync fork → Update branch**
  no GitHub; seus arquivos de dados não mudam (novidades em [`CHANGELOG.md`](CHANGELOG.md)). Se o GitHub acusar conflito,
  **não** use *Discard commits* (apagaria seu conteúdo): resolva com `git pull upstream main`, mantendo a sua versão dos
  arquivos de `guia-reino/data/` que você edita.
- **Nova campanha** (no painel *☰ Gerenciar campanha*): publica `campanha.js` e `reino.js` vazios para recomeçar no mesmo site
  (o conteúdo antigo continua no histórico do repositório).

Os PDFs (livro e handouts) ficam fora do Git (`.gitignore`). Se publicar este projeto, troque o badge do Netlify no topo deste
arquivo pelo do seu site.

Referência não oficial para uso da mesa. *Pathfinder* e *Kingmaker* são marcas da Paizo Inc.
