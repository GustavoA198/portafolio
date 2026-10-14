import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { injectPortfolioContent } from '../../portfolio-content';
import { SystemDiagramComponent } from '../system-diagram/system-diagram.component';

@Component({
  selector: 'app-portfolio-hero',
  imports: [IconComponent, SystemDiagramComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-hero.component.html',
})
export class PortfolioHeroComponent {
  private readonly content = injectPortfolioContent();

  protected readonly hero = computed(() => this.content().hero);
  protected readonly diagram = computed(() => this.content().diagram);
  protected readonly profileLinks = computed(() => this.content().contact.links.filter((link) => link.external));
  protected readonly newTab = computed(() => this.content().ui.newTab);
}
