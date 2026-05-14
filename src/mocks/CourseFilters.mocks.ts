import type { CourseFiltersProps } from "../components/features/courseFilters/types";

export const courseFiltersMock: CourseFiltersProps = {
  filterGroups: [
    {
      label: "Направление",
      searchBar: true,
      options: [
        { value: "Разработка", count: 224, includes: false },
        { value: "Физика", count: 573, includes: false },
        { value: "Моделирование", count: 131, includes: true },
        { value: "Машинное обучение", count: 104, includes: false },
        { value: "Теория вероятности", count: 252, includes: false },
        { value: "Аналитика больших данных", count: 875, includes: false },
        { value: "Программирование", count: 771, includes: false },
        { value: "Юриспруденция", count: 28, includes: false },
        { value: "Радиотехника", count: 192, includes: false },
        { value: "Инноватика", count: 11, includes: false },
      ],
    },

    {
      label: "Для кого",
      options: [
        { value: "Абитуриенты", count: 321, includes: false },
        { value: "Студенты", count: 38, includes: false },
        { value: "Специалисты", count: 218, includes: false },
        { value: "Преподаватели", count: 16, includes: false },
      ],
    },

    {
      label: "Стоимость",
      options: [
        {
          value: "Бесплатно",
          count: 335,
          includes: false,
          meta: { isFree: true },
        },
        {
          value: "До 10 000 ₽",
          count: 121,
          includes: false,
          meta: { minCost: 0, maxCost: 10000 },
        },
        {
          value: "10 000–30 000 ₽",
          count: 614,
          includes: false,
          meta: { minCost: 10000, maxCost: 30000 },
        },
        {
          value: "Более 30 000 ₽",
          count: 735,
          includes: false,
          meta: { minCost: 30000 },
        },
      ],
    },

    {
      label: "Длительность",
      options: [
        {
          value: "До 1 месяца",
          count: 867,
          includes: false,
          meta: {
            maxDurationInSecond: 2592000, // 1 месяц
          },
        },
        {
          value: "1–3 месяца",
          count: 518,
          includes: false,
          meta: {
            minDurationInSecond: 2592000,
            maxDurationInSecond: 7776000, // 3 месяца
          },
        },
        {
          value: "3–6 месяцев",
          count: 984,
          includes: false,
          meta: {
            minDurationInSecond: 7776000,
            maxDurationInSecond: 15552000, // 6 месяцев
          },
        },
        {
          value: "Более 6 месяцев",
          count: 109,
          includes: false,
          meta: {
            minDurationInSecond: 15552000,
          },
        },
      ],
    },

    {
      label: "Документ после прохождения",
      options: [
        { value: "Сертификат", count: 712, includes: false },
        { value: "Диплом о переподготовке", count: 882, includes: false },
      ],
    },

    {
      label: "Навыки",
      searchBar: true,
      options: [
        { value: "Основы теории вероятности", count: 683, includes: false },
        { value: "Машинное обучение", count: 425, includes: false },
        { value: "Основы моделирования", count: 605, includes: false },
        { value: "Аналитическое мышление", count: 337, includes: false },
        { value: "Знание алгоритмов", count: 801, includes: false },
      ],
    },
  ],
};
