import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelope, bootstrapStar } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-about',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapGithub,
      bootstrapStar
    })
  ],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.css',
})
export class About { }
