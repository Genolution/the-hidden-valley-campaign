// Adaptador Netlify Functions para o núcleo de chat (integracoes/chat.mjs). Endpoint: /api/chat
// Variáveis de ambiente: Netlify → Site configuration → Environment variables (veja .env.example).
import { handleChat, PROVIDERS } from '../../integracoes/chat.mjs';

export default async (req) => {
  const env = {};
  for (const id of Object.keys(PROVIDERS)) for (const k of PROVIDERS[id].envVars) env[k] = process.env[k];
  const r = await handleChat({ method: req.method, bodyText: req.method === 'POST' ? await req.text() : '', env });
  return new Response(JSON.stringify(r.body), {
    status: r.status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });
};

export const config = { path: '/api/chat' };
