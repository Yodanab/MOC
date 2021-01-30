import React from "react";
import "./logNav.style.scss";

const LogNav = ({ changeForm, active }) => {
  const setActive = () => {
    return active === "signup" ? "signup" : "";
  };
  return (
    <div className="log-nav">
      <span className={`log-link`} onClick={() => changeForm("login")}>
        Log in
      </span>
      <span className={`log-link`} onClick={() => changeForm("signup")}>
        Sign up
      </span>
      <div className={`active-border ${setActive()} `} />
    </div>
  );
};

export default LogNav;
