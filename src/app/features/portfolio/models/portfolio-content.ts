export interface NavLink {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href?: string;
  icon: string;
  variant: 'primary' | 'link';
  download?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  emphasis?: boolean;
}

export interface SkillCard {
  name: string;
  detail: string;
  icon: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  layout: 'large' | 'small' | 'wide';
}

export interface ContactAction {
  label: string;
  href: string;
  icon: string;
  variant: 'icon' | 'button';
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface PortfolioContent {
  navLinks: NavLink[];
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    subtitle: string;
    actions: HeroAction[];
    wordmark: string;
  };
  timeline: TimelineEntry[];
  skills: SkillCard[];
  projects: ProjectCard[];
  contact: {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
    emailLabel: string;
    email: string;
    actions: ContactAction[];
  };
  footer: {
    text: string;
    links: FooterLink[];
  };
}

export const PORTFOLIO_CONTENT = {
  navLinks: [
    { label: 'Conocimientos', href: '#stack' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Ingeniero de Sistemas',
    headline: 'Gustavo Adolfo',
    highlight: 'Gutiérrez Agudelo',
    subtitle:
      'Ingeniero de Sistemas con experiencia en desarrollo e integración de microservicios con Java (Spring Boot), Angular, RabbitMQ y Docker. Enfoque en evolución y mantenimiento de aplicaciones, soporte técnico, resolución de incidentes y mejora continua en entornos distribuidos.',
    wordmark: 'ENGINEER',
    actions: [
      {
        label: 'Descargar CV',
        icon: 'download',
        href: 'assets/CV_Gustavo_Gutierrez_2026.pdf',
        download: 'CV_Gustavo_Gutierrez_2026.pdf',
        variant: 'primary',
      },
      { label: 'Contáctame', icon: 'arrow_forward', href: '#contact', variant: 'link' },
    ],
  },
  timeline: [
    {
      year: '04/2025 — Presente',
      title: 'Application Developer · VORTEXBIRD SAS',
      description:
        'Diseño e integración de microservicios, documentación de APIs y evolución de aplicaciones. Optimización de rendimiento, seguridad y resiliencia con Java (Spring Boot), Angular, RabbitMQ y Docker.',
    },
    {
      year: '02/2024 — 01/2025',
      title: 'Analista de Sistemas · SERVICIOS DE SALUD IPS SURAMERICANA SAS',
      description:
        'Análisis, interpretación y desarrollo de requerimientos frontend y backend. Mejora continua de aplicaciones, gestión de incidentes y soporte con Java (Spring Boot), Scala (Play Framework), RabbitMQ y Angular.',
    },
    {
      year: '08/2019 — 02/2025',
      title: 'Ingeniería de Sistemas · Universidad del Valle',
      description: 'Formación universitaria en Ingeniería de Sistemas, con enfoque en desarrollo de software, arquitectura de sistemas y trabajo backend/frontend.',
      emphasis: true,
    },
  ],
  skills: [
    { name: 'JavaScript / TypeScript', detail: 'Desarrollo frontend y backend', icon: 'code' },
    { name: 'Java (Spring Boot)', detail: 'Microservicios y APIs', icon: 'code' },
    { name: 'Angular', detail: 'Frontend empresarial', icon: 'developer_board' },
    { name: 'RabbitMQ', detail: 'Mensajería distribuida', icon: 'hub' },
    { name: 'Docker', detail: 'Contenerización', icon: 'settings_input_component' },
    { name: 'Scala (Play Framework)', detail: 'Backend y soporte', icon: 'terminal' },
    { name: 'Node.js / Express', detail: 'Servicios web', icon: 'cloud' },
    { name: 'Git', detail: 'Control de versiones', icon: 'source' },
  ],
  projects: [
    {
      layout: 'large',
      title: 'Integración de Microservicios',
      description:
        'Diseño e integración de microservicios para sistemas distribuidos, con comunicación eficiente y documentación de APIs para equipos de desarrollo.',
      image: 'assets/project-monitoring.svg',
      alt: 'Diagrama de monitoreo y estado de servicios',
      tags: ['Java', 'Spring Boot', 'Microservicios'],
    },
    {
      layout: 'small',
      title: 'Evolución y Mantenimiento',
      description: 'Implementación de nuevas funcionalidades y mejora continua en rendimiento, seguridad y resiliencia de aplicativos.',
      image: 'assets/project-dashboard.svg',
      alt: 'Panel de control con metricas de aplicacion',
      tags: ['Angular', 'Docker'],
    },
    {
      layout: 'small',
      title: 'Soporte Técnico e Incidentes',
      description: 'Análisis de fallos, corrección de errores y seguimiento de incidentes para garantizar continuidad operativa.',
      image: 'assets/project-ecommerce.svg',
      alt: 'Interfaz de servicio de soporte y flujo de incidentes',
      tags: ['Soporte', 'Incidentes'],
    },
    {
      layout: 'wide',
      title: 'Análisis de Requerimientos',
      description:
        'Interpretación y desarrollo de requerimientos frontend/backend, alineando soluciones con necesidades del negocio y estándares de calidad.',
      image: 'assets/project-monitoring.svg',
      alt: 'Esquema de arquitectura para levantamiento de requerimientos',
      tags: ['Angular', 'Java', 'Scala', 'RabbitMQ'],
    },
  ],
  contact: {
    eyebrow: 'Contacto',
    titleLineOne: 'Hablemos de',
    titleLineTwo: 'tu necesidad',
    description:
      'Disponible para roles de desarrollo backend/frontend, integración de microservicios y mantenimiento evolutivo de aplicaciones.',
    emailLabel: 'Correo',
    email: 'adolfogutierreza0108@gmail.com',
    actions: [
      { label: 'Llamar', icon: 'call', href: 'tel:+573228291082', variant: 'icon' },
      { label: 'LinkedIn', icon: 'groups', href: 'https://www.linkedin.com/in/gustavoa198/', variant: 'button' },
      { label: 'GitHub', icon: 'terminal', href: 'https://github.com/GustavoA198', variant: 'button' },
    ],
  },
  footer: {
    text: 'Gustavo Adolfo Gutiérrez Agudelo · Tuluá, Colombia · +57 322 829 1082',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavoa198/' },
      { label: 'GitHub', href: 'https://github.com/GustavoA198' },
      { label: 'Descargar CV', href: 'assets/CV_Gustavo_Gutierrez_2026.pdf' },
    ],
  },
} satisfies PortfolioContent;
