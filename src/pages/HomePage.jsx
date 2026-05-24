import { Link } from 'react-router-dom'
import { ArrowForward, Chat, TrendingFlat, LocationOn, Diversity3, Celebration, Verified, AccountBalance } from '@material-symbols-svg/react/outlined'
import { useAnalytics } from '../analytics'
import { PLACEHOLDERS } from '../content/media/placeholders'

export default function HomePage() {
  const { trackJoinClick } = useAnalytics()

  return (
    <>
      {/* SECTION 01: RECOGNITION */}
      <section className="relative min-h-screen w-full overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <img
            alt="The Voice — Ejike Ibedilo"
            className="hero-cinematic w-full h-full object-cover"
            src={PLACEHOLDERS.HERO_SOCIETY}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto h-full flex items-center max-w-[1440px] pt-28 pb-16 px-4 md:px-8">
          <div className="w-full max-w-2xl animate-fade-in delay-200">
            <span className="text-white/50 text-sm font-label-caps uppercase tracking-widest mb-6 block">
              Ejike Ibedilo — Ideato North/South
            </span>

            <h1 className="font-h1 text-white mb-6 leading-tight">
              The Voice You Already Know.
            </h1>

            <p className="font-body-lg text-white/75 mb-10 max-w-[480px] leading-relaxed">
              For fifteen years, he spoke to millions of Nigerians through radio and television.
              Now he's asking for the chance to speak for them.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/about" className="inline-flex bg-white text-[#0a1628] px-8 py-4 rounded font-label-caps text-sm hover:bg-white/90 transition-all active:scale-95">
                See the Story
              </Link>
              <Link to="/timeline" className="inline-flex bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-white/15 transition-all active:scale-95">
                View the Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: MEMORY — Editorial Recognition */}
      <section className="py-20 md:py-32 bg-[#0f172a] animate-fade-in delay-300">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[800px] mb-16">
            <h2 className="font-h2 text-white mb-4">A Voice You've Heard Before</h2>
            <p className="font-body-lg text-white/60 max-w-[600px]">
              Fifteen years on radio and television. From Cool FM nights to Big Brother Naija.
              Now that same voice wants to put that reach to work for Ideato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-sm font-label-caps uppercase tracking-widest mb-4">Career</p>
              <h3 className="font-h3 text-white mb-4">15+ Years in Broadcasting</h3>
              <p className="text-white/60 font-body-md leading-relaxed">
                Cool FM. Silverbird. Big Brother Naija. His voice has been a companion
                in millions of Nigerian homes across two decades.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-sm font-label-caps uppercase tracking-widest mb-4">Family</p>
              <h3 className="font-h3 text-white mb-4">Rooted in Faith & Family</h3>
              <p className="text-white/60 font-body-md leading-relaxed">
                14 years of marriage. Three children. The same character on air
                and off air — that consistency is the trust.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/40 text-sm font-label-caps uppercase tracking-widest mb-4">Vision</p>
              <h3 className="font-h3 text-white mb-4">Service From The Inside</h3>
              <p className="text-white/60 font-body-md leading-relaxed">
                We can't change things from the outside. He understands that
                because he's spent his life connecting communities — now he wants
                to represent them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: HUMANIZATION — Where It Started */}
      <section className="py-20 md:py-32 bg-[#07141f] animate-fade-in delay-400">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[#D4AF37] font-label-caps uppercase tracking-widest mb-6 block">Where It Started</span>
              <h2 className="font-h2 text-white mb-6 leading-tight">
                Obom Aruogu.<br/>
                <span className="text-white/70">Umuobom town.</span><br/>
                <span className="text-[#D4AF37]">Ideato South LGA.</span>
              </h2>
              <p className="text-white/70 font-body-lg mb-8 leading-relaxed max-w-[480px]">
                That's where it started. That's never been forgotten. He carried the community's voice
                to national platforms — now he wants to carry their voice where it matters most.
              </p>
              <p className="text-white/50 font-body-md mb-10 italic">
                "Not just from Ideato. For Ideato."
              </p>


              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <LocationOn className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Ideato South</p>
                    <p className="text-white/50 text-sm">Where he was born</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Diversity3 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Imo State</p>
                    <p className="text-white/50 text-sm">Where he was raised</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Celebration className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Nigeria</p>
                    <p className="text-white/50 text-sm">Where he became known</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={PLACEHOLDERS.VILLAGE_DIALOGUE}
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: BELONGING — The Journey */}
      <section className="py-20 md:py-32 bg-[#f8fafc] animate-fade-in delay-500">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[720px] mb-16">
            <span className="text-[#D4AF37] font-label-caps uppercase tracking-widest mb-4 block">The Journey</span>
            <h2 className="font-h2 text-[#0f172a] mb-4">From Surulere Streets to National Voice</h2>
            <p className="font-body-lg text-[#64748b]">
              A story of resilience, faith, and purpose. From local radio discovery to national
              household name — and now back to serve the people who made it possible.
            </p>
          </div>


          <div className="space-y-0">
            {[
              { year: '2007', title: 'Radio Discovery', desc: 'Joined Cool FM as a night OAP. Found his voice in the dark.' },
              { year: '2011', title: 'The First Break', desc: 'Moved to morning drive. Millions tuned in daily.' },
              { year: '2016', title: 'Big Brother Naija', desc: 'National household name across 54 African countries.' },
              { year: '2025', title: 'The Return', desc: 'Guest of Honour at Calabar Cultural Festival. A new chapter begins.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 py-8 border-b border-[#e2e8f0] last:border-b-0">
                <span className="text-[#D4AF37] font-h3 font-bold w-16 flex-shrink-0">{item.year}</span>
                <div>
                  <h4 className="font-h3 text-[#0f172a] mb-2">{item.title}</h4>
                  <p className="text-[#64748b] font-body-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/timeline" className="inline-flex items-center gap-2 text-[#D4AF37] font-label-caps hover:gap-3 transition-all">
              Continue the full story <ArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 05: TRUST — The Approach */}
      <section className="py-20 md:py-32 bg-[#0f172a] animate-fade-in delay-600">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[800px] mb-16">
            <span className="text-white/40 font-label-caps uppercase tracking-widest mb-4 block">The Approach</span>
            <h2 className="font-h2 text-white mb-4">We Can't Change From The Outside</h2>
            <p className="font-body-lg text-white/60 leading-relaxed">
              That's why this isn't just about a vote. It's about building something that lasts —
              a model of service where your voice stays present even after election day.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Chat className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-h3 text-white mb-2">Listening First</h3>
                <p className="text-white/60 font-body-md leading-relaxed">
                  Regular town halls. Open forums. Your voice heard, not just during campaign season.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Verified className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-h3 text-white mb-2">Full Transparency</h3>
                <p className="text-white/60 font-body-md leading-relaxed">
                  You'll always know what decisions are being made and why. No hidden agenda.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <TrendingFlat className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-h3 text-white mb-2">Continuous Presence</h3>
                <p className="text-white/60 font-body-md leading-relaxed">
                  Not here at election time only. Present always, in season and out.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <AccountBalance className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-h3 text-white mb-2">Service Over Status</h3>
                <p className="text-white/60 font-body-md leading-relaxed">
                  Here to solve problems, not collect titles. The work is what matters.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link to="/listening" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#031B30] px-8 py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all">
              Learn How Participation Works <ArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06: MOVEMENT — See the Work */}
      <section className="py-20 md:py-32 bg-[#07141f] animate-fade-in delay-700">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[720px] mb-16">
            <span className="text-[#D4AF37] font-label-caps uppercase tracking-widest mb-4 block">The Archive</span>
            <h2 className="font-h2 text-white mb-4">Fifteen Years of Work</h2>
            <p className="font-body-lg text-white/60">
              From radio studios to national stages. From community events to corporate galas.
              A career of connecting people — now documented in one place.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={PLACEHOLDERS.CULTURAL_EVENT}
                  alt="Speaking engagement"
                  className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-label-caps text-sm uppercase tracking-widest mb-2">Speaking</p>
                <p className="text-white/80 font-body-md text-sm">Keynote addresses and public speeches</p>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={PLACEHOLDERS.MEDIA_INTERVIEW}
                  alt="Interview"
                  className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-label-caps text-sm uppercase tracking-widest mb-2">Media</p>
                <p className="text-white/80 font-body-md text-sm">Television, radio, and podcast appearances</p>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={PLACEHOLDERS.COMMUNITY_GATHERING}
                  alt="Events"
                  className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-label-caps text-sm uppercase tracking-widest mb-2">Community</p>
                <p className="text-white/80 font-body-md text-sm">Events, galas, and public gatherings</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/media" className="inline-flex items-center gap-2 text-white/60 font-label-caps hover:text-white transition-colors">
              Browse the full media archive <ArrowForward className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 07: INVITATION */}
      <section className="py-20 md:py-32 bg-[#0f172a] animate-fade-in delay-800">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] text-center">
          <h2 className="font-h2 text-white mb-6">Find Your Place in the Work</h2>
          <p className="font-body-lg text-white/60 max-w-[560px] mx-auto mb-10 leading-relaxed">
            Whether you have time, skills, or connections — there's a way to be part of this.
            We build from the ground up, together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/volunteer" onClick={() => trackJoinClick('footer_primary')} className="inline-flex bg-white text-[#0f172a] px-8 py-4 rounded font-label-caps text-sm hover:bg-white/90 transition-all active:scale-95">
              Get Involved
            </Link>
            <Link to="/updates" className="inline-flex bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-label-caps text-sm hover:bg-white/15 transition-all active:scale-95">
              Stay Informed
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}