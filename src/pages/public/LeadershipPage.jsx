import { Link } from 'react-router-dom'
import { Users, Shield, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

export default function LeadershipPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      <section className="h-[280px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            <div>
              <h1 className="text-white text-[56px] font-extrabold leading-[1.05] mb-[20px]">Our Movement</h1>
              <p className="text-white/78 text-[22px] leading-[1.5] max-w-[560px]">
                A trusted national voice stepping into service for Ideato North/South.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[28px]">
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">1000+</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">2</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Constituencies</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4AF37] text-[42px] font-extrabold">NDC</div>
                <div className="text-white/58 text-[12px] uppercase tracking-[2px]">Party</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[56px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="w-[280px] h-[320px] rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center border-2 border-[#D4AF37]">
                <span className="text-white text-[72px] font-bold">EI</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px] mb-[18px] block">Candidate</span>
              <h2 className="text-white text-[32px] font-extrabold leading-[1.15] mb-[24px]">
                Ejike Ibedilo
              </h2>
              <p className="text-white/72 text-[18px] leading-[1.6] mb-[28px]">
                A trusted national voice stepping into service. Born in Obom Aruogu, Umuobom town, Ideato South LGA, Imo State. Dedicated to transforming Ideato North/South Federal Constituency through integrity, community empowerment, and opportunity for all.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[120px] h-[2px] bg-[#D4AF37]"></div>
                <span className="text-white/58 text-[14px]">THE VOICE for Ideato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[56px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <span className="text-white/58 text-[12px] font-bold uppercase tracking-[2px] mb-[28px] block">Our Principles</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
              {[
                { title: 'Integrity Without Compromise', desc: 'Transparent, honest service' },
                { title: 'Opportunity For All', desc: 'Every voice matters' },
                { title: 'Community Before Self', desc: 'Serving Ideato first' },
              ].map((item, i) => (
                <div key={i} className="p-[28px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                  <CheckCircle className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-white text-[18px] font-bold mb-2">{item.title}</h3>
                  <p className="text-white/58 text-[14px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[56px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <span className="text-white/58 text-[12px] font-bold uppercase tracking-[2px] mb-[28px] block">Campaign Structure</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { name: 'Campaign Coordinator', role: 'Operations Lead', title: 'Day-to-day Management' },
                { name: 'Ward Mobilizers', role: 'Grassroots', title: 'Community Outreach' },
                { name: 'Youth Wing', role: 'Engagement', title: 'Young Voter Activation' },
                { name: 'Women's Alliance', role: 'Advocacy', title: 'Female Participation' },
              ].map((exec, i) => (
                <div key={i} className="group rounded-[24px] p-[28px] text-center transition-all duration-250 hover:-translate-y-[3px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
                  <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-[20px]" style={{background: 'rgba(212,175,55,.1)'}}>
                    <Users className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white text-[18px] font-bold mb-[6px]">{exec.name}</h3>
                  <p className="text-[#D4AF37] text-[14px]">{exec.role}</p>
                  <p className="text-white/58 text-[12px]">{exec.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[28px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Human Dignity & Rights</span>
              </div>
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Sustainable Development</span>
              </div>
              <div className="flex items-center gap-3 p-[24px] rounded-[20px]" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                <CheckCircle className="w-6 h-6 text-[#18A34A]" />
                <span className="text-white text-[16px] font-semibold">Civic Participation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-white text-[36px] font-bold mb-[24px]">Join THE VOICE Movement</h2>
            <p className="text-white/72 text-[18px] mb-[32px]">
              Be part of the change Ideato North/South deserves. Volunteer, donate, or spread the word.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#B8962E] transition-colors">
                Volunteer <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}