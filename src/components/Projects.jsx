import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Florería Pétalos Dorados",
      category: "Tienda Virtual",
      image: "/petalos.png",
      description: "Plataforma e-commerce para venta de arreglos florales con catálogo dinámico y gestión de entregas.",
      link: "https://www.petalosdorados.com"
    },
    {
      id: 2,
      title: "Eventos Maranatha",
      category: "Sitio Corporativo",
      image: "/maranatha.png",
      description: "Portal corporativo para la exhibición y contratación de servicios integrales de organización de eventos.",
      link: "https://www.eventosmaranatha.com"
    },
    {
      id: 3,
      title: "Exportadora Norandino",
      category: "Web Empresarial",
      image: "/exportadora.png",
      description: "Sitio web B2B diseñado para la promoción y exportación internacional de productos agroindustriales.",
      link: "https://www.exportadoranorandino.com"
    }
  ];

  return (
    <section id="projects" className="relative scroll-mt-24 md:scroll-mt-28 pt-12 pb-24 md:pt-16 md:pb-32 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-universe pointer-events-none opacity-40 z-0"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20 animate-fade-in-up flex flex-col items-center text-center">
          <div className="max-w-2xl flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Nuestros <span className="relative whitespace-nowrap">
                <span className="gradient-text pr-1">Proyectos</span>
                <span className="absolute -bottom-2 left-0 flex items-center w-full opacity-90">
                  <span className="h-[3px] flex-grow bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-l-full"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary)] -ml-1"></span>
                </span>
              </span>
            </h2>
            <p className="text-base md:text-lg text-[var(--text-dim)]">
              Descubre cómo hemos ayudado a diversas empresas a transformar sus ideas en soluciones digitales escalables y atractivas.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className={`group cursor-pointer relative flex flex-col rounded-3xl overflow-hidden bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 hover:shadow-[0_15px_40px_-15px_rgba(104,82,242,0.3)] hover:-translate-y-2 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-60 shrink-0 overflow-hidden transform-gpu">
                {/* Opcional: Si necesitas un oscurecimiento muy suave solo arriba para que se lea el badge, usa from-black/20 */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 pointer-events-none h-24"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 relative z-20 flex-grow bg-[var(--bg-secondary)]/20 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-secondary)] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[var(--text-dim)] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-dim)] group-hover:text-[var(--accent-primary)] transition-colors mt-auto">
                  Visitar sitio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
