import VoiceOSShell from '../../../layouts/VoiceOSShell'
import { useAuthStore } from '../../../store/authStore'
import { useCapitalStore } from '../../../store/capitalStore'
import { useMissionStore } from '../../../store/missionStore'
import { useSystemStore } from '../../../store/systemStore'
import { usePeopleStore } from '../../../store/peopleStore'
import { deriveKPIs } from '../../../lib/deriveKPIs'
import {
  Shield, Target, CheckCircle, Payments, FilePresent, TrendingFlat, Warning,
  Groups, Public, CorporateFare, EventNote, Chat, Settings, ArrowForward,
  ArrowUpward, ArrowDownward, Schedule, FilterList, Download, Add
} from '@material-symbols-svg/react/outlined'

function CivicMetric({ label, value, icon: Icon }) {
  return (
    <div className="bg-[#0f172a] rounded-xl p-5 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <p className="text-white/40 text-xs font-label-caps uppercase tracking-widest">{label}</p>
        <Icon className="w-5 h-5 text-[#D4AF37]" />
      </div>
      <p className="text-2xl font-h3 text-white">{value}</p>
    </div>
  )
}

function ExecutiveReview() {
  const allocations = useCapitalStore(s => s.allocations) || []
  const pending = allocations.filter(a => a.status === 'pending').slice(0, 5)

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-h3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
          Executive Review
        </h3>
        <span className="text-white/40 text-xs font-label-caps">{pending.length} Pending</span>
      </div>
      <div className="space-y-4">
        {pending.map(a => (
          <div key={a.id} className="p-4 rounded-lg bg-white/5 border border-white/5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-white font-medium text-sm">{a.mission}</p>
                <p className="text-white/40 text-xs">Requested: {a.date || 'Recently'}</p>
              </div>
              <span className="text-[#D4AF37] font-semibold text-sm">{a.allocated}</span>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded font-label-caps hover:bg-[#D4AF37]/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" /> Approve
              </button>
              <button className="flex-1 py-2 bg-white/5 text-white/60 text-xs rounded font-label-caps hover:bg-white/10 transition-all active:scale-95">
                Decline
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && (
          <div className="text-center py-8">
            <p className="text-white/40 text-sm italic">No pending reviews in the queue.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function CivicMilestones() {
  const milestones = [
    { id: 1, title: 'Constituency Dialogues', progress: 72, status: 'active' },
    { id: 2, title: 'Regional Chapter Setup', progress: 45, status: 'pending' },
    { id: 3, title: 'Publicity Outreach', progress: 88, status: 'active' },
    { id: 4, title: 'Volunteer Orientation', progress: 60, status: 'active' },
  ]

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-[#D4AF37]" />
        <h3 className="text-white font-h3">Civic Milestones</h3>
      </div>
      <div className="space-y-6">
        {milestones.map(m => (
          <div key={m.id}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm font-medium">{m.title}</span>
              <span className="text-white/40 text-xs font-label-caps">{m.progress}%</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${m.status === 'active' ? 'bg-[#D4AF37]' : 'bg-white/30'}`} 
                style={{ width: `${m.progress}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConstituencyAttention() {
  const regions = [
    { region: 'North East', focus: 'Youth Engagement', priority: 'High' },
    { region: 'South West', focus: 'Agricultural Grants', priority: 'Medium' },
    { region: 'North West', focus: 'Education Infrastructure', priority: 'Low' },
  ]

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Warning className="w-5 h-5 text-white/60" />
        <h3 className="text-white font-h3">Constituency Attention</h3>
      </div>
      <div className="space-y-3">
        {regions.map((r, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <p className="text-white text-sm font-medium">{r.region}</p>
              <span className={`text-[10px] font-label-caps px-2 py-0.5 rounded ${
                r.priority === 'High' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40'
              }`}>
                {r.priority}
              </span>
            </div>
            <p className="text-white/40 text-xs">{r.focus}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CivicSchedule() {
  const events = [
    { id: 1, title: 'Town Hall Meeting', time: '10:00 AM', today: true },
    { id: 2, title: 'Stakeholder Review', time: '2:00 PM', today: true },
    { id: 3, title: 'Regional Sync', time: '4:30 PM', today: false },
  ]

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <EventNote className="w-5 h-5 text-[#D4AF37]" />
        <h3 className="text-white font-h3">Civic Schedule</h3>
      </div>
      <div className="space-y-3">
        {events.map(e => (
          <div key={e.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent hover:border-white/10 transition-all">
            <div className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 rounded-full ${e.today ? 'bg-[#D4AF37]' : 'bg-white/20'}`}></div>
              <span className="text-white text-sm">{e.title}</span>
            </div>
            <span className="text-white/40 text-xs font-mono">{e.time}</span>
          </div>
        ))}
        <button className="w-full py-3 border border-dashed border-white/10 text-white/40 text-xs rounded font-label-caps hover:text-white transition-colors flex items-center justify-center gap-2">
          <Add className="w-4 h-4" /> Schedule Event
        </button>
      </div>
    </div>
  )
}

function InstitutionalIntegrity() {
  const checks = [
    { name: 'Financial Audit', status: 'Compliant' },
    { name: 'Data Protection', status: 'Compliant' },
    { name: 'Partner Due Diligence', status: 'Pending' },
    { name: 'Volunteer Backgrounds', status: 'Compliant' },
  ]

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-white/60" />
        <h3 className="text-white font-h3">Institutional Integrity</h3>
      </div>
      <div className="space-y-2">
        {checks.map(c => (
          <div key={c.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent hover:border-white/10 transition-all">
            <span className="text-white text-sm">{c.name}</span>
            <span className={`text-[10px] font-label-caps px-2 py-0.5 rounded ${
              c.status === 'Compliant' ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'bg-white/10 text-white/40'
            }`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResourceAllocation() {
  const assets = [
    { vendor: 'Tech Solutions Ltd', amount: '₦2.4M', status: 'Authorized' },
    { vendor: 'Event Services', amount: '₦890K', status: 'Pending' },
    { vendor: 'Print Media Co', amount: '₦450K', status: 'Review' },
  ]

  return (
    <div className="bg-[#0f172a] rounded-xl p-6 border border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <Payments className="w-5 h-5 text-[#D4AF37]" />
        <h3 className="text-white font-h3">Resource Allocation</h3>
      </div>
      <div className="space-y-3">
        {assets.map((a, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent hover:border-white/10 transition-all">
            <div>
              <p className="text-white text-sm font-medium">{a.vendor}</p>
              <p className="text-white/40 text-xs">{a.amount}</p>
            </div>
            <span className="text-[10px] font-label-caps px-2 py-0.5 rounded bg-white/10 text-white/60">
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OperationalCommand() {
  const { user } = useAuthStore()
  const kpis = deriveKPIs()

  return (
    <VoiceOSShell role="executive" title="Operational Command">
      <div className="mb-8">
        <h1 className="text-2xl text-white font-h3">Operational Command</h1>
        <p className="text-white/40 font-body-md">Welcome, {user?.name || 'Executive'}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <CivicMetric label="Treasury" value={kpis?.treasuryTotal || '₦0'} icon={Payments} />
        <CivicMetric label="Active Missions" value={kpis?.activeMissionCount || 0} icon={Target} />
        <CivicMetric label="Chapters" value={36} icon={Public} />
        <CivicMetric label="Partners" value={40} icon={CorporateFare} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ExecutiveReview />
          <CivicMilestones />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConstituencyAttention />
            <InstitutionalIntegrity />
          </div>
        </div>

        <div className="space-y-6">
          <CivicSchedule />
          <ResourceAllocation />
        </div>
      </div>
    </VoiceOSShell>
  )
}
