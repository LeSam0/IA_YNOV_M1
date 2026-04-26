import { Navigate, Route, Routes } from 'react-router-dom'
import PageShell from './components/PageShell'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import DestinationDetailsPage from './pages/DestinationDetailsPage'
import ReservationPage from './pages/ReservationPage'
import ServicesPage from './pages/ServicesPage'
import ChatPage from './pages/ChatPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorer" element={<ExplorePage />} />
        <Route path="/destination/:id" element={<DestinationDetailsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
