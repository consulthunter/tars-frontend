<script setup lang="ts">
import MdiMenu from '~icons/mdi/menu?width=2em&height=2em';
import MdiWorkflow from '~icons/mdi/workflow?width=2em&height=2em';
import MdiReportBoxMultipleOutline from '~icons/mdi/report-box-multiple-outline?width=2em&height=2em';
import MdiTimerCog from '~icons/mdi/timer-cog?width=2em&height=2em';
import MdiSearch from '~icons/mdi/search?width=2em&height=2em';
import MdiFilter from '~icons/mdi/filter?width=2em&height=2em';
import MdiDotsVertical from '~icons/mdi/dots-vertical?width=2em&height=2em';
import MdiHome from '~icons/mdi/home?width=2em&height=2em';
import { ref, watch } from 'vue'


const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})

</script>

<template>
  <v-app>
    <nav>
      <v-app-bar :elevation="3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"><MdiMenu/></v-app-bar-nav-icon>

        <v-toolbar-title>TARS</v-toolbar-title>

        <v-btn><MdiSearch /></v-btn>

        <v-btn><MdiFilter /></v-btn>

        <v-btn><MdiDotsVertical /></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
      >
        <v-list>
          <v-list-item>
            <RouterLink to="/" class="router-link">
              <MdiHome/>
              <span
                  class="ml-3">Dashboard</span>
            </RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/projects" class="router-link">
              <MdiWorkflow/>
              <span
                  class="ml-3">Projects</span>
            </RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/reports" class="router-link">
              <MdiReportBoxMultipleOutline/>
              <span
                  class="ml-3">Reports</span>
            </RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/status" class="router-link">
              <MdiTimerCog/>
              <span
                  class="ml-3">Status</span>
            </RouterLink>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <main>
      <RouterView />
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<style scoped>

</style>