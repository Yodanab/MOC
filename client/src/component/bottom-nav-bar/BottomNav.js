import React from "react";
import { BottomNavContainer, IconContainer, MenuIcon } from "./bottomNav.style";
import { favIcon, searchIcon, feedIcon } from "../../gifs&svg/fontAwesome";

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <IconContainer>
        <MenuIcon>{searchIcon}</MenuIcon>
        <MenuIcon>{feedIcon}</MenuIcon>
        <MenuIcon>{favIcon}</MenuIcon>
      </IconContainer>
    </BottomNavContainer>
  );
};

export default BottomNav;
