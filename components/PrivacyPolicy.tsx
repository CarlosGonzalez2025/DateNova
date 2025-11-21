import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-slate-300 pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-brand-cyan selection:text-brand-dark">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center text-brand-cyan hover:text-white transition-colors mb-8 font-mono text-sm uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </button>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-400 text-sm font-mono border-l-2 border-brand-cyan pl-4">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-brand-card/50 border border-slate-800 rounded-xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          
          <div className="space-y-12">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-slate-100">
                <Shield className="text-brand-cyan" />
                <h2 className="text-2xl font-bold font-display">1. Introducción</h2>
              </div>
              <p className="leading-relaxed text-slate-400">
                En <strong>DateNova</strong> ("nosotros", "nuestro"), valoramos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web y utiliza nuestros servicios de consultoría tecnológica y análisis de datos.
              </p>
            </section>

            {/* Info Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-slate-100">
                <Eye className="text-brand-cyan" />
                <h2 className="text-2xl font-bold font-display">2. Información que Recopilamos</h2>
              </div>
              <p className="mb-4 text-slate-400">Podemos recopilar información sobre usted de diversas maneras, incluyendo:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-brand-cyan">
                <li><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y nombre de la empresa cuando completa nuestros formularios de contacto.</li>
                <li><strong>Datos de Navegación:</strong> Información sobre su dispositivo, dirección IP, tipo de navegador y páginas visitadas para mejorar la experiencia de usuario.</li>
                <li><strong>Datos de Servicios:</strong> Información técnica necesaria para la implementación de soluciones (en caso de contratación de servicios).</li>
              </ul>
            </section>

            {/* Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-slate-100">
                <FileText className="text-brand-cyan" />
                <h2 className="text-2xl font-bold font-display">3. Uso de la Información</h2>
              </div>
              <p className="mb-4 text-slate-400">Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-brand-cyan">
                <li>Proveer, operar y mantener nuestros servicios digitales.</li>
                <li>Mejorar, personalizar y expandir nuestra plataforma.</li>
                <li>Entender y analizar cómo utiliza nuestro sitio web.</li>
                <li>Comunicarnos con usted para fines de servicio al cliente o actualizaciones de proyectos.</li>
                <li>Enviar correos electrónicos relacionados con sus consultas.</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <div className="flex items-center gap-3 mb-4 text-slate-100">
                <Lock className="text-brand-cyan" />
                <h2 className="text-2xl font-bold font-display">4. Seguridad de los Datos</h2>
              </div>
              <p className="leading-relaxed text-slate-400">
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger su información personal. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger sus datos, recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-bold text-slate-100 mb-3 font-display">5. Cookies y Tecnologías de Rastreo</h2>
              <p className="leading-relaxed text-slate-400">
                Podemos utilizar cookies, balizas web, píxeles de seguimiento y otras tecnologías de rastreo para ayudar a personalizar el sitio y mejorar su experiencia. Usted puede configurar su navegador para rechazar todas o algunas cookies.
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-xl font-bold text-slate-100 mb-3 font-display">6. Sus Derechos (Habeas Data)</h2>
              <p className="leading-relaxed text-slate-400 mb-4">
                Dependiendo de su ubicación (incluyendo Colombia bajo la Ley 1581 de 2012), usted puede tener derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 marker:text-brand-cyan">
                <li>Acceder a sus datos personales.</li>
                <li>Solicitar la corrección de datos inexactos.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Oponerse al procesamiento de sus datos.</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="border-t border-slate-700 pt-8 mt-8">
              <h2 className="text-xl font-bold text-slate-100 mb-4 font-display">7. Contacto</h2>
              <p className="text-slate-400">
                Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:
              </p>
              <div className="mt-4 p-4 bg-brand-dark border border-slate-700 rounded-lg inline-block">
                <p className="text-brand-cyan font-mono">info@datenova.io</p>
                <p className="text-slate-400 mt-1 text-sm">DateNova Digital Solutions</p>
              </div>
            </section>

          </div>
        </div>
        
        <div className="mt-8 text-center">
             <button 
            onClick={onBack}
            className="text-slate-500 hover:text-brand-cyan transition-colors text-sm underline underline-offset-4"
          >
            Regresar a la página principal
          </button>
        </div>

      </div>
    </div>
  );
};