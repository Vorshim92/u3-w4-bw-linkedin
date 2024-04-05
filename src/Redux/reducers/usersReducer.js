import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../actions/fetchUser";

const initialState = {
  usersData: [],
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
        usersData: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
