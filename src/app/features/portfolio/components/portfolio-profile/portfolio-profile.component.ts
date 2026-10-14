import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-profile.component.html',
})
export class PortfolioProfileComponent {
  private readonly content = injectPortfolioContent();

  protected readonly profile = computed(() => this.content().profile);
}
