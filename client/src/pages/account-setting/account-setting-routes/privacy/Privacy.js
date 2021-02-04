import React, { useState } from "react";
import MyButton from "../../../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../../../layouts/input-field/InputField";
import { Content } from "../general-details/generalDetails.style";

const Privacy = ({ changePassword }) => {
  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    reNewPassword: "",
  });
  const { password, newPassword, reNewPassword } = passwords;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== reNewPassword) {
      console.log(`passwords doesn't match`);
      return;
    }
    try {
      await changePassword(password, newPassword);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Content>
      <h3> Update your password</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          name="password"
          type="password"
          label="Your Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <InputField
          name="newPassword"
          type="password"
          label="New Password"
          value={newPassword}
          handleChange={handleChange}
          required
        />
        <InputField
          name="reNewPassword"
          type="password"
          label="Re New Password"
          value={reNewPassword}
          handleChange={handleChange}
          required
        />

        <MyButton margin={"20px 0"}>Update</MyButton>
      </form>
    </Content>
  );
};

export default Privacy;
