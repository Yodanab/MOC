export const logInUser = (email, password) => (dispatch) => {
  dispatch({ type: "LOG_IN_START" });
  fetch("http://localhost:5000/api/auth", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        dispatch(sendToken());
      } else {
        localStorage.removeItem("token");
        throw Error("Something is wrong");
      }
    })
    .catch((err) => dispatch({ type: "LOG_IN_FAILED", payload: err }));
};

export const sendToken = () => (dispatch) => {
  dispatch({ type: "SEND_TOKEN_START" });
  fetch("http://localhost:5000/api/auth", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Token not valid");
      }
    })
    .then((user) => dispatch({ type: "USER_VERIFIED", payload: user }))
    .catch((err) => dispatch({ type: "LOG_IN_FAILED", payload: err }));
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "CLEAN_PROFILE_ON_LOG_OUT" });
  dispatch({ type: "SIGN_OUT_SUCCESS" });
};
