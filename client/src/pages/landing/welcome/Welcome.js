import React, { useEffect, useState } from "react";
import BottomNav from "../../../component/bottom-nav-bar/BottomNav";
import TopNav from "../../../component/top-nav-bar/TopNav";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { signOut } from "../../../redux/auth/auth.actions";
import MyProfileRoutes from "../../my-profile/MyProfileRoutes";
import Massages from "../../../component/massages/Massages";
import AccountSetRoutes from "../../account-setting/account-setting-routes/AccountSet.routes";

const Welcome = ({ getCurrentProfile, user, signOut }) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);
  const [massageView, setMassageView] = useState(false);

  const toggleMassageView = () => {
    setMassageView(!massageView);
  };

  return (
    <>
      <TopNav
        toggleMassageView={toggleMassageView}
        signOut={signOut}
        user={user}
      />
      {massageView && <Massages setMassageView={setMassageView} />}

      <Switch>
        <Route path="/me" component={MyProfileRoutes} />
        <Route path="/my-account" component={AccountSetRoutes} />
      </Switch>
      <BottomNav />
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
