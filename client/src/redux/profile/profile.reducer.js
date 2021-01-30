const INITIAL_STATE = {
  loading: true,
  myProfile: null,
  error: null,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CURRENT_PROFILE_START":
      return { ...state, loading: true };
    case "GET_CURRENT_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        myProfile: action.payload,
        error: null,
      };
    case "GET_CURRENT_PROFILE_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "CLEAN_PROFILE_ON_LOG_OUT":
      return { ...state, myProfile: null, error: null };
    default:
      return state;
  }
};

export default profileReducer;
