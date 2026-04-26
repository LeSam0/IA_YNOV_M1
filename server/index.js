import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Mistral } from '@mistralai/mistralai'

dotenv.config()

const app = express()
const port = process.env.PORT || 8787
const mistralClient = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
})
const mistralAgentId = process.env.MISTRAL_AGENT_ID
const mistralAgentVersion = Number(process.env.MISTRAL_AGENT_VERSION ?? 0)

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/chat', async (req, res) => {
  try {
    const apiKey = process.env.MISTRAL_API_KEY
    if (!apiKey) {
      return res.status(500).json({
        error: 'MISTRAL_API_KEY is missing on server.',
      })
    }

    const { messages } = req.body

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: 'messages must be a non-empty array.',
      })
    }
    if (!mistralAgentId) {
      return res.status(500).json({
        error: 'MISTRAL_AGENT_ID is missing on server.',
      })
    }

    const response = await mistralClient.beta.conversations.start({
      agentId: mistralAgentId,
      agentVersion: mistralAgentVersion,
      inputs: messages,
    })

    const outputEntries = Array.isArray(response?.outputs) ? response.outputs : []
    const outputText = outputEntries
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

    return res.json({
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
})

app.listen(port, () => {
  console.log(`Mistral API server running on http://localhost:${port}`)
})
