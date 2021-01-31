import React from "react";
import { NavContainer, MyLink } from "./accountNav.style";
import { useLocation } from "react-router-dom";
const AccountNav = () => {
  const linkArr = [
    { linkTitle: "General details", linkUrl: "/my-account" },
    { linkTitle: "Privacy and password", linkUrl: "/my-account/privacy" },
    { linkTitle: "Delete account", linkUrl: "/my-account/delete-account" },
  ];
  const location = useLocation();

  let isActive = (link) => {
    return link === location.pathname ? 1 : 0;
  };
  const navMenu = linkArr.map((link) => {
    return (
      <MyLink
        active={isActive(link.linkUrl)}
        to={link.linkUrl}
        key={link.linkTitle}>
        {link.linkTitle}
      </MyLink>
    );
  });

  return <NavContainer>{navMenu}</NavContainer>;
};

export default AccountNav;
