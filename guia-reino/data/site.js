window.KM = window.KM || {};
// Configuração do site (repositório onde o modo mestre publica os arquivos de dados).
// Pode ser preenchida pelo próprio site: abra-o com ?mestre e clique em "☁ Publicar" — o assistente
// pede repositório, branch e token e grava este arquivo no GitHub. Ou edite à mão:
//   repo        "usuario/repositorio" no GitHub (vazio = publicação desativada; só "Baixar")
//   branch      branch publicada pelo provedor (Netlify, Cloudflare Pages…)
//   root        pasta do site dentro do repositório (onde fica o index.html)
//   deploysUrl  link opcional da página de deploys do provedor (aparece após publicar)
//   upstream    repositório base do projeto (botão "Crie o seu" na vitrine)
//   showcaseHost endereço da vitrine do projeto base: nesse endereço o Publicar fica desativado
KM.site = {
  "repo": "Genolution/the-hidden-valley-campaign",
  "branch": "main",
  "root": "guia-reino",
  "deploysUrl": "https://app.netlify.com/projects/the-hidden-valey-campaign/deploys",
  "upstream": "diego-duarte/pf2-easy-kingdom-management",
  "showcaseHost": "pf2-easy-kingdom-management.netlify.app"
};
