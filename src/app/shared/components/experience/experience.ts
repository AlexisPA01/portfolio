import { Component } from '@angular/core';
import { ExperienceItem, ExperienceItemData } from './experience-item/experience-item';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItem],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItemData[] = [
    {
      company: 'Empresa A',
      position: 'Development Team Lead',
      startDate: '2024',
      endDate: 'Present',
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
      company: 'Empresa B',
      position: 'Full Stack Developer',
      startDate: '2022',
      endDate: '2024',
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
