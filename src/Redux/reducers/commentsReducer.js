import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS } from "../actions/fetchUser";

const initialState = {
  commentsData: null,
  loading: true,
  error: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsData: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        commentsData: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default commentsReducer;
