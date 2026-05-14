<script setup lang="ts">
import Arrow from "../../icons/Arrow.vue";
import Victory from "../../icons/Victory.vue";
import CourseCard from "../../ui/courseCard/CourseCard.vue";
import {
  Container,
  Grid,
  Header,
  HeaderLeft,
  SubTitle,
  Title,
  ViewAll,
} from "./styled";
import type { CoursesSectionProps } from "./types";

const props = withDefaults(defineProps<CoursesSectionProps>(), {
  isViewAll: true,
});
</script>

<template>
  <Container>
    <Header>
      <HeaderLeft>
        <Title v-if="title">
          <Victory />
          {{ title }}
        </Title>
        <SubTitle v-if="subTitle">
          {{ subTitle }}
        </SubTitle>
      </HeaderLeft>
      <ViewAll @click="onViewAll?.()" v-if="isViewAll">
        Смотреть все
        <Arrow />
      </ViewAll>
    </Header>
    <Grid>
      <CourseCard v-for="item in items" :key="item.id" v-bind="item" />
    </Grid>
  </Container>
</template>
