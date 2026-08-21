import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelope } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-hero',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapEnvelope
    })
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero { }
