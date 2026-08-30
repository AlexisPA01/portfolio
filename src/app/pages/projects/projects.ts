import { Component } from '@angular/core';
import { ProjectItem, ProjectItemData } from './project-item/project-item';
import { TranslateService } from '../../shared/services/translate';

@Component({
  selector: 'app-projects',
  imports: [ProjectItem],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(public translation: TranslateService) { }

  get text() {
    return this.translation.translations.projects;
  }

  get projects(): ProjectItemData[] {
    return this.translation.translations.projects.projects;
  }
}
