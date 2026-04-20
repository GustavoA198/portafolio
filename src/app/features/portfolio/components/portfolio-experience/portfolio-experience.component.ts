import { Component } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-experience',
  standalone: true,
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.css'],
})
export class PortfolioExperienceComponent {
  protected readonly timeline = PORTFOLIO_CONTENT.timeline;
  protected readonly skills = PORTFOLIO_CONTENT.skills;
}
