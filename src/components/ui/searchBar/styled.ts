import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("label")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: text;

  min-height: 48px;
  border-radius: 8px;
  border: solid 1px ${_.gray};
  padding-left: 12px;
  padding-right: 12px;

  &:focus-within {
    border: 2px solid ${_.purple};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  min-height: 24px;
  min-width: 24px;
`;
