<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import type { PageItem, PaginatorProps } from "./types";
import { computed } from "vue";
import {
  Container,
  Dots,
  NavButton,
  NextIcon,
  PageButton,
  PrevIcon,
} from "./styled";

const props = withDefaults(defineProps<PaginatorProps>(), {
  queryKey: "page",
});
const route = useRoute();
const router = useRouter();

const current = computed(() => {
  const raw = route.query[props.queryKey];
  const value = Array.isArray(raw) ? raw[0] : raw;
  const n = parseInt(value ?? "1", 10);
  const page = Number.isFinite(n) && n > 0 ? n : 1;
  return Math.min(page, props.maxPage);
});

const setPage = (page: number) => {
  const safePage = Math.min(Math.max(page, 1), props.maxPage);

  const nextQuery: Record<string, any> = { ...route.query };
  if (safePage <= 1) delete nextQuery[props.queryKey];
  else nextQuery[props.queryKey] = String(safePage);

  router.push({ query: nextQuery });
};

const visiblePages = computed<PageItem[]>(() => {
  const max = props.maxPage;
  const cur = current.value;

  if (max <= 7) {
    return Array.from({ length: max }, (_, i) => i + 1);
  }

  if (cur <= 4) {
    return [1, 2, 3, 4, 5, "dots", max];
  }

  if (cur >= max - 3) {
    return [1, "dots", max - 4, max - 3, max - 2, max - 1, max];
  }

  return [1, "dots", cur - 1, cur, cur + 1, "dots", max];
});
</script>

<template>
  <Container v-if="maxPage >= 2">
    <NavButton :disabled="current <= 1" @click="setPage(current - 1)">
      <PrevIcon />
    </NavButton>
    <template
      v-for="(value, index) in visiblePages"
      :key="value === `dots` ? `d-${index}` : value"
    >
      <PageButton
        v-if="value !== `dots`"
        :isActive="value === current"
        @click="setPage(value)"
      >
        {{ value }}
      </PageButton>
      <Dots v-else>...</Dots>
    </template>
    <NavButton :disabled="current >= maxPage" @click="setPage(current + 1)">
      <NextIcon />
    </NavButton>
  </Container>
</template>
