
import { 
  BarChart3, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  PieChart, 
  FileText, 
  Activity,
  Database,
  BrainCircuit,
  Smartphone,
  Settings,
  CheckCircle,
  Zap,
  Search,
  Server,
  Lock,
  Users
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Análisis', href: '#analisis' },
  { name: 'Casos de Éxito', href: '#casos' },
  { name: 'Contacto', href: '#contacto' },
];

export const SERVICES = [
  {
    id: 'automation',
    title: 'Automatización y Digitalización',
    description: 'Migración de procesos manuales (Excel, papel) a ecosistemas digitales integrados. Reducción de carga administrativa del 20% al 30%.',
    icon: Cpu,
    tech: ['AppSheet', 'Power Apps', 'Power Automate', 'Google Workspace']
  },
  {
    id: 'dev',
    title: 'Desarrollo de Software a Medida',
    description: 'Plataformas robustas web y móviles para necesidades específicas donde las herramientas estándar no son suficientes. Soluciones Multi-tenant y escalables.',
    icon: Code2,
    tech: ['React', 'FastAPI', 'Firebase', 'SQL', 'Mobile Apps']
  },
  {
    id: 'sst',
    title: 'Soluciones SST Especializadas',
    description: 'Digitalización completa de sistemas de gestión SST: registro de accidentalidad, ausentismo, EPPs e inspecciones con alertas automáticas.',
    icon: ShieldCheck,
    tech: ['Alertas Automáticas', 'Indicadores Tiempo Real', 'Control EPP']
  },
  {
    id: 'bi',
    title: 'Business Intelligence (BI) e IA',
    description: 'Tableros de control para toma de decisiones. Análisis inteligente de flotas vehiculares, excesos de velocidad y patrones preventivos.',
    icon: BarChart3,
    tech: ['Looker Studio', 'Power BI', 'Inteligencia Artificial', 'Big Data']
  },
  {
    id: 'admin',
    title: 'Gestión Administrativa y Financiera',
    description: 'Aplicaciones para el control presupuestal, órdenes de servicio, proyecciones de inversión y seguimiento de ejecución en tiempo real.',
    icon: PieChart,
    tech: ['Proyecciones', 'Control Presupuestal', 'Fintech Logic']
  },
  {
    id: 'doc',
    title: 'Centralización de Datos y Gestión HSEQ',
    description: 'Optimización, centralización y aseguramiento del cumplimiento normativo. Consolidación de bases de datos e informes automatizados.',
    icon: FileText,
    tech: ['Cloud Storage', 'Compliance Audit', 'Single Source of Truth']
  }
];

// Detailed content for the specific service pages
export const SERVICE_DETAILS: Record<string, any> = {
  'doc': {
    title: "Centraliza tu información, potencia tus decisiones",
    subtitle: "Expertos en Centralización de Datos y Gestión Documental",
    description: "En DateNova, somos tu aliado estratégico en la gestión y análisis de datos. Nos especializamos en centralizar información dispersa para garantizar accesibilidad, seguridad y cumplimiento normativo.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
    features: [
      {
        title: "Gestión Documental Integral",
        desc: "Servicio integral para la industria, optimizando, centralizando y asegurando el cumplimiento normativo.",
        icon: FileText
      },
      {
        title: "Centralización de Bases de Datos",
        desc: "Consolidamos toda la información relevante de múltiples fuentes en una única fuente de verdad accesible.",
        icon: Database
      },
      {
        title: "Limpieza de Datos",
        desc: "Procesamiento y depuración de datos para asegurar consistencia y calidad para el análisis.",
        icon: CheckCircle
      },
      {
        title: "Informes Automatizados",
        desc: "Diseño de informes automáticos con Looker Studio y Power BI para visualizar KPIs en tiempo real.",
        icon: Activity
      },
      {
        title: "Dashboards Centralizados",
        desc: "Monitoreo de variables críticas, desde eficiencia operativa hasta indicadores de seguridad (HSEQ).",
        icon: BarChart3
      },
      {
        title: "Alertas en Tiempo Real",
        desc: "Integración de plataformas de seguimiento para generar notificaciones automáticas sobre variables críticas.",
        icon: Zap
      }
    ],
    benefits: [
      { title: "Optimización de Procesos", desc: "Reducimos tiempos de respuesta y minimizamos errores humanos." },
      { title: "Mejora en Decisiones", desc: "Información precisa y en tiempo real para decisiones estratégicas." },
      { title: "Cumplimiento Normativo", desc: "Garantizamos el cumplimiento de normativas locales y sectoriales." },
      { title: "Monitoreo 24/7", desc: "Control exhaustivo sobre sus operaciones con reacción ágil." },
      { title: "Escalabilidad", desc: "Soluciones diseñadas para crecer junto con su empresa." }
    ],
    tools: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Google Sheets", icon: FileText },
      { name: "Looker Studio", icon: Search },
      { name: "Apps Script", icon: Code2 },
      { name: "Power Apps", icon: Smartphone },
      { name: "AppSheet", icon: Database }
    ]
  },
  // Fallback content for other services (using generic structure but specific titles)
  'automation': {
    title: "Automatización de Procesos Empresariales",
    subtitle: "Digitalización y Eficiencia Operativa",
    description: "Transformamos tareas manuales y repetitivas en flujos de trabajo digitales automatizados, permitiendo que su equipo se enfoque en lo que realmente importa.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    features: [
      { title: "Digitalización de Formularios", desc: "Adiós al papel. Captura de datos en campo mediante apps móviles.", icon: Smartphone },
      { title: "Flujos de Aprobación", desc: "Automatización de cadenas de mando y autorizaciones.", icon: CheckCircle },
      { title: "Integración de Sistemas", desc: "Conectamos su ERP, CRM y herramientas de ofimática.", icon: Server },
      { title: "Notificaciones Inteligentes", desc: "Alertas automáticas vía Email, WhatsApp o Teams.", icon: Zap }
    ],
    benefits: [
      { title: "Reducción de Costos", desc: "Menos horas hombre en tareas administrativas." },
      { title: "Cero Errores", desc: "Eliminación de errores de digitación manual." },
      { title: "Velocidad", desc: "Procesos que tomaban días ahora toman minutos." }
    ],
    tools: [
      { name: "Power Automate", icon: Zap },
      { name: "AppSheet", icon: Smartphone },
      { name: "Python", icon: Code2 }
    ]
  },
  // Add generic fallbacks for others to prevent errors
  'default': {
    title: "Soluciones Tecnológicas Avanzadas",
    subtitle: "Innovación para su Empresa",
    description: "Desarrollamos soluciones a medida para resolver los desafíos más complejos de su organización mediante tecnología de punta.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    features: [
      { title: "Desarrollo A Medida", desc: "Software diseñado específicamente para sus necesidades.", icon: Code2 },
      { title: "Consultoría Expert", desc: "Acompañamiento en cada etapa del proyecto.", icon: Users },
      { title: "Soporte Continuo", desc: "Garantía y mantenimiento de nuestras soluciones.", icon: ShieldCheck }
    ],
    benefits: [
      { title: "Personalización Total", desc: "Adaptado 100% a su flujo de trabajo." },
      { title: "Seguridad", desc: "Estándares altos de protección de datos." }
    ],
    tools: [
      { name: "React", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "Cloud", icon: Database }
    ]
  }
};

export const CLIENTS = [
  { name: 'RidePro', logo: 'https://i.postimg.cc/V0S5QLrC/Logo-Ride-Pro-Fondo-Blanco.png' },
  { name: 'Magnex Group', logo: 'https://i.postimg.cc/MnBZmFVG/Magnex.png' },
  { name: 'China Harbour', logo: 'https://i.postimg.cc/ts6RNMWC/Imagen-de-Whats_App_2025-03-12-a_las-09-20-35-6621a1be.jpg' },
  { name: 'AXA Colpatria', logo: 'https://i.postimg.cc/FYSFVB3F/LOGO-AXA-COLPATRIA-WEB.png' },
  { name: 'ARL Bolivar', logo: 'https://i.postimg.cc/3kGrFcm3/ARL-BOLIVAR.png' },
  { name: 'HSEQ SISAS', logo: 'HSEQ' },
  { name: 'GRS', logo: 'GRS' },
  { name: 'HMH', logo: 'HMH' },
  { name: 'NIXUS', logo: 'NIX' },
  { name: 'Longport', logo: 'LP' },
  { name: 'CIES Seguros', logo: 'CIES' }
];

export const CASE_STUDIES = [
  {
    title: "RidePro",
    category: "Automatización Operativa",
    result: "70% Aumento Digitalización",
    description: "Centralización de registros de instructores en terreno, optimizando recolección de datos y trazabilidad.",
    icon: Activity
  },
  {
    title: "Magnex Group",
    category: "Centro de Control (CCM)",
    result: "Gestión Flotas IA",
    description: "Sistema que genera reportes automáticos sobre flotas vehiculares, analizando excesos de velocidad con IA.",
    icon: BrainCircuit
  },
  {
    title: "Longport",
    category: "Seguridad (SST)",
    result: "Gestión Accidentes",
    description: "Solución en AppSheet para gestionar indicadores de frecuencia/severidad de accidentes y ausentismo.",
    icon: ShieldCheck
  },
  {
    title: "CIES Seguros",
    category: "Fintech",
    result: "Control Presupuestal",
    description: "App para control de comisiones y proyecciones de inversión con seguimiento en tiempo real.",
    icon: PieChart
  }
];

export const TECH_STACK = [
  { name: "Power BI", category: "Analytics" },
  { name: "React", category: "Frontend" },
  { name: "AppSheet", category: "No-Code" },
  { name: "Python", category: "Backend" },
  { name: "Looker", category: "BI" },
  { name: "Azure", category: "Cloud" },
  { name: "Power Automate", category: "Automation" },
  { name: "Firebase", category: "Database" }
];
