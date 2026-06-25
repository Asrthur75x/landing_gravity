import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png';

const NavBar = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
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
    <nav className={`${currentPage === 'contact' ? 'absolute' : 'fixed'} left-0 right-0 z-50 w-full flex flex-col items-center pointer-events-none transition-all duration-500 ${effectiveScrolled ? 'top-0 md:top-4 px-0 md:px-10 lg:px-16' : 'top-0 md:top-8 px-0'}`}>
      
      <div className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-500 z-50 ${effectiveScrolled ? 'max-w-none md:max-w-[1600px] px-6 md:px-12 lg:px-16 py-4 md:py-7 rounded-none md:rounded-full bg-black/60 md:bg-[var(--bg-secondary)] backdrop-blur-lg md:backdrop-blur-2xl border-b border-white/10 md:border-transparent shadow-lg md:shadow-[0_15px_40px_rgba(0,0,0,0.6)]' : 'max-w-none px-6 md:px-12 lg:px-24 xl:px-32 py-4 rounded-none bg-transparent border-b border-transparent shadow-none'}`}>

        {/* Left: Desktop Links */}
        <div className="hidden md:flex items-center gap-8" style={{ width: '33.333%' }}>
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: currentPage === 'home' ? 'var(--text-white)' : 'var(--text-dim)' }}>Inicio</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Servicios</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Planes</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="nav-link text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--text-dim)' }}>Proyectos</a>
        </div>

        {/* Center: Desktop Logo / Mobile Left Logo */}
        <div className="flex justify-start md:justify-center relative w-[50%] md:w-[33.333%]">
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-50 cursor-pointer flex items-center">
            <img src={logoImage} alt="Gravity Logo" className="h-[85px] md:h-[120px] lg:h-[140px] w-auto transition-all duration-300" />
          </a>
        </div>

        {/* Right: Desktop Contact / Mobile Hamburger */}
        <div className="flex items-center justify-end w-[50%] md:w-[33.333%]">
          {/* Desktop Contact Button */}
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer"
            style={{
              color: 'var(--text-white)',
              backgroundColor: currentPage === 'contact' ? 'transparent' : 'var(--accent-primary)',
              border: currentPage === 'contact' ? '1px solid var(--accent-primary)' : 'none',
              boxShadow: currentPage === 'contact' ? 'none' : '0 0 20px rgba(104,82,242,0.35)'
            }}
          >
            Contáctanos
          </button>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none hover:text-[var(--accent-primary)] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Side Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] z-50 bg-[var(--bg-secondary)] border-l border-[rgba(255,255,255,0.05)] shadow-2xl transition-transform duration-300 pointer-events-auto flex flex-col p-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header (Close btn) */}
        <div className="flex justify-end mb-12">
          <button 
            className="p-2 text-white hover:text-[var(--accent-primary)] focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-6 flex-1">
          <a href="#hero" onClick={(e) => { handleNavClick(e, 'hero'); setIsMobileMenuOpen(false); }} className="text-xl font-medium text-white hover:text-[var(--accent-primary)] transition-colors">Inicio</a>
          <a href="#services" onClick={(e) => { handleNavClick(e, 'services'); setIsMobileMenuOpen(false); }} className="text-xl font-medium text-white hover:text-[var(--accent-primary)] transition-colors">Servicios</a>
          <a href="#pricing" onClick={(e) => { handleNavClick(e, 'pricing'); setIsMobileMenuOpen(false); }} className="text-xl font-medium text-white hover:text-[var(--accent-primary)] transition-colors">Planes</a>
          <a href="#projects" onClick={(e) => { handleNavClick(e, 'projects'); setIsMobileMenuOpen(false); }} className="text-xl font-medium text-white hover:text-[var(--accent-primary)] transition-colors">Proyectos</a>
        </div>

        {/* Drawer Footer CTA */}
        <div className="mt-auto">
          <button 
            onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
            className="w-full py-3.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(104,82,242,0.4)] hover:scale-105"
            style={{ backgroundColor: 'var(--accent-primary)', color: 'white' }}
          >
            Contáctanos
          </button>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
