import { Injectable, computed, signal } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../data/portfolio.data';
import { Language, LocalizedText } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly languageState = signal<Language>('es');

  readonly language = this.languageState.asReadonly();
  readonly content = PORTFOLIO_CONTENT;

  readonly navigation = computed(() => {
    if (this.language() === 'es') {
      return [
        { href: '#inicio', label: 'Inicio' },
        { href: '#sobre-mi', label: 'Sobre mi' },
        { href: '#experiencia', label: 'Experiencia' },
        { href: '#proyectos', label: 'Proyectos' },
        { href: '#contacto', label: 'Contacto' },
      ];
    }

    return [
      { href: '#inicio', label: 'Home' },
      { href: '#sobre-mi', label: 'About' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#proyectos', label: 'Projects' },
      { href: '#contacto', label: 'Contact' },
    ];
  });

  setLanguage(language: Language): void {
    this.languageState.set(language);
  }

  t(value: LocalizedText): string {
    return value[this.language()];
  }
}
