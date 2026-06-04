<script setup lang="ts">
import { computed, inject, ref } from "vue";
import CoursesSection from "../../../components/features/coursesSection/CoursesSection.vue";
import PopularTags from "../../../components/features/popularTags/PopularTags.vue";
import Carousel from "../../../components/ui/carousel/Carousel.vue";
import { useCourses } from "../../../components/features/courses/model/useCourses";
import { useFilteredCourses } from "../../../components/features/courses/model/useFilteredCourses";
import { popularTagsMock } from "../../../mocks/PopularTags.mocks";

import { useRouter } from "vue-router";
import type { useAppliedFilters } from "../../../components/features/appliedFilters/model/useAppliedFilters.ts";

const filtersStore =
  inject<ReturnType<typeof useAppliedFilters>>("filtersStore");

if (!filtersStore) {
  throw new Error("filtersStore is not provided");
}

const { appliedFilters } = filtersStore;

const { courses } = useCourses();

const router = useRouter();
const goToNew = () => {
  router.push({ name: "courses.new" });
};

const sliderItems = computed(() =>
  courses.value.map((course) => ({
    ...course,
    cardDirection: "row" as const,
  })),
);

const gridItems = computed(() =>
  courses.value.map((course) => ({
    ...course,
    cardDirection: "column" as const,
  })),
);

const { filteredCourses } = useFilteredCourses(
  courses,
  appliedFilters ?? ref({}),
);
</script>

<template>
  <Carousel title="Популярные курсы" :items="sliderItems" />

  <CoursesSection
    :onViewAll="goToNew"
    title="Познакомьтесь с новинками"
    :items="filteredCourses"
    subTitle="Откройте дверь в новые знания с нашими свежими курсами!"
  />

  <PopularTags :title="popularTagsMock.title" :tags="popularTagsMock.tags" />

  <CoursesSection
    :onViewAll="goToNew"
    title="Рекомендованные вам курсы"
    :items="gridItems.slice(0, 6)"
    subTitle="Помогут расширить компетенции и стать более востребованным специалистом на рынке труда"
  />

  <Carousel
    variant="second"
    subTitle="Проходите курсы по разработке совершенно бесплатно, лучших возьмем к себе в команду"
    title="Станьте частью сообщества разработчиков"
    :items="sliderItems"
  />

  <CoursesSection
    :onViewAll="goToNew"
    title="Вы смотрели ранее"
    :items="gridItems.slice(0, 3)"
  />
</template>
