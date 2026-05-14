<script setup lang="ts">
import MultiSelect from "../../ui/multiSelect/MultiSelect.vue";
import type { MultiSelectOption } from "../../ui/multiSelect/types";
import { Container, Wrapper } from "./styled";
import type { CourseFiltersProps } from "./types";

const emit = defineEmits(["apply"]);
const props = defineProps<CourseFiltersProps>();

const handleApply = (key: string, values: MultiSelectOption[]) => {
  emit("apply", { key, values });
};
</script>

<template>
  <Container>
    <Wrapper v-for="filter in filterGroups" :key="filter.label">
      <MultiSelect v-bind="filter"    @apply="(values) => handleApply(filter.label, values)"/>      
    </Wrapper v-if index != filterGroups.length>
  </Container>
</template>
