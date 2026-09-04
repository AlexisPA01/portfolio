export interface ProjectData {
    id: string;
    technologies: string[];
    image: string;
    architectureImage: string;
    github: string;
    demo: string;
}

export const PROJECTS: ProjectData[] = [

    {
        id: '1',
        technologies: [
            'Node.js',
            'Express',
            'PostgreSQL',
            'Docker',
            'JWT',
            'Swagger'
        ],
        image: '/assets/images/projects/flow-task.png',
        architectureImage:
            '/assets/images/projects/flow-task-architecture.png',
        github: 'https://github.com/...',
        demo: 'https://...'
    }

];