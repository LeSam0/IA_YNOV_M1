import { Link } from 'react-router-dom'
import { Globe, MessageCircle, Mail } from 'lucide-react'

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500">TimeTravel Agency</p>
          <p className="mt-3 max-w-sm text-slate-300">
            Experiences temporelles de luxe, concues pour une clientele exigeante.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-amber-400">
              Accueil
            </Link>
            <Link to="/explorer" className="hover:text-amber-400">
              Destinations
            </Link>
            <Link to="/services" className="hover:text-amber-400">
              Services
            </Link>
            <Link to="/reservation" className="hover:text-amber-400">
              Reservation
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact premium</p>
          <div className="mt-3 flex items-center gap-3 text-slate-300">
            <Mail className="h-4 w-4 text-amber-400" />
            <span className="text-sm">reservation@timetravel.agency</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="btn-micro rounded-full border border-white/15 p-2 text-slate-300 hover:text-amber-400">
              <Globe className="h-4 w-4" />
            </a>
            <a href="#" className="btn-micro rounded-full border border-white/15 p-2 text-slate-300 hover:text-amber-400">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TimeTravel Agency — Projet pedagogique Digital & IA.
      </p>
    </footer>
  )
}

export default SiteFooter
