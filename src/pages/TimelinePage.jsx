// Timeline Page - Placeholder
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-symbols-svg/react/outlined'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back to Home
          </Link>
          <h1 className="font-h1 text-4xl md:text-5xl text-white mb-4">The Journey</h1>
          <p className="text-xl text-white/70">From Lagos streets to national voice — a timeline of purpose.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[800px] text-center">
          <p className="text-lg text-[#64748b]">Timeline content is being compiled from the documentation system.</p>
          <p className="text-[#475569] mt-4">This page will feature:</p>
          <ul className="text-left mt-4 space-y-2 text-[#475569]">
            <li>• Career milestones (2007-present)</li>
            <li>• BBNaija voice role journey</li>
            <li>• Nollywood career</li>
            <li>• Community engagements</li>
            <li>• Political transition</li>
          </ul>
        </div>
      </section>
    </div>
  )
}