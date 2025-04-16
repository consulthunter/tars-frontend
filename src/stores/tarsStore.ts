import {reactive} from "vue";

const store = reactive({
    projects: {
        loading: false,
        data: {},
    }
})

export default () => ({
    store
})