import React from 'react';
import classes from './App.module.css';
import Navbar from './components/dashboard/Navbar/Navbar';
import Menubar from './components/dashboard/Navbar/Menubar';
import MainRoute from './components/mainRoute';



function App() {
  return (
    <div>
      <Navbar/>
      <Menubar/>
      <div className={classes.Right}>
      <MainRoute/>
      </div>
    </div>
  );
}

export default App;
