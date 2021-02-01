import styled from "styled-components";
import {
  borderColor,
  cancelColor,
  textColor,
} from "../../../../utils/style.utils";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 200px;
  border-right: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
`;

export const MyLink = styled(Link)`
  color: ${textColor};
  text-decoration: none;
  padding: 5px;
  background-color: ${(props) => (props.active ? "#f1f1f1" : "")};
  &:first-child {
    border-radius: 10px 0 0 0;
  }
  &:last-child {
    margin-top: auto;
    color: ${cancelColor};
    border-radius: 0 0 0 10px;
  }
`;
