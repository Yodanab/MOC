import React, { useEffect } from "react";
import Landing from "./pages/landing/Landing";
import { connect } from "react-redux";
import { sendToken } from "./redux/auth/auth.actions";
import { Route } from "react-router-dom";
import Welcome from "./pages/landing/welcome/Welcome";
import { getCurrentProfile } from "./redux/profile/profile.actions";
import "./transitions/transitions.style.scss";
import Spinner from "./component/spinner/Spinner";

const App = ({ sendToken, user, loading, getCurrentProfile }) => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      sendToken();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Spinner loading={loading}>
      <Route
        path="/"
        render={() =>
          user ? <Welcome getCurrentProfile={getCurrentProfile} /> : <Landing />
        }
      />
    </Spinner>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  sendToken: () => dispatch(sendToken()),
  getCurrentProfile: () => dispatch(getCurrentProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
