export type DiagramNodeId = 'angular' | 'api' | 'cache' | 'queue' | 'worker' | 'db' | 'docker';

export type DiagramEdgeId = 'http' | 'lookup' | 'publish' | 'deliver' | 'write';

export interface NavLink {
  label: string;
  href: string;
}

export interface DiagramNode {
  id: DiagramNodeId;
  name: string;
  role: string;
  detail: string;
}

export interface Fact {
  term: string;
  value: string;
}

export interface Job {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Course {
  name: string;
  provider: string;
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: 'linkedin' | 'github' | 'phone';
  external: boolean;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    skipLink: string;
    sectionsLabel: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    languageNames: { es: string; en: string };
    newTab: string;
  };
  nav: NavLink[];
  hero: {
    firstName: string;
    lastName: string;
    role: string;
    summary: string;
    availability: string;
    cvLabel: string;
    cvHref: string;
    cvFileName: string;
    contactLabel: string;
  };
  diagram: {
    title: string;
    hint: string;
    nodes: DiagramNode[];
    edges: Record<DiagramEdgeId, string>;
    legend: { sync: string; async: string };
  };
  profile: {
    heading: string;
    paragraphs: string[];
    facts: Fact[];
    photoAlt: string;
  };
  experience: {
    heading: string;
    jobs: Job[];
  };
  project: {
    heading: string;
    name: string;
    summary: string;
    decisionsHeading: string;
    decisions: string[];
    stackHeading: string;
    stack: string[];
    repoLabel: string;
    repoHref: string;
    demoLabel: string;
    demoHref: string;
    demoNote: string;
    images: ProjectImage[];
  };
  stack: {
    heading: string;
    groups: StackGroup[];
  };
  education: {
    heading: string;
    degreeHeading: string;
    degree: {
      title: string;
      school: string;
      location: string;
      period: string;
    };
    coursesHeading: string;
    courses: Course[];
    languagesHeading: string;
    languages: SpokenLanguage[];
  };
  contact: {
    heading: string;
    text: string;
    email: string;
    copyLabel: string;
    copiedLabel: string;
    copyFailedLabel: string;
    links: ContactLink[];
  };
  footer: {
    owner: string;
    cvLabel: string;
    backToTop: string;
  };
}
