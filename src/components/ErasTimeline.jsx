import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

const timelineItems = [
  {
    era: '-65M',
    title: 'Cretace',
    text: 'Observation de la megafaune prehistorique dans un cadre hautement securise.',
    to: '/destination/cretace',
  },
  {
    era: '1504',
    title: 'Florence',
    text: 'Immersion artistique au coeur de la Renaissance italienne.',
    to: '/destination/florence-1504',
  },
  {
    era: '1889',
    title: 'Paris',
    text: 'Belle Epoque, architecture iconique et soirees mondaines exclusives.',
    to: '/destination/paris-1889',
  },
]

function ErasTimeline() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">Timeline des epoques</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Traversez les ages en trois etapes
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {timelineItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-400">{item.era}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
              <Link
                to={item.to}
                className="btn-micro mt-4 inline-block rounded-full border border-amber-500/60 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-500 hover:text-slate-950"
              >
                Explorer
              </Link>
            </article>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}

export default ErasTimeline
