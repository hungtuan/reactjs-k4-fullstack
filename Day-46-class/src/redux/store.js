// Tạo store
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { counterReducer } from "./reducers/CounterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
