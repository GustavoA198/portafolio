import { Component } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  constructor(public readonly portfolioService: PortfolioService) {}
}
