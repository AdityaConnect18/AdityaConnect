import { LOGIN_SUCCESS, AUTH_ERROR, USER_LOADED } from "../Types";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: action.payload,
        loading: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};
