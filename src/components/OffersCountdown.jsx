import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

function formatTimePart(value) {
  return String(value).padStart(2, '0')
}

function OffersCountdown() {
  const targetDate = useMemo(() => {
    const now = new Date()
    return new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000)
  }, [])

  const [remainingMs, setRemainingMs] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingMs(Math.max(0, targetDate.getTime() - Date.now()))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const totalSeconds = Math.floor(remainingMs / 1000)
  const days = Math.floor(totalSeconds / (24 * 3600))
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12">
      <FadeInSection className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-slate-900/60 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-400">Offres limitees</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Fenetre privilegiee en cours
        </h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Beneficiez d avantages exclusifs sur les depart Paris 1889 et Florence 1504:
          upgrade concierge prive et transfert premium inclus.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { label: 'Jours', value: days },
            { label: 'Heures', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Secondes', value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center"
            >
              <p className="text-2xl font-semibold text-amber-400">
                {formatTimePart(item.value)}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/reservation"
            className="btn-micro rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            Profiter de l offre
          </Link>
          <Link
            to="/services"
            className="btn-micro rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-amber-400 hover:text-amber-400"
          >
            Voir les conditions premium
          </Link>
        </div>
      </FadeInSection>
    </section>
  )
}

export default OffersCountdown
