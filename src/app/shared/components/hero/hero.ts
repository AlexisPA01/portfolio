import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelope } from '@ng-icons/bootstrap-icons';
import { TranslateService } from '../../services/translate';
import { CVService } from '../../services/cv';

@Component({
  selector: 'app-hero',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapEnvelope
    })
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(public translation: TranslateService, public cv: CVService) { }

  get text() {
    return this.translation.translations.home.hero;
  }
}
