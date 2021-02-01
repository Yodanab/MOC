import styled, { css } from "styled-components";
import {
  primaryColor,
  hoverColor,
  cancelColor,
  cancelBg,
  confirmColor,
  confirmBg,
  textColor,
} from "../../../../utils/style.utils";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const buttonStyle = (props) => {
  if (props.confirm) {
    return confirmStyle;
  }
  if (props.cancel) {
    return cancelStyle;
  }
  if (props.noColor) {
    return noColor;
  } else {
    return defaultStyle;
  }
};
const defaultStyle = css`
  height: ${(props) => (props.height ? props.height : "40px")};
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: ${primaryColor};
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background-color: ${hoverColor};
  }
`;

const confirmStyle = css`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: ${confirmColor};
  background-color: ${confirmBg};
  font-size: 1.2rem;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const cancelStyle = css`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: ${cancelColor};
  background-color: ${cancelBg};
  font-size: 1.2rem;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const noColor = css`
  color: ${textColor};
  width: 70px;
  height: 40px;
  background-color: #f0f8ff00;
  font-size: 30px;
`;

export const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  ${buttonStyle}
  &:focus {
    outline: none;
  }
`;
