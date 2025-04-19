import {reactive} from "vue";
import type {Project} from "../types/project.ts";

const store = reactive({
    projects: {
        loading: false,
        data: [] as Project[],
    }
})

export default () => ({
    store
})