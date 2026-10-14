import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-stack.component.html',
})
export class PortfolioStackComponent {
  private readonly content = injectPortfolioContent();

  protected readonly stack = computed(() => this.content().stack);
}
