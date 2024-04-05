import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import expReducer from "../reducers/expReducer";
import usersReducer from "../reducers/usersReducer";
import searchReducer from "../reducers/searchReducer";
import postReducer from "../reducers/postsReducer";
import loginReducer from "../reducers/loginReducer";
import commentsReducer from "../reducers/commentsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  exp: expReducer,
  search: searchReducer,
  post: postReducer,
  login: loginReducer,
  comments: commentsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
