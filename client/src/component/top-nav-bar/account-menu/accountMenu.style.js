import styled from "styled-components";

export const AccountMenuContainer = styled.div`
  height: 205px;
  background-color: white;
  width: 205px;
  position: absolute;
  right: 20px;
  top: 60px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid #cccccc;
`;
export const MenuContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 100;
    margin: 0;
    padding: 5px;
    border-bottom: 1px solid #cccccc;
    user-select: none;
  }
`;

export const MenuItem = styled.div`
  padding: 5px;
  cursor: pointer;
  user-select: none;
  font-weight: 100;
  &:hover {
    background-color: #dedede;
  }

  &:last-child {
    margin-top: auto;
    border-top: 1px solid #cccccc;
    border-radius: 0 0 10px 10px;
  }
`;
