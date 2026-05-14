import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";
import { RouterLink } from "vue-router";

export const Container = styled("div")`
  display: flex;
  width: 100%;

  justify-content: center;
  background: ${_.white};
`;

export const Breadcrumbs = styled("nav")`
  max-width: 1530px;
  width: 100%;
  line-height: 48px;

  justify-content: start;
  background: ${_.white};
`;

export const BreadcrumbList = styled("ol")`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 29px;
`;

export const BreadcrumbItem = styled("li")`
  display: flex;
  align-items: center;
  color: ${_.black};
  &:not(:first-child)::before {
    content: "/";
    margin-right: 12px;
  }
`;

export const BreadcrumbLink = styled(RouterLink)`
  font-family: "Onest";
  font-weight: 400;
  font-size: 14px;

  text-decoration: none;
  color: ${_.purple};

  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbCurrent = styled("span")`
  font-family: "Onest";
  font-weight: 400;
  font-size: 14px;

  cursor: default;
  color: ${_.priorityPrimary50};
`;
