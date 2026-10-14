import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { injectPortfolioContent } from '../../portfolio-content';

@Component({
  selector: 'app-portfolio-footer',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-footer.component.html',
})
export class PortfolioFooterComponent {
  private readonly content = injectPortfolioContent();

  protected readonly footer = computed(() => this.content().footer);
  protected readonly hero = computed(() => this.content().hero);
  protected readonly year = new Date().getFullYear();
}
