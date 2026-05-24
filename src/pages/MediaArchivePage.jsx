import { Link } from 'react-router-dom'
import { ArrowBack, PlayCircle, Radio, LiveTv, VideoLibrary, ArrowForward } from '@material-symbols-svg/react/outlined'
import { PLACEHOLDERS } from '../content/media/placeholders'

const mediaCategories = [
  { icon: Radio, label: 'Radio', count: '15+ years', desc: 'Cool FM, Silverbird, and more' },
  { icon: LiveTv, label: 'Television', count: '200+ appearances', desc: 'National broadcasts and interviews' },
  { icon: VideoLibrary, label: 'Digital Content', count: 'Interviews', desc: 'Online platforms and podcasts' },
]

const featuredMedia = [
  {
    title: 'Big Brother Naija — The Voice Inside the House',
    year: '2017',
    category: 'Television',
    desc: 'Seven weeks. 54 nations watching. One voice that stayed true.',
    img: PLACEHOLDERS.BROADCAST_CROWD,
  },
  {
    title: 'Cool FM Morning Drive',
    year: '2011-2017',
    category: 'Radio',
    desc: 'Waking up Nigeria. Millions of households. Every morning.',
    img: PLACEHOLDERS.RADIO_STUDIO,
  },
  {
    title: 'Calabar Cultural Festival — Guest of Honour',
    year: '2025',
    category: 'Events',
    desc: 'The return home. A new chapter begins.',
    img: PLACEHOLDERS.CULTURAL_EVENT,
  },
]

export default function MediaArchivePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back
          </Link>
          <h1 className="font-h1 text-white mb-4">The Archive</h1>
          <p className="font-body-lg text-white/70 max-w-[600px] leading-relaxed">
            Fifteen years of broadcasting. A career documented — from radio studios to national stages.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {mediaCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-[#e2e8f0]">
                <cat.icon className="w-10 h-10 text-[#D4AF37] mb-4" />
                <p className="text-[#D4AF37] font-label-caps text-sm uppercase tracking-widest mb-2">{cat.label}</p>
                <h3 className="font-h3 text-[#0f172a] mb-2">{cat.count}</h3>
                <p className="text-[#64748b] font-body-md">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="font-h2 text-[#0f172a]">Featured Moments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMedia.map((item, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-[#D4AF37] font-label-caps text-xs uppercase tracking-widest">{item.year} — {item.category}</span>
                <h3 className="font-h3 text-[#0f172a] mt-2 mb-2">{item.title}</h3>
                <p className="text-[#64748b] font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#e2e8f0] text-center">
            <p className="text-[#64748b] font-body-md mb-4">More content being added regularly. Follow for updates.</p>
            <Link to="/updates" className="inline-flex items-center gap-2 text-[#D4AF37] font-label-caps hover:gap-3 transition-all">
              Subscribe to Updates <ArrowForward className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}