import { Component } from '@angular/core';
import { ExperienceItem, ExperienceItemData } from './experience-item/experience-item';
import { TranslateService } from '../../services/translate';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItem],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  constructor(public translation: TranslateService) { }

  get text() {
    return this.translation.translations.home.experience;
  }

  get experiences(): ExperienceItemData[] {
    return this.translation.translations.home.experience.experiences;
  }
}
