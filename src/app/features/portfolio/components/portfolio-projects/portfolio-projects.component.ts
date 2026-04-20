import { Component } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.css'],
})
export class PortfolioProjectsComponent {
  protected readonly projects = PORTFOLIO_CONTENT.projects;
}
