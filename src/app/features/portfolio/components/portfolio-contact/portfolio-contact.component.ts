import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO_CONTENT } from '../../models/portfolio-content';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.css'],
})
export class PortfolioContactComponent {
  protected readonly contact = PORTFOLIO_CONTENT.contact;

  protected formData = {
    name: '',
    email: '',
    message: '',
  };

  protected sendMessage(): void {
    const subject = `Nuevo mensaje desde el portafolio - ${this.formData.name || 'Sin nombre'}`;
    const bodyLines = [
      `Nombre: ${this.formData.name || 'No especificado'}`,
      `Correo: ${this.formData.email || 'No especificado'}`,
      '',
      this.formData.message || 'Sin mensaje',
    ];

    const gmailComposeUrl = new URL('https://mail.google.com/mail/');
    gmailComposeUrl.searchParams.set('view', 'cm');
    gmailComposeUrl.searchParams.set('fs', '1');
    gmailComposeUrl.searchParams.set('to', this.contact.email);
    gmailComposeUrl.searchParams.set('su', subject);
    gmailComposeUrl.searchParams.set('body', bodyLines.join('\n'));

    window.open(gmailComposeUrl.toString(), '_blank', 'noopener,noreferrer');
  }
}
