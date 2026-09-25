import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FeaturedProjectsItemData {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-featured-project-item',
  imports: [RouterLink],
  templateUrl: './featured-project-item.html',
  styleUrl: './featured-project-item.css',
})

export class FeaturedProjectsItem {
  @Input() featuredProject!: FeaturedProjectsItemData;
}