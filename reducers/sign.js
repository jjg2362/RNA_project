import { produce } from "immer";

const initialState = {
  isSignIn: true,
};

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isSignIn: true,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        isSignIn: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
