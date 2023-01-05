import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Register() {

  const [user, setUser] = useState({username: '', email:'', password:''});
  const [err,setErr] =useState('');


  // onChange inputs
  const onChangeInput = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
    setErr('');
  }
  
  // login submit

  const registerSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`/user/register`, {
        username:user.username,
        email:user.email,
        password: user.password
      })

      setUser({username:'', email:'', password:''});

      setErr(res.data.msg);

    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg)
    }
  }



  return (
    <div className="login">
      <div className="main-container">
        <h3>Login for admin</h3>
      </div>

      <div className="login-center">
        <form onSubmit={registerSubmit}>
          <p>{err}</p>

          <label htmlFor="username">Name</label>
          <input
            type="username"
            placeholder="import username.."
            name="username"
            value={user.username}
            onChange={onChangeInput}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="import email.."
            name="email"
            value={user.email}
            onChange={onChangeInput}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter pwd"
            name="password"
            value={user.password}
            onChange={onChangeInput}
            required
          />

          <div className="login-btn">
            <button type="submit">Register</button>
            <Link to="/">
              <button type="">Back to home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
