import { PortfolioContent } from '../models/portfolio.models';

export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    name: 'Gustavo Gutierrez',
    role: {
      es: 'Ingeniero de Sistemas',
      en: 'Systems Engineer',
    },
    headline: {
      es: 'Hola, soy Gustavo. Construyo experiencias digitales enfocadas en impacto y rendimiento.',
      en: 'Hi, I am Gustavo. I build digital experiences focused on impact and performance.',
    },
    summary: {
      es: 'Ingeniero de Sistemas con experiencia en el desarrollo e integración de' +
        'microservicios utilizando Java (Spring Boot), Angular, RabbitMQ y Docker.' +
        'Sólido conocimiento en análisis, interpretación y desarrollo de requerimientos' +
        'tanto en frontend como en backend. Habilidad demostrada en la evolución y' +
        'mantenimiento de aplicativos, incorporando nuevas funcionalidades y' +
        'optimizando el rendimiento, la seguridad y la resiliencia. Experiencia en' +
        'soporte técnico, resolución de incidentes y gestión de la comunicación entre' +
        'sistemas distribuidos. Participación activa en la mejora continua de' +
        'aplicaciones y en la estandarización de procesos.',

      en: 'Systems Engineer with experience in developing and integrating microservices' +
        ' using Java (Spring Boot), Angular, RabbitMQ, and Docker. Strong knowledge in' +
        ' analyzing, interpreting, and developing requirements for both frontend and' +
        ' backend. Demonstrated ability in evolving and maintaining applications by' +
        ' incorporating new features and optimizing performance, security, and' +
        ' resilience. Experience in technical support, incident resolution, and managing' +
        ' communication between distributed systems. Active participation in continuous' +
        ' improvement of applications and standardization of processes.',
    },
    location: 'Tuluá, Valle del Cauca, Colombia',
    avatarUrl: 'assets/profile-placeholder.svg',
    cvUrl: 'desig/CV_Gustavo_Gutierrez_2026.pdf',
  },
  experience: [
    {
      company: 'VORTEXBIRD SAS',
      role: {
        es: 'Application developer',
        en: 'Application Developer',
      },
      period: '04/2025 - Presente | Cali, Colombia',
      summary: {
        es: 'Diseñé e integré microservicios, gestionando la comunicación entre sistemas distribuidos y creando documentación de APIs eficientes. Evolucioné y mantuve aplicaciones incorporando nuevas funcionalidades y optimizando rendimiento, seguridad y resiliencia. También brindé soporte técnico y resolución de incidentes, estandarizando procesos para asegurar continuidad del servicio.',
        en: 'I designed and integrated microservices, managing communication across distributed systems and creating efficient API documentation. I evolved and maintained applications by adding new features and optimizing performance, security, and resilience. I also provided technical support and incident resolution, standardizing processes to ensure service continuity.',
      },
      stack: ['Java (Spring Boot)', 'Angular', 'Microservices', 'RabbitMQ', 'Docker'],
    },
    {
      company: 'SERVICIOS DE SALUD IPS SURAMERICANA S A S',
      role: {
        es: 'Analista de sistemas',
        en: 'Systems Analyst',
      },
      period: '02/2024 - 01/2025 | Medellín, Colombia',
      summary: {
        es: 'Analicé, interpreté y desarrollé requerimientos en frontend y backend alineados con necesidades del negocio. Implementé mejoras continuas en aplicaciones, incorporando funcionalidades nuevas y dando seguimiento a incidentes y defectos. También apoyé soporte de aplicaciones y gestión de incidentes con enfoque en continuidad operativa y conciencia de riesgos.',
        en: 'I analyzed, interpreted, and developed frontend and backend requirements aligned with business needs. I implemented continuous improvements in applications by adding new features and tracking incidents and defects. I also supported application support and incident management, focusing on operational continuity and risk awareness.',
      },
      stack: ['Java (Spring Boot)', 'Scala (Play Framework)', 'RabbitMQ', 'Angular'],
    },
  ],
  projects: [
    {
      slug: 'ecommerce-microservices',
      title: {
        es: 'Plataforma de Microservicios E-commerce',
        en: 'E-commerce Microservices Platform',
      },
      description: {
        es: 'Arquitectura modular para catalogo, pagos y pedidos con panel administrativo y monitoreo basico.',
        en: 'Modular architecture for catalog, payments, and orders with admin dashboard and basic monitoring.',
      },
      imageUrl: 'assets/project-ecommerce.svg',
      tags: ['Angular', 'Node', 'Docker'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      slug: 'school-control-panel',
      title: {
        es: 'Panel de Control Escolar',
        en: 'School Control Dashboard',
      },
      description: {
        es: 'Gestion de estudiantes, horarios y reportes en tiempo real con una interfaz orientada a docentes.',
        en: 'Student, schedule, and real-time reports management with a teacher-first interface.',
      },
      imageUrl: 'assets/project-dashboard.svg',
      tags: ['Angular', 'Firebase', 'Charting'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      slug: 'event-monitoring',
      title: {
        es: 'Monitoreo de Eventos Geotecnico',
        en: 'Geotechnical Event Monitoring',
      },
      description: {
        es: 'Visualizacion y trazabilidad de eventos con alertas priorizadas y filtros operativos.',
        en: 'Event visualization and traceability with prioritized alerts and operational filters.',
      },
      imageUrl: 'assets/project-monitoring.svg',
      tags: ['TypeScript', 'REST API', 'UX'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ],
  skillGroups: [
    {
      title: {
        es: 'Frontend',
        en: 'Frontend',
      },
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: {
        es: 'Backend',
        en: 'Backend',
      },
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST'],
    },
    {
      title: {
        es: 'Herramientas',
        en: 'Tooling',
      },
      skills: ['Git', 'Docker', 'Figma', 'Jira'],
    },
  ],
  contacts: [
    {
      label: 'Email',
      value: 'adolfogutierra0108@gmail.com',
      href: 'mailto:adolfogutierra0108@gmail.com',
    },
    {
      label: 'Telefono',
      value: '+57 322 829 1082',
      href: 'tel:+573228291082',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/gustavoa198',
      href: 'https://www.linkedin.com/in/gustavoa198/',
    },
    {
      label: 'GitHub',
      value: 'github.com/GustavoA198',
      href: 'https://github.com/GustavoA198',
    },
  ],
};
