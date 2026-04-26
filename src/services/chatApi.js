const CONCIERGE_CONTEXT = `Contexte: Tu es le concierge premium de TimeTravel Agency.
Tu reponds en francais avec un ton elegant et concis.
Tu peux aider sur: destinations, prix coherents (estimations), conseils de choix d epoque, FAQ agence (reservation, securite, annulation, preparation).`

const RESPONSE_STYLE = `Format de reponse obligatoire:
- Reponse courte: 5 a 8 lignes maximum.
- Pas de markdown (pas de **, pas de titres, pas de listes longues).
- Phrases simples et lisibles dans une bulle de chat.
- Donner 2 ou 3 suggestions maximum.
- Si prix: donner une fourchette courte en EUR et preciser "estimation".
- Finir par une question unique pour continuer la conversation.`

export async function askConcierge(userInput) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'user',
          content: `${CONCIERGE_CONTEXT}\n${RESPONSE_STYLE}\n\nQuestion client: ${userInput}`,
        },
      ],
    }),
  })

  if (!response.ok) {
    let errorMessage = 'Le concierge est temporairement indisponible.'

    try {
      const data = await response.json()
      if (data?.error) {
        errorMessage = data?.details
          ? `${data.error}: ${data.details}`
          : data.error
      }
    } catch {
      // ignore json parsing issues and keep fallback message
    }

    throw new Error(errorMessage)
  }

  const data = await response.json()
  return data?.content?.trim() || 'Je suis la pour vous aider a preparer votre voyage temporel.'
}
