import React, { useEffect } from "react";
import BottomNav from "../../../component/bottom-nav-bar/BottomNav";
import TopNav from "../../../component/top-nav-bar/TopNav";
import { Route, Switch } from "react-router-dom";
import MyProfile from "../../my-profile/MyProfile";
import { connect } from "react-redux";
import { signOut } from "../../../redux/auth/auth.actions";
import { setAvatarImg } from "../../../redux/user/user.actions";

const Welcome = ({
  getCurrentProfile,
  user,
  signOut,
  myProfile,
  setAvatarImg,
  uploadLoading,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <TopNav signOut={signOut} user={user} />
      <Switch>
        <Route
          path="/me"
          render={() => (
            <MyProfile
              user={user}
              myProfile={myProfile}
              setAvatarImg={setAvatarImg}
              loading={uploadLoading}
            />
          )}
        />
      </Switch>
      <BottomNav />
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  myProfile: state.profile.myProfile,
  uploadLoading: state.auth.uploadLoading,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  setAvatarImg: (fromData) => dispatch(setAvatarImg(fromData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
