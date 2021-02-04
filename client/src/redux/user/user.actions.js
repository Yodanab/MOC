import { URL, callFetch } from "../../utils/actions.utils";

export const setAvatarImg = (avatarImg) => (dispatch) => {
  dispatch({ type: "SET_AVATAR_IMG_START" });
  callFetch(`${URL}/api/users/avatar`, "POST", avatarImg)
    .then((data) => {
      dispatch({ type: "SET_AVATAR_IMG_SUCCESS", payload: data });
    })
    .catch((err) => dispatch({ type: "SET_AVATAR_IMG_FAILED", payload: err }));
};

export const changePassword = (password, newPassword) => (dispatch) => {
  dispatch({ type: "CHANGE_PASSWORD_START" });
  callFetch(`${URL}/api/users/password`, "PUT", { password, newPassword })
    .then((res) => {
      console.log(res);
      //dispatch success msg here
    })
    .catch((err) => console.log(err));
};
