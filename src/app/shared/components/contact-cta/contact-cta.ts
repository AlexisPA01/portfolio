import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate';

@Component({
  selector: 'app-contact-cta',
  imports: [],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.css',
})
export class ContactCta {
  constructor(public translation: TranslateService) { }

  get text() {
    return this.translation.translations.home.contact;
  }
}
