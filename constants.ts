
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
  Settings
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
    title: 'Gestión Documental HSEQ',
    description: 'Optimización, centralización y aseguramiento del cumplimiento normativo en la industria. Centralización de bases de datos.',
    icon: FileText,
    tech: ['Cloud Storage', 'Compliance Audit', 'Single Source of Truth']
  }
];

export const CLIENTS = [
  { name: 'RidePro', logo: 'https://i.postimg.cc/V0S5QLrC/Logo-Ride-Pro-Fondo-Blanco.png' },
  { name: 'Magnex Group', logo: 'https://i.postimg.cc/MnBZmFVG/Magnex.png' },
  { name: 'China Harbour', logo: 'https://i.postimg.cc/ts6RNMWC/Imagen-de-Whats-App-2025-03-12-a_las-09-20-35-6621a1be.jpg' },
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
