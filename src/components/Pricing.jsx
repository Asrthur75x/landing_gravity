import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, features, isPopular, delay }) => {
  return (
    <div
      className={`group relative rounded-[2rem] p-8 lg:p-10 flex flex-col transition-all duration-500 animate-fade-in-up ${delay} ${isPopular
        ? 'bg-[var(--bg-elevated)]/50 backdrop-blur-xl border border-[var(--accent-primary)]/50 shadow-[0_20px_50px_-15px_rgba(104,82,242,0.4)] z-10'
        : 'bg-[var(--bg-secondary)]/40 backdrop-blur-xl border border-[var(--border-subtle)] shadow-[0_15px_40px_-15px_rgba(104,82,242,0.2)] hover:border-[var(--accent-primary)]/30 hover:shadow-[0_20px_50px_-10px_rgba(104,82,242,0.3)] hover:-translate-y-2 z-0'
        }`}
    >
      {/* Top section: Title & Badge */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        {isPopular && (
          <span className="bg-[var(--accent-primary)]/20 text-[var(--accent-secondary)] border border-[var(--accent-primary)]/30 text-[11px] font-medium px-3 py-1 rounded-full">
            Destacado
          </span>
        )}
      </div>

      {/* Button */}
      <button
        className={`w-full py-3.5 rounded-xl font-semibold mb-10 transition-all duration-300 ${isPopular
          ? 'bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white shadow-[0_0_20px_rgba(104,82,242,0.4)]'
          : 'bg-white/10 hover:bg-white/20 text-white border border-[var(--border-subtle)]'
          }`}
      >
        Solicitar
      </button>

      {/* Features List */}
      <ul className="space-y-4 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 shrink-0">
              <Check className="w-4 h-4 text-[var(--accent-secondary)]" strokeWidth={3} />
            </div>
            <span className="text-[14px] leading-relaxed font-medium text-[var(--text-dim)]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Pricing() {
  const plans = [
    {
      title: "Plan Básico",
      features: [
        "Diseño visual intuitivo",
        "Estructura web de hasta 5 secciones",
        "Alojamiento",
        "Hasta 2 correos institucionales",
        "Visualización perfecta en celulares",
        "Botón flotante de WhatsApp",
        "Formulario de contacto y consultas",
        "Integración con redes sociales",
        "Indexación inicial en buscadores"
      ],
      isPopular: false,
      delay: "animation-delay-200"
    },
    {
      title: "Plan Profesional",
      features: [
        "Diseño visual intuitivo",
        "Estructura web de hasta 12 secciones",
        "Alojamiento",
        "Hasta 3 correos institucionales",
        "Visualización perfecta en celulares",
        "Botón flotante de WhatsApp",
        "Formulario de contacto y consultas",
        "Integración con redes sociales",
        "Panel web autogestionable",
        "Indexación inicial en buscadores"
      ],
      isPopular: true,
      delay: "animation-delay-400"
    },
    {
      title: "Plan Premium",
      features: [
        "Diseño y desarrollo a medida",
        "Secciones y páginas ilimitadas",
        "Alojamiento",
        "Hasta 5 correos institucionales",
        "Visualización perfecta en celulares",
        "Botón flotante de WhatsApp",
        "Formulario de contacto y consultas",
        "Integración con redes sociales",
        "Panel de administración total",
        "Integración de pagos o reservas",
        "Indexación inicial en buscadores"
      ],
      isPopular: false,
      delay: "animation-delay-600"
    }
  ];

  return (
    <section id="pricing" className="relative scroll-mt-24 md:scroll-mt-28 pt-12 pb-24 md:pt-16 md:pb-32 bg-[var(--bg-primary)] overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-universe pointer-events-none opacity-40 z-0"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">

        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Nuestros <span className="relative whitespace-nowrap">
              <span className="gradient-text pr-1">Planes</span>
              {/* Tech Line with Glowing Dot Underline */}
              <span className="absolute -bottom-2 left-0 flex items-center w-full opacity-90">
                <span className="h-[3px] flex-grow bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-l-full"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary)] -ml-1"></span>
              </span>
            </span>
          </h2>
          <p className="text-sm md:text-base text-[var(--text-dim)] max-w-xl">
            Soluciones adaptadas al tamaño y los objetivos de tu negocio.
          </p>
        </div>

        {/* Pricing Cards: items-end aligns them at the bottom to create the "staircase" effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto items-end">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={plan.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
