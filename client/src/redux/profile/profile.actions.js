import { URL, callFetch } from "../../utils/actions.utils";

export const getCurrentProfile = () => (dispatch) => {
  dispatch({ type: "GET_CURRENT_PROFILE_START" });
  callFetch(`${URL}/api/profile/me`, "GET")
    .then((data) =>
      dispatch({ type: "GET_CURRENT_PROFILE_SUCCESS", payload: data })
    )
    .catch((err) =>
      dispatch({ type: "GET_CURRENT_PROFILE_FAILED", payload: err })
    );
};
