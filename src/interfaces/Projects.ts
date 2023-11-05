export type FrontendProject = {
    id: string
    stacks: string[]
    title: string
    description: string
    image?: string
    type: 'active' | 'disabled'
    url?: string
};

export type DataScienceProject = {
    id: string
    title: string
    projectLink: string
    subtitle?: string
    subtitleLink?: string
    text: string
    image?: string
    figcaption: string
};