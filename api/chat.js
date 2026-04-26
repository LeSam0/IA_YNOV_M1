import { Mistral } from '@mistralai/mistralai'

const mistralClient = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
})

const mistralAgentId = process.env.MISTRAL_AGENT_ID
const mistralAgentVersion = Number(process.env.MISTRAL_AGENT_VERSION ?? 0)

function extractOutputText(response) {
  const outputEntries = Array.isArray(response?.outputs) ? response.outputs : []
  return outputEntries
    .flatMap((entry) => {
      if (typeof entry?.content === 'string') {
        return [entry.content]
      }
      if (Array.isArray(entry?.content)) {
        return entry.content
          .filter((item) => item?.type === 'text' && typeof item?.text === 'string')
          .map((item) => item.text)
      }
      return []
    })
    .join('\n')
    .trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    if (!process.env.MISTRAL_API_KEY) {
      return res.status(500).json({
        error: 'MISTRAL_API_KEY is missing on server.',
      })
    }

    if (!mistralAgentId) {
      return res.status(500).json({
        error: 'MISTRAL_AGENT_ID is missing on server.',
      })
    }

    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : (req.body ?? {})

    const { messages } = body

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'messages must be a non-empty array.',
      })
    }

    const response = await mistralClient.beta.conversations.start({
      agentId: mistralAgentId,
      agentVersion: mistralAgentVersion,
      inputs: messages,
    })

    const outputText = extractOutputText(response)

    return res.status(200).json({
      content:
        outputText ||
        'Je suis pret a vous aider a organiser votre prochain voyage temporel.',
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Unexpected server error.',
      details: error instanceof Error ? error.message : String(error),
    })
  }
}
