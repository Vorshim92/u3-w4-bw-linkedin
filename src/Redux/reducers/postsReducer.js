import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from "../actions/fetchUser";

const initialState = {
  postData: null,
  loading: true,
  error: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        initialState: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        initialState: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
