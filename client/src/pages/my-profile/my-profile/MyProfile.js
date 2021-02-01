import React, { useState } from "react";
import MyButton from "../../../layouts/input-field/buttons/my-button/MyButton";
import {
  UserInfo,
  PageSection,
  ButtonsContainer,
  MoreOptionsMenu,
  Item,
} from "./myProfile.style";
import { dotMenu } from "../../../gifs&svg/fontAwesome";
import AvatarImg from "./avatar-img/AvaterImg";
import { withRouter } from "react-router-dom";

const MyProfile = ({ history, user, myProfile, setAvatarImg }) => {
  let aboutTxt = myProfile ? myProfile.bio : "";
  let skillsTxt = myProfile ? myProfile.skills.toString() : "";

  const [optionMenuView, setOptionMenuView] = useState(false);

  return (
    <>
      <UserInfo>
        <AvatarImg setAvatarImg={setAvatarImg} user={user} />
        <h3>{user.name}</h3>
        <ButtonsContainer>
          <MyButton
            onClick={() => setOptionMenuView(!optionMenuView)}
            margin={"0 5px 0 0"}
            width={"30px"}>
            {dotMenu}
          </MyButton>
          <MyButton onClick={() => history.push("/me/edit")} width={"60px"}>
            Edit
          </MyButton>
          {optionMenuView && (
            <MoreOptionsMenu>
              <Item onClick={() => history.push("/my-account")}>
                Mange account
              </Item>
            </MoreOptionsMenu>
          )}
        </ButtonsContainer>
      </UserInfo>

      <PageSection>
        <h3>About</h3>
        <p>{aboutTxt}</p>
        <h3>My skills</h3>
        <p>{skillsTxt}</p>
      </PageSection>
    </>
  );
};

export default withRouter(MyProfile);
