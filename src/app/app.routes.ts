import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'project-detail/:id',
        component: ProjectDetail
    },
    {
        path: 'contact',
        component: Contact
    }
];
