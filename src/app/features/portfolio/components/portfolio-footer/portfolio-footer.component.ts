import { Component } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  templateUrl: './portfolio-footer.component.html',
  styleUrls: ['./portfolio-footer.component.css'],
})
export class PortfolioFooterComponent {
  protected readonly footer = PORTFOLIO_CONTENT.footer;
}
