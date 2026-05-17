import { Link } from 'react-router-dom'
import { ArrowBack, RecordVoiceOver, Groups, Favorite, VolunteerActivism, Verified } from '@material-symbols-svg/react/outlined'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back to Home
          </Link>
          <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6">About THE VOICE</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            A trusted national voice stepping into service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-h2 text-2xl md:text-3xl text-[#0f172a] mb-6">The Voice You Already Trust</h2>
              <p className="text-lg text-[#475569] mb-6">
                For over 15 years, my voice has been a familiar presence in Nigerian homes — 
                first through radio, then through Big Brother Naija, and now through film and events.
              </p>
              <p className="text-lg text-[#475569] mb-6">
                That voice built trust. Now I'm asking to transform that trust into representation.
                Not as another politician — but as someone who understands you because I've been part of your lives.
              </p>
              <p className="text-lg text-[#475569]">
                I'm not running to collect a title. I'm running to serve. And I believe we can't 
                change things from the outside — we have to get inside to fix them.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <RecordVoiceOver className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a]">The Voice</h3>
                </div>
                <p className="text-[#64748b]">
                  15+ years connecting with audiences across Nigeria and Africa through radio, television, and film.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <Groups className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a]">The Family Man</h3>
                </div>
                <p className="text-[#64748b]">
                  14+ year marriage, three children. Faith and family have always been my foundation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                    <VolunteerActivism className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <h3 className="font-semibold text-[#0f172a]">The Servant</h3>
                </div>
                <p className="text-[#64748b]">
                  Service, not status. Participation, not just voting. That's the model I bring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}