import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AboutAdmin() {
  const [about, setAbout] = useState("");
  const [aboutData, setAboutData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    //fetching the data
    const fetchData = async () => {
      try {
        const res = await axios.get("/about");
        setAboutData(res.data);
      } catch (err) {

      }
    };

    fetchData();
    
  }, []);

  //onchange
  const onchangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  //submit about
  const handleSubmit = (e) => {
    e.preventDefault();

    const postAbout = {
      about
    }

    setAbout("");
    axios
      .post(`/about`, postAbout)
      .then((res) => setAbout([...aboutData]))
      .catch((err) => console.log(err));
  };

  //delete About
  const deleteAbout = (id) => {
    axios
      .delete(`/about/${id}`)
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
    const aboutFilterDel = aboutData.filter((item) => item._ied !== id);

    setAboutData(aboutFilterDel);
  };

  return (
    <div className="same-component">
      <br />
      <div className="same-forme">
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>
          <label htmlFor="text">About</label>
          <textarea
            value={about}
            onChange={onchangeAbout}
            name="textarea"
            id=""
            cols="30"
            rows="3"
          />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">
        {aboutData.map((item,index) => (
          <div className="about-info" key={item._id}>
            <div className="icons">
              <Link to={`/edit/${item._id}`}>
                <i className="fas fa-edit"></i>
              </Link>
              <i
                className="fas fa-trash"
                onClick={() => deleteAbout(item._id)}
              ></i>
            </div>

            <p>{item.about}</p>
          </div>
        ))}

        <h3
          className={
            setMessageCond ? "new-delete item-delete-tab" : "item-deleted-tab"
          }
        >
          {message}
        </h3>
      </div>
    </div>
  );
}
