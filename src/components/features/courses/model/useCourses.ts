import { onMounted, ref } from "vue";
import { CoursesMock as apiCourses } from "../../../../mocks/Courses.mocks";

export function useCourses() {
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const toggleFavorite = (id: number) => {
    const course = courses.value.find((c) => c.id === id);
    if (course) {
      course.isFavorites = !course.isFavorites;
    }
  };

  const courses = ref(
    apiCourses.value.map((course) => ({
      ...course,
      isFavorites: false,
      onChange: () => {
        toggleFavorite(course.id);
      },
    })),
  );
  const fetchCourses = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      const data = await response.json();
      console.log("Данные с fakestoreapi:", data);
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Неизвестная ошибка";
      console.error("Ошибка при загрузке курсов:", e);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchCourses();
  });
  return {
    courses,
    isLoading,
    error,
    refetch: fetchCourses,
  };
}
