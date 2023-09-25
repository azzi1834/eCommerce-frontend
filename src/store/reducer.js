import { legacy_createStore as createStore } from "redux";
import { TYPES } from "../actions/authTypes";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
    case TYPES.SIGNUP_REQUEST:
      console.log("request");
      return {
        ...state,
        loading: true,
        error: "",
      };

    case TYPES.LOGIN_SUCCESS:
    case TYPES.SIGNUP_SUCCESS:
      console.log("succeed");
      console.log("payload", action.payload);
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };

    case TYPES.LOGIN_FAIL:
    case TYPES.SIGNUP_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default reducer;
