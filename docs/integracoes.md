# Integrações: hospedagem e chat

O site é estático, mas o envio de rolagens ao chat precisa de um segredo (ex.: o webhook do Discord) que **não pode** ir
para o navegador nem para o repositório. Por isso há uma pequena função no servidor, organizada em duas camadas:

```
navegador (assets/integracoes.js, KMChat)  ──POST /api/chat {provider, roll}──▶  adaptador da hospedagem
                                                                                  (netlify/functions/chat.mjs)
                                                                                         │ env + corpo
                                                                                         ▼
                                                              núcleo integracoes/chat.mjs → integracoes/chat/<id>.mjs
                                                              (valida a rolagem, monta a mensagem)   → serviço de chat
```

- **Núcleo** (`integracoes/chat.mjs`): `handleChat({method, bodyText, env}) → {status, body}`. Não depende de provedor.
  `GET` devolve quais chats estão configurados (sem revelar segredos); `POST` valida com `parseRoll()` e chama o serviço.
  O navegador nunca manda texto livre para o chat: a mensagem é montada a partir de campos validados.
- **Serviços de chat** (`integracoes/chat/<id>.mjs`): exportam `name`, `envVars`, `configured(env)` e `send(roll, env)`.
- **Adaptadores de hospedagem** (`netlify/functions/chat.mjs`): só convertem a requisição do provedor para o núcleo e
  publicam o endpoint em `/api/chat`.
- Código do servidor é JavaScript moderno (módulos `.mjs`, Node 18+). O código do site (`guia-reino/assets/*.js`)
  continua em ES5. O `tools/verificar.ps1` não checa os `.mjs` (o JScript não entende módulos); teste-os no Edge com
  um servidor local (`tools/servidor-teste.ps1`).

## Suportados

| Tipo | Provedor | Onde | Configuração |
|---|---|---|---|
| Hospedagem | **Netlify** | `netlify/functions/chat.mjs` (+ `[functions]` no `netlify.toml`) | variáveis em *Site configuration → Environment variables* |
| Chat | **Discord** | `integracoes/chat/discord.mjs` | `DISCORD_WEBHOOK_URL` (webhook do canal) + `"chat": "discord"` no `site.js` |

As listas mostradas na aba ⚙ Configurações ficam em `HOSTS` e `CHATS` em `guia-reino/assets/integracoes.js`.

## Incluir uma hospedagem

1. Crie o adaptador no formato de funções do provedor, expondo `/api/chat` e repassando `method`, o corpo (texto) e as
   variáveis de `PROVIDERS[*].envVars` para `handleChat()`. Exemplo (Cloudflare Pages Functions, **não testado**):
   ```js
   // functions/api/chat.js
   import { handleChat, PROVIDERS } from '../../integracoes/chat.mjs';
   export async function onRequest({ request, env }) {
     const vars = {};
     for (const id of Object.keys(PROVIDERS)) for (const k of PROVIDERS[id].envVars) vars[k] = env[k];
     const r = await handleChat({ method: request.method, bodyText: request.method === 'POST' ? await request.text() : '', env: vars });
     return new Response(JSON.stringify(r.body), { status: r.status, headers: { 'Content-Type': 'application/json' } });
   }
   ```
2. Inclua o provedor em `HOSTS` (`integracoes.js`), no README ("Integrações suportadas") e na tabela acima.
3. Se o provedor não lê `_headers`, replique os cabeçalhos de segurança na configuração dele.

## Incluir um chat

1. Crie `integracoes/chat/<id>.mjs` com `name`, `envVars`, `configured(env)` e `send(roll, env)` (veja `discord.mjs`;
   bloqueie menções em massa e limite o tamanho dos textos).
2. Registre em `PROVIDERS` (`integracoes/chat.mjs`) e em `CHATS` (`integracoes.js`), com a explicação de como obter o segredo.
3. Documente a variável em `.env.example` e no README; o mestre ativa com `"chat": "<id>"` no `site.js`.
4. Se o serviço for chamado pelo navegador (não deveria), a origem teria de entrar no CSP — prefira sempre o servidor.
