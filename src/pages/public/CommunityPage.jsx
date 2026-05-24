import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Heart } from 'lucide-react'

const chapters = [
  { name: 'Lagos Central', members: '2,400+', leads: 'Amina, Chidi', state: 'Lagos' },
  { name: 'Abuja Metro', members: '1,850+', leads: 'Tunde, Bola', state: 'FCT' },
  { name: 'Kano North', members: '1,200+', leads: 'Yusuf', state: 'Kano' },
  { name: 'Enugu East', members: '980', leads: 'Adaora', state: 'Enugu' },
]

const events = [
  { title: 'National Volunteer Summit', date: 'June 15, 2026', location: 'Abuja', spots: 500 },
  { title: 'Lagos Chapter Gala', date: 'June 22, 2026', location: 'Lagos', spots: 200 },
  { title: 'Kano Community Build', date: 'July 1, 2026', location: 'Kano', spots: 150 },
]

export default function CommunityPage() {
  return (
    <div className="bg-[#07141f] min-h-screen">
      {/* HERO - Compact */}
      <section className="h-[260px]" style={{background: 'linear-gradient(135deg, #031B30 0%, #07141f 100%)'}}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full flex items-center">
          <div className="max-w-[1180px] mx-auto w-full">
            <div>
              <h1 className="text-white text-[40px] font-extrabold leading-[1.1] mb-[16px]">The Community</h1>
              <p className="text-white/78 text-[18px] leading-[1.5] max-w-[480px]">
                Citizens organizing locally, contributing nationally, and building something visible together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CHAPTERS - Expanded Card Hierarchy */}
      <section className="pt-[56px] pb-[56px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex justify-between items-end mb-[28px]">
              <span className="text-[#D4AF37] text-[12px] font-bold uppercase tracking-[2px]">Regional Chapters</span>
              <Link to="/arena/chapters" className="text-white/58 text-[14px] hover:text-white">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {chapters.map((chapter, i) => (
                <Link key={i} to={`/chapters/${chapter.name.toLowerCase().replace(' ', '-')}`} className="group rounded-[16px] p-[24px] transition-all duration-250" style={{background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)'}}>
                  <div className="mb-[12px]">
                    <span className="text-white/58 text-[11px] uppercase tracking-[2px]">{chapter.state}</span>
                  </div>
                  <h3 className="text-white text-[18px] font-semibold mb-[8px]">{chapter.name}</h3>
                  <p className="text-white/58 text-[14px]">{chapter.members} members</p>
                  <p className="text-white/48 text-[13px]">Chapter leads: {chapter.leads}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER + EVENTS - 2 Column */}
      <section className="pt-[28px] pb-[56px] bg-[#0b1d2b]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[42px]">
            {/* Left: Volunteer Tracks */}
            <div className="rounded-[16px] p-[32px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
              <div className="flex items-center gap-3 mb-[24px]">
                <Heart className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white text-[18px] font-semibold">Ways to Contribute</span>
              </div>
              <div className="space-y-[16px]">
                {[
                  { name: 'Organize locally', desc: 'Lead chapter activities and community gatherings in your area.' },
                  { name: 'Share the work', desc: 'Help spread awareness through your networks and conversations.' },
                  { name: 'Lend your skills', desc: 'From writing to logistics, every skill has a place here.' },
                ].map((item, i) => (
                  <div key={i} className="p-[16px] rounded-[12px]" style={{background: 'rgba(255,255,255,.03)'}}>
                    <p className="text-white text-[16px] font-semibold mb-[4px]">{item.name}</p>
                    <p className="text-white/58 text-[14px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Upcoming Events */}
            <div className="rounded-[16px] p-[32px]" style={{background: 'linear-gradient(145deg, #0b2234, #102d43)', border: '1px solid rgba(255,255,255,.08)'}}>
              <div className="flex items-center gap-3 mb-[24px]">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white text-[18px] font-semibold">Upcoming Gatherings</span>
              </div>
              <div className="space-y-[16px]">
                {events.map((event, i) => (
                  <div key={i} className="p-[16px] rounded-[12px]" style={{background: 'rgba(255,255,255,.03)'}}>
                    <div className="mb-[8px]">
                      <h4 className="text-white text-[16px] font-semibold">{event.title}</h4>
                    </div>
                    <p className="text-white/58 text-[13px]">{event.date} · {event.location}</p>
                    <p className="text-white/48 text-[12px]">{event.spots} spots</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-[48px] pb-[64px] bg-[#07141f]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
          <div className="max-w-[1180px] mx-auto text-center">
            <h2 className="text-white text-[32px] font-bold mb-[16px]">Find Your Place</h2>
            <p className="text-white/72 text-[16px] leading-[1.55] mb-[28px] max-w-[440px] mx-auto">
              Pick a chapter near you, or reach out and we'll help you find your footing.
            </p>
            <Link to="/join" className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#031B30] px-[28px] py-[14px] rounded-[999px] font-semibold text-[14px]">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}