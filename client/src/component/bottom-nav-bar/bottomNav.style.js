import styled from "styled-components";
import { bottomNavBg, primaryColor } from "../../utils/style.utils";

export const BottomNavContainer = styled.div`
  height: 75px;
  line-height: 75px;
  background-color: ${bottomNavBg};
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
`;

export const IconContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const MenuIcon = styled.div`
  font-size: 40px;
  color: white;
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;
