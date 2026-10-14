import { computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_CONTENT } from './models/portfolio-content';

export function injectPortfolioContent() {
  const language = inject(LanguageService);
  return computed(() => PORTFOLIO_CONTENT[language.lang()]);
}
