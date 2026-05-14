<script setup lang="ts">
import { ref } from "vue";
import { useFloating, offset, flip, shift } from "@floating-ui/vue";

type Props = {
  text: string;
};

defineProps<Props>();

const reference = ref<HTMLElement | null>(null);
const floating = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const { floatingStyles } = useFloating(reference, floating, {
  placement: "bottom",
  middleware: [offset(8), flip(), shift({ padding: 8 })],
});
</script>

<template>
  <span
    ref="reference"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
    style="display: inline-block"
  >
    <slot />
  </span>

  <div
    v-if="isOpen"
    ref="floating"
    :style="floatingStyles"
    style="
      position: absolute;
      z-index: 9999;
      background: white;
      padding: 16px;
      border-radius: 16px;
      white-space: nowrap;
      font-size: 12px;
      font-family: Onest;
      font-weight: 400;
    "
  >
    {{ text }}
  </div>
</template>
