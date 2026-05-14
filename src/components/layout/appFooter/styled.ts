import styled, { css } from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("footer")`
  display: flex;
  justify-content: center;
  background: ${_.purple};
  width: 100%;

  margin-top: 120px;
  max-height: 152px;
  height: 100%;
`;

export const FooterWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1530px;
  height: 100%;
  width: 100%;
`;

export const LeftSection = styled("section")`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;

  max-width: 504px;
  width: 100%;
`;
export const RightSection = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  max-width: 185px;
  width: 100%;
`;

export const CopyrightText = styled("div", { variant: String })`
  color: ${_.white};
  ${({ variant }) =>
    variant === "second"
      ? css`
          color: ${_.primary30};
        `
      : css``}
  line-height: 24px;

  font-family: "Onest";
  font-weight: 500;
  font-size: 16px;
`;

export const CopyrightTextWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 24px;
`;

export const SocialsList = styled("ul")`
  display: flex;
  line-height: 32px;
  gap: 16px;

  align-items: center;
`;

export const SocialsItem = styled("li")`
  display: flex;

  align-items: center;
  justify-content: center;

  color: ${_.white};
  width: 32px;
  height: 32px;
`;
