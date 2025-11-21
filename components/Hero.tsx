import React from 'react';
import { ArrowRight, ChevronDown, Database, Activity, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark selection:bg-brand-cyan selection:text-brand-dark">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
      
      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>

      {/* Floating Tech Elements */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-float hidden lg:block">
        <Database className="text-brand-cyan w-16 h-16" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-20 animate-pulse-slow hidden lg:block">
        <Activity className="text-brand-500 w-20 h-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-mono font-semibold tracking-widest mb-8 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-cyan mr-2 animate-pulse"></span>
              Solución 360° para tu empresa
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-100 mb-6 leading-tight tracking-tight">
              Transformamos <span className="text-gradient">Datos</span> <br />
              en <span className="text-slate-100">Acciones</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-400 font-light leading-relaxed">
              "Solución 360°: análisis de datos, desarrollo web y optimización de procesos en una sola mano."
              <br/>
              <span className="text-brand-500 font-medium mt-2 block">Convertimos datos en conocimiento valioso.</span>
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="#contacto" 
                onClick={(e) => handleScroll(e, 'contacto')}
                className="px-8 py-4 bg-transparent text-brand-cyan border border-brand-cyan rounded hover:bg-brand-cyan/10 font-mono font-semibold transition-all shadow-[0_0_15px_rgba(100,255,218,0.2)] flex items-center justify-center group cursor-pointer"
              >
                Iniciar Proyecto
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleScroll(e, 'servicios')}
                className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded font-mono font-semibold transition-all backdrop-blur-sm cursor-pointer"
              >
                Explorar Servicios
              </a>
            </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 cursor-pointer hover:text-brand-cyan transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={(e) => handleScroll(e, 'nosotros')}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};