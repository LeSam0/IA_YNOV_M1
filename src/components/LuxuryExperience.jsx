import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Gem, Clock3, ChevronDown } from 'lucide-react'
import FadeInSection from './FadeInSection'

const keyFigures = [
  { label: 'Voyages organises', value: '2 500+' },
  { label: 'Satisfaction clients', value: '98%' },
  { label: 'Guides experts', value: '45' },
]

const steps = [
  {
    title: 'Brief prive',
    text: 'Un concierge dedie analyse vos envies, votre tolerance au risque et votre niveau de confort.',
    icon: Clock3,
  },
  {
    title: 'Preparation premium',
    text: 'Costumes d epoque, couverture securite chronologique et accompagnement VIP avant depart.',
    icon: ShieldCheck,
  },
  {
    title: 'Immersion signature',
    text: 'Experience scenarisee sur-mesure avec acces privilegie a des lieux et moments iconiques.',
    icon: Gem,
  },
]

const testimonials = [
  {
    author: 'Camille D.',
    quote:
      "Le sejour a Florence etait d une finesse incroyable. J ai vecu la Renaissance comme une invitee privee.",
  },
  {
    author: 'Nicolas R.',
    quote:
      "Entre securite et sensation d aventure, l expedition Cretace a depasse tout ce que j imaginais.",
  },
]

const faqs = [
  {
    question: 'Comment garantissez-vous la securite temporelle ?',
    answer:
      'Chaque mission inclut un protocole anti-paradoxe, un suivi temps reel et une extraction d urgence sous 90 secondes.',
  },
  {
    question: 'Puis-je personnaliser totalement mon voyage ?',
    answer:
      'Oui, nos offres sont modulables: duree, niveau de confort, activites culturelles et rencontres historiques.',
  },
  {
    question: 'Quels sont les delais pour reserver ?',
    answer:
      'Nous conseillons 2 a 3 semaines pour une experience signature, 48h pour une escapade privee deja preconfiguree.',
  },
]

function LuxuryExperience() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-6 pb-24 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Excellence</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Une experience temporelle complete
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {keyFigures.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-center"
            >
              <p className="text-2xl font-semibold text-amber-400">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.68, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <Icon className="h-7 w-7 text-amber-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.text}</p>
            </motion.article>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Temoignages</p>
          <div className="mt-5 space-y-4">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
              >
                <p className="text-slate-200">"{item.quote}"</p>
                <footer className="mt-2 text-sm text-amber-400">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500">FAQ premium</p>
          <div className="mt-5 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/50">
                  <button
                    type="button"
                    onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="text-sm font-medium text-white">{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-amber-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && <p className="px-4 pb-4 text-sm text-slate-300">{faq.answer}</p>}
                </div>
              )
            })}
          </div>
          <Link
            to="/reservation"
            className="btn-micro mt-6 inline-block rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Demarrer mon experience
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}

export default LuxuryExperience
