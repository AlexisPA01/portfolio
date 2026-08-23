import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matBackup, matDashboard, matStorage, matCloud, } from '@ng-icons/material-icons/baseline';
import {
  diNodejsOriginal,
  diExpressOriginal,
  diFastapiOriginal,
  diAngularOriginal,
  diIonicOriginal,
  diJavascriptOriginal,
  diHtml5Original,
  diCss3Original,
  diPostgresqlOriginal,
  diMysqlOriginal,
  diMongodbOriginal,
  diAmazonwebservicesOriginalWordmark,
  diNginxOriginal
} from '@ng-icons/devicon/original';

@Component({
  selector: 'app-skill-category',
  standalone: true,
  templateUrl: './skill-category.html',
  styleUrl: './skill-category.css',
  imports: [NgIcon],
  providers: [
    provideIcons({
      matBackup,
      matDashboard,
      matStorage,
      matCloud,
      diNodejsOriginal,
      diExpressOriginal,
      diFastapiOriginal,
      diAngularOriginal,
      diIonicOriginal,
      diJavascriptOriginal,
      diHtml5Original,
      diCss3Original,
      diPostgresqlOriginal,
      diMysqlOriginal,
      diMongodbOriginal,
      diAmazonwebservicesOriginalWordmark,
      diNginxOriginal
    })
  ],
})
export class SkillCategory {
  @Input() title = '';
  @Input() icon = '';
  @Input() skills: Skill[] = [];
}

export class Skill {
  name: string = '';
  icon: string = '';
}