<script setup lang="ts">
import { onMounted, onUnmounted, ref, type ComponentPublicInstance } from "vue";
import MultiSelect from "../../ui/multiSelect/MultiSelect.vue";
import type { MultiSelectOption } from "../../ui/multiSelect/types";
import { Container, Wrapper } from "./styled";
import type { CourseFiltersProps } from "./types";

const emit = defineEmits(["apply"]);
const props = defineProps<CourseFiltersProps>();

const handleApply = (key: string, values: MultiSelectOption[]) => {
  emit("apply", { key, values });
};

let lastScroll = 0;
const top = ref<number>(20);
const containerRef = ref<ComponentPublicInstance | null>(null);

const handleScroll = () => {
  const currentScroll = window.scrollY;
  const element = containerRef.value?.$el as HTMLElement;

  if (!element) return;

  const filterHeight = element.offsetHeight;

  if (filterHeight + 20 < window.innerHeight) {
    top.value = 20;
  } else {
    const delta = lastScroll - currentScroll;
    top.value += delta;
    const minTop = window.innerHeight - filterHeight - 20;
    const maxTop = 20;
    if (top.value < minTop) {
      top.value = minTop;
    } else if (top.value > maxTop) {
      top.value = maxTop;
    }
    console.log(top.value);
  }
  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Container ref="containerRef" :style="{ top: `${top}px` }">
    <Wrapper v-for="filter in filterGroups" :key="filter.label">
      <MultiSelect
        v-bind="filter"
        @apply="(values) => handleApply(filter.label, values)"
      />
    </Wrapper>
  </Container>
</template>
