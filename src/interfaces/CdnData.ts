import { DataScienceProject, FrontendProject } from "./Projects";

export type TabsNames = 'aboutMe' | 'dataScience' | 'frontend'

export type CdnData = {
    header: {
        title: string;
        linkedin: string;
        localization: string;
    },
    main: {
        tabs: Record<TabsNames, string>;
        about: {
            title: string;
            text: string;
        };
        frontend: {
            soon: string;
            opening: string;
            projects: FrontendProject[]
        };
        dataScience:DataScienceProject[];
    }
};