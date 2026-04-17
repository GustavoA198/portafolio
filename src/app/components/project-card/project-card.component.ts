import { Component, input } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  project = input.required<ProjectItem>();

  constructor(public readonly portfolioService: PortfolioService) {}
}
