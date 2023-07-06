import rootReducer from "./reducers/index";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;