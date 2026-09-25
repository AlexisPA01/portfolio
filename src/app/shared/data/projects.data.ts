export interface ProjectData {
    id: string;
    technologies: string[];
    image: string;
    image2?: string;
    architectureImage: string;
    githubUrl: string;
    demoUrl: string;
}

export const PROJECTS: ProjectData[] = [
    {
        id: '1',
        technologies: [
            "Angular",
            "Ionic",
            "Express.js",
            "JWT",
            "MySQL",
            "AWS",
            "Ubuntu"
        ],
        image: 'projects/ims-pwa.png',
        image2: 'projects/ims-web.png',
        architectureImage:
            'projects/ims-architecture.png',
        githubUrl: "https://vcloud04.vit.com.co/",
        demoUrl: "https://imsmanager-pwa.web.app/"
    },
    {
        id: '2',
        technologies: [
            "Angular",
            "Ionic",
            "Android",
            "iOS",
            "Express.js",
            "MySQL",
            "AWS",
            "Ubuntu"
        ],
        image: 'projects/emhotels-app.png',
        image2: 'projects/emhotels-app2.png',
        architectureImage:
            'projects/emhotels-architecture.png',
        githubUrl: "https://play.google.com/store/search?q=em%20hotels&c=apps",
        demoUrl: "https://emhotels.co/"
    },
    {
        id: '3',
        technologies: [
            "Angular",
            "Flask",
            "Node.js",
            "MongoDB",
            "AWS",
            "Authorized Buyers"
        ],
        image: 'projects/clicads.png',
        image2: 'projects/clicads2.png',
        architectureImage:
            'projects/clicads-architecture.png',
        githubUrl: "https://clic-ads.com.co/",
        demoUrl: "https://clic-ads.com.co/"
    },
    {
        id: '4',
        "technologies": [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "JWT",
            "Zod",
            "Swagger",
            "Vitest",
            "Supertest"
        ],
        image: 'projects/flow-task.png',
        architectureImage:
            'projects/flowtask-architecture.png',
        githubUrl: "https://github.com/AlexisPA01/flow-task",
        demoUrl: "https://flow-task.alexis-patino.xyz/docs/"
    },
    {
        id: '5',
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        image: 'projects/simple-web.png',
        image2: 'projects/simple-web2.png',
        architectureImage:
            'projects/simpleweb-architecture.png',
        githubUrl: "https://github.com/AlexisPA01/simple-web-layout",
        demoUrl: "https://simple-web-layout.alexis-patino.xyz/"
    }
];