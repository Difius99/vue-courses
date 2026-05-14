<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  BreadcrumbCurrent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumbs,
  Container,
} from "./styled";
import { computed } from "vue";

const route = useRoute();

const crumbs = computed(() => {
  const routes = route.matched
    .filter((route) => route.meta?.breadcrumb)
    .map((route) => ({
      label: route.meta.breadcrumb as string,
      to: route.name ? { name: route.name as string } : { path: route.path },
    }));
  return [{ label: "Главная", to: "/" }, ...routes];
});
</script>
<template>
  <Container>
    <Breadcrumbs>
      <BreadcrumbList>
        <BreadcrumbItem v-for="(crumb, index) in crumbs" :key="index">
          <BreadcrumbCurrent v-if="index === crumbs.length - 1">
            {{ crumb.label }}
          </BreadcrumbCurrent>

          <BreadcrumbLink v-else :to="crumb.to">
            {{ crumb.label }}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  </Container>
</template>
