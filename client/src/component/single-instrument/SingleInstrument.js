import React from "react";
import { cancel } from "../../gifs&svg/fontAwesome";
import MyButton from "../../layouts/input-field/buttons/my-button/MyButton";
import { SingleItem } from "./singleInstrument.style";

const SingleInstrument = ({ instrument, removeInstrument }) => {
  return (
    <SingleItem>
      <h3>{instrument}</h3>
      <MyButton onClick={() => removeInstrument(instrument)} smallX>
        {cancel}
      </MyButton>
    </SingleItem>
  );
};

export default SingleInstrument;
