import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import { Time } from './components/ScrollToTop';
import { useEffect } from 'react';
import Service from './pages/ServicePages/Service';
import ArticleDetail from './components/NewsTips/NewsSection';
import Refrigeration from './pages/Refrigeration/Refrigeration';

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

  return (
    <>
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
            path='*'
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
      <Time />
    </>
  );
};
