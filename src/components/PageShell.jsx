import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Chatbot from './Chatbot'

function PageShell() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <Header />
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? false : { opacity: 0.98, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Chatbot />
    </div>
  )
}

export default PageShell
