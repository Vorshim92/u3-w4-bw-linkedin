import { FETCH_LOGIN_OK, FETCH_LOGIN_FAIL } from "../actions/fetchUser";

const initialState = {
  loginData: true,
  loading: true,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_OK:
      return {
        ...state,
        loginData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_LOGIN_FAIL:
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
