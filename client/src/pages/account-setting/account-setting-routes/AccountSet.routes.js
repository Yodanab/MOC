import React from "react";
import AccountNav from "./accountSet-nav/AccountSetNav";
import { AccountSetContainer } from "./accountSet.style";

const AccountSetRoutes = () => {
  return (
    <AccountSetContainer>
      <AccountNav />
      <div>content</div>
    </AccountSetContainer>
  );
};

export default AccountSetRoutes;
