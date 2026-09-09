import { Component } from '@angular/core';
import { SkillCategory, SkillCategoryData } from './skill-category/skill-category';
import { TranslateService } from '../../services/translate';

@Component({
  selector: 'app-skills',
  imports: [SkillCategory],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  constructor(public translation: TranslateService) { }

  get text() {
    return this.translation.translations.home.skills;
  }

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
          name: 'Python',
          icon: 'diPythonOriginal'
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
