export type variantOfStyle = "first" | "second";

export type CarouselProps<T = unknown> = {
  variant?: variantOfStyle;
  title: string;
  subTitle?: string;
  items: T[];
};
