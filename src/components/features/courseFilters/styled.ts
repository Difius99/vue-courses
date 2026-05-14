import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  top: 194px;
  z-index: 10;
  position: sticky;

  padding: 20px;
  gap: 12px;
  border-radius: 24px;
  border: none;
  background: ${_.white};
`;

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${_.gray40};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
