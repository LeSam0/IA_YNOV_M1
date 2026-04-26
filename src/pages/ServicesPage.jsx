import { motion } from 'framer-motion'
import { ShieldCheck, Gem, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'

const services = [
  {
    title: 'Securite Chronologique',
    description:
      'Protection des paradoxes, suivi en temps reel et extraction d urgence.',
    icon: ShieldCheck,
  },
  {
    title: 'Conciergerie Haute Joaillerie',
    description:
      'Hospitalite de prestige, suites privees et experiences gastronomiques historiques.',
    icon: Gem,
  },
  {
    title: 'Guides Historiens Elite',
    description:
      'Accompagnement sur-mesure par des experts certifies pour chaque epoque.',
    icon: Compass,
  },
]

function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Services</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Conciergerie temporelle luxe</h1>
      </FadeInSection>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.72, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-shadow duration-500 hover:shadow-amber-500/20"
            >
              <Icon className="h-8 w-8 text-amber-400" />
              <h2 className="mt-5 text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-slate-300">{service.description}</p>
            </motion.article>
          )
        })}
      </section>

      <div className="mt-10">
        <Link
          to="/reservation"
          className="btn-micro rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
        >
          Acceder a la reservation
        </Link>
      </div>
    </main>
  )
}

export default ServicesPage
