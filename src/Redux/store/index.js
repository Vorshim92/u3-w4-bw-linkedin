import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import expReducer from "../reducers/expReducer";
const rootReducer = combineReducers({
  user: userReducer,
  exp: expReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
