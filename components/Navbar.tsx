import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  isHome?: boolean;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isHome = true, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar el scroll suave y evitar recargas de página
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (!isHome && onNavigateHome) {
      // If we are on privacy page, go home first, then scroll (handled in parent)
      onNavigateHome();
      // Wait a bit for render then scroll
      setTimeout(() => {
         const element = document.querySelector(targetId);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Normal behavior on home page
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (!isHome && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-cyan/10 py-2 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer group" onClick={handleLogoClick}>
            <Logo className="w-10 h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-mono text-slate-400 hover:text-brand-cyan transition-colors uppercase tracking-wide flex flex-col group py-2"
              >
                {link.name}
                <span className="h-0.5 w-0 bg-brand-cyan group-hover:w-full transition-all duration-300 mt-1"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-brand-cyan p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-brand-card absolute top-full left-0 w-full border-t border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-mono text-slate-300 hover:text-brand-cyan hover:bg-brand-cyan/5 rounded-md transition-colors"
              >
                <span className="text-brand-cyan mr-2">{'>'}</span> {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};