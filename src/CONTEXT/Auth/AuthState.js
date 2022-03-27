/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import api from "../../API/api";
import authContext from "./authContext";
import authReducer from "./authReducer";

import { LOGIN_SUCCESS, AUTH_ERROR, USER_LOADED } from "../Types";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: true,
    loading: false,
    error: null,
    user: null,
    token: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // GET TOKEN
  const loadUser = async () => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Login user
  const loginUser = async (userId, password) => {
    const formData = {
      userId,
      password,
    };
    try {
      const res = await api.post("login", formData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
      return res;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        dispatch({
          type: AUTH_ERROR,
          payload: err.response.data.error,
        });
      }
      return err.response;
    }
  };

  // Change Password

  const changePassword = async (newPassword, confirmPassword) => {
    let userId = localStorage.getItem("userId");
    const formData = {
      userId,
      newPassword,
      confirmPassword,
    };
    try {
      const res = await api.post("ChangePassword", formData);
      return res;
    } catch (err) {
      return err.response;
    }
  };

  // Logout

  const logout = () => {
    dispatch({
      type: AUTH_ERROR,
    });
  };

  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        loginUser,
        loadUser,
        logout,
        changePassword,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
