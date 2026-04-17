import { Component } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(public readonly portfolioService: PortfolioService) {}
}
