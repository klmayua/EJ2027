import { Link } from 'react-router-dom'
import { PlayArrow, ArrowForward, VolunteerActivism, Groups, RecordVoiceOver, Verified, AccountBalance, Message, TrendingFlat, LocationOn, Diversity3, Celebration } from '@material-symbols-svg/react/outlined'
import { useAnalytics } from '../analytics'
import { heroHeadlines, heroSubheadlines } from '../content/homepage/hero'
import { trustSignals } from '../content/trust/signals'
import { identity } from '../content/biography/identity'

export default function HomePage() {
  const { trackJoinClick } = useAnalytics()

  const getHeadline = () => heroHeadlines.recognition[0]
  const getSubheadline = () => heroSubheadlines[0]
  
  return (
    <>
      {/* HERO: Cinematic, Calm, Trust-First */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="The Voice — Leadership" 
            className="hero-cinematic w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto h-full flex items-center max-w-[1440px] pt-32 px-4 md:px-8">
          <div className="w-full max-w-2xl -ml-px">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e3a5f]/80 border border-[rgba(59,130,246,.2)] backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
              </span>
              <span className="text-xs font-label-caps text-[#93c5fd] uppercase tracking-widest">The Voice You Already Trust</span>
            </div>
            
            <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {getHeadline()}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-[540px] leading-relaxed">
              {getSubheadline()} For 15 years, his voice connected with millions across Nigeria.
              Now he's asking for the chance to serve — not from the outside, but from within.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/about" className="inline-flex bg-[#3b82f6] text-white px-8 py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all items-center gap-2">
                <span>Learn My Story</span>
              </Link>
              <Link to="/volunteer" onClick={() => trackJoinClick('hero_primary')} className="inline-flex bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-white/20 transition-all items-center gap-2">
                <VolunteerActivism className="w-5 h-5" />
                <span>Join the Movement</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS — The Voice Identity */}
      <section className="py-16 md:py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-3xl md:text-4xl text-white mb-4">A Voice You Already Know</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              15+ years in your home. Now, the same voice wants to work for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trust Signal 1: Career */}
            <div className="bg-[#1e293b] rounded-2xl p-8 border border-[rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.25)] flex items-center justify-center mb-4">
                <RecordVoiceOver className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">15+ Years in Your Home</h3>
              <p className="text-white/60">
                From Cool FM to Big Brother Naija, my voice has been a trusted 
                companion in millions of Nigerian homes.
              </p>
            </div>
            
            {/* Trust Signal 2: Family */}
            <div className="bg-[#1e293b] rounded-2xl p-8 border border-[rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.25)] flex items-center justify-center mb-4">
                <Groups className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Family Values</h3>
              <p className="text-white/60">
                14+ year marriage, three children. Faith, family, and community 
                have always been my foundation.
              </p>
            </div>
            
            {/* Trust Signal 3: Service */}
            <div className="bg-[#1e293b] rounded-2xl p-8 border border-[rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.25)] flex items-center justify-center mb-4">
                <VolunteerActivism className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">A New Model of Service</h3>
              <p className="text-white/60">
                We can't change from the outside. I'm asking for the chance 
                to serve from within — not as a politician, but as a servant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CONNECTION - IDEATO OWNERSHIP */}
      <section className="py-16 md:py-24 bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#D4AF37] font-label-caps uppercase tracking-widest mb-4 block">From Ideato, For Ideato</span>
              <h2 className="font-h2 text-3xl md:text-4xl text-white mb-6">
                Born In Ideato.<br/>
                <span className="text-[#D4AF37]">Built For Ideato.</span><br/>
                Now Fighting For Ideato.
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Obom Aruogu, Umuobom town — {identity.origin.town}. That's where it started.
                That's never been forgotten.
              </p>
              <p className="text-white/60 mb-8">
                "He carried our voice to the nation. Now he returns to carry our voice in government."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <LocationOn className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Ideato South</div>
                    <div className="text-white/50 text-sm">Birthplace</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Diversity3 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Imo State</div>
                    <div className="text-white/50 text-sm">Roots</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Celebration className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Nigeria</div>
                    <div className="text-white/50 text-sm">Reach</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07141f] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black px-6 py-4 rounded-xl max-w-xs">
                <p className="font-semibold text-sm">"Not just from Ideato. For Ideato."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE TEASER */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10">
            <div className="max-w-2xl">
              <span className="text-[#3b82f6] font-label-caps uppercase tracking-widest mb-3 block">The Journey</span>
              <h2 className="font-h2 text-3xl md:text-4xl text-[#0f172a] mb-4">From Lagos Streets to National Voice</h2>
              <p className="text-[#475569] text-lg max-w-xl">
                A story of resilience, faith, and purpose — from Surulere streets 
                to becoming one of Nigeria's most recognized voices.
              </p>
            </div>
            <Link to="/timeline" className="hidden lg:flex items-center gap-2 text-[#0f172a] font-label-caps hover:gap-4 transition-all mt-6 lg:mt-0">
              View Full Timeline <ArrowForward className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Timeline Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-sm">
              <div className="text-sm text-[#64748b] mb-2">2007</div>
              <h4 className="font-semibold text-[#0f172a] mb-2">Radio Discovery</h4>
              <p className="text-[#64748b] text-sm">Joined Cool FM as night OAP, found my voice.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-sm">
              <div className="text-sm text-[#64748b] mb-2">2016</div>
              <h4 className="font-semibold text-[#0f172a] mb-2">The Big Break</h4>
              <p className="text-[#64748b] text-sm">Became the voice of Big Brother Naija.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-sm">
              <div className="text-sm text-[#64748b] mb-2">2025</div>
              <h4 className="font-semibold text-[#0f172a] mb-2">Cross-River Honor</h4>
              <p className="text-[#64748b] text-sm">Guest of Honour at Calabar Cultural Festival.</p>
            </div>
            <div className="bg-[#3b82f6] rounded-xl p-6 text-white">
              <div className="text-sm text-white/80 mb-2">Now</div>
              <h4 className="font-semibold mb-2">The Transition</h4>
              <p className="text-white/80 text-sm">From entertainment to service. The next chapter begins.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center lg:text-left">
            <Link to="/timeline" className="inline-flex text-[#3b82f6] font-label-caps hover:underline">
              Explore the full journey →
            </Link>
          </div>
        </div>
      </section>

      {/* LISTENING FRAMEWORK */}
      <section className="py-16 md:py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#3b82f6] font-label-caps uppercase tracking-widest mb-4 block">Participatory Governance</span>
            <h2 className="font-h2 text-3xl md:text-4xl text-white mb-6">We Can't Change From The Outside</h2>
            <p className="text-white/70 text-lg mb-8">
              That's why I'm not just asking for your vote — I'm asking for your participation. 
              Together, we build something different.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <Message className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Listening Sessions</h4>
                  <p className="text-white/60 text-sm">Regular town halls where your voice is heard, not just during elections.</p>
                </div>
              </div>
              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <Verified className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Transparency</h4>
                  <p className="text-white/60 text-sm">You'll always know what I'm doing and how decisions are made.</p>
                </div>
              </div>
              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <TrendingFlat className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Continuous Presence</h4>
                  <p className="text-white/60 text-sm">I'm not just here at election time — I'm present always.</p>
                </div>
              </div>
              <div className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                  <AccountBalance className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Service Over Status</h4>
                  <p className="text-white/60 text-sm">I'm here to solve problems, not collect political titles.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link to="/listening" className="inline-flex bg-white text-[#0f172a] px-8 py-4 rounded font-label-caps text-sm hover:bg-white/90 transition-all">
                Learn About Participation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA PREVIEW */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10">
            <div className="max-w-2xl">
              <span className="text-[#3b82f6] font-label-caps uppercase tracking-widest mb-3 block">Media Archive</span>
              <h2 className="font-h2 text-3xl md:text-4xl text-[#0f172a] mb-4">The Voice Behind The Vision</h2>
              <p className="text-[#475569] text-lg max-w-xl">
                Years of connecting with audiences across Nigeria and Africa — now captured in one place.
              </p>
            </div>
            <Link to="/media" className="hidden lg:flex items-center gap-2 text-[#0f172a] font-label-caps hover:gap-4 transition-all mt-6 lg:mt-0">
              View Media Archive <ArrowForward className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Media Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video bg-[#1e293b] rounded-xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
                alt="Speaking engagement" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/80 text-sm">Speeches & Addresses</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayArrow className="w-12 h-12 text-white/80" />
              </div>
            </div>
            <div className="aspect-video bg-[#1e293b] rounded-xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80" 
                alt="Interview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/80 text-sm">Interviews & Podcasts</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayArrow className="w-12 h-12 text-white/80" />
              </div>
            </div>
            <div className="aspect-video bg-[#1e293b] rounded-xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80" 
                alt="Events" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/80 text-sm">Community Events</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayArrow className="w-12 h-12 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] text-center">
          <h2 className="font-h2 text-3xl md:text-4xl text-white mb-6">Join The Movement</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            This is more than a campaign. It's a movement for different politics — 
            participatory, transparent, and service-oriented.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/volunteer" onClick={() => trackJoinClick('footer_primary')} className="inline-flex bg-white text-[#0f172a] px-8 py-4 rounded font-label-caps text-sm hover:bg-white/90 transition-all">
              Volunteer With Us
            </Link>
            <Link to="/updates" className="inline-flex bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-white/20 transition-all">
              Get Campaign Updates
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] border-t border-[rgba(255,255,255,0.08)] py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-xl font-bold text-white">THE VOICE</span>
              <p className="text-white/60 text-sm mt-1">A trusted national voice stepping into service.</p>
            </div>
            <div className="flex gap-8 text-sm text-white/60">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/media" className="hover:text-white transition-colors">Media</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-white/40 text-sm">
            © 2026 THE VOICE Campaign. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}