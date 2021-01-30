import styled from "styled-components";
import { primaryColor } from "../../../utils/style.utils";

export const ImgContainer = styled.div`
  position: relative;
  width: 154px;
  height: 154px;
`;
export const ImgOverlay = styled.div`
  position: absolute;
  color: ${primaryColor};
  font-size: 30px;
  top: 0;
  width: 150px;
  height: 150px;
  background-color: #8080807a;
  border-radius: 50%;
  border: 2px solid ${primaryColor};
  opacity: 0;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const UserImg = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 2px solid ${primaryColor};
`;

export const ConfirmButtons = styled.div`
  position: absolute;
  display: flex;
  top: 40%;
  left: 170px;
`;

export const ImgSpinner = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 2px solid ${primaryColor};
`;
