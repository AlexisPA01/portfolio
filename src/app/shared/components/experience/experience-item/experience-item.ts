import { Component, Input } from '@angular/core';

export interface ExperienceItemData {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.html',
  styleUrl: './experience-item.css',
})
export class ExperienceItem {
  @Input() experience!: ExperienceItemData;
}
