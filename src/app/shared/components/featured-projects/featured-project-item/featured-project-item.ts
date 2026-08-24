import { Component, Input } from '@angular/core';

export interface FeaturedProjectsItemData {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-featured-project-item',
  imports: [],
  templateUrl: './featured-project-item.html',
  styleUrl: './featured-project-item.css',
})

export class FeaturedProjectsItem {
  @Input() featuredProject!: FeaturedProjectsItemData;
}