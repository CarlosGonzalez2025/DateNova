import React from 'react';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Logo className="w-12 h-12" />
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/date-nova-447870342" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-cyan hover:bg-slate-700 transition-all hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/date_nova/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-cyan hover:bg-slate-700 transition-all hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/DateNova" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-cyan hover:bg-slate-700 transition-all hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@DateNova_C" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-brand-cyan hover:bg-slate-700 transition-all hover:-translate-y-1">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-500">
          <p>&copy; {year} DateNova. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-brand-cyan transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};