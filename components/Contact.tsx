import React from 'react';
import { Section } from './Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contacto" className="bg-[#0f1c2e] relative overflow-hidden">
      {/* Background gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
             <div className="inline-block px-3 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-4">
               START PROJECT
             </div>
             <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 mb-6">
              Hablemos de tu <br />
              <span className="text-gradient">Transformación Digital</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg font-light">
              ¿Listo para optimizar procesos y automatizar el flujo de trabajo? 
              Contáctanos para una consultoría inicial.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded bg-brand-card flex items-center justify-center text-brand-cyan border border-slate-700 group-hover:border-brand-cyan transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">Email</p>
                  <p className="text-slate-200 font-semibold hover:text-brand-cyan transition-colors">info@datenova.io</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded bg-brand-card flex items-center justify-center text-brand-cyan border border-slate-700 group-hover:border-brand-cyan transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">Teléfono</p>
                  <p className="text-slate-200 font-semibold hover:text-brand-cyan transition-colors">+57 310 558 6071</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded bg-brand-card flex items-center justify-center text-brand-cyan border border-slate-700 group-hover:border-brand-cyan transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">Ubicación</p>
                  <p className="text-slate-200 font-semibold">Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-card/50 backdrop-blur-sm p-8 rounded border border-slate-800 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Nombre</label>
                  <input type="text" className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Empresa</label>
                  <input type="text" className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" placeholder="Nombre empresa" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" placeholder="email@empresa.com" />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Servicio de Interés</label>
                <select className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors">
                  <option>Automatización de Procesos</option>
                  <option>Desarrollo Web / App</option>
                  <option>Análisis de Datos / BI</option>
                  <option>Consultoría SST</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" placeholder="Detalles del proyecto..."></textarea>
              </div>

              <button type="submit" className="w-full bg-transparent hover:bg-brand-cyan/10 text-brand-cyan font-bold py-4 rounded border border-brand-cyan transition-all flex items-center justify-center group">
                Enviar Mensaje
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};