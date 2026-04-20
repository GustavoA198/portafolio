import { Component } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-navbar',
  standalone: true,
  templateUrl: './portfolio-navbar.component.html',
  styleUrls: ['./portfolio-navbar.component.css'],
})
export class PortfolioNavbarComponent {
  protected readonly content = PORTFOLIO_CONTENT;
}
