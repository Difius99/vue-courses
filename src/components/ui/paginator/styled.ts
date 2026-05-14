import styled, { css } from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";
import ChevronDown from "../../icons/ChevronDown.vue";

export const Container = styled("div")`
  display: flex;
  max-height: 48px;

  align-items: center;

  align-self: flex-end;
  gap: 20px;
`;

export const BaseButton = styled("button")`
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 4px;
`;

export const PageButton = styled(BaseButton, { isActive: Boolean })`
  ${({ isActive }) =>
    isActive
      ? css`
          background: ${_.purple};
          color: ${_.white};
        `
      : css`
          cursor: pointer;
          background: ${_.white};
          color: ${_.purple};
        `}

  font-family: "Onest";
  font-weight: 500;
  font-size: 16px;
`;

export const NavButton = styled(BaseButton, { disabled: Boolean })`
  height: 48px
    ${({ disabled }) =>
      disabled
        ? css`
            color: ${_.gray};
            cursor: default;
            background: ${_.gray20};
          `
        : css`
            background: ${_.white};
            color: ${_.purple};
            cursor: pointer;
          `};
`;

export const Dots = styled(BaseButton)`
  color: ${_.purple};
`;
export const PrevIcon = styled(ChevronDown)`
  transform: rotate(90deg);
`;

export const NextIcon = styled(ChevronDown)`
  transform: rotate(-90deg);
`;
