<script setup lang="ts">
import { computed, ref } from "vue";
import Arrow from "../../icons/Arrow.vue";
import Tooltip from "../tooltip/Tooltip.vue";
import {
  CardImage,
  CardMedia,
  Container,
  Badge,
  StarButton,
  CardContent,
  Title,
  CardDescription,
  TagsList,
  Tag,
  MetaInfo,
  Divider,
  CardAction,
  ButtonAndMetaInfoWrapper,
  Star,
} from "./styled";
import type { CourseCardProps } from "./types";
import { Spinner } from "../spiner/Spiner.styled";

const emit = defineEmits<{ (e: "update:isFavorites", value: boolean): void }>();

const isLoading = ref<boolean>(false);

const handleClick = async () => {
  if (isLoading.value) {
    return;
  }
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isLoading.value = false;
};

const props = defineProps<CourseCardProps>();
const maxVisible = computed(() => (props.cardDirection === "row" ? 3 : 4));

const visibleTags = computed(() => {
  return props.tags.slice(0, maxVisible.value);
});

const hiddenCount = computed(() => {
  return props.tags.length > maxVisible.value
    ? props.tags.length - maxVisible.value
    : 0;
});
</script>

<template>
  <Container :direction="cardDirection">
    <CardMedia :direction="cardDirection">
      <CardImage :src="src" />
      <Badge>{{ badge }}</Badge>
      <StarButton :direction="cardDirection" @click="onChange">
        <Star :isFavorites="isFavorites" />
      </StarButton>
    </CardMedia>
    <CardContent :direction="cardDirection">
      <Title :direction="cardDirection">
        {{ title }}
      </Title>
      <CardDescription>{{ description }}</CardDescription>
      <TagsList>
        <Tooltip v-for="tag in visibleTags" :key="tag" :text="tag">
          <Tag>{{ tag }}</Tag>
        </Tooltip>
        <Tag v-if="hiddenCount">+{{ hiddenCount }}</Tag>
      </TagsList>
      <ButtonAndMetaInfoWrapper :direction="cardDirection">
        <MetaInfo v-if="cardDirection === `row`">
          <span>{{ duration }}</span>
          <Divider></Divider>
          <span>{{ startDate }}</span>
        </MetaInfo>
        <CardAction
          @click="handleClick"
          :direction="cardDirection"
          v-if="cost === 0"
        >
          <template v-if="!isLoading">
            Записаться бесплатно
            <Arrow />
          </template>
          <Spinner v-else />
        </CardAction>

        <CardAction
          @click="handleClick"
          :direction="cardDirection"
          v-if="cost > 0"
        >
          <template v-if="!isLoading">
            {{ cost }} ₽
            <Arrow />
          </template>
          <Spinner v-else />
        </CardAction>
      </ButtonAndMetaInfoWrapper>
    </CardContent>
  </Container>
</template>
