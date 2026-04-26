import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroVideo =
  '/videos/G%C3%A9n%C3%A9ration_d_une_vid%C3%A9o_anim%C3%A9e.mp4'

function Hero() {
  const titleWords = ['Voyagez', 'au-dela', 'du', 'Temps']
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-black" />

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.72,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-6 max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center shadow-2xl backdrop-blur-md lg:px-14"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-amber-500">
          Voyages temporels de prestige
        </p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          {titleWords.map((word) => (
            <motion.span
              key={word}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: shouldReduceMotion ? 0.2 : 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
          Offrez-vous une experience d exception entre epoques legendaires, guidee
          par notre concierge temporel et concue pour une clientele exigeante.
        </p>
        <Link
          to="/explorer"
          className="btn-micro mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-400"
        >
          Explorer les epoques
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
