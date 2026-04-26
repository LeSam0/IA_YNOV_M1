import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import TravelQuiz from '../components/TravelQuiz'
import LuxuryExperience from '../components/LuxuryExperience'
import OffersCountdown from '../components/OffersCountdown'
import ErasTimeline from '../components/ErasTimeline'
import SiteFooter from '../components/SiteFooter'

function HomePage() {
  return (
    <main>
      <Hero />
      <Destinations />
      <OffersCountdown />
      <ErasTimeline />
      <TravelQuiz />
      <LuxuryExperience />
      <SiteFooter />
    </main>
  )
}

export default HomePage
