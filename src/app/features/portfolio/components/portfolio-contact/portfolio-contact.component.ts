import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { injectPortfolioContent } from '../../portfolio-content';

type CopyState = 'idle' | 'copied' | 'failed';

@Component({
  selector: 'app-portfolio-contact',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-contact.component.html',
})
export class PortfolioContactComponent {
  private readonly document = inject(DOCUMENT);
  private readonly content = injectPortfolioContent();
  private resetTimer: ReturnType<typeof setTimeout> | undefined;

  protected readonly contact = computed(() => this.content().contact);
  protected readonly newTab = computed(() => this.content().ui.newTab);
  protected readonly copyState = signal<CopyState>('idle');

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await this.document.defaultView!.navigator.clipboard.writeText(this.contact().email);
      this.copyState.set('copied');
    } catch {
      this.copyState.set('failed');
    }
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copyState.set('idle'), 4000);
  }
}
