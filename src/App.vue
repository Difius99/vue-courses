<script setup lang="ts">
import { COLORS as _ } from "./constants";
import AppHeader from "./components/layout/appHeader/AppHeader.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import PageTitle from "./components/ui/pageTitle/PageTitle.vue";
import AppFooter from "./components/layout/appFooter/AppFooter.vue";

const route = useRoute();
const pageTitle = computed(() => (route.meta.title as string) ?? "");
</script>

<template>
  <AppHeader />
  <PageTitle v-if="pageTitle" :title="pageTitle" />
  <RouterView />
  <AppFooter />
</template>
