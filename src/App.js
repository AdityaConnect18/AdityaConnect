import React from 'react';
import MainRoute from './ROUTES/mainRoute';
import AuthState from './CONTEXT/Auth/AuthState';


function App() {

  return (
    <div >
      <AuthState>
        <MainRoute />
      </AuthState>
    </div>
  );
}

export default App;
