import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { planReducer } from "./reducers/planReducer";
import { paymentReducer } from "./reducers/paymentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  plans: planReducer,
  payment: paymentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
