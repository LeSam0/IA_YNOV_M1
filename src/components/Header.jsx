import { Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Explorer', to: '/explorer' },
  { label: 'Services', to: '/services' },
  { label: 'Chat', to: '/chat' },
]

function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-amber-500/20 bg-slate-900/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 p-2 text-amber-400">
            <Clock3 className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold tracking-[0.25em]">
            <span className="text-amber-500">TIME </span>
            <span className="text-white">TRAVEL </span>
            <span className="text-amber-500">AGENCY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 hover:text-amber-400 ${
                  isActive ? 'text-amber-400' : 'text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/reservation"
          className="btn-micro rounded-full border border-amber-400/70 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-400 transition-all duration-300 hover:bg-amber-500 hover:text-slate-950"
        >
          Réserver
        </Link>
      </div>
    </motion.header>
  )
}

export default Header
