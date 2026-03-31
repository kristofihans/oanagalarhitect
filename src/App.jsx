import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
// Loading Fallback (removed white screen for better UX)
const LoadingFallback = () => null;

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
