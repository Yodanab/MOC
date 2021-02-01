import React, { useState } from "react";
import MyButton from "../../../../layouts/input-field/buttons/my-button/MyButton";
import {
  ImgContainer,
  UserImg,
  ImgOverlay,
  ConfirmButtons,
} from "./avatarImg.style";
import { editAvatar, confirm, cancel } from "../../../../gifs&svg/fontAwesome";

const AvatarImg = ({ user, setAvatarImg }) => {
  const [imgFile, setImgFile] = useState({ img: null, buttons: false });

  let imgSrc = imgFile.img ? URL.createObjectURL(imgFile.img[0]) : user.avatar;
  const hiddenFileInput = React.useRef(null);

  const handleImgChange = (e) => {
    let { files } = e.target;

    if (files.length === 0) {
      return;
    }
    setImgFile({ img: files, buttons: true });
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const submitImg = async (e) => {
    if (!imgFile.img) {
      return;
    }
    let fromData = new FormData();
    fromData.append("avatar", imgFile.img[0]);

    try {
      await setAvatarImg(fromData);
    } catch (err) {
      console.log(err);
    } finally {
      setImgFile({ ...imgFile, buttons: false });
    }
  };

  const sameImg = (e) => {
    e.target.value = "";
  };
  return (
    <ImgContainer>
      <UserImg img={imgSrc} />
      <ImgOverlay onClick={() => handleClick()}> {editAvatar}</ImgOverlay>
      {imgFile.buttons && (
        <ConfirmButtons>
          <MyButton onClick={() => submitImg()} margin={"0 5px"} confirm>
            {confirm}
          </MyButton>
          <MyButton
            margin={"0 5px"}
            cancel
            onClick={() => setImgFile({ img: null, buttons: false })}>
            {cancel}
          </MyButton>
        </ConfirmButtons>
      )}

      <input
        name="avatar"
        onClick={sameImg}
        onChange={handleImgChange}
        ref={hiddenFileInput}
        accept="image/*"
        type="file"
        style={{ display: "none" }}
      />
    </ImgContainer>
  );
};

export default AvatarImg;
