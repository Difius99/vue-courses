import styled, { css } from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div", { variant: String })`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  gap: 32px;
  max-width: 1141px;
  max-height: 422px;

  width: 1141px;

  box-sizing: border-box;
  border-radius: 24px;
  ${({ variant }) =>
    variant === "first"
      ? css`
          background: ${_.primary10};
          border: 1px solid ${_.primary20};
        `
      : css`
          background: ${_.secondory10};
          border: 1px solid ${_.secondory40};
        `}
`;

export const Title = styled("h1")`
  padding: 0;
  margin: 0;
  line-height: 32px;

  font-family: "Nekst";
  font-weight: 400;
  font-size: 22px;
`;

export const TitleWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 32px;
  padding-top: 32px;
  line-height: 32px;
  gap: 4px;
`;

export const SliderLayer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  width: 100%;
  padding: 0 0 32px 32px;
  box-sizing: border-box;
`;

export const Track = styled("div", {
  offset: {
    type: Number,
    default: 0,
  },
})`
  display: flex;
  gap: 24px;
  transition: all 0.4s;
  transform: ${(p) => `translateX(-${p.offset}px)`};
`;

export const Viewport = styled("div")`
  grid-area: 1 / 1;
  display: flex;

  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, black 0%, black 95%, transparent 100%);
`;

const NavButton = styled("button")`
  grid-area: 1 / 1;
  align-self: center;
  justify-self: center;

  width: 56px;
  height: 56px;

  border-radius: 50%;
  border: none;
  backdrop-filter: blur(4px);
  box-shadow: 0px 4px 32px rgba(60, 56, 141, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${_.white};
  cursor: pointer;
  z-index: 2;

  transition: all 0.3s;
  &:hover {
    background: ${_.primary10};
  }
`;

export const LeftButton = styled(NavButton)`
  justify-self: start;
  transform: translateX(-24px);
`;
export const RightButton = styled(NavButton)`
  margin-right: 32px;
  justify-self: end;
  transform: translateX(24px);
`;

export const SubTitle = styled("p")`
  padding: 0;
  margin: 0;

  font-family: "Onest";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${_.gray60};
`;
