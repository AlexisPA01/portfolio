import { Component, ChangeDetectionStrategy } from '@angular/core';
import { About } from '../../shared/components/about/about';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { Experience } from '../../shared/components/experience/experience';
import { FeaturedProjects } from '../../shared/components/featured-projects/featured-projects';
import { Hero } from '../../shared/components/hero/hero';
import { Skills } from '../../shared/components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [About, ContactCta, Experience, FeaturedProjects, Hero, Skills],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {}
