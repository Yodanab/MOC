import React from "react";
import {
  AccountMenuContainer,
  MenuItem,
  MenuContent,
} from "./accountMenu.style";

const AccountMenu = ({ signOut }) => {
  return (
    <AccountMenuContainer>
      <MenuContent>
        <h4>Account</h4>
        <MenuItem>Setting and privacy</MenuItem>
        <MenuItem>Help and support</MenuItem>
        <MenuItem onClick={() => signOut()}>Log out</MenuItem>
      </MenuContent>
    </AccountMenuContainer>
  );
};

export default AccountMenu;
