import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div")`
  display: flex;
  width: 100%;
`;

export const Tags = styled("div")`
  flex-wrap: wrap;
  flex-direction: row;

  background: ${_.ligthGray};
  display: flex;
  align-items: center;

  margin: 0;

  gap: 12px;
`;

export const TagWrapper = styled("div")`
  display: flex;
  line-height: 32px;
  gap: 8px;
  padding: 0 16px 0 16px;
  background: ${_.white};

  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid ${_.priorityPrimary40};
`;

export const Tag = styled("p")`
  margin: 0;

  font-family: "Onest";
  font-weight: 400;
  font-size: 16px;
`;

export const CrossButton = styled("button")`
  background: ${_.white};

  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`;
