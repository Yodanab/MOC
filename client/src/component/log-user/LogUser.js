import React from "react";
import { UserImg, LogUserContainer } from "./logUser.style";
import { withRouter } from "react-router-dom";

const LogUser = ({ user, history }) => {
  return (
    <LogUserContainer onClick={() => history.push("/me")}>
      <UserImg img={user.avatar} />
      <span>{user.name}</span>
    </LogUserContainer>
  );
};

export default withRouter(LogUser);
