import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";
import isLoginReducer from "./isLoginReducer";
import userReducer from "./userReducer"

const reducers = combineReducers({
    sideBar: sideBarReducer,
    isLogin: isLoginReducer,
    user: userReducer
});

export default reducers;