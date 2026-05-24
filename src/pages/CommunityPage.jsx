import { Link } from 'react-router-dom'
import { ArrowBack, Diversity3, VolunteerActivism, CalendarMonth, ArrowForward } from '@material-symbols-svg/react/outlined'

const communityAreas = [
  {
    icon: Diversity3,
    title: 'Local Connections',
    desc: 'Real relationships in real places. Not a database — a community of people who actually know each other.',
  },
  {
    icon: VolunteerActivism,
    title: 'Active Presence',
    desc: 'Regular gatherings, town halls, and outreach. Present in the community, not just online.',
  },
  {
    icon: CalendarMonth,
    title: 'Shared Events',
    desc: 'From cultural celebrations to community dialogues. Everyone has a seat.',
  },
]

const testimonials = [
  {
    quote: 'He actually listened. First time I felt like a representative was hearing me, not performing at me.',
    name: 'Community Member, Lagos',
    year: '2025',
  },
  {
    quote: 'You can tell the difference between someone running for office and someone running to serve.',
    name: 'Chapter Organizer, Imo',
    year: '2025',
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">The Community</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Not a voter base. Not a following. A community of people who believe
            something different is possible — and are willing to work for it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {communityAreas.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-[#e2e8f0]">
                <item.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h3 className="font-h3 text-[#0f172a] mb-4">{item.title}</h3>
                <p className="text-[#64748b] font-body-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="font-h2 text-[#0f172a] mb-12">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-8 border border-[#e2e8f0]">
                  <p className="text-[#475569] font-body-md leading-relaxed italic mb-6">"{t.quote}"</p>
                  <p className="text-[#D4AF37] font-label-caps text-sm">{t.name} — {t.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-h2 text-white mb-4">Find Your Place</h2>
            <p className="font-body-md text-white/70 mb-8 max-w-[500px] mx-auto leading-relaxed">
              Whether you have time, skills, or simply want to be part of something — 
              there's a place for you here. No pressure, no obligation. Just connection.
            </p>
            <Link to="/volunteer" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#031B30] px-8 py-4 rounded font-label-caps text-sm hover:brightness-110 transition-all">
              Get Involved <ArrowForward className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}