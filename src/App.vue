<script setup lang="ts">
import Main from "./components/Main.vue";
import {onMounted, provide} from "vue";
import store from "./stores/tarsStore.ts";
import {getProjects} from "./services/tarsService.ts";
import type {TarsStore} from "./types/tarsStore.ts";

const tarsStore: TarsStore = store().store;

provide("tarsStore", tarsStore)

onMounted(async () => {
  await getProjects(tarsStore);
})

</script>

<template>
  <Main />
</template>

<style>
h1{
  margin-top: 60px;
  margin-left: 10px
}
</style>
