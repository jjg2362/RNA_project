import { combineReducers } from "redux";
import signReducer from "./sign";
import userReducer from "./user";
import postReducer from "./post";

const rootReducer = combineReducers({
  signReducer,
  userReducer,
  postReducer,
});

export default rootReducer;
