import React,{useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../context/GlobalContext';

export default function EditExperience(props) {

  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

    //getting the specific id
    useEffect(()=>{
      axios.get('${API_URL}/experience/${props.match.params.id}')
      .then(res=>{
        setExperience(res.data.experience);
      })
      .catch(err=>console.log(err))
    },[])
  
    //onchange
    const onchangeExperience = (e) => {
      setExperience(e.target.value);
      console.log(experience);
    };
  
    //update experience
    const updateExperience = (e) =>{
      e.preventDefault();
      const postExperience = {
        experience
      }
      axios.put(`${API_URL}/experience/update/${props.match.params.id}`, postExperience)
      .then(res => {
        setMessage(res.data.msg);
      }).catch(err=>console.log(err))
  
      setExperience('');
  
      setTimeout(()=>{
        history.push(`${API_URL}/admin`);
      },2000)
  
    }

  return (
    <div className='edit'>
      <div class="main-container">
        <div class="same-component">
          <div className='same-from'>
            <form onSubmit={updateExperience}>
              <h3 className='updated'>{message}</h3>
              <h4>Experience component</h4>
              <label htmlFor="text">Experience</label>
              <input type="text" value={experience} onChange={onchangeExperience} />
              <div className="btns">
                <button type="submit">Update item</button>
                <Link tp="/admin"><button className="cancel-btn">Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
