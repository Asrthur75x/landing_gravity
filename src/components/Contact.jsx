import React from 'react';
import img1 from '../assets/img1.png';

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen pt-40 md:pt-48 pb-24 relative overflow-hidden bg-universe flex flex-col items-center flex-1">
      {/* Background elements if needed */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full animate-float opacity-20" style={{ background: 'var(--accent-primary)', filter: 'blur(120px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full animate-float-reverse opacity-20" style={{ background: 'var(--accent-secondary)', filter: 'blur(100px)' }}></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-white">
            <span className="relative inline-block whitespace-nowrap">
              <span className="text-white pr-1 z-10 relative">Contáctanos</span>
              {/* Tech Line with Glowing Dot Underline */}
              <span className="absolute -bottom-2 left-0 flex items-center w-full opacity-90">
                <span className="h-[3px] flex-grow bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-l-full"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary)] -ml-1"></span>
              </span>
            </span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: 'var(--text-dim)' }}>
            ¿Tienes alguna duda o quieres cotizar un proyecto? Escríbenos y nuestro equipo se pondrá en contacto contigo a la brevedad.
          </p>
        </div>

        {/* Main Grid: Form + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Correo electrónico (Opcional)"
                  className="w-full px-5 py-4 rounded-full outline-none text-sm transition-all focus:ring-2 focus:ring-[var(--accent-primary)]"
                  style={{ backgroundColor: 'var(--border-subtle)', color: 'var(--text-white)' }}
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-5 py-4 rounded-full outline-none text-sm transition-all focus:ring-2 focus:ring-[var(--accent-primary)]"
                  style={{ backgroundColor: 'var(--border-subtle)', color: 'var(--text-white)' }}
                />
              </div>
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-5 py-4 rounded-full outline-none text-sm transition-all focus:ring-2 focus:ring-[var(--accent-primary)]"
                style={{ backgroundColor: 'var(--border-subtle)', color: 'var(--text-white)' }}
              />
              <textarea
                placeholder="Tu mensaje..."
                rows="5"
                className="w-full px-5 py-4 rounded-3xl outline-none text-sm resize-none transition-all focus:ring-2 focus:ring-[var(--accent-primary)]"
                style={{ backgroundColor: 'var(--border-subtle)', color: 'var(--text-white)' }}
              ></textarea>
              <div>
                <button
                  type="button"
                  className="px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--text-white)', boxShadow: '0 0 20px rgba(104,82,242,0.3)' }}
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Decorative Visual Card */}
          <div className="rounded-3xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-end p-8 group" style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-elevated)' }}>
            <div className="absolute inset-0 z-0">
              <img src={img1} alt="Visual" className="w-full h-full object-cover opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent opacity-90"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight" style={{ color: 'var(--text-white)' }}>Impulsa tu visión</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                Cuéntanos sobre tu proyecto. Estamos aquí para brindarte asesoría y soluciones digitales a la medida de tu negocio.
              </p>
            </div>
          </div>

        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--accent-primary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 className="text-lg font-bold" style={{ color: 'var(--text-white)' }}>(+56) 9 1234 5678</h4>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
              Estamos disponibles para responder tus llamadas todos los dias.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--accent-primary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-lg font-bold" style={{ color: 'var(--text-white)' }}>hola@gravity.cl</h4>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
              Escríbenos en cualquier momento y te responderemos en un plazo máximo de 24 horas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2 group" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--accent-primary)]" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-lg font-bold" style={{ color: 'var(--text-white)' }}>Reuniones Virtuales</h4>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
              Agenda una videollamada con nuestro equipo para conversar a detalle sobre las necesidades de tu proyecto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
