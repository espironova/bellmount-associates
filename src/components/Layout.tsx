import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  // Define pages that have full-screen heroes
  const hasFullScreenHero = ['/', '/about', '/services', '/contact', '/team'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${hasFullScreenHero ? '' : 'pt-16 sm:pt-20'}`}>
        {children}
      </main>  
      <Footer />
    </div>
  );
};

export default Layout;