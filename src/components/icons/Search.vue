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
      d="M18.75 18.75L13.9038 13.9038M8.36539 15.9808C10.3851 15.9808 12.3221 15.1784 13.7503 13.7503C15.1784 12.3221 15.9808 10.3851 15.9808 8.36539C15.9808 6.34566 15.1784 4.40866 13.7503 2.98049C12.3221 1.55233 10.3851 0.75 8.36539 0.75C6.34566 0.75 4.40866 1.55233 2.98049 2.98049C1.55233 4.40866 0.75 6.34566 0.75 8.36539C0.75 10.3851 1.55233 12.3221 2.98049 13.7503C4.40866 15.1784 6.34566 15.9808 8.36539 15.9808Z"
      stroke="#81838B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
