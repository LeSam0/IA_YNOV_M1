import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getDestinationById } from '../data/destinations'
import FadeInSection from '../components/FadeInSection'

function DestinationDetailsPage() {
  const { id } = useParams()
  const destination = getDestinationById(id)

  if (!destination) {
    return <Navigate to="/explorer" replace />
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
      <FadeInSection className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="relative h-[420px]">
          <img src={destination.image} alt={destination.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />
          <div className="absolute bottom-8 left-8">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500">{destination.era}</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{destination.title}</h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="space-y-6 p-8"
        >
          <p className="max-w-3xl text-lg text-slate-300">{destination.description}</p>
          <p className="text-2xl font-semibold text-amber-400">{destination.price}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/reservation?destination=${destination.id}`}
              className="btn-micro rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
            >
              Demarrer la reservation
            </Link>
            <Link
              to="/services"
              className="btn-micro rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              Voir services premium
            </Link>
          </div>
        </motion.div>
      </FadeInSection>
    </main>
  )
}

export default DestinationDetailsPage
