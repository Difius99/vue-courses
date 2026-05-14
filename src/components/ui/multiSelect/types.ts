export type FilterMeta = {
  minCost?: number;
  maxCost?: number;
  isFree?: boolean;
  minDurationInSecond?: number;
  maxDurationInSecond?: number;
};

export type MultiSelectOption<T = FilterMeta> = {
  count?: number;
  value: string;
  disabled?: boolean;
  includes: boolean;

  meta?: T;
};

export type MultiSelectProps<T = FilterMeta> = {
  label: string;
  onChange?: (option: MultiSelectOption<T>) => void;
  options: MultiSelectOption<T>[];
  disabled?: boolean;
  searchBar?: boolean;
};
