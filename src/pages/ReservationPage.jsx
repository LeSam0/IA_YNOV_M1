import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { getDestinationById } from '../data/destinations'
import FadeInSection from '../components/FadeInSection'

function ReservationPage() {
  const [searchParams] = useSearchParams()
  const selectedId = searchParams.get('destination')
  const selectedDestination = useMemo(
    () => getDestinationById(selectedId),
    [selectedId],
  )

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Reservation</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Formulaire de pre-reservation</h1>
        <p className="mt-4 text-slate-300">
          {selectedDestination
            ? `Destination choisie: ${selectedDestination.title} - ${selectedDestination.era}.`
            : 'Aucune destination preselectionnee. Vous pouvez tout de meme soumettre votre demande.'}
        </p>

        <motion.form
          className="mt-8 grid gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          onSubmit={(event) => {
            event.preventDefault()
            window.alert('Demande envoyee. Notre equipe vous recontacte sous 24h.')
          }}
        >
          <input
            type="text"
            required
            placeholder="Nom complet"
            className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-500/70 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-500/70 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="Souhaitez-vous une experience specifique ?"
            className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-500/70 focus:outline-none"
          />
          <button
            type="submit"
            className="btn-micro mt-2 w-fit rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
          >
            Envoyer ma demande
          </button>
        </motion.form>
      </FadeInSection>
    </main>
  )
}

export default ReservationPage
