import React from 'react';
import { Code2, Smartphone, Paintbrush, Zap, Blocks } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, className, delay, iconColor = "text-[var(--accent-secondary)]" }) => {
  return (
    <div
      className={`group relative overflow-hidden bg-[var(--bg-secondary)]/40 backdrop-blur-xl rounded-[2rem] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 transition-all duration-500 animate-fade-in-up ${className} ${delay} flex flex-col justify-center min-h-[220px] p-8 md:p-10 hover:shadow-[0_0_40px_rgba(104,82,242,0.15)] hover:-translate-y-1`}
    >
      {/* Gravity Theme Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Glowing Icon */}
      <div className="absolute -right-4 -bottom-4 md:-right-2 md:-bottom-2 opacity-40 group-hover:opacity-80 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700 ease-out z-0 pointer-events-none">
        {/* Ambient glow behind the icon */}
        <div className={`absolute inset-0 blur-[40px] opacity-30 rounded-full ${iconColor.replace('text-', 'bg-')}`}></div>
        <Icon
          className={`relative z-10 w-32 h-32 md:w-40 md:h-40 ${iconColor}`}
          style={{ filter: 'drop-shadow(0 0 15px currentColor)', strokeWidth: 1.2 }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[85%] md:max-w-[75%]">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[15px] md:text-base text-[var(--text-dim)] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Paintbrush,
      title: "Diseño UI/UX",
      description: "Diseños visualmente atractivos que aseguran una navegación intuitiva para tus clientes.",
      className: "lg:col-span-2",
      delay: "animation-delay-200",
      iconColor: "text-[var(--accent-secondary)]"
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Aceleramos tu sitio web al máximo para que destaque en los resultados de Google.",
      className: "lg:col-span-2",
      delay: "animation-delay-400",
      iconColor: "text-[var(--accent-secondary)]"
    },
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Construimos páginas web a tu medida que funcionan a la perfección en cualquier dispositivo.",
      className: "lg:col-span-2",
      delay: "animation-delay-600",
      iconColor: "text-[var(--accent-primary)]"
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Desarrollamos aplicaciones para iPhone y Android que mantienen conectados a tus clientes.",
      className: "lg:col-span-3",
      delay: "animation-delay-800",
      iconColor: "text-[var(--accent-secondary)]"
    },
    {
      icon: Blocks,
      title: "Sistemas a Medida",
      description: "Sistemas exclusivos para digitalizar tu negocio y automatizar tus tareas diarias.",
      className: "lg:col-span-3",
      delay: "animation-delay-[1000ms]",
      iconColor: "text-[var(--accent-primary)]"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[var(--bg-primary)] overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-universe pointer-events-none opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 animate-fade-in-up flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Nuestros <span className="relative whitespace-nowrap">
              <span className="gradient-text pr-1">Servicios</span>
              {/* Tech Line with Glowing Dot Underline */}
              <span className="absolute -bottom-2 left-0 flex items-center w-full opacity-90">
                <span className="h-[3px] flex-grow bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-l-full"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary)] -ml-1"></span>
              </span>
            </span>
          </h2>
          <p className="text-sm md:text-base text-[var(--text-dim)] max-w-xl">
            Te ayudamos a impulsar tu negocio con soluciones tecnológicas efectivas y fáciles de usar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className={service.className}
              delay={service.delay}
              iconColor={service.iconColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
