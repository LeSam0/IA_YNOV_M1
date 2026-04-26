import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-amber-500">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Page introuvable</h1>
      <p className="mt-4 text-slate-300">Cette timeline n existe pas dans notre catalogue.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
      >
        Retour a l accueil
      </Link>
    </main>
  )
}

export default NotFoundPage
