import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapStar } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-about',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapStar
    })
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About { }
