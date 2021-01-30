import React, { useState } from "react";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../layouts/input-field/InputField";

const Login = ({ logInUser, sendToken }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, password } = loginData;
    e.preventDefault();
    try {
      await logInUser(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          name="email"
          type="text"
          label="Email"
          required
          handleChange={handleChange}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          required
          handleChange={handleChange}
        />

        <MyButton margin={"20px 0 0 0"}>Log in</MyButton>
      </form>
    </>
  );
};

export default Login;
