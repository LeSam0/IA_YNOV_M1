import { useState } from 'react'
import { Send } from 'lucide-react'
import FadeInSection from '../components/FadeInSection'
import { askConcierge } from '../services/chatApi'

const initialMessages = [
  {
    id: 1,
    role: 'bot',
    text: 'Bienvenue dans le salon prive TimeTravel Agency. Comment puis-je vous assister aujourd hui ?',
  },
]

function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const trimmedInput = input.trim()
    if (!trimmedInput || isLoading) return

    const userMessage = { id: Date.now(), role: 'user', text: trimmedInput }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    setIsLoading(true)
    askConcierge(trimmedInput)
      .then((reply) => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, role: 'bot', text: reply },
        ])
      })
      .catch((error) => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            role: 'bot',
            text:
              error?.message ||
              'Le service IA ne repond pas pour le moment. Merci de reessayer dans un instant.',
          },
        ])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-12">
      <FadeInSection className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
        <header className="border-b border-white/10 px-6 py-4">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Chat Concierge</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Concierge Temporel</h1>
        </header>
        <div className="h-[420px] space-y-3 overflow-y-auto bg-slate-900/40 p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                message.role === 'user'
                  ? 'ml-auto bg-amber-500 text-slate-950'
                  : 'bg-white/10 text-slate-100'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-3 border-t border-white/10 p-4">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Posez-moi vos questions sur les voyages temporels..."
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-500/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn-micro rounded-xl bg-amber-500 p-3 text-slate-950 transition-colors hover:bg-amber-400"
            aria-label="Envoyer"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </FadeInSection>
    </main>
  )
}

export default ChatPage
