import { createWebHistory, createRouter } from 'vue-router'

import DashboardView from "./pages/DashboardView.vue";
import StatusView from "./pages/StatusView.vue";
import ReportsView from "./pages/ReportsView.vue";
import ProjectsView from "./pages/ProjectsView.vue";
import ProjectDetailsView from "./pages/ProjectDetailsView.vue";

const routes = [
    { path: '/', component:  DashboardView },
    { path: '/projects', component: ProjectsView },
    { path: '/reports', component: ReportsView },
    { path: '/status', component: StatusView },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: ProjectDetailsView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router