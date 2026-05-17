import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AnalyticsTracker } from './analytics'
import { Preloader } from './components/system/Preloader'

// Main Pages
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// About/Identity Pages
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BiographyPage = lazy(() => import('./pages/BiographyPage'))
const TimelinePage = lazy(() => import('./pages/TimelinePage'))
const VoicePage = lazy(() => import('./pages/VoicePage'))
const VisionPage = lazy(() => import('./pages/VisionPage'))

// Campaign Pages
const CampaignUpdatesPage = lazy(() => import('./pages/CampaignUpdatesPage'))
const VolunteerPage = lazy(() => import('./pages/VolunteerPage'))
const ListeningPage = lazy(() => import('./pages/ListeningPage'))
const AccountabilityPage = lazy(() => import('./pages/AccountabilityPage'))

// Media Pages
const MediaArchivePage = lazy(() => import('./pages/MediaArchivePage'))
const PressPage = lazy(() => import('./pages/PressPage'))

// Other Pages
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// App/Platform Routes (Preserved from original)
const PlatformAccessHub = lazy(() => import('./pages/platform/PlatformAccessHub'))
const VoiceOSShell = lazy(() => import('./layouts/VoiceOSShell'))
const AppVolunteerDashboard = lazy(() => import('./pages/app/volunteer/AppVolunteerDashboard'))
const AppVolunteerTasks = lazy(() => import('./pages/app/volunteer/AppVolunteerTasks'))
const AppVolunteerCommunity = lazy(() => import('./pages/app/volunteer/AppVolunteerCommunity'))
const AppVolunteerRewards = lazy(() => import('./pages/app/volunteer/AppVolunteerRewards'))
const AppVolunteerTraining = lazy(() => import('./pages/app/volunteer/AppVolunteerTraining'))
const AppVolunteerProfile = lazy(() => import('./pages/app/volunteer/AppVolunteerProfile'))
const AppVolunteerWallet = lazy(() => import('./pages/app/volunteer/AppVolunteerWallet'))
const AppVolunteerLeaderboard = lazy(() => import('./pages/app/volunteer/AppVolunteerLeaderboard'))

const DonorDashboard = lazy(() => import('./pages/app/donor/DonorDashboard'))
const DonorProjects = lazy(() => import('./pages/app/donor/DonorProjects'))
const DonorPortfolio = lazy(() => import('./pages/app/donor/DonorPortfolio'))
const DonorReports = lazy(() => import('./pages/app/donor/DonorReports'))

const PartnerDashboard = lazy(() => import('./pages/app/partner/PartnerDashboard'))
const PartnerSponsorships = lazy(() => import('./pages/app/partner/PartnerSponsorships'))
const PartnerCampaigns = lazy(() => import('./pages/app/partner/PartnerCampaigns'))
const DonorSettings = lazy(() => import('./pages/app/donor/DonorSettings'))
const PartnerSettings = lazy(() => import('./pages/app/partner/PartnerSettings'))
const ExecutiveSettings = lazy(() => import('./pages/app/executive/ExecutiveSettings'))

const ChapterDashboard = lazy(() => import('./pages/app/chapter/ChapterDashboard'))
const ChapterMembers = lazy(() => import('./pages/app/chapter/ChapterMembers'))
const ChapterVolunteers = lazy(() => import('./pages/app/chapter/ChapterVolunteers'))
const ChapterProjects = lazy(() => import('./pages/app/chapter/ChapterProjects'))
const ChapterEvents = lazy(() => import('./pages/app/chapter/ChapterEvents'))
const ChapterFinance = lazy(() => import('./pages/app/chapter/ChapterFinance'))

const ExecutiveDashboard = lazy(() => import('./pages/app/executive/ExecutiveDashboard'))
const ExecutiveOverview = lazy(() => import('./pages/app/executive/ExecutiveOverview'))
const ExecutiveAnalytics = lazy(() => import('./pages/app/executive/ExecutiveAnalytics'))
const ExecutiveDecisions = lazy(() => import('./pages/app/executive/ExecutiveDecisions'))
const ExecutiveAudit = lazy(() => import('./pages/app/executive/ExecutiveAudit'))

const CommandCenter = lazy(() => import('./pages/app/command/CommandCenter'))
const MissionControl = lazy(() => import('./pages/app/command/MissionControl'))

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker>
        <Suspense fallback={<Preloader />}>
          <Routes>
            {/* PUBLIC PAGES */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/biography" element={<Layout><BiographyPage /></Layout>} />
            <Route path="/timeline" element={<Layout><TimelinePage /></Layout>} />
            <Route path="/voice" element={<Layout><VoicePage /></Layout>} />
            <Route path="/vision" element={<Layout><VisionPage /></Layout>} />
            <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
            <Route path="/media" element={<Layout><MediaArchivePage /></Layout>} />
            <Route path="/press" element={<Layout><PressPage /></Layout>} />
            <Route path="/updates" element={<Layout><CampaignUpdatesPage /></Layout>} />
            <Route path="/listening" element={<Layout><ListeningPage /></Layout>} />
            <Route path="/accountability" element={<Layout><AccountabilityPage /></Layout>} />
            <Route path="/volunteer" element={<Layout><VolunteerPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

            {/* APP / OPERATING SYSTEM */}
            <Route path="/platform" element={
              <Suspense fallback={<Preloader />}>
                <PlatformAccessHub />
              </Suspense>
            } />
            
            <Route path="/os" element={
              <Suspense fallback={<Preloader />}>
                <VoiceOSShell />
              </Suspense>
            } />

            {/* Campaign Operating System - Protected */}
            <Route path="/os/dashboard" element={<Suspense fallback={<Preloader />}><AppVolunteerDashboard /></Suspense>} />
            <Route path="/os/tasks" element={<Suspense fallback={<Preloader />}><AppVolunteerTasks /></Suspense>} />
            <Route path="/os/community" element={<Suspense fallback={<Preloader />}><AppVolunteerCommunity /></Suspense>} />
            <Route path="/os/rewards" element={<Suspense fallback={<Preloader />}><AppVolunteerRewards /></Suspense>} />
            <Route path="/os/training" element={<Suspense fallback={<Preloader />}><AppVolunteerTraining /></Suspense>} />
            <Route path="/os/profile" element={<Suspense fallback={<Preloader />}><AppVolunteerProfile /></Suspense>} />
            <Route path="/os/wallet" element={<Suspense fallback={<Preloader />}><AppVolunteerWallet /></Suspense>} />
            <Route path="/os/leaderboard" element={<Suspense fallback={<Preloader />}><AppVolunteerLeaderboard /></Suspense>} />

            {/* Donor Routes */}
            <Route path="/os/donor" element={<Suspense fallback={<Preloader />}><DonorDashboard /></Suspense>} />
            <Route path="/os/donor/projects" element={<Suspense fallback={<Preloader />}><DonorProjects /></Suspense>} />
            <Route path="/os/donor/portfolio" element={<Suspense fallback={<Preloader />}><DonorPortfolio /></Suspense>} />
            <Route path="/os/donor/reports" element={<Suspense fallback={<Preloader />}><DonorReports /></Suspense>} />
            <Route path="/os/donor/settings" element={<Suspense fallback={<Preloader />}><DonorSettings /></Suspense>} />

            {/* Partner Routes */}
            <Route path="/os/partner" element={<Suspense fallback={<Preloader />}><PartnerDashboard /></Suspense>} />
            <Route path="/os/partner/sponsorships" element={<Suspense fallback={<Preloader />}><PartnerSponsorships /></Suspense>} />
            <Route path="/os/partner/campaigns" element={<Suspense fallback={<Preloader />}><PartnerCampaigns /></Suspense>} />
            <Route path="/os/partner/settings" element={<Suspense fallback={<Preloader />}><PartnerSettings /></Suspense>} />

            {/* Chapter Routes */}
            <Route path="/os/chapter" element={<Suspense fallback={<Preloader />}><ChapterDashboard /></Suspense>} />
            <Route path="/os/chapter/members" element={<Suspense fallback={<Preloader />}><ChapterMembers /></Suspense>} />
            <Route path="/os/chapter/volunteers" element={<Suspense fallback={<Preloader />}><ChapterVolunteers /></Suspense>} />
            <Route path="/os/chapter/projects" element={<Suspense fallback={<Preloader />}><ChapterProjects /></Suspense>} />
            <Route path="/os/chapter/events" element={<Suspense fallback={<Preloader />}><ChapterEvents /></Suspense>} />
            <Route path="/os/chapter/finance" element={<Suspense fallback={<Preloader />}><ChapterFinance /></Suspense>} />

            {/* Executive Routes */}
            <Route path="/os/executive" element={<Suspense fallback={<Preloader />}><ExecutiveDashboard /></Suspense>} />
            <Route path="/os/executive/overview" element={<Suspense fallback={<Preloader />}><ExecutiveOverview /></Suspense>} />
            <Route path="/os/executive/analytics" element={<Suspense fallback={<Preloader />}><ExecutiveAnalytics /></Suspense>} />
            <Route path="/os/executive/decisions" element={<Suspense fallback={<Preloader />}><ExecutiveDecisions /></Suspense>} />
            <Route path="/os/executive/audit" element={<Suspense fallback={<Preloader />}><ExecutiveAudit /></Suspense>} />
            <Route path="/os/executive/settings" element={<Suspense fallback={<Preloader />}><ExecutiveSettings /></Suspense>} />

            {/* Command Center */}
            <Route path="/os/command" element={<Suspense fallback={<Preloader />}><CommandCenter /></Suspense>} />
            <Route path="/os/command/mission" element={<Suspense fallback={<Preloader />}><MissionControl /></Suspense>} />

            {/* 404 */}
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </Suspense>
      </AnalyticsTracker>
    </BrowserRouter>
  )
}

export default App