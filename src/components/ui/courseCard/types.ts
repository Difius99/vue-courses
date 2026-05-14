export type CardDirection = "row" | "column";

export type CourseCardProps = {
  id: number;
  cardDirection: CardDirection;
  isFavorites?: boolean;
  title?: string;
  badge: string;
  description: string;
  titleButton?: string;
  onChange?: () => void;
  src: string;
  startDate: string;
  duration: string;

  tags: string[];
  cost: number;
  durationInSecond: number;
  direction: string;
  targetAudience: string[];
  documentType?: "Сертификат" | "Диплом";
};
