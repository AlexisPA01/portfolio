import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLink, bootstrapPerson, bootstrapBuilding } from '@ng-icons/bootstrap-icons';

export interface ProjectItemData {
  title: string;
  image: string;
  description: string;
  technologies: string[];

  startDate?: string;
  endDate?: string;
  isPersonalProject: boolean;
  personalProject: string;
  companyProject: string;
  githubBtn: string;
  githubUrl?: string;
  projectBtn: string;
  projectUrl?: string;
}

@Component({
  selector: 'app-project-item',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapGithub,
      bootstrapLink,
      bootstrapPerson,
      bootstrapBuilding
    })
  ],
  templateUrl: './project-item.html',
  styleUrl: './project-item.css',
})

export class ProjectItem {
  @Input() project!: ProjectItemData;
}
