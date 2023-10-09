import { userTYPES } from "./userTypes";

export const updateRequest = () => ({
  type: userTYPES.UPDATE_REQUEST,
});

export const updateSuccess = (userData) => ({
  type: userTYPES.UPDATE_SUCCESS,
  payload: userData,
});

export const updateFailure = (error) => ({
  type: userTYPES.UPDATE_FAIL,
  payload: error,
});
