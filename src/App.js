import React from 'react';
import MainRoute from './ROUTES/mainRoute';
import AuthState from './CONTEXT/Auth/AuthState';


function App() {
  const [userDetails, setUserDetails] = React.useState({})
  function parseJwt(token) {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }

  React.useEffect(() => {
    let userPayload = localStorage.getItem('payLoad')
    let userDetails = parseJwt(userPayload)
    console.log(userDetails)
    setUserDetails(userDetails)
  }, [])


  return (
    <div >
      <AuthState>
        <MainRoute userDetails={userDetails} />
      </AuthState>
    </div>
  );
}

export default App;
