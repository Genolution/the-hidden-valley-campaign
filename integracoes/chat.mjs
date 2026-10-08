// Núcleo das integrações de chat (roda no servidor, nunca no navegador).
// Recebe uma rolagem do site, valida e monta a mensagem aqui mesmo — o navegador não envia texto livre —
// e repassa ao serviço de chat. Os segredos (ex.: DISCORD_WEBHOOK_URL) vêm das variáveis de ambiente
// do provedor de hospedagem; veja .env.example e docs/integracoes.md.
//
// Uso pelos adaptadores de hospedagem (ex.: netlify/functions/chat.mjs):
//   const r = await handleChat({ method, bodyText, env });   // → { status, body }
import * as discord from './chat/discord.mjs';

// Serviços de chat suportados: id → módulo com { name, envVars, configured(env), send(roll, env) }
export const PROVIDERS = { discord };

const DEGREES = ['criticalSuccess', 'success', 'failure', 'criticalFailure'];
const MAX_BODY = 4096;

function str(v, max) {
  if (v == null) return '';
  return String(v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
}
function int(v, min, max) {
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) throw new Error('número inválido');
  return n;
}

// Rolagem vinda do site → objeto limpo (lança erro se inválida)
export function parseRoll(data) {
  if (!data || typeof data !== 'object') throw new Error('corpo inválido');
  // Mensagem de teste da aba Configurações: só nome e reino
  if (data.test === true) return { test: true, player: str(data.player, 40) || 'Alguém', kingdom: str(data.kingdom, 60) };
  const roll = {
    player: str(data.player, 40) || 'Alguém',
    kingdom: str(data.kingdom, 60),
    skill: str(data.skill, 40),
    activity: str(data.activity, 80),
    die: int(data.die, 1, 20),
    modifier: int(data.modifier, -50, 80),
    dc: int(data.dc, 0, 99),
    degree: str(data.degree, 20),
    fame: data.fame === true,
    breakdown: str(data.breakdown, 300),
    outcome: str(data.outcome, 400)
  };
  if (!roll.skill) throw new Error('perícia ausente');
  if (DEGREES.indexOf(roll.degree) < 0) throw new Error('grau inválido');
  roll.total = roll.die + roll.modifier;
  return roll;
}

export async function handleChat({ method, bodyText, env }) {
  if (method === 'GET') {
    // Estado das integrações (sem revelar segredos): usado pela aba Configurações do modo mestre
    const status = {};
    for (const id of Object.keys(PROVIDERS)) status[id] = PROVIDERS[id].configured(env);
    return { status: 200, body: { ok: true, providers: status } };
  }
  if (method !== 'POST') return { status: 405, body: { ok: false, error: 'método não permitido' } };
  if (!bodyText || bodyText.length > MAX_BODY) return { status: 413, body: { ok: false, error: 'corpo grande demais' } };
  let data;
  try { data = JSON.parse(bodyText); } catch (e) { return { status: 400, body: { ok: false, error: 'JSON inválido' } }; }
  const provider = PROVIDERS[data && data.provider];
  if (!provider) return { status: 400, body: { ok: false, error: 'serviço de chat desconhecido' } };
  if (!provider.configured(env)) return { status: 503, body: { ok: false, error: provider.name + ' não configurado no servidor (' + provider.envVars.join(', ') + ')' } };
  let roll;
  try { roll = parseRoll(data.roll); } catch (e) { return { status: 400, body: { ok: false, error: 'rolagem inválida: ' + e.message } }; }
  try {
    await provider.send(roll, env);
    return { status: 200, body: { ok: true } };
  } catch (e) {
    return { status: 502, body: { ok: false, error: provider.name + ': ' + e.message } };
  }
}
