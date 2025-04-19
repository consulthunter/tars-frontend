import type {Project} from "./project.ts";

export interface TarsStore {
    projects: {
        loading: boolean;
        data: Project[];
    };
}
