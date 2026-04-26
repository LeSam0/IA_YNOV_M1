import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import FadeInSection from '../components/FadeInSection'

function ExplorePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Explorer</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Catalogue des epoques</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Chaque destination propose une experience ultra premium avec securite
          temporelle, concierge prive et itineraire personnalise.
        </p>
      </FadeInSection>

      <section className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination, index) => (
          <motion.article
            key={destination.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-md transition-shadow duration-500 hover:shadow-amber-500/20"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="space-y-3 p-5">
              <h2 className="text-2xl font-semibold text-white">{destination.title}</h2>
              <p className="text-sm text-amber-400">{destination.era}</p>
              <p className="text-slate-300">{destination.description}</p>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold text-amber-400">{destination.price}</p>
                <Link
                  to={`/destination/${destination.id}`}
                  className="btn-micro rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-500 ease-out hover:bg-amber-400"
                >
                  Voir details
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  )
}

export default ExplorePage
