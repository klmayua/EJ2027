import { Link } from 'react-router-dom'
import { ArrowBack, VolunteerActivism, Groups, Handshake, ArrowForward } from '@material-symbols-svg/react/outlined'

const waysToParticipate = [
  {
    icon: VolunteerActivism,
    title: 'Volunteer Your Time',
    desc: "Whether it's an hour or a day — your time matters. Community events, outreach, and presence require hands.",
  },
  {
    icon: Groups,
    title: 'Share Your Skills',
    desc: 'Every skill has a place. From communications to logistics — find where your expertise fits.',
  },
  {
    icon: Handshake,
    title: 'Spread the Story',
    desc: 'Not by pushing — by sharing. When you know someone who should hear this story, pass it on.',
  },
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">Find Your Place</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Not just a vote. A way to participate in something that lasts. 
            There are many ways to be part of this — find what fits.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {waysToParticipate.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-[#e2e8f0]">
                <item.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h3 className="font-h3 text-[#0f172a] mb-4">{item.title}</h3>
                <p className="text-[#64748b] font-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-h2 text-white mb-4">Ready to participate?</h2>
            <p className="font-body-md text-white/70 mb-8 max-w-[500px] mx-auto">
              Fill out a brief form and we'll connect you with the right opportunity. 
              No pressure, no commitment — just a conversation about where you fit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join" className="inline-flex bg-[#D4AF37] text-[#031B30] px-8 py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all">
                Start the Conversation
              </Link>
              <Link to="/updates" className="inline-flex bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-white/15 transition-all">
                Stay Updated
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}