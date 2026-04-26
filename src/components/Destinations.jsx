import { motion } from 'framer-motion'
import { CalendarDays, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import FadeInSection from './FadeInSection'

function Destinations() {
  return (
    <section id="destinations" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
      <FadeInSection className="mb-12">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">
          Destinations signatures
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
          Choisissez votre epoque d exception
        </h2>
      </FadeInSection>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination, index) => (
          <motion.article
            key={destination.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-md transition-shadow duration-500 hover:shadow-amber-500/20"
          >
            <div className="relative h-96 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 w-full p-6">
                <h3 className="text-2xl font-semibold text-white">{destination.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-slate-200">
                  <CalendarDays className="h-4 w-4 text-amber-400" />
                  {destination.era}
                </p>
                <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-amber-400">
                  <Sparkles className="h-4 w-4" />
                  {destination.price}
                </p>
                <Link
                  to={`/destination/${destination.id}`}
                  className="btn-micro mt-5 inline-block rounded-full border border-amber-500/70 bg-amber-500/15 px-5 py-2 text-sm font-semibold text-amber-300 transition-all duration-500 ease-out hover:bg-amber-500 hover:text-slate-950"
                >
                  Details & Reservation
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Destinations
