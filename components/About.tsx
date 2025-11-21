import React from 'react';
import { Section } from './Section';
import { Target, Eye, Diamond, Zap, Users, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="nosotros" className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 flex items-center justify-center gap-3">
            <span className="text-brand-cyan text-2xl">01.</span> Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto mt-4 rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-brand-card p-8 rounded border border-slate-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:border-brand-cyan/30">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Target size={120} className="text-brand-cyan" />
            </div>
            <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-brand-cyan border border-slate-700">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-100 mb-4">Misión</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-light">
              Ser tu aliado estratégico. Transformamos tus datos en conocimientos valiosos que impulsen el crecimiento de tu negocio, ayudando a tomar decisiones inteligentes basadas en información sólida.
            </p>
          </div>

          <div className="bg-brand-card p-8 rounded border border-slate-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:border-brand-cyan/30">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Eye size={120} className="text-brand-cyan" />
            </div>
            <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-brand-cyan border border-slate-700">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-100 mb-4">Visión</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-light">
              Liderar la transformación digital, impulsando el crecimiento sostenible mediante soluciones innovadoras, íntegras y de alta calidad tecnológica.
            </p>
          </div>

          <div className="bg-brand-card p-8 rounded border border-slate-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:border-brand-cyan/30">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Diamond size={120} className="text-brand-cyan" />
            </div>
            <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-brand-cyan border border-slate-700">
              <Diamond size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-slate-100 mb-4">Valores</h3>
            <ul className="text-slate-400 space-y-3 text-sm font-light">
              <li className="flex items-center gap-2"><Zap size={16} className="text-brand-500" /> <strong>Innovación:</strong> Nuevas formas de resolver.</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-500" /> <strong>Excelencia:</strong> Calidad total.</li>
              <li className="flex items-center gap-2"><Users size={16} className="text-brand-500" /> <strong>Colaboración:</strong> Trabajo cercano.</li>
            </ul>
          </div>

        </div>

        {/* Propuesta de Valor */}
        <div className="bg-brand-card/50 border border-brand-cyan/10 rounded-lg p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 to-transparent opacity-20"></div>
            <h3 className="text-2xl font-display font-bold text-slate-100 mb-6 relative z-10">Propuesta de Valor</h3>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg relative z-10 font-light">
              "Centralizamos información dispersa en una <span className="text-brand-cyan font-semibold">única fuente de verdad</span> en la nube, 
              reduciendo entre un 20% y 30% las horas-hombre dedicadas a gestión administrativa. Adaptamos nuestras soluciones a tu ecosistema 
              (Google o Microsoft) para evitar costos excesivos."
            </p>
        </div>

      </div>
    </Section>
  );
};