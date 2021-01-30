import styled from "styled-components";
import { borderColor, primaryColor } from "../../utils/style.utils";

export const UserImg = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border: 1px solid ${primaryColor};
`;

export const LogUserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  border-left: 1px solid ${borderColor};
  padding-left: 10px;
`;
