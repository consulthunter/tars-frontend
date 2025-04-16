import { createWebHistory, createRouter } from 'vue-router'

import DashboardView from "./pages/DashboardView.vue";
import StatusView from "./pages/StatusView.vue";
import ReportsView from "./pages/ReportsView.vue";
import ProjectsView from "./pages/ProjectsView.vue";

const routes = [
    { path: '/', component:  DashboardView },
    { path: '/projects', component: ProjectsView },
    { path: '/reports', component: ReportsView },
    { path: '/status', component: StatusView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router