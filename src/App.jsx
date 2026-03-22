import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy loading pages
const Acasa = lazy(() => import('./pages/Acasa'));
const Servicii = lazy(() => import('./pages/Servicii'));
const LucrariExecutate = lazy(() => import('./pages/LucrariExecutate'));
const Randari = lazy(() => import('./pages/Randari'));
const Urbanism = lazy(() => import('./pages/Urbanism'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback
const LoadingFallback = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ border: '4px solid rgba(0,0,0,0.1)', borderTop: '4px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

// Component to scroll to top on nav
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Transition Wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Acasa /></PageWrapper>} />
        <Route path="/servicii" element={<PageWrapper><Servicii /></PageWrapper>} />
        <Route path="/lucrari" element={<PageWrapper><LucrariExecutate /></PageWrapper>} />
        <Route path="/randari" element={<PageWrapper><Randari /></PageWrapper>} />
        <Route path="/urbanism" element={<PageWrapper><Urbanism /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
