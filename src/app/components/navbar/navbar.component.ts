import { Component } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public readonly portfolioService: PortfolioService) {}
}
