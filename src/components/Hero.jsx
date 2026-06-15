import { useState, useEffect } from 'react';
import heroImage from '../assets/img1.png';
import logoImage from '../assets/logo.png';

const words = ['página web', 'tienda online', 'aplicación', 'software'];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col bg-universe"
    >

      {/* Background glows & Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Star layers */}
        <div className="absolute inset-0 stars-small z-0 opacity-70" />
        <div className="absolute inset-0 stars-medium z-0 opacity-60" />

        {/* Purple Nebulas / Glows */}
        <div className="absolute rounded-full z-0 animate-float" style={{ top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--accent-primary)', opacity: 0.2, filter: 'blur(150px)' }} />
        <div className="absolute rounded-full z-0 animate-float-reverse" style={{ bottom: '-10%', left: '-10%', width: '40vw', height: '40vw', background: '#9333ea', opacity: 0.15, filter: 'blur(130px)' }} />
        <div className="absolute rounded-full z-0" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '70vw', height: '40vw', background: '#3b0764', opacity: 0.4, filter: 'blur(120px)' }} />

        {/* Bottom fade */}
        <div className="absolute z-0" style={{ bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #070014, transparent)', opacity: 0.9 }} />
      </div>

      {/* ===== NAV BAR ===== */}
      <nav className="relative z-20 w-full py-5 mt-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Left: Links */}
          <div className="flex items-center gap-8" style={{ width: '33.333%' }}>
            <a href="#inicio" className="nav-link text-sm font-medium transition-colors" style={{ color: 'var(--text-white)' }}>Inicio</a>
            <a href="#servicios" className="nav-link text-sm font-medium transition-colors" style={{ color: 'var(--text-dim)' }}>Servicios</a>
            <a href="#planes" className="nav-link text-sm font-medium transition-colors" style={{ color: 'var(--text-dim)' }}>Planes</a>
            <a href="#proyectos" className="nav-link text-sm font-medium transition-colors" style={{ color: 'var(--text-dim)' }}>Proyectos</a>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center relative" style={{ width: '33.333%' }}>
            <a href="/" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <img src={logoImage} alt="Gravity Logo" className="h-[140px] w-auto" />
            </a>
          </div>

          {/* Right: Contact */}
          <div className="flex items-center justify-end" style={{ width: '33.333%' }}>
            <a
              href="#contacto"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={{ color: 'var(--text-white)', backgroundColor: 'var(--accent-primary)', boxShadow: '0 0 20px rgba(104,82,242,0.35)' }}
            >
              Contáctanos
            </a>
          </div>

        </div>
      </nav>

      {/* ===== HERO CONTENT ===== */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up" style={{ color: 'var(--text-white)' }}>
              Creamos tu<br />
              <span
                className="rotating-word"
                style={{
                  color: 'var(--accent-primary)',
                  opacity: fade ? 1 : 0,
                  transform: fade ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  display: 'inline-block'
                }}
              >
                {words[currentWord]}
              </span>
            </h1>

            <p className="text-base mb-10 leading-relaxed max-w-md animate-fade-in-up animation-delay-200" style={{ color: 'var(--text-dim)' }}>
              Atrae más clientes con un diseño moderno y rápido.
              Nos encargamos de todo para que tu negocio crezca en internet.
            </p>

            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <a
                href="#contacto"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ color: 'var(--text-white)', backgroundColor: 'var(--accent-primary)', boxShadow: '0 0 25px rgba(104,82,242,0.4)' }}
              >
                Empezar Proyecto
              </a>
              <a
                href="#proyectos"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ color: 'var(--text-white)', border: '1px solid var(--border-light)' }}
              >
                Ver Proyectos
              </a>
            </div>

            {/* Features row */}
            <div className="flex items-center gap-10 mt-14 animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-white)' }}>Diseño</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>100% responsive</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-white)' }}>Rápido</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Carga en segundos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                  <svg className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-white)' }}>Seguro</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Protección total</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative animate-fade-in-up animation-delay-400">
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-full" style={{ background: 'var(--accent-primary)', opacity: 0.2, filter: 'blur(100px)' }} />
              <img
                src={heroImage}
                alt="Gravity Software"
                className="relative z-10 w-full h-auto object-contain scale-120"
                style={{ filter: 'drop-shadow(0 0 50px rgba(104,82,242,0.4))' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
