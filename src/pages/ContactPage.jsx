import { Link } from 'react-router-dom'
import { ArrowBack, Mail, Call, LocationOn } from '@material-symbols-svg/react/outlined'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="relative py-20 md:py-32 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowBack className="w-5 h-5" /> Back to Home
          </Link>
          <h1 className="font-h1 text-4xl md:text-5xl text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-white/70">We'd love to hear from you.</p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-[#0f172a] mb-2">Email</h3>
              <p className="text-[#64748b]">contact@thevoice.org</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-4">
                <Call className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-[#0f172a] mb-2">Phone</h3>
              <p className="text-[#64748b]">+234 XXX XXX XXXX</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-4">
                <LocationOn className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <h3 className="font-semibold text-[#0f172a] mb-2">Location</h3>
              <p className="text-[#64748b]">Imo State, Nigeria</p>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 border border-[#e2e8f0]">
            <h2 className="font-h2 text-2xl text-[#0f172a] mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] outline-none" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#3b82f6] text-white py-4 rounded-lg font-label-caps hover:brightness-110 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}