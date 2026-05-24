import { Link } from 'react-router-dom'
import { ArrowBack, Visibility, Handshake, Verified, ArrowForward } from '@material-symbols-svg/react/outlined'

const principles = [
  {
    icon: Visibility,
    title: 'Open Doors',
    desc: 'Regular town halls where anyone can show up and speak. Not staged events — real conversations.',
  },
  {
    icon: Verified,
    title: 'Verified Information',
    desc: 'If you ask a question, you get an honest answer. If we don't know, we say so.',
  },
  {
    icon: Handshake,
    title: 'Accessible Always',
    desc: 'Present in the community, not just during campaign season. In season and out.',
  },
]

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">Transparency</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Trust is built in the open. This is where we keep it that way —
            not because we have to, but because it's the only way to serve.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="mb-20">
            <h2 className="font-h2 text-[#0f172a] mb-12">How We Stay Open</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-[#e2e8f0]">
                  <p.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                  <h3 className="font-h3 text-[#0f172a] mb-4">{p.title}</h3>
                  <p className="text-[#64748b] font-body-md leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12">
            <h2 className="font-h2 text-white mb-6">Our Commitment to You</h2>
            <div className="space-y-6 max-w-[700px]">
              <p className="text-white/70 font-body-md leading-relaxed">
                You'll always know what decisions are being made and why. 
                Not just the good ones — all of them.
              </p>
              <p className="text-white/70 font-body-md leading-relaxed">
                When we make a mistake, we'll say it. When we don't know something, 
                we'll find out. When something changes, you'll hear it from us first.
              </p>
              <p className="text-white/70 font-body-md leading-relaxed">
                This isn't about perfection. It's about honesty. 
                We believe the people who trusted us with their voices deserve the same 
                honesty with their representation.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[#e2e8f0] text-center">
            <p className="text-[#64748b] font-body-md mb-6">Have a question? Want to see something specific? Ask.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-[#D4AF37] font-label-caps hover:gap-3 transition-all">
              Contact Us <ArrowForward className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}