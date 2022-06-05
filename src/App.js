import React from "react";
import MainRoute from "./ROUTES/mainRoute";
import AuthState from "./CONTEXT/Auth/AuthState";
import authContext from "./CONTEXT/Auth/authContext";

function App() {
  const [userDetails, setUserDetails] = React.useState({});

  return (
    <div>
      <AuthState>
        <MainRoute />
      </AuthState>
    </div>
  );
}

export default App;
