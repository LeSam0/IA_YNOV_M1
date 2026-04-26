import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

const questions = [
  {
    id: 'experience',
    prompt: "Quel type d'experience recherchez-vous ?",
    options: [
      { label: 'Culturelle et artistique', destinationId: 'florence-1504' },
      { label: 'Aventure et nature', destinationId: 'cretace' },
      { label: 'Elegance et raffinement', destinationId: 'paris-1889' },
    ],
  },
  {
    id: 'period',
    prompt: 'Votre periode preferee ?',
    options: [
      {
        label: 'Histoire moderne (XIXe-XXe siecle)',
        destinationId: 'paris-1889',
      },
      { label: 'Temps anciens et origines', destinationId: 'cretace' },
      { label: 'Renaissance et classicisme', destinationId: 'florence-1504' },
    ],
  },
  {
    id: 'vibe',
    prompt: 'Vous preferez :',
    options: [
      { label: "L'effervescence urbaine", destinationId: 'paris-1889' },
      { label: 'La nature sauvage', destinationId: 'cretace' },
      { label: "L'art et l'architecture", destinationId: 'florence-1504' },
    ],
  },
  {
    id: 'activity',
    prompt: 'Votre activite ideale :',
    options: [
      { label: 'Visiter des monuments', destinationId: 'paris-1889' },
      { label: 'Observer la faune', destinationId: 'cretace' },
      { label: 'Explorer des musees', destinationId: 'florence-1504' },
    ],
  },
]

const recommendations = {
  'paris-1889': {
    title: 'Paris 1889',
    summary:
      "Vous aimez l'elegance, la vie urbaine et les monuments iconiques. Paris 1889 combine prestige, culture vivante et atmosphere Belle Epoque.",
  },
  cretace: {
    title: 'Cretace',
    summary:
      "Votre profil est tourne vers l'aventure et l'immersion nature. Le Cretace offre une experience rare, intense et spectaculaire.",
  },
  'florence-1504': {
    title: 'Florence 1504',
    summary:
      "Vous privilegiez l'art, l'histoire et le raffinement intellectuel. Florence 1504 est ideale pour vivre la Renaissance de l'interieur.",
  },
}

function TravelQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState([])

  const isFinished = currentStep >= questions.length
  const currentQuestion = questions[currentStep]

  const recommendation = useMemo(() => {
    if (!isFinished) return null

    const scores = answers.reduce((acc, answer) => {
      acc[answer.destinationId] = (acc[answer.destinationId] ?? 0) + 1
      return acc
    }, {})

    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1])
    const bestDestinationId = ranked[0]?.[0] ?? 'paris-1889'
    return recommendations[bestDestinationId]
  }, [answers, isFinished])

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option])
    setCurrentStep((prev) => prev + 1)
  }

  const resetQuiz = () => {
    setAnswers([])
    setCurrentStep(0)
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-12">
      <FadeInSection className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">
          Quiz destination
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Trouvez votre voyage temporel ideal
        </h2>

        {!isFinished && (
          <div className="mt-8">
            <p className="text-sm text-slate-400">
              Question {currentStep + 1} / {questions.length}
            </p>
            <h3 className="mt-2 text-xl font-medium text-white">
              {currentQuestion.prompt}
            </h3>

            <div className="mt-5 grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  className="btn-micro rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-left text-slate-100 transition-colors hover:border-amber-400/60 hover:bg-slate-800/80"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {isFinished && recommendation && (
          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
              Destination recommandee
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {recommendation.title}
            </h3>
            <p className="mt-3 text-slate-200">{recommendation.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={resetQuiz}
                className="btn-micro rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-amber-400 hover:text-amber-400"
              >
                Refaire le quiz
              </button>
              <Link
                to="/explorer"
                className="btn-micro rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400"
              >
                Voir les destinations
              </Link>
            </div>
          </div>
        )}
      </FadeInSection>
    </section>
  )
}

export default TravelQuiz
