import React from "react";
import "./mybutton.style.scss";
import { ButtonContainer, CustomButton } from "./myButton.style";

const MyButton = ({ children, onClick, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <CustomButton onClick={onClick} {...props}>
        {children}
      </CustomButton>
    </ButtonContainer>
  );
};

export default MyButton;
