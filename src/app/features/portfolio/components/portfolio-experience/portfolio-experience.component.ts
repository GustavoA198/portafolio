import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-experience.component.html',
})
export class PortfolioExperienceComponent {
  private readonly content = injectPortfolioContent();

  protected readonly experience = computed(() => this.content().experience);
}
