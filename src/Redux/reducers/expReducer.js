import { FETCH_EXP_FAILURE, FETCH_EXP_SUCCESS } from "../actions/fetchUser";

const initialState = {
  expData: [],
  loading: true,
  error: false,
};

const expReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXP_SUCCESS:
      return {
        ...state,
        expData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_EXP_FAILURE:
      return {
        ...state,
        expData: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default expReducer;
