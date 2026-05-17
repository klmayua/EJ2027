import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-symbols-svg/react/outlined'

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back to Home
          </Link>
          <h1 className="font-h1 text-4xl md:text-5xl text-white mb-4">Join the Movement</h1>
          <p className="text-xl text-white/70 max-w-2xl">This is more than a campaign. It's a movement for different politics.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[800px] text-center">
          <p className="text-lg text-[#64748b] mb-8">Volunteer registration coming soon. Join us in building a new model of participatory governance.</p>
          <Link to="/updates" className="inline-flex bg-[#3b82f6] text-white px-8 py-4 rounded font-label-caps hover:brightness-110 transition-all">
            Get Campaign Updates
          </Link>
        </div>
      </section>
    </div>
  )
}
