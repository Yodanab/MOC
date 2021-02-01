import styled from "styled-components";
import { borderColor, textColor } from "../../utils/style.utils";

export const MassagesContainer = styled.div`
  height: 86vh;
  border-right: 1px solid ${borderColor};
  width: 350px;
  position: fixed;
  background-color: white;
  z-index: 99;
  h3 {
    color: ${textColor};
    margin: 0 0 0 5px;
  }
`;
