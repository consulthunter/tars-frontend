import axios from "axios";

export const getProjects = async (tarsStore: any) => {
    tarsStore.projects.loading = true; // Set loading to true initially

    try {
        const projectsData = await axios.get('http://localhost:8000/tars/api/projects');
        tarsStore.projects.data = projectsData.data;
        console.log(tarsStore.projects.data);

    } catch (error) {
        console.error('Error fetching TARS Projects:', error);
    } finally {
        tarsStore.projects.loading = false; // Set loading to false when done
    }
}