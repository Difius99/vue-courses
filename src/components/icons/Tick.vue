<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="attrs"
  >
    <path
      d="M0.625 7.47546L3.425 10.9105C3.51878 11.0266 3.63869 11.1211 3.77588 11.187C3.91307 11.253 4.06403 11.2887 4.21762 11.2915C4.3712 11.2943 4.52349 11.2642 4.66324 11.2033C4.80298 11.1424 4.92661 11.0524 5.025 10.9398L13.9583 0.625"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
