import React from "react";
import { cancel } from "../../../gifs&svg/fontAwesome";
import MyButton from "../../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../../layouts/input-field/InputField";
import { PageSection } from "../my-profile/myProfile.style";
import { withRouter } from "react-router-dom";

const EditProfile = ({ history }) => {
  return (
    <>
      <PageSection>
        <MyButton
          onClick={() => history.push("/me")}
          justify={"flex-end"}
          noColor>
          {cancel}
        </MyButton>
        <h2>Edit Profile</h2>
        <InputField
          label="About"
          placeholder="Tell me about yourself"
          textArea
        />
        <InputField label="Musical instruments" />
        <InputField label="More info" />
        <MyButton margin={"20px 0 0 0"}>Save</MyButton>
      </PageSection>
    </>
  );
};

export default withRouter(EditProfile);
