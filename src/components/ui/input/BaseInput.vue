<script setup lang="ts">
import { ref } from "vue";

defineProps<{ modelValue: string }>();

const inputRef = ref<HTMLElement | null>(null);
const emit = defineEmits(["update:modelValue", "change"]);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  emit("update:modelValue", value);
  emit("change");
};

defineExpose({});
</script>

<template>
  <input
    :value="modelValue"
    @input="onInput"
    style="flex: 1; outline: none; border: none; background: transparent"
    ref="inputRef"
    v-bind="$attrs"
  />
</template>
