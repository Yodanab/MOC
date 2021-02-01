import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import MyProfile from "./my-profile/MyProfile";
import { setAvatarImg } from "../../redux/user/user.actions";
import EditProfile from "./edit-profile/EditProfile";

const MyProfileRoutes = ({ match, user, myProfile, setAvatarImg }) => {
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <MyProfile
            user={user}
            myProfile={myProfile}
            setAvatarImg={setAvatarImg}
          />
        )}
      />
      <Route exact path={`${match.path}/edit`} render={() => <EditProfile />} />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  myProfile: state.profile.myProfile,
});
const mapDispatchToProps = (dispatch) => ({
  setAvatarImg: (fromData) => dispatch(setAvatarImg(fromData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileRoutes);
