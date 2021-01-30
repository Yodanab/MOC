import React, { useState } from "react";
import LogNav from "../../component/auth/log-nav/LogNav";
import Login from "../../component/auth/Login";
import Register from "../../component/auth/Register";
import "./landing.style.scss";
import { connect } from "react-redux";
import { logInUser, sendToken } from "../../redux/auth/auth.actions";
import Logo from "../../gifs&svg/Logo";
const Landing = ({ logInUser, sendToken }) => {
  const [form, setForm] = useState("login");
  const changeForm = (form) => {
    setForm(form);
  };

  return (
    <div className="log-sign-container">
      <LogNav changeForm={changeForm} active={form} />

      <div className="log-in-container">
        <div className="form-container">
          <div className="logo-container">
            <Logo height="100" width="150" />
          </div>
          {form === "login" && (
            <Login logInUser={logInUser} sendToken={sendToken} />
          )}
          {form === "signup" && <Register />}
        </div>
      </div>
      <div className="login-footer">
        {form === "login" ? "Forgot password" : ""}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  logInUser: (email, password) => dispatch(logInUser(email, password)),
  sendToken: () => dispatch(sendToken()),
});

export default connect(null, mapDispatchToProps)(Landing);
