import React, { useEffect, useState }  from 'react';
import {Link, useHistory} from 'react-router-dom';
import './edit.css';
import axios from "axios";

export default function EditAbout(props) {
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  //getting the specific id
  useEffect(()=>{
    axios.get('/about/${props.match.params.id}')
    .then(res=>{
      setAbout(res.data.about);
    })
    .catch(err=>console.log(err))
  },[])

  //onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  //update about
  const updateAbout = (e) =>{
    e.preventDefault();
    const postAbout = {
      about
    }
    axios.put(`/about/update/${props.match.params.id}`, postAbout)
    .then(res => {
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setAbout('');

    setTimeout(()=>{
      history.push("/admin");
    },2000)

  }

  return (
    <div className='edit'>
      <div className="main-container">
        <div className="same-component">
          <div class="same-form">
            <form onSubmit={updateAbout}>
              <h3 class="updated">
                {message}
              </h3>

              <label htmlFor="text">About</label>
              <textarea value={about} onChange={onchangeAbout} name="textarea" id="" cols="30" rows="3"/>

              <div className="btns">
                <button type="submit">Update item</button>
                <Link to="/admin"><button className='cancel-btn'>Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
