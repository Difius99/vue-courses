<script setup lang="ts">
import { Container, Title, TitleWrapper } from "./styled";
import type { PageTitleProps } from "./type";

const props = defineProps<PageTitleProps>();
</script>

<template>
  <Container>
    <TitleWrapper>
      <Title>{{ title }}</Title>
    </TitleWrapper>
  </Container>
</template>
