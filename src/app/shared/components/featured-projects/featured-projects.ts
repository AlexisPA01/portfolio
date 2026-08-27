import { Component } from '@angular/core';
import { FeaturedProjectsItem, FeaturedProjectsItemData } from './featured-project-item/featured-project-item';

@Component({
  selector: 'app-featured-projects',
  imports: [FeaturedProjectsItem],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css',
})
export class FeaturedProjects {
  featuredProjects: FeaturedProjectsItemData[] = [
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
      ]
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
      ]
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
      ]
    }
  ];
}
