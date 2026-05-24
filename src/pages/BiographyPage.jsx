import { Link } from 'react-router-dom'
import { ArrowBack, Person, Radio, LiveTv, Groups, VolunteerActivism, ArrowForward } from '@material-symbols-svg/react/outlined'
import { PLACEHOLDERS } from '../content/media/placeholders'

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">The Man Behind the Voice</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Fifteen years of broadcasting. A career built on trust.
            Now that same voice wants to serve the communities that made it possible.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            <div>
                <img 
                  src={PLACEHOLDERS.BIOGRAPHY_PORTRAIT}
                  alt="Ejike Ibedilo"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
            </div>
            <div>
              <h2 className="font-h2 text-[#0f172a] mb-6">The Beginning</h2>
              <div className="space-y-6">
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  Born in Obom Aruogu, Umuobom town, Ideato South LGA, Imo State. 
                  The community raised him. The community made him.
                </p>
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  Started in local radio as a night OAP at 21. Found his voice talking to people 
                  who needed someone to listen to them at 2am. That's where the trust was built — 
                  not on camera, but in the dark.
                </p>
                <p className="text-[#64748b] font-body-md leading-relaxed">
                  14 years of marriage. Three children. Faith has always been the foundation — 
                  not because it's good politics, but because it's true.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-h2 text-[#0f172a] mb-12">The Career</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <Radio className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="font-h3 text-[#0f172a] mb-2">Radio</h3>
                <p className="text-[#64748b] font-body-md">Cool FM. Silverbird. 15+ years connecting with millions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <LiveTv className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="font-h3 text-[#0f172a] mb-2">Television</h3>
                <p className="text-[#64748b] font-body-md">200+ appearances across national networks.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <Person className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="font-h3 text-[#0f172a] mb-2">Big Brother</h3>
                <p className="text-[#64748b] font-body-md">2017. 54 nations watching. One voice stayed true.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <VolunteerActivism className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="font-h3 text-[#0f172a] mb-2">Service</h3>
                <p className="text-[#64748b] font-body-md">Now. The next chapter — from voice to service.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12">
            <h2 className="font-h2 text-white mb-6">The Vision</h2>
            <p className="text-white/70 font-body-md leading-relaxed mb-6 max-w-[700px]">
              We can't change things from the outside. After fifteen years of connecting communities 
              through radio and television, he understands that. Now he wants to bring that same 
              energy of listening and presence to the place where decisions are made.
            </p>
            <p className="text-white/50 font-body-md italic">
              "Not just from Ideato. For Ideato."
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}