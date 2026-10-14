import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-education.component.html',
})
export class PortfolioEducationComponent {
  private readonly content = injectPortfolioContent();

  protected readonly education = computed(() => this.content().education);
}
