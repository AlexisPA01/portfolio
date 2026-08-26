import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectItem, ProjectItemData } from './project-item/project-item';

@Component({
  selector: 'app-projects',
  imports: [ProjectItem],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: ProjectItemData[] = [
    {
      title: 'Development Team Lead',
      image: 'placeholder-background.png',
      description:
        'Liderazgo del equipo de desarrollo y construcción de soluciones web.',
      technologies: [
        'Angular',
        'Node.js',
        'PostgreSQL',
        'AWS'
      ],
      startDate: '20/12/2021',
      endDate: 'Actualidad',
      isPersonalProject: false,
      githubUrl: 'https://www.google.com/',
      projectUrl: 'https://www.google.com/'
    },
    {
      title: 'Full Stack Developer',
      image: 'placeholder-background.png',
      description:
        'Desarrollo de aplicaciones web y APIs utilizando tecnologías modernas.',
      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'AWS'
      ],
      startDate: '20/12/2021',
      endDate: '25/06/2025',
      isPersonalProject: false,
      githubUrl: 'https://www.google.com/',
      projectUrl: 'https://www.google.com/'
    },
    {
      title: 'Full Stack Developer',
      image: 'placeholder-background.png',
      description:
        'Desarrollo de aplicaciones web y APIs utilizando tecnologías modernas.',
      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'AWS'
      ],
      startDate: '20/12/2021',
      endDate: '25/06/2025',
      isPersonalProject: false,
      githubUrl: 'https://www.google.com/',
      projectUrl: 'https://www.google.com/'
    }
  ];
}
