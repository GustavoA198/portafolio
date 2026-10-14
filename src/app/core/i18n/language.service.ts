import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export const LANGS: readonly Lang[] = ['es', 'en'];

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.initialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      try {
        this.document.defaultView?.localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Sin almacenamiento disponible: el idioma solo dura esta visita
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  private initialLang(): Lang {
    const view = this.document.defaultView;
    try {
      const stored = view?.localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        return stored;
      }
    } catch {
      // Sin almacenamiento disponible: se decide por el navegador
    }
    const browser = view?.navigator.language?.toLowerCase() ?? '';
    return browser.startsWith('en') ? 'en' : 'es';
  }
}
