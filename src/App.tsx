import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import { useEffect } from 'react';
import Service from './pages/ServicePages/Service';
import ArticleDetail from './components/NewsTips/NewsSection';
import Refrigeration from './pages/Refrigeration/Refrigeration';
import { AnimatePresence } from 'framer-motion';
import Dryer from './pages/Dryer/Dryer';
import CookieConsentBanner from './components/CookieConsentBanner';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: '100%', position: 'relative' }}>{children}</div>;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Consent Mode
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
      
      // Default consent - denied until user gives consent
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 500
      });

      // Check if user already gave consent
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'granted') {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted',
          'personalization_storage': 'granted',
          'functionality_storage': 'granted'
        });
      }
    }
  }, []);

  return (
    <> 
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path='/home'
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path='/service'
              element={
                <PageWrapper>
                  <Service />
                </PageWrapper>
              }
            />
            <Route
              path='/about'
              element={
                <PageWrapper>
                  <AboutUs />
                </PageWrapper>
              }
            />
            <Route path='/tips'>
              <Route
                index
                element={
                  <PageWrapper>
                    <Info />
                  </PageWrapper>
                }
              />
              <Route
                path='refrigerator-maintenance'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={1} />
                  </PageWrapper>
                }
              />
              <Route
                path='oven-repair-signs'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={2} />
                  </PageWrapper>
                }
              />
              <Route
                path='laundry-appliance-maintenance'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={3} />
                  </PageWrapper>
                }
              />
              <Route
                path='dishwasher-drainage'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={4} />
                  </PageWrapper>
                }
              />
              <Route
                path='repair-vs-replace'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={5} />
                  </PageWrapper>
                }
              />
              <Route
                path='oem-parts'
                element={
                  <PageWrapper>
                    <ArticleDetail articleId={6} />
                  </PageWrapper>
                }
              />
            </Route>
            <Route
              path='/contact'
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path='/fridge'
              element={
                <PageWrapper>
                  <Refrigeration />
                </PageWrapper>
              }
            />
            <Route
              path='/dryer'
              element={
                <PageWrapper>
                  <Dryer />
                </PageWrapper>
              }
            />
            <Route
              path='*'
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
        
      </AnimatePresence>
    </>
  );
};