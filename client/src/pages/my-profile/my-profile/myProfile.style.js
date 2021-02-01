import styled from "styled-components";
import { borderColor, profileBg, textColor } from "../../../utils/style.utils";

export const UserInfo = styled.div`
  background-image: ${profileBg};
  width: 1000px;
  margin: auto;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px 5px 5px 5px;
  text-align: -webkit-center;
  h3 {
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export const PageSection = styled.div`
  width: 1000px;
  margin: auto;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px 5px;

  h3,
  h2 {
    margin: 5px 0;
    font-weight: 300;
    color: ${textColor};
  }
  p {
    margin: 0;
    font-weight: 200;
    border-bottom: 1px solid ${borderColor};
    padding-bottom: 2px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const MoreOptionsMenu = styled.div`
  border: 1px solid ${borderColor};
  width: 116px;
  position: absolute;
  height: 60px;
  right: -22px;
  border-radius: 5px;
  top: 112%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  padding: 5px;
  cursor: pointer;
  user-select: none;
  font-weight: 100;
  &:hover {
    background-color: #dedede;
  }
`;
