import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { askConcierge } from '../services/chatApi'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: 'Bonjour, je suis votre concierge temporel. Quelle epoque souhaitez-vous explorer aujourd hui ?',
    },
  ])

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedMessage = message.trim()
    if (!trimmedMessage || isLoading) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: trimmedMessage,
    }
    setMessages((prev) => [...prev, userMessage])
    setMessage('')

    setIsLoading(true)
    askConcierge(trimmedMessage)
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
              'Le service IA ne repond pas pour le moment. Merci de reessayer.',
          },
        ])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Concierge Temporel</p>
                <p className="text-xs text-amber-400">Assistant premium IA</p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/chat"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full px-2 py-1 text-xs text-amber-400 transition-colors hover:bg-white/10"
                >
                  Ouvrir page
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Fermer le chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="h-64 space-y-3 overflow-y-auto bg-slate-950/40 p-4">
              {messages.map((chatMessage) => (
                <div
                  key={chatMessage.id}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    chatMessage.role === 'user'
                      ? 'ml-auto rounded-tr-sm bg-amber-500 text-slate-950'
                      : 'rounded-tl-sm bg-amber-500/20 text-slate-100'
                  }`}
                >
                  {chatMessage.text}
                </div>
              ))}
            </div>

            <form className="border-t border-white/10 p-3" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Posez-moi vos questions sur les voyages temporels..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-amber-500/70 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-xl bg-amber-500 p-2 text-slate-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-amber-500/50"
                  aria-label="Envoyer un message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {isLoading && (
                <p className="mt-2 text-xs text-amber-300">Le concierge temporel reflechit...</p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-amber-500 text-slate-950 shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Ouvrir le chat concierge"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}

export default Chatbot
