import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../CONTEXT/Auth/authContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const AuthContext = useContext(authContext);

  const { isAuthenticated } = AuthContext;
  return (
    <>
      {console.log(isAuthenticated)}
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
