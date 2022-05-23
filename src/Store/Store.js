import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducers from "../Reducers/RootReducers";

const Store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
