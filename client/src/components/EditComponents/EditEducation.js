import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link,useHistory} from 'react-router-dom';




export default function EditEducation(props) {

  const [education,setEducation]= useState([]);
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState('');
  const history = useHistory();

   //getting the specific id
   useEffect(()=>{
    axios.get('/education/${props.match.params.id}')
    .then(res=>{
      setEducation(res.data.education);
    })
    .catch(err=>console.log(err))
  },[])

      //onchange
  const onChangeEducation = (e) => {
    setEducation(e.target.value);
    console.log(education);
  };

  //update about
  const updateEducation = (e) =>{
    e.preventDefault();
    const postEducation = {
      education
    }
    axios.put(`/education/update/${props.match.params.id}`, postEducation)
    .then(res => {
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setEducation('');

    setTimeout(()=>{
      history.push("/admin");
    },2000)

  }

  return (
    <div className='edit'>
      <div className="main-container">
        <div class="same-component">
          <div class="same-form">
            <form onSubmit={updateEducation}>
              <h3 className='updated'>{message}</h3>
              <h4>Education component</h4>
              <label htmlFor="text">Education</label>
              <input type="text" />
              <div class="btns">
                <button type="submit">Update item</button>
                <Link to='/admin'><button className='cancel-btn'>Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
