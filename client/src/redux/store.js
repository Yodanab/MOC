import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
