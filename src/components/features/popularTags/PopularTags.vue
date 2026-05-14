<script setup lang="ts">
import { Container, Tag, TagsList, Title } from "./styled";
import type { PopularTagsProps } from "./types";

const props = defineProps<PopularTagsProps>();
</script>

<template>
  <Container>
    <Title>{{ title }}</Title>
    <TagsList>
      <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
    </TagsList>
  </Container>
</template>
