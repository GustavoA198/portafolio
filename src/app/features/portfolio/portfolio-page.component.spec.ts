import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../core/i18n/language.service';
import { PORTFOLIO_CONTENT } from './models/portfolio-content';
import { PortfolioPageComponent } from './portfolio-page.component';

describe('PortfolioPageComponent', () => {
  beforeEach(async () => {
    localStorage.setItem('portfolio.lang', 'es');
    await TestBed.configureTestingModule({ imports: [PortfolioPageComponent] }).compileComponents();
  });

  afterEach(() => localStorage.removeItem('portfolio.lang'));

  function render() {
    const fixture = TestBed.createComponent(PortfolioPageComponent);
    fixture.detectChanges();
    return { fixture, element: fixture.nativeElement as HTMLElement };
  }

  it('renders every section the navigation points to', () => {
    const { element } = render();
    for (const link of PORTFOLIO_CONTENT.es.nav) {
      expect(element.querySelector(link.href)).withContext(link.href).not.toBeNull();
    }
  });

  it('switches the copy and the page title when the language changes', () => {
    const { fixture, element } = render();
    expect(element.querySelector('#experience-heading')?.textContent?.trim()).toBe('Experiencia');

    TestBed.inject(LanguageService).setLang('en');
    fixture.detectChanges();

    expect(element.querySelector('#experience-heading')?.textContent?.trim()).toBe('Experience');
    expect(TestBed.inject(Title).getTitle()).toBe(PORTFOLIO_CONTENT.en.meta.title);
  });

  it('shows where a technology was used when its diagram node is selected', () => {
    const { fixture, element } = render();
    const redis = element.querySelectorAll<SVGGElement>('svg.diagram--wide .diagram__node')[2];
    redis.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    const caption = element.querySelector('figcaption')?.textContent ?? '';
    expect(caption).toContain('Redis');
    expect(caption).toContain('VortexBird');
  });

  it('offers the CV as a download', () => {
    const { element } = render();
    const cv = element.querySelector<HTMLAnchorElement>('a[download]');
    expect(cv?.getAttribute('href')).toBe(PORTFOLIO_CONTENT.es.hero.cvHref);
  });
});
