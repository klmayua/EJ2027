import { Link } from 'react-router-dom'
import { ArrowBack, PlayCircle, Radio, LiveTv, Groups, EventAvailable, ArrowForward } from '@material-symbols-svg/react/outlined'

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">The Journey</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            From local radio discovery to national household name — and back to serve the people who made it possible.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[800px]">
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e2e8f0]" />

            <div className="space-y-16">
              
              <div className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center z-10">
                  <Radio className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="pt-2">
                  <span className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest">2007</span>
                  <h2 className="font-h2 text-[#0f172a] mt-2 mb-4">Radio Discovery</h2>
                  <p className="text-[#64748b] font-body-md leading-relaxed">
                    Joined Cool FM as a night OAP at 21. Found his voice in the dark hours — 
                    connecting with listeners who needed someone to talk them through the night.
                    It was never about the ratings. It was about the relationship.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center z-10">
                  <LiveTv className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="pt-2">
                  <span className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest">2011</span>
                  <h2 className="font-h2 text-[#0f172a] mt-2 mb-4">The Morning Shift</h2>
                  <p className="text-[#64748b] font-body-md leading-relaxed">
                    Moved to morning drive time. Millions tuned in daily. 
                    The voice that talked them through the night was now their morning companion —
                    waking up Nigeria one household at a time.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center z-10">
                  <PlayCircle className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="pt-2">
                  <span className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest">2017</span>
                  <h2 className="font-h2 text-[#0f172a] mt-2 mb-4">Big Brother Naija</h2>
                  <p className="text-[#64748b] font-body-md leading-relaxed">
                    Entered as Houseguest. Emerged as the people's voice.
                    Seven weeks inside the most-watched house in Africa — 
                    speaking to 54 nations while staying true to the values that built the trust.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center z-10">
                  <Groups className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="pt-2">
                  <span className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest">2018 - 2024</span>
                  <h2 className="font-h2 text-[#0f172a] mt-2 mb-4">The Transition</h2>
                  <p className="text-[#64748b] font-body-md leading-relaxed">
                    From national voice to local service. Nollywood films. Event anchoring. 
                    Corporate partnerships. But always staying connected to Ideato — 
                    returning home, listening, understanding what changed and what stayed the same.
                  </p>
                </div>
              </div>

              <div className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center z-10">
                  <EventAvailable className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div className="pt-2">
                  <span className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest">2025</span>
                  <h2 className="font-h2 text-[#0f172a] mt-2 mb-4">The Return</h2>
                  <p className="text-[#64748b] font-body-md leading-relaxed">
                    Guest of Honour at the Calabar Cultural Festival.
                    Standing before the community that raised him — 
                    announcing a new chapter. Not just from Ideato. For Ideato.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-[#e2e8f0]">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
              <div>
                <h3 className="font-h3 text-[#0f172a] mb-2">The next chapter is being written now.</h3>
                <p className="text-[#64748b] font-body-md">Join us as we build something that lasts.</p>
              </div>
              <Link to="/volunteer" className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded font-label-caps text-sm hover:brightness-110 transition-all">
                Be Part of It <ArrowForward className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}