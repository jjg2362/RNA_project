import { produce } from "immer";

const dummyData = {
  id: 1,
  nickname: "JK Cho",
  post: [],
  following: [],
  follower: [],
};

const initialState = {
  isLoggedIn: false, //로그인 여부
  isLoggingIn: false, //로그인 시도중
  isLoggingOut: false, //로그아웃 시도중
  logInErrorReason: "", //로그인 실패 사유
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: "",
  me: null,
  followingLists: [],
  followerLists: [],
  userInfo: null,
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const ADD_POST_ME = "ADD_POST_ME";

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.isLoggedIn = false;
        draft.isLoggingIn = true;
        draft.logInErrorReason = "";
        break;
      case LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        draft.isLoggingIn = false;
        draft.me = dummyData;
        break;
      case LOGIN_FAILURE:
        draft.isLoggedIn = false;
        draft.isLoggingIn = false;
        draft.logInErrorReason = action.error;
        break;
      case LOGOUT_REQUEST:
        draft.isLoggedIn = false;
        draft.isLoggingOut = true;
        draft.logInErrorReason = "";
        break;
      case LOGOUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.me = null;
        break;
      case LOGOUT_FAILURE:
        draft.isLoggingOut = false;
        console.log(action.error);
        break;
      case SIGN_UP_REQUEST:
        draft.isSignedUp = false;
        draft.isSigningUp = true;
        draft.signUpErrorReason = "";
        break;
      case SIGN_UP_SUCCESS:
        draft.isSignedUp = true;
        draft.isSigningUp = false;
        draft.userInfo = action.data;
        break;
      case SIGN_UP_FAILURE:
        draft.isSignedUp = false;
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
