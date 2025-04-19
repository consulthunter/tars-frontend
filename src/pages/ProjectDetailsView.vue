<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import type { TarsStore } from "../types/tarsStore.ts"
import type { Project } from "../types/project.ts"

// Access the current route to get the `id` parameter
const route = useRoute()
const projectId = Number(route.params.id) // Convert the `id` parameter to a number

// Inject the store from the parent (App.vue)
const tarsStore = inject<TarsStore>('tarsStore')

// Define a reactive reference to store the project data
const project = ref<Project | null>(null)

// Fetch the project details based on the `id` from the route
onMounted(() => {
  if (tarsStore && tarsStore.projects) {
    // Find the project with the matching `id`
    project.value = tarsStore.projects.data.find((p) => p.id === projectId) || null
  }
})
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <p>{{ project.created_at }}</p>
    <!-- You can add more details as needed -->
  </div>
  <div v-else>
    <p>Project not found.</p> <!-- Show a message if the project is not found -->
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
