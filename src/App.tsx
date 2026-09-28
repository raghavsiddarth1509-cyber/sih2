import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopUtilityBar from './components/TopUtilityBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OverviewArchiveAI from './pages/OverviewArchiveAI';
import CapabilitiesMethodology from './pages/CapabilitiesMethodology';

/**
 * Shared page layout wrapper: TopUtilityBar + NavBar + <main> + Footer
 */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans selection:bg-surface-container-highest selection:text-primary">
      <TopUtilityBar />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. HOME — opens first, contains Hero + Team Roster */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* 2. OVERVIEW & ARCHIVE AI — Project Overview + Case Study + AI Kiosk Demo */}
        <Route
          path="/overview"
          element={
            <Layout>
              <OverviewArchiveAI />
            </Layout>
          }
        />

        {/* 3. CAPABILITIES & METHODOLOGY — Pipeline + Capabilities + Languages + Audiences */}
        <Route
          path="/capabilities"
          element={
            <Layout>
              <CapabilitiesMethodology />
            </Layout>
          }
        />

        {/* Legacy redirects — old routes redirect gracefully to new destinations */}
        <Route path="/team" element={<Navigate to="/" replace />} />
        <Route path="/archive-ai" element={<Navigate to="/overview" replace />} />
        <Route path="/pipeline" element={<Navigate to="/capabilities" replace />} />
        <Route path="/languages" element={<Navigate to="/capabilities" replace />} />

        {/* Fallback: redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
