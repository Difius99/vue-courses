<script setup lang="ts">
import { computed, ref } from "vue";
import Thunder from "../../icons/Thunder.vue";
import CourseCard from "../courseCard/CourseCard.vue";
import {
  Container,
  Viewport,
  LeftButton,
  RightButton,
  Title,
  TitleWrapper,
  SliderLayer,
  Track,
  SubTitle,
} from "./styled";

import type { CarouselProps } from "./types";
import ChewronRight from "../../icons/ChevronRight.vue";
import type { CourseCardProps } from "../courseCard/types";

const props = withDefaults(defineProps<CarouselProps<CourseCardProps>>(), {
  variant: "first",
});

const currentIndex = ref<number>(0);
const cardWidth = 500;
const gap = 24;
const maxIndex = computed(() => Math.max(0, props.items.length - 2));
const translate = computed(() => currentIndex.value * (cardWidth + gap));
const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<template>
  <Container :variant="variant">
    <TitleWrapper>
      <Title>
        <Thunder />
        {{ title }}
      </Title>
      <SubTitle v-if="subTitle">{{ subTitle }}</SubTitle>
    </TitleWrapper>
    <SliderLayer>
      <Viewport>
        <Track :offset="translate">
          <CourseCard
            v-for="item in items"
            :key="item.id"
            v-bind="item"
          ></CourseCard>
        </Track>
      </Viewport>
      <LeftButton @click="prev" v-if="currentIndex > 0">
        <ChewronRight style="transform: rotate(180deg)" />
      </LeftButton>
      <RightButton @click="next" v-if="currentIndex < maxIndex">
        <ChewronRight />
      </RightButton>
    </SliderLayer>
  </Container>
</template>
