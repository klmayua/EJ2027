import React from 'react';
import { LucideMessageSquare, LucideShieldCheck, LucideUsers, LucideZap, LucideChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#071120] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#071120]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tighter text-emerald-400">THE VOICE</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#initiatives" className="hover:text-white transition-colors">Initiatives</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-[#071120] px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Join Movement
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-500/10 opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>2027 Campaign Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
            A New <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Direction</span> For Ideato.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ejike Ibedilo is the voice of the people, dedicated to restoring progress, 
            security, and empowerment to Ideato North/South.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-[#071120] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
              Read the Manifesto <LucideChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-colors">
              Watch Video
            </button>
          </div>
        </div>
      </header>

      {/* Initiatives Grid */}
      <main id="initiatives" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InitiativeCard 
            icon={<LucideShieldCheck className="text-blue-400" />}
            title="Security First"
            desc="Implementing local-driven security frameworks to protect lives and farmlands."
          />
          <InitiativeCard 
            icon={<LucideZap className="text-emerald-400" />}
            title="Power & Infrastructure"
            desc="Sustainable energy projects and road restoration to link our rural communities."
          />
          <InitiativeCard 
            icon={<LucideUsers className="text-purple-400" />}
            title="Youth Empowerment"
            desc="Vocational training and digital literacy programs for the next generation."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © 2024 THE VOICE Movement. Authorized by Ejike Ibedilo Campaign Org.
          </div>
          <div className="flex space-x-6 text-slate-400">
            <LucideMessageSquare className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            {/* Add more social icons here */}
          </div>
        </div>
      </footer>
    </div>
  );
}

function InitiativeCard({ icon, title, desc }) {
  return (
    <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-emerald-500/30 transition-all group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
      <div className="mt-6 flex items-center text-xs font-bold text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
        LEARN MORE <LucideChevronRight className="w-3 h-3 ml-1" />
      </div>
    </div>
  );
}

export default App;