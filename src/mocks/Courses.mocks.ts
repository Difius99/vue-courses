import { ref } from "vue";
import type { CourseCardProps } from "../components/ui/courseCard/types";

export const CoursesMock = ref<CourseCardProps[]>([
  {
    id: 123,
    cost: 2990,
    badge: "Программирование",
    direction: "Моделирование",
    targetAudience: ["Специалисты", "Студенты"],
    documentType: "Сертификат",

    tags: [
      "Основы ООП",
      "Python",
      "Сбор данных ООП",
      "DOM",
      "Форматирование данных",
    ],

    title: "UX/UI дизайнер",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description:
      "Основной язык в data-science и один из трёх главных языков в веб‑разработке",
  },

  {
    id: 1232,
    cost: 0,
    badge: "Программирование",
    direction: "Машинное обучение",
    targetAudience: ["Специалисты"],
    documentType: "Диплом",

    tags: [
      "Основы ООП",
      "Python",
      "Сбор данных ООП",
      "DOM",
      "Форматирование данных",
    ],

    title: "SMM‑специалист",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description:
      "Основной язык в data-science и один из трёх главных языков в веб‑разработке",
  },

  {
    id: 367,
    cost: 2990,
    badge: "Программирование",
    direction: "Разработка",
    targetAudience: ["Студенты"],
    documentType: "Сертификат",

    tags: ["Основы ООП", "C++", "Алгоритмы", "Структуры данных"],

    title: "Программирование на C++",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "9 месяцев",
    durationInSecond: 23328000,

    description: "Продвинутый курс по системному программированию",
  },

  {
    id: 442,
    cost: 2990,
    badge: "Программирование",
    direction: "Разработка",
    targetAudience: ["Абитуриенты", "Студенты"],
    documentType: "Сертификат",

    tags: ["Основы ООП", "Python", "Backend"],

    title: "Backend-разработка",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "1 месяц",
    durationInSecond: 2592000,

    description: "Интенсив по backend-разработке",
  },

  {
    id: 9565,
    cost: 2990,
    badge: "Программирование",
    direction: "Дизайн",
    targetAudience: ["Специалисты"],
    documentType: "Сертификат",

    tags: ["UX", "UI", "Figma"],

    title: "UX/UI дизайнер",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Погружение в продуктовый дизайн",
  },

  {
    id: 387,
    cost: 0,
    badge: "Программирование",
    direction: "Маркетинг",
    targetAudience: ["Специалисты", "Преподаватели"],
    documentType: "Диплом",

    tags: ["SMM", "Контент", "Аналитика"],

    title: "SMM‑специалист",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Комплексный курс по продвижению в соцсетях",
  },
  {
    id: 91565,
    cost: 2990,
    badge: "Программирование",
    direction: "Дизайн",
    targetAudience: ["Специалисты"],
    documentType: "Сертификат",

    tags: ["UX", "UI", "Figma"],

    title: "UX/UI дизайнер",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Погружение в продуктовый дизайн",
  },

  {
    id: 3187,
    cost: 0,
    badge: "Программирование",
    direction: "Маркетинг",
    targetAudience: ["Специалисты", "Преподаватели"],
    documentType: "Диплом",

    tags: ["SMM", "Контент", "Аналитика"],

    title: "SMM‑специалист",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Комплексный курс по продвижению в соцсетях",
  },
  {
    id: 95265,
    cost: 2990,
    badge: "Программирование",
    direction: "Дизайн",
    targetAudience: ["Специалисты"],
    documentType: "Сертификат",

    tags: ["UX", "UI", "Figma"],

    title: "UX/UI дизайнер",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Погружение в продуктовый дизайн",
  },

  {
    id: 3827,
    cost: 0,
    badge: "Программирование",
    direction: "Маркетинг",
    targetAudience: ["Специалисты", "Преподаватели"],
    documentType: "Диплом",

    tags: ["SMM", "Контент", "Аналитика"],

    title: "SMM‑специалист",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Комплексный курс по продвижению в соцсетях",
  },
  {
    id: 95635,
    cost: 2990,
    badge: "Программирование",
    direction: "Дизайн",
    targetAudience: ["Специалисты"],
    documentType: "Сертификат",

    tags: ["UX", "UI", "Figma"],

    title: "UX/UI дизайнер",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Погружение в продуктовый дизайн",
  },

  {
    id: 3387,
    cost: 0,
    badge: "Программирование",
    direction: "Маркетинг",
    targetAudience: ["Специалисты", "Преподаватели"],
    documentType: "Диплом",

    tags: ["SMM", "Контент", "Аналитика"],

    title: "SMM‑специалист",
    src: "/src/assets/laptop.png",
    cardDirection: "column",
    startDate: "старт 12 июля",
    duration: "5 месяцев",
    durationInSecond: 12960000,

    description: "Комплексный курс по продвижению в соцсетях",
  },
]);
