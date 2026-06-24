import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-primary)] pt-20 overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[var(--accent-primary)] blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="w-full px-8 md:px-18 lg:px-26 xl:px-30 relative z-10 mx-auto">

        {/* Top Section: Layout pushed to corners */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

          {/* Brand & Description (Left) */}
          <div className="max-w-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">GRAVITY</h3>
            <p className="text-[var(--text-dim)] text-sm md:text-base leading-relaxed">
              Agencia digital integral especializada en diseño web, tiendas virtuales y soluciones a medida para potenciar negocios a nivel mundial.
            </p>
          </div>

          {/* Links Columns (Right) */}
          <div className="flex flex-wrap sm:flex-nowrap gap-12 md:gap-20 lg:gap-28">
            {/* Links: Navegación */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navegación</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">Inicio</a></li>
                <li><a href="#services" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">Servicios</a></li>
                <li><a href="#pricing" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">Planes</a></li>
                <li><a href="#projects" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">Proyectos</a></li>
              </ul>
            </div>

            {/* Links: Social */}
            <div>
              <h4 className="text-white font-semibold mb-6">Redes Sociales</h4>
              <div className="flex flex-row gap-3">
                <a href="#" className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-secondary)] hover:shadow-[0_0_15px_rgba(104,82,242,0.3)] text-[var(--text-dim)] hover:text-[var(--accent-secondary)] hover:-translate-y-1 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-secondary)] hover:shadow-[0_0_15px_rgba(104,82,242,0.3)] text-[var(--text-dim)] hover:text-[var(--accent-secondary)] hover:-translate-y-1 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-secondary)] hover:shadow-[0_0_15px_rgba(104,82,242,0.3)] text-[var(--text-dim)] hover:text-[var(--accent-secondary)] hover:-translate-y-1 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-secondary)] hover:shadow-[0_0_15px_rgba(104,82,242,0.3)] text-[var(--text-dim)] hover:text-[var(--accent-secondary)] hover:-translate-y-1 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>

            {/* Links: Contáctanos */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contáctanos</h4>
              <ul className="space-y-4">
                <li><a href="mailto:hola@gravity.com" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">hola@gravity.com</a></li>
                <li><a href="tel:+51987654321" className="text-[var(--text-dim)] hover:text-white transition-colors text-sm">+51 987 654 321</a></li>
                <li><span className="text-[var(--text-dim)] text-sm pointer-events-none">Lima, Perú</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 relative z-10">
          <p className="text-[var(--text-dim)] text-sm mb-4 md:mb-0">
            © 2026 Gravity. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Bottom Section: Huge Text */}
      <div className="w-full flex justify-center overflow-hidden mt-8 md:mt-2 pointer-events-none relative z-0">
        <span
          className="font-black tracking-tighter select-none bg-clip-text text-transparent"
          style={{
            fontSize: 'min(23vw, 350px)',
            lineHeight: '0.75',
            backgroundImage: 'linear-gradient(to right, transparent 0%, var(--accent-primary) 30%, var(--accent-secondary) 70%, transparent 100%)',
            opacity: 0.35
          }}
        >
          GRAVITY
        </span>
      </div>
    </footer>
  );
}
