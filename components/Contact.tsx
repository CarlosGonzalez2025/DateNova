
import React, { useState } from 'react';
import { Section } from './Section';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: 'Automatización de Procesos',
    mensaje: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyjW_87dDzHFvg9F_QcHPcX3GN9ugjzss2NM3pAyQQ_GnIozc8q0FcasyEKs3TgayC1/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Creamos un objeto FormData para enviarlo como formulario estándar
      const formBody = new FormData();
      formBody.append('nombre', formData.nombre);
      formBody.append('empresa', formData.empresa);
      formBody.append('email', formData.email);
      formBody.append('servicio', formData.servicio);
      formBody.append('mensaje', formData.mensaje);
      formBody.append('fecha', new Date().toLocaleString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors' // Importante para evitar bloqueos de CORS con Google Scripts
      });

      // Al usar no-cors, no podemos leer la respuesta, pero si no falla la red, asumimos éxito
      setStatus('success');
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        servicio: 'Automatización de Procesos',
        mensaje: ''
      });
      
      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error enviando formulario:", error);
      setStatus('error');
    }
  };

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

          <div className="bg-brand-card/50 backdrop-blur-sm p-8 rounded border border-slate-800 shadow-2xl relative">
            {status === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-card/95 z-20 rounded border border-brand-cyan/20 animate-in fade-in duration-300">
                <CheckCircle className="text-brand-cyan w-16 h-16 mb-4" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400 text-center px-6">
                  Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderá a la brevedad.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 border border-brand-cyan text-brand-cyan rounded hover:bg-brand-cyan/10 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Empresa</label>
                  <input 
                    type="text" 
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" 
                    placeholder="Nombre empresa" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" 
                  placeholder="email@empresa.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Servicio de Interés</label>
                <select 
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors"
                >
                  <option value="Automatización de Procesos">Automatización de Procesos</option>
                  <option value="Desarrollo Web / App">Desarrollo Web / App</option>
                  <option value="Análisis de Datos / BI">Análisis de Datos / BI</option>
                  <option value="Consultoría SST">Consultoría SST</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-brand-cyan mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  rows={4} 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-slate-700 rounded px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-slate-600" 
                  placeholder="Detalles del proyecto..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded border border-red-400/20">
                  <AlertCircle size={16} />
                  Hubo un error al enviar. Por favor, intenta nuevamente o escribe a info@datenova.io.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-transparent hover:bg-brand-cyan/10 text-brand-cyan font-bold py-4 rounded border border-brand-cyan transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
};
