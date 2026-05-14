import type { MultiSelectOption } from "../components/ui/multiSelect/types";

export const audienceOptions: MultiSelectOption[] = [
  {
    value: "Абитуриенты",
    count: 321,
    includes: false,
  },
  {
    value: "Студенты",
    count: 38,
    includes: false,
  },
  {
    value: "Специалисты",
    count: 218,
    includes: false,
  },
  {
    value: "Учителя",
    count: 16,
    includes: false,
    disabled: true,
  },
  {
    value: "Разработка",
    count: 224,
    includes: false,
  },
  {
    value: "Физика",
    count: 573,
    includes: false,
  },
  {
    value: "Моделирование",
    count: 131,
    includes: false,
  },
  {
    value: "Машинное обучение",
    count: 104,
    includes: false,
  },
  {
    value: "Теория вероятности",
    count: 252,
    includes: false,
  },
  {
    value: "Аналитика больших данных",
    count: 875,
    includes: false,
  },
  {
    value: "Программирование",
    count: 771,
    includes: false,
  },
  {
    value: "Юриспруденция",
    count: 28,
    includes: false,
  },
  {
    value: "Радиотехника",
    count: 192,
    includes: false,
  },
  {
    value: "Инноватика",
    count: 11,
    includes: false,
  },
];

export const priceOptions: MultiSelectOption[] = [
  {
    value: "Бесплатно",
    count: 335,
    includes: false,
  },
  {
    value: "До 10 000₽",
    count: 121,
    includes: false,
  },
  {
    value: "10 000-30 000₽",
    count: 614,
    includes: false,
  },
  {
    value: "Более 30 000₽",
    count: 735,
    includes: false,
  },
];
