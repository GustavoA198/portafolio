import { Component } from '@angular/core';
import { PortfolioContactComponent } from './components/portfolio-contact/portfolio-contact.component';
import { PortfolioExperienceComponent } from './components/portfolio-experience/portfolio-experience.component';
import { PortfolioFooterComponent } from './components/portfolio-footer/portfolio-footer.component';
import { PortfolioHeroComponent } from './components/portfolio-hero/portfolio-hero.component';
import { PortfolioNavbarComponent } from './components/portfolio-navbar/portfolio-navbar.component';
//import { PortfolioProjectsComponent } from './components/portfolio-projects/portfolio-projects.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    PortfolioNavbarComponent,
    PortfolioHeroComponent,
    PortfolioExperienceComponent,
    //PortfolioProjectsComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent,
  ],
  templateUrl: './portfolio-page.component.html',
})
export class PortfolioPageComponent {}
