import React from 'react';
import { Section } from './Section';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const data = [
  { name: 'Ene', efficiency: 65, alerts: 40 },
  { name: 'Feb', efficiency: 72, alerts: 35 },
  { name: 'Mar', efficiency: 78, alerts: 28 },
  { name: 'Abr', efficiency: 85, alerts: 20 },
  { name: 'May', efficiency: 82, alerts: 22 },
  { name: 'Jun', efficiency: 90, alerts: 15 },
  { name: 'Jul', efficiency: 94, alerts: 12 },
];

export const DataVizDemo: React.FC = () => {
  return (
    <Section id="analisis" className="bg-[#0f1c2e]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-4">
              DATA INTELLIGENCE
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-100 mb-6">
              Decisiones Basadas <br /> en <span className="text-gradient">Datos Reales</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
              Implementamos tableros de control (Dashboards) con Power BI y Looker Studio. 
              <strong className="text-slate-200"> Identifique tendencias, prediga comportamientos y optimice recursos.</strong>
            </p>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-brand-cyan shadow-[0_0_8px_#64ffda]"></div>
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold">Análisis Predictivo</h4>
                  <p className="text-slate-500">Anticipe riesgos y oportunidades mediante IA.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-brand-500 shadow-[0_0_8px_#14b8a6]"></div>
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold">Centralización</h4>
                  <p className="text-slate-500">Única fuente de verdad (Excel, SQL, Cloud).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fake Dashboard Container */}
          <div className="bg-brand-card/80 backdrop-blur p-1 rounded border border-slate-700 shadow-2xl relative overflow-hidden">
            {/* Glitch effect line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>

            {/* Header of the fake dashboard */}
            <div className="bg-brand-dark/90 p-3 flex justify-between items-center border-b border-slate-700 mb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              </div>
              <div className="text-[10px] text-brand-cyan font-mono tracking-widest">SYSTEM_MONITOR_V2.4 [LIVE]</div>
            </div>

            {/* Chart 1: Area */}
            <div className="p-4">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Eficiencia Operativa</div>
                  <div className="text-2xl font-bold text-slate-100 font-display">94.2% <span className="text-brand-cyan text-sm font-normal font-mono">▲ 12%</span></div>
                </div>
              </div>
              <div className="h-48 w-full mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#64ffda" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#64ffda" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#475569" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                    <YAxis stroke="#475569" tick={{fontSize: 10, fontFamily: 'monospace'}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0a192f', borderColor: '#334155', color: '#fff', fontSize: '12px' }} 
                      itemStyle={{ color: '#64ffda' }}
                    />
                    <Area type="monotone" dataKey="efficiency" stroke="#64ffda" strokeWidth={2} fillOpacity={1} fill="url(#colorEff)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Chart 2: Bar */}
              <div className="border-t border-slate-800 pt-4">
                 <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-mono">Reducción de Incidentes</div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="name" hide />
                        <Tooltip 
                          cursor={{fill: 'rgba(100, 255, 218, 0.05)'}}
                          contentStyle={{ backgroundColor: '#0a192f', borderColor: '#334155', color: '#fff', fontSize: '12px' }} 
                        />
                        <Legend wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace' }} />
                        <Bar dataKey="alerts" name="Incidentes" fill="#14b8a6" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};