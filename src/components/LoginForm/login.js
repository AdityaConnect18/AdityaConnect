import * as React from 'react';
import classes from './login.module.css'
import authContext from '../../CONTEXT/Auth/authContext';
import { useNavigate } from "react-router-dom";
export default function Login(props) {

  const { loginUser } = React.useContext(authContext);
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
        <h2>
          Login Form
        </h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="Category">Email</label>
          <input type="email" name="userId" value={userId} onChange={onChange} />
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
