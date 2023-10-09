import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import thunk from "redux-thunk";
import reducer from "./reducer";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  auth: reducer,
  // Add more reducers here if needed
});

const persistConfig = {
  key: "root", // Key for storing the data in localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store and apply middleware (Redux Thunk in this case)
const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store); // This creates a persistor object
export default store;
