/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import api from "../../API/api";
import authContext from "./authContext";
import { Login } from '../../SERVICES/service'
import { LOGIN_SUCCESS, AUTH_ERROR, USER_LOADED } from "../Types";

const AuthState = (props) => {
  const initialLoginState = {
    isAuthenticated: false,
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          isAuthenticated: true,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          newUser: action.newUser
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'DETAILS_SUBMITTED':
        return {
          ...prevState,
          newUser: false
        };
      default:
        return prevState;
    }
  };

  const [state, dispatch] = useReducer(loginReducer, initialLoginState);

  // GET TOKEN
  const loadUser = async () => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: 'LOGIN',
      });
    }
  };

  // Login user
  const loginUser = async (formData) => {
    console.log(formData);
    const res = await Login(formData);
    localStorage.setItem('payLoad', res.data.token);
    console.log(res);
    dispatch({
      type: 'LOGIN',
      token: res.data.token,
    });
    console.log(state);
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
        payLoad: state.userToken,
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
