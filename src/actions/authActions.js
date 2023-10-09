import axios from "axios";
import { TYPES } from "./authTypes";
import { useNavigate } from "react-router";

// Action creator to initiate the register request
export const registerRequest = () => ({
  type: TYPES.REGISTER_REQUEST,
});

// Action creator for successful register
export const registerSuccess = (userData) => ({
  type: TYPES.REGISTER_SUCCESS,
  payload: userData,
});

// Action creator for register failure
export const registerFailure = (error) => ({
  type: TYPES.REGISTER_FAIL,
  payload: error,
});

export const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
});

// Action creator for successful login
export const loginSuccess = (userData) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: userData,
});

// Action creator for login failure
export const loginFailure = (error) => ({
  type: TYPES.LOGIN_FAIL,
  payload: error,
});

// Action creator for user logout
export const logout = () => ({
  type: TYPES.LOGOUT,
});

// Async action creator for user registration
export const register = (formData) => {
  const navigate = useNavigate;

  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      console.log("before hitting request");
      await axios
        .post("http://localhost:4000/api/auth/register", {
          body: formData,
        })
        .then((response) => {
          console.log("response::", response);
        })
        .catch((error) => {
          console.log("error::", error);
          console.log("error::", error.message);
          console.log("error::", error.response.request.status);
        });

      // localStorage.setItem("token", response?.data?.token);

      // const errorData = response;
      // throw new Error(errorData.message || "Login failed");

      // if (response.status === 200) {
      // dispatch(registerSuccess(response));
      // } else {
      //   dispatch(registerFailure("REGISTRATION FAILED TRY AGAIN!"));
      //   // throw new Error(response.message || "REGISTER failed");
      // }
    } catch (error) {
      console.log("error", error);
      dispatch(registerFailure(error.message));
    }
  };
};

export const login = (formData) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          body: formData,
        }
      );
      console.log("response", response);

      localStorage.setItem("token", response?.data?.token);

      if (response.status !== 200) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      dispatch(loginSuccess(response));

      return {
        status: 200,
        messsage: "user login successfully",
      };
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(logout());
    // const navigate = useNavigate();

    localStorage.removeItem("token");
    // navigate("/login", { replace: true });
  };
};
