import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matBackup, matDashboard, matStorage, matCloud, } from '@ng-icons/material-icons/baseline';
import {
  diNodejsOriginal,
  diExpressOriginal,
  diPythonOriginal,
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
  diUbuntuOriginal
} from '@ng-icons/devicon/original';

export interface SkillCategoryData {
  title: string;
  icon: string;
  skillsIcons: SkillData[];
}

interface SkillData {
  name: string;
  icon: string;
}

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
      diPythonOriginal,
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
      diUbuntuOriginal
    })
  ],
})
export class SkillCategory {
  @Input() skill!: SkillCategoryData;
}