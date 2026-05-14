import styled, { css } from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";
import StarBase from "../../icons/Star.vue";

export const Container = styled("div", { direction: String })`
  display: flex;
  align-items: center;

  ${({ direction }) =>
    direction === "row"
      ? css`
          flex-direction: row;
          max-height: 266px;
          min-width: 500px;
        `
      : css`
          flex-direction: column;
          max-height: 498px;
          height: 498px;
          max-width: 343px;
        `};

  background: ${_.white};
  border-radius: 24px;
  box-sizing: border-box;
  border: solid 1px ${_.primary20};
`;

export const CardMedia = styled("div", { direction: String })`
  margin-left: 16px;
  border-radius: 16px;

  display: grid;
  align-items: center;
  overflow: hidden;

  ${({ direction }) =>
    direction === "row"
      ? css`
          max-width: 225px;
          max-height: 234px;
        `
      : css`
          min-width: 311px;
          max-height: 214px;
          margin: 16px;
        `}
`;

export const CardContent = styled("div", { direction: String })`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 16px;

  ${({ direction }) =>
    direction === "row"
      ? css`
          height: 234px;
          width: 227px;
        `
      : css`
          height: 204px;
          min-width: 311px;
        `};
`;

export const CardImage = styled.img`
  grid-area: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
`;

export const Badge = styled.div`
  grid-area: 1 / 1;
  align-self: start;
  justify-self: start;

  display: flex;
  margin: 12px;
  padding: 4px 12px;

  min-height: 24px;
  border-radius: 8px;
  box-sizing: border-box;
  border: solid 1px ${_.gray20};
  background: ${_.white};
  align-items: center;

  font-size: 12px;
  font-family: "Onest";
  font-weight: 400;
  z-index: 2;
`;

const StarButtonProps = {
  direction: String,
};

export const StarButton = styled("button", StarButtonProps)`
  grid-area: 1 / 1;
  align-self: start;
  justify-self: end;
  cursor: pointer;
  z-index: 3;

  margin: ${({ direction }) => (direction === "row" ? "8px" : "12px")};
  width: 36px;
  height: 36px;

  border-radius: 50%;
  border: none;
  background: ${_.white};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Star = styled(StarBase, { isFavorites: Boolean })`
  path {
    stroke: ${({ isFavorites }) => (isFavorites ? "#FFD700" : "#B1B2BA")};
    fill: ${({ isFavorites }) => (isFavorites ? "#FFD700" : "none")};
    transition: all 0.2s ease;
  }
`;

export const Title = styled("h3", { direction: String })`
  padding: 0;
  margin: 0;

  color: ${_.black};
  font-size: ${({ direction }) => (direction === "row" ? "14px" : "20px")};
  font-family: "Nekst";
  font-weight: 400;
`;

export const CardDescription = styled("p")`
  margin: 0;
  margin-top: 12px;
  padding: 0;
  color: ${_.black};
  font-family: "Onest";
  font-weight: 400;
  font-size: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TagsList = styled("div")`
  display: flex;
  height: 54px;
  margin-top: 16px;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 6px;
`;

export const Tag = styled("span")`
  max-height: 24px;
  max-width: 145px;

  margin: 0;
  padding: 0 12px 0 12px;
  border-radius: 8px;
  align-items: center;

  line-height: 24px;
  background: ${_.gray10};

  cursor: pointer;
  font-family: "Onest";
  font-weight: 400;
  font-size: 12px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MetaInfo = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;

  font-family: "Onest";
  font-weight: 400;
  font-size: 12px;
  color: ${_.black};
`;

export const ButtonAndMetaInfoWrapper = styled("div", { direction: String })`
  display: flex;

  ${({ direction }) =>
    direction === "row"
      ? css`
          gap: 16px;
        `
      : css`
          gap: 24px;
        `}

  flex-direction: column;
  margin-top: auto;
`;

export const Divider = styled("span")`
  margin: 0;
  padding: 0;
  width: 1px;
  height: 16px;
  background: ${_.gray40};
`;

export const CardAction = styled("button", { direction: String })`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-top: auto;

  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  ${({ direction }) =>
    direction === "row"
      ? css`
          height: 32px;
        `
      : css`
          height: 40px;
        `}
  background:${_.purple};
  &:hover {
    background: ${_.priorityPrimary70};
  }

  font-family: "Onest";
  font-weight: 500;
  font-size: 12px;
  color: ${_.white};
`;
