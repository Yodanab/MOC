import { combineReducers } from "redux";
import authReducer from "../redux/auth/auth.reducer";
import profileReducer from "../redux/profile/profile.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducer;
