import React from "react";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import { UserInfo, ProfileInfo, ButtonsContainer } from "./myProfile.style";
import { dotMenu } from "../../gifs&svg/fontAwesome";
import AvatarImg from "./avatar-img/AvaterImg";

const MyProfile = ({ user, myProfile, setAvatarImg, loading }) => {
  let aboutTxt = myProfile ? myProfile.bio : "";
  let skillsTxt = myProfile ? myProfile.skills.toString() : "";

  return (
    <>
      <UserInfo>
        <AvatarImg loading={loading} setAvatarImg={setAvatarImg} user={user} />
        <h3>{user.name}</h3>
        <ButtonsContainer>
          <MyButton margin={"0 5px 0 0"} width={"30px"}>
            {dotMenu}
          </MyButton>
          <MyButton width={"60px"}>Edit</MyButton>
        </ButtonsContainer>
      </UserInfo>

      <ProfileInfo>
        <h3>About</h3>
        <p>{aboutTxt}</p>
        <h3>My skills</h3>
        <p>{skillsTxt}</p>
      </ProfileInfo>
    </>
  );
};

export default MyProfile;
