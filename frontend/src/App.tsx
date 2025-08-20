import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Providers } from './Providers';
import { Suspense } from 'react';
import HomePage from '@/pages/HomePage';
import MaintenancePage from '@/pages/MaintenancePage';
import VerifyMfaPage from '@/pages/VerifyMfaPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';
import NotFoundPage from '@/pages/NotFoundPage';

export function App() {
  return (
    <Providers>
      <Router>
        <Navigation />
        <main className="min-h-[calc(100vh-60px)] bg-slate-50">
          <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="/verify-mfa" element={<VerifyMfaPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </Providers>
  );
}
