import { createStore, combineReducers } from "redux";

import receipeReducer from "./receipereducer";
import cartReducer from "./cartreducer";

const rootReducer = combineReducers({
  receipe: receipeReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
