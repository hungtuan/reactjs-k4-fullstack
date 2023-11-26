import { createStore } from "redux";
import configReducer from "./reducers";

const store = createStore(configReducer);

export default store;
