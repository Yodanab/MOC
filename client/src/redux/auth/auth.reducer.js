const INITIAL_STATE = {
  loading: false,
  user: null,
  error: null,
  uploadLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN_START":
    case "SEND_TOKEN_START":
      return { ...state, loading: true };
    case "USER_VERIFIED":
      return { ...state, loading: false, user: action.payload, error: null };
    case "SET_AVATAR_IMG_START":
      return { ...state, uploadLoading: true };
    case "SET_AVATAR_IMG_SUCCESS":
      return { ...state, user: action.payload, uploadLoading: false };
    case "LOG_IN_FAILED":
      return { ...state, loading: false, user: null, error: action.payload };
    case "SIGN_OUT_SUCCESS":
      return { ...state, loading: false, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
