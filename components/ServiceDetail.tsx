
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICE_DETAILS } from '../constants';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onContact: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onContact }) => {
  
  // Find specific details or use default fallback
  const details = SERVICE_DETAILS[serviceId] || SERVICE_DETAILS['default'];

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar isHome={false} onNavigateHome={onBack} />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={details.heroImage} 
            alt="Service Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button 
              onClick={onBack}
              className="inline-flex items-center text-brand-cyan hover:text-white mb-8 font-mono text-sm uppercase tracking-wider group transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a Servicios
            </button>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-100 mb-6 leading-tight">
              {details.title}
            </h1>
            <p className="text-xl text-brand-cyan font-light mb-8">{details.subtitle}</p>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              {details.description}
            </p>

            <div className="mt-10">
               <button 
                 onClick={onContact}
                 className="px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(100,255,218,0.3)]"
               >
                 Solicitar Consultoría
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features / Sub-Services Grid */}
      <section className="py-20 bg-brand-card/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-100">Soluciones Integrales</h2>
            <div className="w-20 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.features?.map((feature: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-card p-8 rounded-lg border border-slate-800 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-brand-dark rounded-lg flex items-center justify-center mb-6 text-brand-cyan border border-slate-700 group-hover:border-brand-cyan group-hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] transition-all">
                  {feature.icon ? <feature.icon size={28} /> : <CheckCircle2 size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-100 mb-8">
                ¿Por qué elegir esta solución?
              </h2>
              <div className="space-y-6">
                {details.benefits?.map((benefit: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4">
                     <div className="flex-shrink-0 mt-1">
                       <CheckCircle2 className="text-brand-cyan" size={24} />
                     </div>
                     <div>
                       <h4 className="text-lg font-bold text-slate-200">{benefit.title}</h4>
                       <p className="text-slate-400 text-sm mt-1">{benefit.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-brand-cyan opacity-20 blur-3xl rounded-full"></div>
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                 alt="Tech Visualization" 
                 className="relative z-10 rounded-xl border border-slate-700 shadow-2xl"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Tools / Technologies */}
      <section className="py-20 bg-brand-card border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold text-slate-100 mb-12">Tecnologías que Implementamos</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {details.tools?.map((tool: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center border border-slate-700 group-hover:border-brand-cyan transition-all duration-300 group-hover:scale-110">
                    {tool.icon ? <tool.icon size={32} className="text-slate-400 group-hover:text-brand-cyan transition-colors" /> : null}
                  </div>
                  <span className="text-sm font-mono text-slate-400 group-hover:text-brand-cyan transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <h2 className="text-4xl font-display font-bold text-slate-100 mb-6">¿Listo para transformar tus datos?</h2>
           <p className="text-slate-300 text-lg mb-10">
             Contáctanos hoy mismo y descubre cómo podemos ayudarte a optimizar tus procesos.
           </p>
           <button 
             onClick={onContact}
             className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-cyan text-brand-cyan font-bold rounded hover:bg-brand-cyan hover:text-brand-dark transition-all duration-300"
           >
             Hablar con un experto <ArrowRight className="ml-2" />
           </button>
        </div>
      </section>

      <Footer onOpenPrivacy={() => {}} />
    </div>
  );
};
