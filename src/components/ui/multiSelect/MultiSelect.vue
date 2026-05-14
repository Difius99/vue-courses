<script setup lang="ts">
import {
  CheckBox,
  ChewronDown,
  Container,
  ControlLabel,
  ControlWrapper,
  CountLabel,
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuItemWrapper,
  Tick,
  NoResult,
  ShowAllButton,
  ApplyButton,
  ApplyFloatingWrapper,
} from "./styled";
import { computed, ref } from "vue";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/vue";
import SearchBar from "../searchBar/SearchBar.vue";
import type { MultiSelectOption, MultiSelectProps } from "./types";

const wrapperRef = ref(null);
const buttonRef = ref(null);
const { floatingStyles } = useFloating(wrapperRef, buttonRef, {
  placement: "right",
  middleware: [offset(12), flip(), shift()],
  whileElementsMounted: autoUpdate,
});

const hasChanges = ref(false);
const props = defineProps<MultiSelectProps>();
const isOpen = ref(false);
const isShowAll = ref<Boolean>(false);
const searchValue = ref<string>("");
const emit = defineEmits(["apply"]);

const applyFilters = () => {
  const selected = props.options.filter((option) => option.includes);
  emit("apply", selected);
  hasChanges.value = false;
};

const handleSelect = (option: MultiSelectOption) => {
  if (option.disabled) return;

  hasChanges.value = true;
  props.onChange?.(option);
};

const toggleIsOpen = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};

const toggleIsShowAll = () => {
  isShowAll.value = !isShowAll.value;
};

const filtredOptions = computed(() => {
  if (!searchValue.value) return props.options;
  else
    return props.options.filter((option) =>
      option.value
        .toLocaleLowerCase()
        .includes(searchValue.value.toLocaleLowerCase()),
    );
});

const visibleOptions = computed(() => {
  if (isShowAll.value) return filtredOptions.value;
  else return filtredOptions.value.slice(0, 5);
});
</script>

<template>
  <Container ref="wrapperRef">
    <ControlWrapper @click="toggleIsOpen">
      <ControlLabel :disabled="disabled">{{ label }}</ControlLabel>
      <ChewronDown :isOpen="isOpen" />
    </ControlWrapper>

    <SearchBar v-if="searchBar && !disabled && isOpen" v-model="searchValue" />

    <NoResult
      v-if="isOpen && searchValue && !disabled && !filtredOptions.length"
    >
      Ничего не нашлось
    </NoResult>

    <Menu v-if="!disabled && isOpen">
      <MenuItem v-for="option in visibleOptions" :key="option.value">
        <MenuItemWrapper>
          <CheckBox
            @click="handleSelect(option)"
            :includes="option.includes"
            :disabled="option.disabled"
          >
            <Tick v-if="!option.disabled" />
          </CheckBox>
          <MenuItemLabel>{{ option.value }}</MenuItemLabel>
        </MenuItemWrapper>
        <CountLabel>{{ option.count }}</CountLabel>
      </MenuItem>
    </Menu>

    <ShowAllButton @click="toggleIsShowAll" v-if="isOpen && options.length > 5">
      {{ isShowAll ? "Скрыть" : "Показать все " }}
    </ShowAllButton>
  </Container>
  <ApplyFloatingWrapper
    v-if="isOpen && hasChanges"
    ref="buttonRef"
    :style="floatingStyles"
  >
    <ApplyButton @click="applyFilters">Применить</ApplyButton>
  </ApplyFloatingWrapper>
</template>
