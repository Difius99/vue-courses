<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="attrs"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
</template>
