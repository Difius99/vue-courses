import { ref } from "vue";
import type { MultiSelectOption } from "../../../ui/multiSelect/types";

export function useAppliedFilters() {
  const appliedFilters = ref<Record<string, MultiSelectOption[]>>({});

  const apply = ({
    key,
    values,
  }: {
    key: string;
    values: MultiSelectOption[];
  }) => {
    appliedFilters.value[key] = values;
  };

  const remove = (key: string, option: MultiSelectOption) => {
    const current = appliedFilters.value[key] ?? [];

    const next = current.filter((o) => o.value !== option.value);

    if (next.length === 0) {
      delete appliedFilters.value[key];
    } else {
      appliedFilters.value[key] = next;
    }

    option.includes = false;
  };
  return { appliedFilters, apply, remove };
}
