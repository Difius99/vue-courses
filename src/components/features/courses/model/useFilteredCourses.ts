import { computed, type Ref } from "vue";

import type { MultiSelectOption } from "../../../ui/multiSelect/types";
import type { CourseCardProps } from "../../../ui/courseCard/types";

export function useFilteredCourses(
  courses: Ref<CourseCardProps[]>,
  appliedFilters: Ref<Record<string, MultiSelectOption[]>>,
) {
  const filteredCourses = computed(() => {
    if (!courses.value) return [];
    const safeFilters = appliedFilters.value || {};

    return courses.value.filter((course) => {
      return Object.entries(safeFilters).every(([filterKey, options]) => {
        if (options.length === 0) return true;

        return options.some((option) => {
          const meta = option.meta;

          if (filterKey === "Направление")
            return course.direction === option.value;
          if (filterKey === "Для кого")
            return course.targetAudience.includes(option.value);

          if (filterKey === "Стоимость") {
            if (meta?.isFree) return course.cost === 0;
            const minOk = meta?.minCost == null || course.cost >= meta.minCost;
            const maxOk = meta?.maxCost == null || course.cost <= meta.maxCost;
            return minOk && maxOk;
          }

          if (filterKey === "Документ после прохождения")
            return course.documentType === option.value;
          if (filterKey === "Навыки") return course.tags.includes(option.value);

          if (filterKey === "Длительность") {
            const minOk =
              meta?.minDurationInSecond == null ||
              course.durationInSecond >= meta.minDurationInSecond;

            const maxOk =
              meta?.maxDurationInSecond == null ||
              course.durationInSecond <= meta.maxDurationInSecond;

            return minOk && maxOk;
          }

          return true;
        });
      });
    });
  });

  return { filteredCourses };
}
