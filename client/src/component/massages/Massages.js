import React from "react";
import { cancel } from "../../gifs&svg/fontAwesome";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import { MassagesContainer } from "./massages.style";

const Massages = ({ setMassageView }) => {
  return (
    <MassagesContainer>
      <MyButton
        onClick={() => setMassageView(false)}
        justify={"flex-end"}
        noColor>
        {cancel}
      </MyButton>
      <h3>Massages</h3>
    </MassagesContainer>
  );
};

export default Massages;
