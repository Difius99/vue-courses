import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const ShowMoreButton = styled("button")`
  display: flex;
  align-items: center;
  padding: 0 32px 0 32px;

  line-height: 48px;
  gap: 12px;

  border: 1px solid ${_.purple};
  border-radius: 40px;
  background: ${_.white};
  cursor: pointer;

  color: ${_.purple};
  font-family: "Onest";
  font-weight: 500;
  font-size: 16px;
`;

export const ShowMoreWrapper = styled("div")`
  display: flex;
  margin-top: 8px;
  width: 100%;
  justify-content: space-between;
`;
