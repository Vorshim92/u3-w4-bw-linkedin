import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from "../actions/fetchUser";

const initialState = {
  postData: [],
  loading: true,
  error: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        postData: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
