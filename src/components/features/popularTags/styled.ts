import styled from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  background: ${_.white};
  width: 100%;

  border-radius: 24px;
  gap: 24px;
`;

export const Title = styled("h2")`
  margin: 24px 0 0 32px;
  padding: 0;
  line-height: 28px;

  font-family: "Nekst";
  font-weight: 400;
  font-size: 22px;
  color: ${_.black};
`;

export const TagsList = styled("div")`
  margin: 0 0 24px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Tag = styled("div")`
  border-radius: 40px;
  padding: 0 40px 0 40px;
  line-height: 32px;

  justify-content: center;
  border: 1px solid ${_.purple};

  font-family: "Onest";
  font-weight: 500;
  font-size: 12px;
  color: ${_.purple};
`;
