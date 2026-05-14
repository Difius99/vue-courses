import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  gap: 32px;
  width: 1141px;

  background: ${_.white};
  border-radius: 24px;
  border: none;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 32px 32px 0 32px;
  align-items: center;
`;

export const HeaderLeft = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled("h2")`
  padding: 0;
  margin: 0;
  line-height: 28px;
  gap: 8px;

  font-family: "Nekst";
  font-weight: 400;
  font-size: 22px;
  color: ${_.black};
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

export const ViewAll = styled("button")`
  display: flex;
  align-items: center;
  padding: 0;
  line-height: 26px;
  gap: 8px;

  background: transparent;
  border: none;
  cursor: pointer;

  font-family: "Onest";
  font-weight: 700;
  font-size: 18px;
  color: ${_.purple};
`;

export const Grid = styled("div")`
  display: grid;
  flex-direction: row;

  padding: 0 32px 32px 32px;

  gap: 48px 24px;
  grid-template-columns: repeat(3, 1fr);
`;
