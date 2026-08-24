import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SkillCategory, SkillCategoryData } from './skill-category/skill-category';

@Component({
  selector: 'app-skills',
  imports: [SkillCategory],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories: SkillCategoryData[] = [
    {
      title: 'Backend',
      icon: 'matBackup',
      skillsIcons: [
        {
          name: 'Node.js',
          icon: 'diNodejsOriginal'
        },
        {
          name: 'Express',
          icon: 'diExpressOriginal'
        },
        {
          name: 'FastAPI',
          icon: 'diFastapiOriginal'
        }
      ]
    },
    {
      title: 'Frontend',
      icon: 'matDashboard',
      skillsIcons: [
        {
          name: 'Angular',
          icon: 'diAngularOriginal'
        },
        {
          name: 'Ionic',
          icon: 'diIonicOriginal'
        },
        {
          name: 'JavaScript',
          icon: 'diJavascriptOriginal'
        },
        {
          name: 'HTML',
          icon: 'diHtml5Original'
        },
        {
          name: 'CSS',
          icon: 'diCss3Original'
        }
      ]
    },
    {
      title: 'Database',
      icon: 'matStorage',
      skillsIcons: [
        {
          name: 'PostgreSQL',
          icon: 'diPostgresqlOriginal'
        },
        {
          name: 'MySQL',
          icon: 'diMysqlOriginal'
        },
        {
          name: 'MongoDB',
          icon: 'diMongodbOriginal'
        }
      ]
    },
    {
      title: 'Cloud',
      icon: 'matCloud',
      skillsIcons: [
        {
          name: 'AWS',
          icon: 'diAmazonwebservicesOriginalWordmark'
        },
        {
          name: 'Nginx',
          icon: 'diNginxOriginal'
        }
      ]
    }
  ];
}
