# Novidades (changelog)

Versões do Guia do Reino (`guia-reino/assets/version.js`), da mais recente para a mais antiga.
Formato *maior.menor.correção*: **maior** = mudança que exige ação de quem usa (ex.: formato de arquivo),
**menor** = funcionalidade nova, **correção** = ajustes. Cada versão tem uma tag `vX.Y.Z` no GitHub.

**Como atualizar o seu site (fork):** na página do seu repositório no GitHub, **Sync fork → Update branch**
(ou `git pull upstream main`). O provedor republica o site sozinho. Seus arquivos de dados
(`campanha.js`, `reino.js`, `site.js`) não são alterados pelas atualizações.

## 1.1.0 — 2026-10-08

- **Rolagem de testes do reino:** 🎲 em cada perícia da ficha e no modal de cada atividade (perícias aceitas, CD editável a partir da CD de Controle, grau de sucesso com críticos e 20/1 natural, texto do resultado, rerrolagem com Fama).
- **Envio das rolagens ao Discord** (opcional): pela função do servidor `/api/chat`; o webhook fica numa variável de ambiente da hospedagem (`DISCORD_WEBHOOK_URL`), nunca no repositório. Ative com `"chat": "discord"` em `data/site.js`.
- **Aba ⚙ Configurações** (modo mestre): versão do site e a mais recente, publicação no GitHub, hospedagem e chat suportados, teste do envio.
- Versão no rodapé e aviso de nova versão no modo mestre.

## 1.0.0 — 2026-10-08

Primeira versão numerada: guia das regras (turno, atividades, estruturas, guerra, talentos, regras, criação),
ficha do reino com cálculos, conteúdo de campanha com ativação, modo mestre com editor e Publicar no GitHub,
assistente de configuração (`data/site.js`), Nova campanha e vitrine.
