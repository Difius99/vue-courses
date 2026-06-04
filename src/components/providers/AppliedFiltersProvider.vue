<script setup lang="ts">
import { provide } from "vue";
import { useAppliedFilters } from "../features/appliedFilters/model/useAppliedFilters";

const filtersStore = useAppliedFilters();

provide("filtersStore", filtersStore);
</script>

<template>
  <slot />
</template>
