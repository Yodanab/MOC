import React from "react";
import MyButton from "../../../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../../../layouts/input-field/InputField";
import { Content } from "./generalDetails.style";

const GeneralDetails = () => {
  return (
    <Content>
      <h3>Update your account details</h3>
      <InputField name="name" type="text" label="Your name" required />
      <InputField name="email" type="text" label="Email" required />
      <MyButton margin={"20px 0"}>Update</MyButton>
    </Content>
  );
};

export default GeneralDetails;
