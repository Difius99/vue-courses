<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    width="21"
    height="27"
    viewBox="0 0 21 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="attrs"
  >
    <path
      d="M5.20893 0.875L0.946066 10.9354C0.887105 11.0789 0.864298 11.2347 0.879648 11.3891C0.894998 11.5435 0.948036 11.6917 1.0341 11.8208C1.12016 11.9499 1.23662 12.0559 1.37323 12.1294C1.50984 12.203 1.66243 12.2419 1.81758 12.2426H7.10354L3.31432 25.5049L19.589 10.0828C19.7242 9.95252 19.8176 9.78503 19.8574 9.60156C19.8972 9.4181 19.8817 9.22694 19.8126 9.05235C19.7436 8.87777 19.6243 8.72763 19.4698 8.62099C19.3153 8.51435 19.1325 8.45603 18.9448 8.45343H11.8401L15.6293 0.875H5.20893Z"
      stroke="#0A0A0B"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
