import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const AuthContext = useContext(authContext);

  const { isAuthenticated } = AuthContext;
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
