import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LANGS, Lang, LanguageService } from '../../../../core/i18n/language.service';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-navbar',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-navbar.component.html',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class PortfolioNavbarComponent {
  private readonly language = inject(LanguageService);
  private readonly content = injectPortfolioContent();

  protected readonly langs = LANGS;
  protected readonly lang = this.language.lang;
  protected readonly ui = computed(() => this.content().ui);
  protected readonly nav = computed(() => this.content().nav);
  protected readonly hero = computed(() => this.content().hero);
  protected readonly menuOpen = signal(false);

  protected setLang(lang: Lang): void {
    this.language.setLang(lang);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
