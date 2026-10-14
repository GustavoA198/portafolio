import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  const STORAGE_KEY = 'portfolio.lang';

  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    TestBed.resetTestingModule();
  });

  afterEach(() => localStorage.removeItem(STORAGE_KEY));

  it('uses the stored language when there is one', () => {
    localStorage.setItem(STORAGE_KEY, 'en');
    const service = TestBed.inject(LanguageService);
    expect(service.lang()).toBe('en');
  });

  it('ignores an invalid stored value', () => {
    localStorage.setItem(STORAGE_KEY, 'fr');
    const service = TestBed.inject(LanguageService);
    expect(['es', 'en']).toContain(service.lang());
  });

  it('updates the document language and persists the choice', () => {
    const service = TestBed.inject(LanguageService);
    service.setLang('en');
    TestBed.flushEffects();
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('en');

    service.setLang('es');
    TestBed.flushEffects();
    expect(document.documentElement.lang).toBe('es');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('es');
  });
});
