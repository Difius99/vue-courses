import type { CourseCardProps } from "../../ui/courseCard/types";

export type CoursesSectionProps = {
  title?: string;
  subTitle?: string;
  isViewAll?: boolean;
  items: CourseCardProps[];
  onViewAll?: () => void;
};
