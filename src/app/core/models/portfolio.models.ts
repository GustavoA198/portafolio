export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Profile {
  name: string;
  role: LocalizedText;
  headline: LocalizedText;
  summary: LocalizedText;
  location: string;
  avatarUrl: string;
  cvUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: LocalizedText;
  period: string;
  summary: LocalizedText;
  stack: string[];
}

export interface ProjectItem {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface SkillGroup {
  title: LocalizedText;
  skills: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface PortfolioContent {
  profile: Profile;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  contacts: ContactLink[];
}
