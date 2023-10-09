import { legacy_createStore as createStore } from "redux";
import { TYPES } from "../actions/authTypes";
import { userTYPES } from "../actions/userTypes";

const initialState = {
  user: null,
  loading: false,
  error: "",
  isLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
    case TYPES.SIGNUP_REQUEST:
    case userTYPES.UPDATE_REQUEST:
      console.log("requested");
      return {
        ...state,
        loading: true,
        error: "",
      };

    case TYPES.LOGIN_SUCCESS:
    case TYPES.SIGNUP_SUCCESS:
    case userTYPES.UPDATE_SUCCESS:
      console.log("succeeded");

      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isLogin: true,
      };

    case TYPES.LOGIN_FAIL:
    case TYPES.SIGNUP_FAIL:
    case userTYPES.UPDATE_FAIL:
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
