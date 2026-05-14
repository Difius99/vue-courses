import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  width: 100%;
  background: ${_.ligthGray};
`;

export const TitleWrapper = styled("nav")`
  padding: 0;
  margin: 0;

  display: flex;
  width: 100%;
  max-width: 1530px;
  background: ${_.ligthGray};
`;

export const Title = styled("h1")`
  padding: 0;
  margin: 0;

  line-height: 92px;

  font-family: "Nekst";
  font-weight: 400;
  font-size: 32px;
`;
