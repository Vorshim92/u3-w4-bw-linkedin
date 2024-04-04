import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../actions/fetchUser";

const initialState = {
  usersData: null,
  loading: true,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        usersData: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
