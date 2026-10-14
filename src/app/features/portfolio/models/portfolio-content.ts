import type { Lang } from '../../../core/i18n/language.service';
import type { ContactLink, PortfolioContent, ProjectImage } from './portfolio-content.model';

const EMAIL = 'adolfogutierreza0108@gmail.com';
const CV_HREF = 'assets/CV_Gustavo_Gutierrez_2026.pdf';
const CV_FILE_NAME = 'CV_Gustavo_Gutierrez_2026.pdf';
const REPO_HREF = 'https://github.com/GustavoA198/Autogestion';
const DEMO_HREF = 'https://autogestion-chi.vercel.app';
const PROJECT_STACK = ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Tailwind CSS', 'Vitest', 'Playwright'];

// Capturas de Autogestion en public/assets/projects/
const PROJECT_IMAGES: (Omit<ProjectImage, 'alt'> & { alt: Record<Lang, string> })[] = [
  {
    src: 'assets/projects/autogestion-panel.webp',
    width: 1600,
    height: 733,
    alt: {
      es: 'Panel de Autogestion con tareas del día, vencimientos, avisos pendientes y la agenda de reuniones',
      en: 'Autogestion dashboard with today’s tasks, due dates, pending alerts and the meeting agenda',
    },
  },
  {
    src: 'assets/projects/autogestion-calendario.webp',
    width: 1600,
    height: 733,
    alt: {
      es: 'Calendario de Autogestion en vista de día, con reuniones sincronizadas desde Google',
      en: 'Autogestion calendar in day view, with meetings synced from Google',
    },
  },
  {
    src: 'assets/projects/autogestion-estadisticas.webp',
    width: 1600,
    height: 733,
    alt: {
      es: 'Estadísticas de Autogestion: tareas abiertas, vencidas, por vencer y gráfico de tareas por estado',
      en: 'Autogestion statistics: open, overdue and upcoming tasks, with a chart of tasks by status',
    },
  },
];

const contactLinks = (phoneLabel: string): ContactLink[] => [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gustavoa198',
    href: 'https://www.linkedin.com/in/gustavoa198/',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/GustavoA198',
    href: 'https://github.com/GustavoA198',
    icon: 'github',
    external: true,
  },
  { label: phoneLabel, value: '+57 322 829 1082', href: 'tel:+573228291082', icon: 'phone', external: false },
];

const ES: PortfolioContent = {
  meta: {
    title: 'Gustavo Gutiérrez | Desarrollador backend Java · Spring Boot',
    description:
      'Desarrollador backend Java en Colombia. Microservicios con Spring Boot, RabbitMQ y Redis para banca y seguros. Disponible para trabajo remoto o híbrido en Cali.',
  },
  ui: {
    skipLink: 'Saltar al contenido',
    sectionsLabel: 'Secciones',
    home: 'Gustavo Gutiérrez, inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageLabel: 'Idioma',
    languageNames: { es: 'Español', en: 'English' },
    newTab: 'se abre en otra pestaña',
  },
  nav: [
    { label: 'Perfil', href: '#profile' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyecto', href: '#project' },
    { label: 'Stack', href: '#stack' },
    { label: 'Formación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    firstName: 'Gustavo',
    lastName: 'Gutiérrez',
    role: 'Desarrollador backend Java',
    summary:
      'Construyo microservicios con Spring Boot, RabbitMQ y Redis para clientes del sector financiero. Antes, aplicaciones de seguros voluntarios en SURA.',
    availability: 'Disponible: remoto o híbrido en Cali',
    cvLabel: 'Descargar CV',
    cvHref: CV_HREF,
    cvFileName: CV_FILE_NAME,
    contactLabel: 'Escríbeme',
  },
  diagram: {
    title: 'Cómo viaja una petición por los sistemas que construyo',
    hint: 'Selecciona una pieza del diagrama para ver dónde la he usado.',
    nodes: [
      {
        id: 'angular',
        name: 'Angular',
        role: 'interfaz',
        detail:
          'Interfaces para clientes del sector financiero y de cajas de compensación, y para las aplicaciones de seguros voluntarios de SURA.',
      },
      {
        id: 'api',
        name: 'Spring Boot',
        role: 'API REST',
        detail: 'Microservicios para clientes del sector financiero, con APIs REST documentadas.',
      },
      {
        id: 'cache',
        name: 'Redis',
        role: 'caché',
        detail:
          'Caché con Redis para bajar tiempos de respuesta en VortexBird. En SURA migré un orquestador en Scala de Oracle Coherence a Ehcache.',
      },
      {
        id: 'queue',
        name: 'RabbitMQ',
        role: 'mensajería',
        detail: 'Comunicación asíncrona entre microservicios, en VortexBird y en SURA.',
      },
      {
        id: 'worker',
        name: 'Spring Boot',
        role: 'consumidor',
        detail: 'Servicios que procesan los mensajes de la cola sin bloquear al servicio que los envía.',
      },
      {
        id: 'db',
        name: 'PostgreSQL',
        role: 'datos',
        detail: 'Persistencia con Prisma en la plataforma interna de pruebas de VortexBird y en Autogestion.',
      },
      {
        id: 'docker',
        name: 'Docker',
        role: 'contenedores',
        detail: 'Los microservicios se despliegan como contenedores Docker.',
      },
    ],
    edges: { http: 'HTTP', lookup: 'consulta', publish: 'publica', deliver: 'entrega', write: 'guarda' },
    legend: { sync: 'síncrono', async: 'asíncrono' },
  },
  profile: {
    heading: 'Perfil',
    paragraphs: [
      'Soy Ingeniero de Sistemas de la Universidad del Valle. Trabajo sobre todo en backend con Java y Spring Boot: microservicios que se comunican por RabbitMQ, caché con Redis y Ehcache, y despliegues en contenedores. Cuando el proyecto lo pide, también construyo el frontend en Angular.',
      'He trabajado para los sectores financiero, asegurador y de cajas de compensación. Acompaño el ciclo completo: entender el requerimiento, construirlo, probarlo, darle soporte en producción y mejorar la calidad del código en el camino.',
    ],
    facts: [
      { term: 'Ubicación', value: 'Tuluá, Valle del Cauca, Colombia (UTC−5)' },
      { term: 'Modalidad', value: 'Remoto, o híbrido en Cali' },
      { term: 'Sectores', value: 'Financiero, asegurador y cajas de compensación' },
    ],
    photoAlt: 'Retrato de Gustavo Gutiérrez',
  },
  experience: {
    heading: 'Experiencia',
    jobs: [
      {
        period: 'Abr 2025 – hoy',
        role: 'Desarrollador de aplicaciones',
        company: 'VortexBird S.A.S.',
        location: 'Cali, Colombia',
        highlights: [
          'Diseño e integración de microservicios en Java (Spring Boot) para clientes del sector financiero, con comunicación asíncrona vía RabbitMQ, APIs REST documentadas y despliegue en contenedores Docker.',
          'Optimización de tiempos de respuesta mediante caché con Redis.',
          'Nuevas funcionalidades backend y frontend (Angular, TypeScript) para clientes del sector financiero y de cajas de compensación, y solución de incidentes en producción.',
          'Mejora de la calidad y seguridad del código corrigiendo los issues que detecta SonarQube.',
          'Plataforma interna para gestionar pruebas automatizadas con Playwright, organizadas por empresa, proyecto, caso y ejecución, con actas de evidencias. Hecha con TypeScript, Node.js, PostgreSQL y Prisma.',
        ],
      },
      {
        period: 'Feb 2024 – Ene 2025',
        role: 'Analista de sistemas',
        company: 'SURA, Servicios de Salud IPS Suramericana S.A.S.',
        location: 'Medellín, Colombia',
        highlights: [
          'Migración de la caché de un servicio orquestador en Scala, puente entre el core de seguros y el frontend, de una caché distribuida (Oracle Coherence) a una caché local en memoria con Ehcache.',
          'Requerimientos de negocio en backend (Java Spring Boot, Scala Play Framework, RabbitMQ) y frontend (Angular) para aplicaciones de seguros voluntarios, como hogar e incendio y mascotas.',
          'Nuevas funcionalidades para el negocio y soporte de las aplicaciones, con seguimiento de incidentes y defectos hasta su cierre junto a otros equipos.',
          'Trabajo en equipos ágiles con código limpio, Git y prácticas de integración y despliegue continuos (CI/CD).',
        ],
      },
    ],
  },
  project: {
    heading: 'Proyecto personal',
    name: 'Autogestion',
    summary:
      'Cuando llevas varios proyectos a la vez, las credenciales por ambiente, los contactos y los calendarios terminan regados en notas y chats. Autogestion los reúne en una sola aplicación autohospedada, con tareas recurrentes, notas y calendarios de Google y Microsoft, y cifra cada secreto en reposo.',
    decisionsHeading: 'Decisiones técnicas',
    decisions: [
      'Los secretos se cifran en reposo con AES-256-GCM y un IV aleatorio por secreto. Solo salen del servidor cuando el usuario los revela o los copia.',
      'La contraseña se guarda con hash scrypt en PostgreSQL y la sesión dura 12 horas en una cookie httpOnly.',
      'Los intentos de inicio de sesión tienen un límite por IP, con los conteos guardados en PostgreSQL.',
      'La base de datos se respalda y se restaura desde archivos .sql o .sql.gz.',
      'Pruebas unitarias con Vitest y de extremo a extremo con Playwright.',
    ],
    stackHeading: 'Tecnologías',
    stack: PROJECT_STACK,
    repoLabel: 'Ver el código en GitHub',
    repoHref: REPO_HREF,
    demoLabel: 'Abrir la demo',
    demoHref: DEMO_HREF,
    demoNote: 'La demo pide iniciar sesión.',
    images: PROJECT_IMAGES.map(({ alt, ...image }) => ({ ...image, alt: alt.es })),
  },
  stack: {
    heading: 'Stack técnico',
    groups: [
      { name: 'Lenguajes', items: ['Java', 'Scala', 'TypeScript', 'JavaScript', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Play Framework', 'Node.js', 'Express', 'APIs REST', 'Microservicios'] },
      { name: 'Mensajería y caché', items: ['RabbitMQ', 'Redis', 'Ehcache'] },
      { name: 'Bases de datos', items: ['PostgreSQL', 'MongoDB', 'Prisma ORM'] },
      { name: 'Frontend', items: ['Angular', 'HTML', 'CSS'] },
      { name: 'Contenedores y DevOps', items: ['Docker', 'Kubernetes', 'Git', 'Jenkins', 'CI/CD', 'SonarQube'] },
      { name: 'Pruebas', items: ['JUnit', 'Mockito', 'Jest', 'Playwright'] },
      { name: 'Metodologías', items: ['Scrum', 'Código limpio'] },
      { name: 'Aprendiendo ahora', items: ['AWS (Cloud Practitioner)'] },
    ],
  },
  education: {
    heading: 'Formación',
    degreeHeading: 'Universidad',
    degree: {
      title: 'Ingeniería de Sistemas',
      school: 'Universidad del Valle',
      location: 'Tuluá, Colombia',
      period: 'Ago 2019 – Feb 2025',
    },
    coursesHeading: 'Cursos y certificaciones',
    courses: [
      { name: 'SI Architect Certification', provider: 'MongoDB' },
      { name: 'Docker', provider: 'Udemy' },
      { name: 'Kubernetes', provider: 'Udemy · en curso' },
      { name: 'Angular & Spring Boot', provider: 'Udemy' },
      { name: 'Angular: de cero a experto', provider: 'Udemy' },
    ],
    languagesHeading: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Básico (A2–B1)' },
    ],
  },
  contact: {
    heading: 'Hablemos',
    text: 'Si tienes un rol de backend con Java y Spring Boot, remoto o híbrido en Cali, escríbeme a este correo.',
    email: EMAIL,
    copyLabel: 'Copiar correo',
    copiedLabel: 'Correo copiado',
    copyFailedLabel: 'No se pudo copiar. Selecciona el correo y cópialo a mano.',
    links: contactLinks('Teléfono'),
  },
  footer: {
    owner: 'Gustavo Adolfo Gutiérrez Agudelo',
    cvLabel: 'Descargar CV',
    backToTop: 'Volver arriba',
  },
};

const EN: PortfolioContent = {
  meta: {
    title: 'Gustavo Gutiérrez | Java Backend Developer · Spring Boot',
    description:
      'Java backend developer based in Colombia. Spring Boot microservices with RabbitMQ and Redis for banking and insurance. Open to remote roles.',
  },
  ui: {
    skipLink: 'Skip to content',
    sectionsLabel: 'Sections',
    home: 'Gustavo Gutiérrez, home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    languageNames: { es: 'Español', en: 'English' },
    newTab: 'opens in a new tab',
  },
  nav: [
    { label: 'Profile', href: '#profile' },
    { label: 'Experience', href: '#experience' },
    { label: 'Project', href: '#project' },
    { label: 'Stack', href: '#stack' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    firstName: 'Gustavo',
    lastName: 'Gutiérrez',
    role: 'Java Backend Developer',
    summary:
      'I build Spring Boot microservices with RabbitMQ and Redis for financial services clients. Before that, voluntary insurance applications at SURA.',
    availability: 'Open to remote roles (UTC−5)',
    cvLabel: 'Download CV (Spanish)',
    cvHref: CV_HREF,
    cvFileName: CV_FILE_NAME,
    contactLabel: 'Get in touch',
  },
  diagram: {
    title: 'How a request travels through the systems I build',
    hint: 'Select a piece of the diagram to see where I have used it.',
    nodes: [
      {
        id: 'angular',
        name: 'Angular',
        role: 'interface',
        detail:
          "Interfaces for financial services and family compensation fund clients, and for SURA's voluntary insurance applications.",
      },
      {
        id: 'api',
        name: 'Spring Boot',
        role: 'REST API',
        detail: 'Microservices for financial services clients, with documented REST APIs.',
      },
      {
        id: 'cache',
        name: 'Redis',
        role: 'cache',
        detail:
          'Redis caching to cut response times at VortexBird. At SURA I moved a Scala orchestrator from Oracle Coherence to Ehcache.',
      },
      {
        id: 'queue',
        name: 'RabbitMQ',
        role: 'messaging',
        detail: 'Asynchronous communication between microservices, at VortexBird and at SURA.',
      },
      {
        id: 'worker',
        name: 'Spring Boot',
        role: 'consumer',
        detail: 'Services that process queued messages without blocking the service that sent them.',
      },
      {
        id: 'db',
        name: 'PostgreSQL',
        role: 'data',
        detail: "Persistence with Prisma in VortexBird's internal testing platform and in Autogestion.",
      },
      {
        id: 'docker',
        name: 'Docker',
        role: 'containers',
        detail: 'The microservices are deployed as Docker containers.',
      },
    ],
    edges: { http: 'HTTP', lookup: 'looks up', publish: 'publishes', deliver: 'delivers', write: 'writes' },
    legend: { sync: 'synchronous', async: 'asynchronous' },
  },
  profile: {
    heading: 'Profile',
    paragraphs: [
      'I am a Systems Engineer from Universidad del Valle. Most of my work is backend with Java and Spring Boot: microservices that communicate through RabbitMQ, caching with Redis and Ehcache, and container deployments. When a project needs it, I also build the Angular frontend.',
      'I have worked for the banking, insurance and family compensation fund sectors. I take part in the whole cycle: understanding the requirement, building it, testing it, supporting it in production and improving code quality along the way.',
    ],
    facts: [
      { term: 'Location', value: 'Tuluá, Valle del Cauca, Colombia (UTC−5)' },
      { term: 'Work mode', value: 'Remote, or hybrid in Cali' },
      { term: 'Industries', value: 'Banking, insurance and family compensation funds' },
    ],
    photoAlt: 'Portrait of Gustavo Gutiérrez',
  },
  experience: {
    heading: 'Experience',
    jobs: [
      {
        period: 'Apr 2025 – now',
        role: 'Application developer',
        company: 'VortexBird S.A.S.',
        location: 'Cali, Colombia',
        highlights: [
          'Designed and integrated Java (Spring Boot) microservices for financial services clients, with asynchronous communication over RabbitMQ, documented REST APIs and Docker container deployments.',
          'Reduced response times with Redis caching.',
          'Built new backend and frontend (Angular, TypeScript) features for financial services and family compensation fund clients, and resolved production incidents.',
          'Improved code quality and security by fixing the issues reported by SonarQube.',
          'Built an internal platform to manage automated Playwright tests, organized by company, project, case and run, with evidence reports. Made with TypeScript, Node.js, PostgreSQL and Prisma.',
        ],
      },
      {
        period: 'Feb 2024 – Jan 2025',
        role: 'Systems analyst',
        company: 'SURA, Servicios de Salud IPS Suramericana S.A.S.',
        location: 'Medellín, Colombia',
        highlights: [
          'Moved the cache of a Scala orchestrator service, the bridge between the insurance core and the frontend, from a distributed cache (Oracle Coherence) to a local in-memory cache with Ehcache.',
          'Implemented business requirements in the backend (Java Spring Boot, Scala Play Framework, RabbitMQ) and frontend (Angular) of voluntary insurance applications, such as home, fire and pet insurance.',
          'Delivered new business features and supported the applications, following incidents and defects through to resolution with other teams.',
          'Worked in agile teams with clean code, Git and continuous integration and delivery (CI/CD) practices.',
        ],
      },
    ],
  },
  project: {
    heading: 'Personal project',
    name: 'Autogestion',
    summary:
      'When you work on several projects at once, credentials per environment, contacts and calendars end up scattered across notes and chats. Autogestion brings them into one self-hosted app, with recurring tasks, notes and Google and Microsoft calendars, and encrypts every secret at rest.',
    decisionsHeading: 'Technical decisions',
    decisions: [
      'Secrets are encrypted at rest with AES-256-GCM and a random IV per secret. They only leave the server when the user reveals or copies them.',
      'The password is stored as a scrypt hash in PostgreSQL, and sessions last 12 hours in an httpOnly cookie.',
      'Login attempts are rate limited per IP, with the counts stored in PostgreSQL.',
      'The database can be backed up and restored from .sql or .sql.gz files.',
      'Unit tests with Vitest and end-to-end tests with Playwright.',
    ],
    stackHeading: 'Technologies',
    stack: PROJECT_STACK,
    repoLabel: 'View the code on GitHub',
    repoHref: REPO_HREF,
    demoLabel: 'Open the demo',
    demoHref: DEMO_HREF,
    demoNote: 'The demo requires signing in.',
    images: PROJECT_IMAGES.map(({ alt, ...image }) => ({ ...image, alt: alt.en })),
  },
  stack: {
    heading: 'Tech stack',
    groups: [
      { name: 'Languages', items: ['Java', 'Scala', 'TypeScript', 'JavaScript', 'SQL'] },
      { name: 'Backend', items: ['Spring Boot', 'Play Framework', 'Node.js', 'Express', 'REST APIs', 'Microservices'] },
      { name: 'Messaging and caching', items: ['RabbitMQ', 'Redis', 'Ehcache'] },
      { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Prisma ORM'] },
      { name: 'Frontend', items: ['Angular', 'HTML', 'CSS'] },
      { name: 'Containers and DevOps', items: ['Docker', 'Kubernetes', 'Git', 'Jenkins', 'CI/CD', 'SonarQube'] },
      { name: 'Testing', items: ['JUnit', 'Mockito', 'Jest', 'Playwright'] },
      { name: 'Methods', items: ['Scrum', 'Clean code'] },
      { name: 'Learning now', items: ['AWS (Cloud Practitioner)'] },
    ],
  },
  education: {
    heading: 'Education',
    degreeHeading: 'University',
    degree: {
      title: 'Systems Engineering',
      school: 'Universidad del Valle',
      location: 'Tuluá, Colombia',
      period: 'Aug 2019 – Feb 2025',
    },
    coursesHeading: 'Courses and certifications',
    courses: [
      { name: 'SI Architect Certification', provider: 'MongoDB' },
      { name: 'Docker', provider: 'Udemy' },
      { name: 'Kubernetes', provider: 'Udemy · in progress' },
      { name: 'Angular & Spring Boot', provider: 'Udemy' },
      { name: 'Angular: de cero a experto', provider: 'Udemy' },
    ],
    languagesHeading: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Basic (A2–B1)' },
    ],
  },
  contact: {
    heading: "Let's talk",
    text: 'If you have a remote backend role with Java and Spring Boot, email me.',
    email: EMAIL,
    copyLabel: 'Copy email',
    copiedLabel: 'Email copied',
    copyFailedLabel: 'Could not copy. Select the email and copy it manually.',
    links: contactLinks('Phone'),
  },
  footer: {
    owner: 'Gustavo Adolfo Gutiérrez Agudelo',
    cvLabel: 'Download CV (Spanish)',
    backToTop: 'Back to top',
  },
};

export const PORTFOLIO_CONTENT: Record<Lang, PortfolioContent> = { es: ES, en: EN };
