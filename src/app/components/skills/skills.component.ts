import { Component } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  constructor(public readonly portfolioService: PortfolioService) {}
}
