<script setup lang="ts">
import Main from "./components/Main.vue";
import { provide } from "vue";
import store from "./stores/tarsStore.ts";

const tarsStore = store().store;

provide("tarsStore", tarsStore)
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
