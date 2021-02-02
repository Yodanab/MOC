import React, { useState } from "react";
import { cancel } from "../../../gifs&svg/fontAwesome";
import MyButton from "../../../layouts/input-field/buttons/my-button/MyButton";
import InputField from "../../../layouts/input-field/InputField";
import { PageSection } from "../my-profile/myProfile.style";
import { withRouter } from "react-router-dom";
import AutoComplete from "../../../layouts/auto-complete/AutoComplete";
import { musicalInstruments } from "../../../utils/musicalInstruments";
import SingleInstrument from "../../../component/single-instrument/SingleInstrument";
import { SelectedInstruments } from "../../../component/single-instrument/singleInstrument.style";

const EditProfile = ({ history }) => {
  const [profileInfo, setProfileInfo] = useState({
    instruments: [],
  });

  const addInstrument = (instrument) => {
    if (profileInfo.instruments.includes(instrument)) {
      return;
    }
    setProfileInfo({
      ...profileInfo,
      instruments: [...profileInfo.instruments, instrument],
    });
  };

  const removeInstrument = (instrument) => {
    const filterInstruments = profileInfo.instruments.filter(
      (i) => i !== instrument
    );
    setProfileInfo({ ...profileInfo, instruments: filterInstruments });
  };

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
        <AutoComplete
          label="Musical instruments"
          addInstrument={addInstrument}
          suggestions={musicalInstruments}
          placeholder="Start typing..."
        />
        <SelectedInstruments>
          {profileInfo.instruments.map((instrument, index) => {
            return (
              <SingleInstrument
                removeInstrument={removeInstrument}
                key={index}
                instrument={instrument}
              />
            );
          })}
        </SelectedInstruments>
        <MyButton margin={"20px 0 0 0"}>Save</MyButton>
      </PageSection>
    </>
  );
};

export default withRouter(EditProfile);
