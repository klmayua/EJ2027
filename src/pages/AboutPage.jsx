import { Link } from 'react-router-dom'
import { ArrowBack, RecordVoiceOver, Groups, Favorite, VolunteerActivism, Verified } from '@material-symbols-svg/react/outlined'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-6">The Man Behind the Voice</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Fifteen years of broadcasting. A career built on trust.
            Now that same voice wants to serve the communities that made it possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h2 className="font-h2 text-[#0f172a]">The Story</h2>
              <p className="text-[#64748b] font-body-md leading-relaxed">
                For over 15 years, my voice has been a familiar presence in Nigerian homes — 
                through radio, then Big Brother Naija, and now through events and film.
              </p>
              <p className="text-[#64748b] font-body-md leading-relaxed">
                That voice built something real: trust. Now I'm asking to carry that trust into service.
                Not as another politician — but as someone who understands the people because
                I've lived among them.
              </p>
              <p className="text-[#64748b] font-body-md leading-relaxed">
                We can't change things from the outside. Getting inside — that's the work.
              </p>
            </div>
            
            <div className="space-y-0">
              <div className="border-t border-[#e2e8f0] py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <RecordVoiceOver className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[#0f172a]">15+ Years Broadcasting</h3>
                </div>
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  Cool FM, Silverbird, Big Brother Naija. Connecting with audiences across Nigeria and Africa.
                </p>
              </div>
              
              <div className="border-t border-[#e2e8f0] py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Groups className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[#0f172a]">Family & Faith</h3>
                </div>
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  14 years of marriage, three children. The same character on air and off air.
                </p>
              </div>
              
              <div className="border-t border-[#e2e8f0] py-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <VolunteerActivism className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-h3 text-[#0f172a]">Service, Not Status</h3>
                </div>
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  Participation, not just voting. Present always, in season and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}