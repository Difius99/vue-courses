<script setup lang="ts">
import Cross from "../../icons/Cross.vue";
import type { MultiSelectOption } from "../../ui/multiSelect/types";
import { Container, CrossButton, Tag, Tags, TagWrapper } from "./styled";
import type { AppliedFiltersProps } from "./types";

const props = defineProps<AppliedFiltersProps>();
const emit = defineEmits(["delete"]);

const deleteFilter = (key: string, filter: MultiSelectOption) => {
  emit("delete", key, filter);
};
</script>

<template>
  <Container>
    <Tags>
      <template v-for="(values, key) in filters" :key="key">
        <TagWrapper v-for="(option, index) in values" :key="option.value">
          <Tag v-if="index === 0">{{ key }}: {{ option.value }}</Tag>
          <Tag v-if="index !== 0">{{ option.value }}</Tag>

          <CrossButton @click="deleteFilter(key, option)">
            <Cross />
          </CrossButton>
        </TagWrapper>
      </template>
    </Tags>
  </Container>
</template>
