import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  auth: reducer,
  // Add more reducers here if needed
});

// Create the Redux store and apply middleware (Redux Thunk in this case)
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
