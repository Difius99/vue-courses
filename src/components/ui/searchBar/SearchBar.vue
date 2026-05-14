<script setup lang="ts">
import { Container, Icon } from "./styled";
import Cross from "../../icons/Cross.vue";
import Search from "../../icons/Search.vue";

import BaseInput from "../input/BaseInput.vue";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);

const clearInput = () => {
  emit("update:modelValue", "");
};
</script>

<template>
  <Container>
    <BaseInput
      :modelValue="modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
      placeholder="Поиск"
    />
    <Icon @click="clearInput">
      <Cross v-if="modelValue" />
      <Search v-else />
    </Icon>
  </Container>
</template>
