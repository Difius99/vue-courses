import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/courses" },

    {
      path: "/courses",
      component: () =>
        import("../pages/courses/coursesLayout/CoursesLayout.vue"),
      meta: {
        breadcrumb: "Каталог курсов",
        breadcrumbTo: { name: "courses.catalog" },
      },
      children: [
        {
          path: "",
          name: "courses.catalog",
          component: () =>
            import("../pages/courses/coursesCatalogPage/CoursesCatalogPage.vue"),
          meta: { title: "Каталог курсов" },
        },
        {
          path: "new",
          name: "courses.new",
          component: () =>
            import("../pages/courses/newCoursesPage/NewCoursesPage.vue"),
          meta: { breadcrumb: "Новые курсы", title: "Новые курсы" },
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      redirect: "/courses",
    },
  ],
});
