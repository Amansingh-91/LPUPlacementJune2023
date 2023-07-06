import { combineReducers } from "redux";
import userReducer from "./userReducer";
import userListReducer from "./userListReducer";
const rootReducer  = combineReducers({userReducer,userListReducer});

export default rootReducer