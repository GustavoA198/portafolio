import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PortfolioContactComponent } from './components/portfolio-contact/portfolio-contact.component';
import { PortfolioEducationComponent } from './components/portfolio-education/portfolio-education.component';
import { PortfolioExperienceComponent } from './components/portfolio-experience/portfolio-experience.component';
import { PortfolioFooterComponent } from './components/portfolio-footer/portfolio-footer.component';
import { PortfolioHeroComponent } from './components/portfolio-hero/portfolio-hero.component';
import { PortfolioNavbarComponent } from './components/portfolio-navbar/portfolio-navbar.component';
import { PortfolioProfileComponent } from './components/portfolio-profile/portfolio-profile.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { PortfolioStackComponent } from './components/portfolio-stack/portfolio-stack.component';
import { injectPortfolioContent } from './portfolio-content';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    PortfolioNavbarComponent,
    PortfolioHeroComponent,
    PortfolioProfileComponent,
    PortfolioExperienceComponent,
    PortfolioProjectComponent,
    PortfolioStackComponent,
    PortfolioEducationComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-page.component.html',
})
export class PortfolioPageComponent {
  private readonly content = injectPortfolioContent();

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);
    effect(() => {
      const { title: pageTitle, description } = this.content().meta;
      title.setTitle(pageTitle);
      meta.updateTag({ name: 'description', content: description });
    });
  }
}
