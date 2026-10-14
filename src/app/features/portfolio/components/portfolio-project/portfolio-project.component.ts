import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-project',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-project.component.html',
})
export class PortfolioProjectComponent {
  private readonly content = injectPortfolioContent();

  protected readonly project = computed(() => this.content().project);
  protected readonly newTab = computed(() => this.content().ui.newTab);
}
