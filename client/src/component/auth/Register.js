import React from "react";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../layouts/input-field/InputField";

const Register = () => {
  return (
    <form>
      <InputField name="name" type="text" label="Name" required />
      <InputField name="email" type="text" label="Email" required />
      <InputField
        name="newPassword"
        type="password"
        label=" New Password"
        required
      />
      <InputField
        name="reNewPassword"
        type="password"
        label="Re-enter new Password"
      />
      <MyButton margin={"20px 0 0 0"}>Sign up</MyButton>
    </form>
  );
};

export default Register;
