import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";
import isLoginReducer from "./isLoginReducer";

const reducers = combineReducers({
    sideBar: sideBarReducer,
    isLogin: isLoginReducer
});

export default reducers;