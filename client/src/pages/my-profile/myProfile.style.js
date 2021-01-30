import styled from "styled-components";
import { borderColor, profileBg } from "../../utils/style.utils";

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
  }
`;

export const ProfileInfo = styled.div`
  width: 1000px;
  margin: auto;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px 5px;

  h3 {
    margin: 5px 0;
    font-weight: 300;
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
`;
