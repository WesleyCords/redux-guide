import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/slice";

export const rootReducer = combineReducers({ userReducer, cartReducer });
