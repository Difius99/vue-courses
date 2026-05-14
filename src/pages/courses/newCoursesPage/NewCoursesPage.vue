<script setup lang="ts">
import { computed, inject, ref, type Ref } from "vue";
import { useFilteredCourses } from "../../../components/features/courses/model/useFilteredCourses";
import CoursesSection from "../../../components/features/coursesSection/CoursesSection.vue";
import type { MultiSelectOption } from "../../../components/ui/multiSelect/types";
import { useCourses } from "../../../components/features/courses/model/useCourses";
import { useRoute, useRouter } from "vue-router";
import Paginator from "../../../components/ui/paginator/Paginator.vue";
import { ShowMoreButton, ShowMoreWrapper } from "./styled";
import ArrowDown from "../../../components/icons/ArrowDown.vue";

const appliedFilters =
  inject<Ref<Record<string, MultiSelectOption[]>>>("filtersStore");

const { courses } = useCourses();

const { filteredCourses } = useFilteredCourses(
  courses,
  appliedFilters ?? ref({}),
);

const route = useRoute();
const router = useRouter();

const initialSize = 6;
const pageSize = ref<number>(initialSize);

const currentPage = computed(() => {
  const raw = route.query.page;
  const value = Array.isArray(raw) ? raw[0] : raw;
  const n = parseInt(value ?? "1", 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
});

const maxPage = computed(() =>
  Math.max(1, Math.ceil(filteredCourses.value.length / pageSize.value)),
);

const pageItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return filteredCourses.value.slice(start, start + pageSize.value);
});

if (currentPage.value > maxPage.value) {
  router.replace({ query: { ...route.query, page: String(maxPage.value) } });
}

const loadMore = () => {
  if (pageSize.value + 6 <= filteredCourses.value.length) {
    pageSize.value += 6;
  }
  if (pageSize.value <= pageSize.value) {
    router.push({});
  }
};
</script>
<template>
  <CoursesSection :items="pageItems" :isViewAll="false" />
  <ShowMoreWrapper>
    <ShowMoreButton @click="loadMore">
      Показать ещё
      <ArrowDown />
    </ShowMoreButton>
    <Paginator :max-page="maxPage" />
  </ShowMoreWrapper>
</template>
