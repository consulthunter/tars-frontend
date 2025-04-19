import axios from "axios";
import type {Project} from "../types/project.ts";
import type {TarsStore} from "../types/tarsStore.ts";

export const getProjects = async (tarsStore: TarsStore) => {
    tarsStore.projects.loading = true; // Set loading to true initially

    try {
        const projectsData = await axios.get<Project[]>('http://localhost:8000/tars/api/projects');
        tarsStore.projects.data = projectsData.data;
        console.log(tarsStore.projects.data);

    } catch (error) {
        console.error('Error fetching TARS Projects:', error);
    } finally {
        tarsStore.projects.loading = false; // Set loading to false when done
    }
}