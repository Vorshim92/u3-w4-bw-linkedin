import { SET_TOKEN_OK, SET_TOKEN_FAIL } from "../actions/fetchUser";

const initialState = {
  loginData: null,
  loading: true,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN_OK:
      return {
        ...state,
        loginData: action.payload,
        loading: false,
        error: false,
      };
    case SET_TOKEN_FAIL:
      return {
        ...state,
        loginData: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
