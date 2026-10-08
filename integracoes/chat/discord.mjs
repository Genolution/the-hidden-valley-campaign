// Discord: envia a rolagem como embed por um webhook do canal.
// Variável de ambiente: DISCORD_WEBHOOK_URL (Configurações do canal → Integrações → Webhooks → Copiar URL).
export const name = 'Discord';
export const envVars = ['DISCORD_WEBHOOK_URL'];

const WEBHOOK_RE = /^https:\/\/(?:canary\.|ptb\.)?(?:discord\.com|discordapp\.com)\/api\/webhooks\/\d+\/[\w-]+$/;
const DEGREE = {
  criticalSuccess: ['Sucesso crítico', 0x1d7a4a],
  success: ['Sucesso', 0x3d8b3d],
  failure: ['Falha', 0xb5651d],
  criticalFailure: ['Falha crítica', 0xb02a2a]
};

export function configured(env) {
  return WEBHOOK_RE.test(String((env && env.DISCORD_WEBHOOK_URL) || '').trim());
}

function sign(n) { return (n < 0 ? '−' : '+') + Math.abs(n); }

// Mensagem montada só a partir dos campos validados por parseRoll()
export function message(roll) {
  if (roll.test) {
    return {
      username: 'Guia do Reino',
      allowed_mentions: { parse: [] },
      embeds: [{ title: 'Integração com o Discord funcionando', description: 'Mensagem de teste enviada por ' + roll.player + '.', color: 0x8b2e2e, footer: roll.kingdom ? { text: roll.kingdom } : undefined }]
    };
  }
  const d = DEGREE[roll.degree];
  const lines = [
    '🎲 **' + roll.die + '** ' + sign(roll.modifier) + ' = **' + roll.total + '** vs CD ' + roll.dc + ' → **' + d[0] + '**'
  ];
  if (roll.fame) lines.push('*Rerrolagem com Fama/Infâmia.*');
  if (roll.outcome) lines.push('> ' + roll.outcome);
  const fields = [{ name: 'Perícia', value: roll.skill, inline: true }];
  if (roll.breakdown) fields.push({ name: 'Composição', value: roll.breakdown, inline: false });
  return {
    username: 'Guia do Reino',
    allowed_mentions: { parse: [] }, // nunca notifica @everyone/@here/usuários
    embeds: [{
      title: roll.player + ' — ' + (roll.activity || roll.skill),
      description: lines.join('\n'),
      color: d[1],
      fields: fields,
      footer: roll.kingdom ? { text: roll.kingdom } : undefined
    }]
  };
}

export async function send(roll, env) {
  const r = await fetch(String(env.DISCORD_WEBHOOK_URL).trim(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message(roll))
  });
  if (!r.ok) throw new Error('webhook respondeu ' + r.status);
}
