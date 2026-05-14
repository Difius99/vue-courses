<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="attrs"
  >
    <path
      d="M0.75 5.19447H8.75L16.75 5.19447M16.75 5.19447L12.4423 0.750027M16.75 5.19447L12.4423 9.63892"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
