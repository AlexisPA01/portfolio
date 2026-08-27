import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapEnvelope, bootstrapLinkedin, bootstrapGithub, bootstrapPerson, bootstrapHandThumbsUp, bootstrapDownload } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-contact',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapEnvelope,
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapPerson,
      bootstrapHandThumbsUp,
      bootstrapDownload
    })
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact { }
