import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  gap: 24px;
  background: ${_.ligthGray};
`;

export const CatalogContent = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 40px;
  min-height: 100vh;
  gap: 32px;

  max-width: 1141px;
  width: 100%;
  background: ${_.ligthGray};
`;
