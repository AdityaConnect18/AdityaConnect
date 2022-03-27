import * as React from 'react';
import classes from './login.module.css'

export default function Login(props) { 
  return (
    <div className={classes.Container}>
        <h2>
            Login Form
        </h2>
        <form>
            <label for="Category">Email</label>
            <input type="email" name="email" />
            <label for="Password">Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Submit"/>
        </form>
    </div>
    
    
  );
}
