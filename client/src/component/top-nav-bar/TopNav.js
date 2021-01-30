import React, { useState } from "react";
import Logo from "../../gifs&svg/Logo";
import "./topNav.style.scss";
import {
  dotMenu,
  messageIcon,
  notificationIcon,
} from "../../gifs&svg/fontAwesome";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import AccountMenu from "./account-menu/AccountMenu";
import { Link } from "react-router-dom";

import LogUser from "../log-user/LogUser";

const TopNav = ({ user, signOut }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleView = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="top-nav-container">
      <div className="top-nav-content">
        <Link to="/">
          <Logo height="40px" width="70" />
        </Link>
        <div className="rightSide">
          <div className="message-container">
            <div className="navIcon">{notificationIcon}</div>
            <div className="navIcon">{messageIcon}</div>
          </div>
          <LogUser user={user} />

          <MyButton
            onClick={() => toggleView()}
            width={"30px"}
            margin={"0 0 0 15px"}>
            {dotMenu}
          </MyButton>
        </div>
      </div>
      {toggleMenu && <AccountMenu signOut={signOut} />}
    </div>
  );
};

export default TopNav;
