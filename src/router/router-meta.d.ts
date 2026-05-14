import "vue-router";
import type { RouteLocationRaw } from "vue-router";

declare module "vue-router" {
  type RouteMeta = {
    title?: string;
    breadcrumb?: string;
    breadcrumbTo?: RouteLocationRaw;
  };
}
