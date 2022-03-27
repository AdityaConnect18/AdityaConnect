import React from 'react';
import classes from './App.module.css';
import Navbar from './components/dashboard/Navbar/Navbar';
import Menubar from './components/dashboard/Navbar/Menubar';
import MainRoute from './components/routes/mainRoute';
import AuthState from './CONTEXT/Auth/AuthState';


function App() {
  return (
    <div>
      <Navbar />
      <Menubar />
      <div className={classes.Right}>
        <AuthState>
          <MainRoute />
        </AuthState>
      </div>
    </div>
  );
}

export default App;
