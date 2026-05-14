import { css, styled } from "@vue-styled-components/core";
import { COLORS as _ } from "../../../constants";
import ChewronDownBase from "../../icons/ChevronDown.vue";
import TickBase from "../../icons/Tick.vue";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 32px;
  width: 325px;
  background: ${_.white};
  gap: 12px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  overflow-y: auto;
  max-height: 384px;
  width: 100%;
  padding: 0;
  margin: 0;
  gap: 8px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const ControlLabel = styled("label", { disabled: Boolean })`
  font-size: 14px;
  font-family: "Onest";
  font-weight: 500;
  ${({ disabled }) =>
    disabled
      ? css`
          color: ${_.gray};
        `
      : css`
          color: ${_.black};
        `}

  line-height: 20px;
  cursor: pointer;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MenuItemLabel = styled.label`
  font-size: 14px;
  color: ${_.black};
  font-family: "Onest";
  font-weight: 400;
`;

export const CountLabel = styled.label`
  font-size: 14px;
  color: ${_.gray60};
  font-family: "Onest";
  font-weight: 400;
`;

export const CheckBox = styled("div", { includes: Boolean, disabled: Boolean })`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  cursor: pointer;

  height: 24px;
  width: 24px;
  border-radius: 4px;

  ${({ includes }) =>
    includes
      ? css`
          background: ${_.purple};
          border: none;
        `
      : css`
          background: ${_.white};
          border: solid 1px ${_.gray};
        `}

  ${({ disabled, includes }) =>
    !disabled && !includes
      ? css`
          &:hover {
            border-color: ${_.priorityPrimary70};
            ${Tick} {
              color: ${_.gray};
            }
          }
        `
      : ""}
  ${({ disabled }) =>
    disabled
      ? css`
          background: ${_.ligthGray};
          cursor: default;
        `
      : ""}
`;

export const Tick = styled(TickBase)`
  color: ${_.white};
`;

export const ChewronDown = styled(ChewronDownBase, { isOpen: Boolean })`
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  color: ${_.black};
`;

export const NoResult = styled.div`
  font-size: 14px;
  font-family: "Onest";
  font-weight: 400;
  color: ${_.gray40};
`;

export const ShowAllButton = styled.button`
  min-height: 48px;
  font-family: "Onest";
  font-weight: 500;
  color: ${_.purple};
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`;

export const ApplyFloatingWrapper = styled.div`
  position: absolute;
  z-index: 10000;
`;

export const ApplyButton = styled.button`
  position: relative;

  background: ${_.purple};
  color: white;
  border: none;
  padding: 16px 48px 16px 48px;
  border-radius: 16px;
  cursor: pointer;

  font-family: "Onest";
  font-weight: 500;
  font-size: 16px;

  &::before {
    content: "";
    position: absolute;

    left: -5px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);

    width: 16px;
    height: 16px;

    background: ${_.purple};
  }
`;
