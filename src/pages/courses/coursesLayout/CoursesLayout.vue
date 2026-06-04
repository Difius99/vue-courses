<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { useAppliedFilters } from "../../../components/features/appliedFilters/model/useAppliedFilters";
import CourseFilters from "../../../components/features/courseFilters/CourseFilters.vue";
import { CatalogContent, Container } from "./styled";
import { courseFiltersMock } from "../../../mocks/CourseFilters.mocks";
import type { MultiSelectOption } from "../../../components/ui/multiSelect/types";
import AppliedFilters from "../../../components/features/appliedFilters/AppliedFilters.vue";

const filtersStore =
  inject<ReturnType<typeof useAppliedFilters>>("filtersStore");

if (!filtersStore) {
  throw new Error("filtersStore is not provided");
}

const { appliedFilters, apply, remove } = filtersStore;
const handleSelect = (option: MultiSelectOption) => {
  option.includes = !option.includes;
};

const hasFilters = computed(() => {
  if (!appliedFilters.value) return false;

  return Object.values(appliedFilters.value).some(
    (arr) => Array.isArray(arr) && arr.length > 0,
  );
});

const filtersState = ref(courseFiltersMock.filterGroups);

const filters = computed(() =>
  filtersState.value.map((group) => ({
    ...group,
    onChange: handleSelect,
  })),
);
</script>

<template>
  <Container>
    <CourseFilters :filterGroups="filters" @apply="apply" />
    <CatalogContent>
      <AppliedFilters
        v-if="hasFilters"
        :filters="appliedFilters"
        @delete="remove"
      />
      <RouterView />
    </CatalogContent>
  </Container>
</template>
