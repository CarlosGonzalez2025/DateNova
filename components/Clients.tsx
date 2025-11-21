
import React from 'react';
import { Section } from './Section';
import { CASE_STUDIES, CLIENTS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Clients: React.FC = () => {
  return (
    <Section id="casos" className="bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Stories */}
        <div className="mb-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 flex items-center justify-center gap-3">
                <span className="text-brand-cyan text-2xl">03.</span> Casos de Éxito
              </h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="bg-brand-card p-6 rounded border border-slate-800 hover:border-brand-cyan/50 transition-all hover:-translate-y-1 group shadow-lg hover:shadow-brand-cyan/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-brand-cyan font-mono font-bold tracking-wider text-xs uppercase">{study.title}</span>
                    <study.icon className="text-slate-500 group-hover:text-brand-cyan transition-colors" size={18} />
                  </div>
                  <h3 className="text-md font-bold text-slate-200 mb-3 min-h-[3rem]">{study.category}</h3>
                  <div className="flex items-center gap-2 mb-4 text-brand-500 text-xs font-bold font-mono uppercase">
                    <CheckCircle2 size={14} />
                    {study.result}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {study.description}
                  </p>
                </div>
              ))}
           </div>
        </div>

        {/* Client Logos Strip (Carousel) */}
        <div className="border-t border-slate-800 pt-16">
           <p className="text-center text-slate-500 text-xs font-mono uppercase tracking-widest mb-12">
             Empresas que confían en DateNova
           </p>
           
           {/* Infinite Scroll Container with Gradient Masks */}
           <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              
              {/* Wrapper to hold the double list */}
              <div className="flex w-max">
                  {/* First Copy of List */}
                  <ul className="flex items-center gap-12 animate-scroll px-6">
                    {CLIENTS.map((client, index) => (
                        <li key={`${client.name}-1-${index}`} className="flex-shrink-0">
                          <div 
                            className="group relative flex items-center justify-center w-40 h-24 bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                            title={client.name}
                          >
                             {client.logo.startsWith('http') ? (
                                <img 
                                  src={client.logo} 
                                  alt={client.name} 
                                  className="w-full h-full object-contain filter"
                                />
                             ) : (
                               <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded text-slate-600 font-bold text-sm">
                                  {client.logo}
                               </div>
                             )}
                          </div>
                        </li>
                    ))}
                  </ul>

                  {/* Second Copy of List (for seamless loop) */}
                  <ul className="flex items-center gap-12 animate-scroll px-6" aria-hidden="true">
                    {CLIENTS.map((client, index) => (
                        <li key={`${client.name}-2-${index}`} className="flex-shrink-0">
                          <div 
                            className="group relative flex items-center justify-center w-40 h-24 bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                            title={client.name}
                          >
                             {client.logo.startsWith('http') ? (
                                <img 
                                  src={client.logo} 
                                  alt={client.name} 
                                  className="w-full h-full object-contain filter"
                                />
                             ) : (
                               <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded text-slate-600 font-bold text-sm">
                                  {client.logo}
                               </div>
                             )}
                          </div>
                        </li>
                    ))}
                  </ul>
              </div>
           </div>
        </div>

      </div>
    </Section>
  );
};
