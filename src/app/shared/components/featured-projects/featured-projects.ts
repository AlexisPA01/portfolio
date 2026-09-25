import { Component } from '@angular/core';
import { FeaturedProjectsItem, FeaturedProjectsItemData } from './featured-project-item/featured-project-item';
import { TranslateService } from '../../services/translate';

@Component({
  selector: 'app-featured-projects',
  imports: [FeaturedProjectsItem],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css',
})
export class FeaturedProjects {
  constructor(public translation: TranslateService) { }

  get text() {
    return this.translation.translations.home.featuredProjects;
  }

  get featuredProjects(): FeaturedProjectsItemData[] {
    return this.translation.translations.home.featuredProjects.projects;
  }
}
