import React, {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './login.css';
import axios from 'axios';
import Register from './Register';
import { DataContext } from '../context/GlobalContext';

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({name: '', email:'', password:''});
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;
  const [err, setErr] = useState('');

  // onChange inputs
  const onChangeInput = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
    setErr('');
  }
  
  // login submit

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`/user/login`, {
        name:user.name,
        email:user.email,
        password: user.password
      })

      setUser({name:'', email:'', password:''});

      localStorage.setItem('tokenStore', res.data.token);
      setIsLogin(true);

      setErr(res.data.msg);

    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }

  return (
    <>
  <div className="login">

    <div className="main-container">
      <h3>Login for admin</h3>
    </div>

    <div className="login-center">
      <form onSubmit={loginSubmit}>
        <p>{err}</p>
        <label htmlFor="email">Email</label>
        <input type="email" 
        placeholder="enter email" 
        name ="email"
        value={user.email}
        onChange={onChangeInput}
        required
        /> 

        <label htmlFor="password">Password</label>
        <input type="password" 
        placeholder='enter password' 
        name='password'
        value={user.password}
        onChange={onChangeInput}
        required
        />

        <div className="login-btn">
          <button type="submit">Login</button>
          <Link to="/"><button type="">Back to home</button></Link>
        </div>

      </form>
    </div>

  </div>

  {/* register */}
  {/* <Register /> */}
    </>
  )
}
