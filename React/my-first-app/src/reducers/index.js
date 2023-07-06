import changeTheCount from "./counterReducer";
import changeLoginState from "./userReducer";

import {combineReducers} from "redux";

const rootReducer = combineReducers({changeTheCount,changeLoginState});
export default rootReducer;