import styled from "styled-components";
import { hoverTextColor, textColor } from "../../utils/style.utils";

export const SuggestionContainer = styled.div`
  max-height: 130px;
  overflow-y: auto;
  margin-bottom: 15px;
`;

export const Suggestion = styled.div`
  color: ${textColor};
  background-color: ${(props) => (props.active ? `${hoverTextColor}` : "")};
  padding: 5px;
  margin: 0 5px;
  font-size: 17px;
  cursor: pointer;
  user-select: none;
`;
