import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function AboutAdmin() {


const [about, setAbout] = useState('');
const [aboutData, setAboutData] = useState([]);
const [message, setMessage] = useState('');
const [messageCond, setMessageCond] = useState(false);



useEffect(()=>{
  //fetching the data
const fetchData = async () => {
  try {
    const res = await axios.get('/about');
    setAboutData(res.data);
  } catch (error) {
    
  }
}

}, [])


  return (
    <div className="same-component">
      <br />
      <div className="same-forme">
        <form action="">
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea name="textarea" id="" cols="30" rows="3"></textarea>
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">

        {aboutData.map(item=>(

          <div className="about-info" key={item._id}>
          <div className="icons">
            <Link to={"/edit"}>
             
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash"></i>
          </div>

          <p>
            {item.about}
          </p>

        </div>

        ))}


        


      </div>

      <h3 className="item-delete-tab">item delted</h3>
    </div>
  );
}
