import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';

const NavBar = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        if (targetId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const effectiveScrolled = currentPage === 'contact' ? false : isScrolled;

  return (
    <nav className={`${currentPage === 'contact' ? 'absolute' : 'fixed'} left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 ${effectiveScrolled ? 'top-4 px-4 md:px-10 lg:px-16' : 'top-8 px-0'}`}>
      <div className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-500 ${effectiveScrolled ? 'max-w-[1600px] px-8 md:px-12 lg:px-16 py-7 rounded-full bg-[var(--bg-secondary)] backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]' : 'max-w-none px-6 md:px-12 lg:px-24 xl:px-32 pt-4 pb-4 rounded-none bg-transparent'}`}>

        {/* Left: Links */}
        <div className="flex items-center gap-8 hidden md:flex" style={{ width: '33.333%' }}>
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: currentPage === 'home' ? 'var(--text-white)' : 'var(--text-dim)' }}>Inicio</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Servicios</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Planes</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Proyectos</a>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center relative" style={{ width: '33.333%' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer">
            <img src={logoImage} alt="Gravity Logo" className="h-[120px] lg:h-[140px] w-auto" />
          </a>
        </div>

        {/* Right: Contact */}
        <div className="flex items-center justify-end" style={{ width: '33.333%' }}>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer"
            style={{
              color: 'var(--text-white)',
              backgroundColor: currentPage === 'contact' ? 'transparent' : 'var(--accent-primary)',
              border: currentPage === 'contact' ? '1px solid var(--accent-primary)' : 'none',
              boxShadow: currentPage === 'contact' ? 'none' : '0 0 20px rgba(104,82,242,0.35)'
            }}
          >
            Contáctanos
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
