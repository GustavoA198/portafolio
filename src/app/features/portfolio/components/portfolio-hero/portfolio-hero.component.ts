import { Component } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  templateUrl: './portfolio-hero.component.html',
  styleUrls: ['./portfolio-hero.component.css'],
})
export class PortfolioHeroComponent {
  protected readonly content = PORTFOLIO_CONTENT.hero;
}
