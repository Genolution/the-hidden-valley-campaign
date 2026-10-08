window.KM = window.KM || {};
// Conteúdo próprio da campanha (fora do Player's Guide).
// Cada lista é anexada à coleção de mesmo nome (KM.activities, KM.structures, KM.feats, …)
// ao carregar o app, e todos os itens recebem source = "campanha" (selo "Campanha" na interface).
// Mesmo formato dos arquivos do livro; veja docs/modelo-de-dados.md (seção "Conteúdo da campanha").
// `page` não se aplica. `sourceRef`: link do card (https://…), que vira o botão "Ver card" para os
// jogadores, ou texto livre como o nome do PDF (visível só no modo mestre).
//
// ATIVAÇÃO: o item só aparece no site com "active": true. Com false (ou sem o campo) fica oculto,
// mas pode ser visto abrindo o site com ?mestre (ex.: index.html?mestre#/estruturas), com o selo
// "Inativo" e a "condition" (anotação livre do que ativa o item).
// Atenção: oculto não é secreto — quem abrir este arquivo no navegador vê todo o conteúdo.
//
// Este arquivo pode ser gerado pelo editor do modo mestre (☰ Gerenciar campanha → Publicar / Baixar).
KM.campaign = {};
