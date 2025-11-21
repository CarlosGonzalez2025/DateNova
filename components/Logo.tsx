import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = true }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image from external source */}
      <img 
        src="https://i.postimg.cc/sg6BsF2p/logo1.webp" 
        alt="DateNova Logo" 
        className={`${className} object-contain`}
      />
      
      {/* HTML Text - Only rendered if showText is true */}
      {showText && (
        <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-2xl tracking-widest text-slate-100 leading-none">
              DATE<span className="text-brand-cyan">NOVA</span>
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 font-mono">
              Digital Solutions
            </span>
        </div>
      )}
    </div>
  );
};