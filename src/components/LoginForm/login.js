import * as React from 'react';
import classes from './login.module.css'
import authContext from '../../CONTEXT/Auth/authContext';
import { useNavigate } from "react-router-dom";
import { MdLiveHelp } from "react-icons/md";
import logo from '../dashboard/Assests/logo.png';

export default function Login(props) {

  const { payLoad, loginUser } = React.useContext(authContext)
  console.log(payLoad)
  // const AuthContext = React.useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    userId: "",
    password: "",
  });
  const { userId, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem('payLoad')) {
      navigate('/dashboard');
    }
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(user);
      navigate('/dashboard');
    }
    catch (err) {
      console.log(err)
    }

  };


  return (
    <>
      <div className={classes.Container}>
        <img className={classes.Logo} src={logo} />
        <center>
          <div className={classes.Title}>Aditya Connect</div>
        </center>
        <p><b>Login Form</b></p>
        <form onSubmit={onSubmit}>
          <label htmlFor="Category">Email</label>
          <input type="email" name="userId" value={userId} onChange={onChange} />
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
          <a className={classes.Forget}>Forget Password ?</a>
          <center>
            <input className={classes.Button} type="submit" value="Submit" />
          </center>
        </form>
        <hr />
        <p className={classes.BelowTop}><MdLiveHelp className={classes.Help} />Help & Support</p>
        <p className={classes.BelowContent}>For help to use this application, you can contact Campusnet Team.</p>
      </div>
    </>
  );
}
