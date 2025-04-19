<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import type { TarsStore } from "../types/tarsStore.ts"

// Inject the store from the parent component (App.vue)
const tarsStore = inject<TarsStore>('tarsStore')
console.log('Projects in store:', tarsStore?.projects.data); // Add this to check the store content

// Use the router to programmatically navigate
const router = useRouter()

// Function to navigate to a specific project page
const goToProject = (id: number) => {
  router.push({ name: 'ProjectDetail', params: { id } })
}
</script>

<template>
  <h1>Dashboard</h1>
  <div class="project-list">
    <!-- Access projects.data directly here -->
    <div v-for="project in tarsStore?.projects.data"
    :key="project.id"
    class="project-card"
    @click="goToProject(project.id)"
    >
    <h3>{{ project.name }}</h3>
    <p>{{ project.url }}</p>  <!-- Assuming 'url' exists in your project -->
  </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
