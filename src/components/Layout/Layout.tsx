import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // очищаємо sessionStorage при кожному перезавантаженні
    const clearOnReload = () => {
      sessionStorage.clear();
    };

    window.addEventListener("beforeunload", clearOnReload);

    return () => {
      window.removeEventListener("beforeunload", clearOnReload);
    };
  }, []);

  // useEffect(() => {
    // const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');

    // if (!hasSeenPreloader) {
    //   setLoading(true);
    // }
  // }, []);

  // const handlePreloaderComplete = () => {
  //   sessionStorage.setItem('hasSeenPreloader', 'true');
  //   setLoading(false);
  // };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          // Прокручує плавно до елемента
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  }, [location.pathname]);

  // if (loading) {
  //   return <VideoPreloader onComplete={handlePreloaderComplete} />;
  // }

  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};