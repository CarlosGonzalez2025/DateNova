import React from 'react';
import { SERVICES } from '../constants';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <Section id="servicios" className="bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
             <span className="text-brand-cyan text-2xl">02.</span> Servicios
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Diseño e implementación de soluciones digitales personalizadas. 
            <span className="block text-brand-cyan mt-2 font-mono text-sm">Migración • Desarrollo • Análisis</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-brand-card p-8 rounded border border-slate-800 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-brand-cyan to-brand-500 rounded opacity-0 group-hover:opacity-20 transition duration-500 blur-lg group-hover:blur-md"></div>
              
              <div className="relative z-10">
                <div className="bg-brand-dark w-14 h-14 rounded flex items-center justify-center mb-6 border border-slate-700 group-hover:border-brand-cyan/50 group-hover:text-brand-cyan text-slate-400 transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed border-b border-slate-800 pb-6 group-hover:border-brand-cyan/20 transition-colors">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-brand-cyan bg-brand-cyan/5 px-2 py-1 rounded border border-brand-cyan/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};