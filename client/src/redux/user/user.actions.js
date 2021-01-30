import { URL, callFetch } from "../../utils/actions.utils";

export const setAvatarImg = (avatarImg) => (dispatch) => {
  dispatch({ type: "SET_AVATAR_IMG_START" });
  callFetch(`${URL}/api/users/avatar`, "POST", avatarImg)
    .then((data) => {
      dispatch({ type: "SET_AVATAR_IMG_SUCCESS", payload: data });
    })
    .catch((err) => dispatch({ type: "SET_AVATAR_IMG_FAILED", payload: err }));
};
