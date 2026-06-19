import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features, isPopular, delay }) => {
  return (
    <div 
      className={`relative p-[1px] rounded-[2rem] overflow-hidden ${isPopular ? 'bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]/20' : 'bg-[var(--border-subtle)] hover:bg-white/10'} transition-all duration-500 animate-fade-in-up ${delay} ${isPopular ? 'lg:-translate-y-4 lg:scale-105 z-10 shadow-[0_0_40px_rgba(104,82,242,0.15)]' : 'z-0'}`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-[10px] sm:text-xs font-bold px-4 py-1 rounded-b-lg tracking-wider">
          MÁS ELEGIDO
        </div>
      )}
      
      <div className="h-full bg-[var(--bg-secondary)]/60 backdrop-blur-2xl p-8 lg:p-10 rounded-[31px] flex flex-col relative z-10">
        
        {/* Glowing orb for popular card */}
        {isPopular && (
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-primary)] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        )}

        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">{description}</p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            {price !== 'A Medida' && <span className="text-lg text-[var(--text-dim)]">Desde</span>}
            <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{price}</span>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>
        
        <ul className="space-y-4 mb-10 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-[var(--accent-primary)]/20 p-1 rounded-full shrink-0">
                <Check className="w-3 h-3 lg:w-4 lg:h-4 text-[var(--accent-secondary)]" strokeWidth={3} />
              </div>
              <span className="text-[14px] lg:text-[15px] text-[var(--text-dim)]">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3.5 lg:py-4 rounded-xl font-semibold transition-all duration-300 ${isPopular ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] hover:shadow-[0_0_20px_rgba(104,82,242,0.4)] text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-[var(--border-subtle)]'}`}>
          Empezar Proyecto
        </button>
      </div>
    </div>
  );
};

export default function Pricing() {
  const plans = [
    {
      title: "Plan Starter",
      price: "$499",
      description: "Ideal para emprendedores y negocios locales que buscan presencia profesional en internet.",
      features: [
        "Diseño UI/UX Personalizado",
        "Landing Page o Web (hasta 5 secciones)",
        "Optimización SEO Básica",
        "Integración con WhatsApp y Redes",
        "Diseño 100% Responsivo"
      ],
      isPopular: false,
      delay: "animation-delay-200"
    },
    {
      title: "Plan Corporativo",
      price: "$1,200",
      description: "Para empresas establecidas que necesitan vender o gestionar contenido online.",
      features: [
        "Todo lo del Plan Starter",
        "Plataforma Autogestionable (CMS)",
        "E-Commerce o Sistema de Reservas",
        "Integración de Pasarela de Pagos",
        "Soporte Técnico Prioritario (1 mes)"
      ],
      isPopular: true,
      delay: "animation-delay-400"
    },
    {
      title: "Plan Enterprise",
      price: "A Medida",
      description: "Soluciones de software complejas y a gran escala para dominar el mercado.",
      features: [
        "Desarrollo de Software Custom",
        "Aplicaciones Móviles Nativas (iOS/Android)",
        "Arquitectura Cloud Escalable",
        "Integración con APIs Externas e IA",
        "Asignación de Equipo Dedicado"
      ],
      isPopular: false,
      delay: "animation-delay-600"
    }
  ];

  return (
    <section id="pricing" className="relative py-32 bg-[var(--bg-primary)] overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-universe pointer-events-none opacity-40 z-0"></div>
      
      {/* Light flares */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 animate-fade-in-up flex flex-col items-center text-center">
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
          <p className="text-sm md:text-base text-[var(--text-dim)] max-w-xl mt-4">
            Precios transparentes y soluciones adaptadas al tamaño y los objetivos de tu negocio. Sin costos ocultos.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
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
