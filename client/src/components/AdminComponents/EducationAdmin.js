import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {API_URL} from '../context/GlobalContext';

export default function EducationAdmin() {

  const [education,setEducation]= useState([]);
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCond,setMessageCond] = useState(false);

  useEffect(() => {
    //fetching the data
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/education`);
        setEducationData(res.data);
      } catch (err) {

      }
    };

    fetchData();
    
  }, []);

  const onChangeEducation = (e) => {
    setEducation(e.target.value)
  }

  //submit education
  const handleSubmit = (e) => {
    e.preventDefault();

    const postEducation = {
      education
    }

    setEducation("");
    axios
      .post(`/education`, postEducation)
      .then((res) => setEducation([...educationData]))
      .catch((err) => console.log(err));
  };

  //delete education
    const deleteEducation = (id) => {
      axios
        .delete(`${API_URL}/education/${id}`)
        .then((res) => {
          setMessageCond(true);
          setMessage(`${res.data.msg}`);
  
          setTimeout(() => {
            setMessage('');
            setMessageCond(false);
  
          }, 2000);
        })
        .catch((error) => console.log(error));
      //delete from ui
      const educationFilterDel = educationData.filter((item) => item._ied !== id);
  
      setEducationData(educationFilterDel);
    };

    
  

  return (


    <div className='same-component'>
      <div class="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text" value={education} onChange={onChangeEducation} />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
        {educationData.map(item=>(
          
          <div class="same-admin" key={item._id}>
            <div class="icons">
              <Link to={`/editEducation/${item._id}`}>
              
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash" onClick={()=>deleteEducation(item._id)}></i>
            </div>

            <div class="single-education">
              <p>{item.education}</p>
            </div>
            <h3
          className={
            setMessageCond ? "new-delete item-delete-tab" : "item-deleted-tab"
          }
        >
          {message}
        </h3>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
