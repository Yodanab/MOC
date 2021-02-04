import styled from "styled-components";
import { borderColor } from "../../utils/style.utils";

export const SelectedInstruments = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SingleItem = styled.div`
  margin: 5px;
  display: flex;
  align-items: baseline;
  border: 1px solid ${borderColor};
  width: fit-content;
  padding: 0 20px;
  border-radius: 30px;
  justify-content: space-around;
`;
