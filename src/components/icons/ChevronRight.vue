<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    width="11"
    height="18"
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="attrs"
  >
    <path
      d="M0.749999 16.75L9.75 8.75L0.749999 0.75"
      stroke="#3C388D"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
