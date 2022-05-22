import { combineReducers } from "redux";
import { ItemReducer } from "./ItemReducer";
import { CartReducer } from "./CartReducer";
import {AuthReducer} from "./AuthReducer"
export const RootReducer = combineReducers({ItemReducer,CartReducer,AuthReducer})