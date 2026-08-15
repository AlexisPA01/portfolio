import { Component } from '@angular/core';
import { Github, Linkedin, Mail } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  imports: [
    Github,
    Linkedin,
    Mail
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero { }
