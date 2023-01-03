import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import axios from "axios";

export default function ExperienceAdmin() {
  const [experience, setExperience] = useState("");
  const [experienceData, setExperienceData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

  useEffect(() => {
    //fetching the data
    const fetchData = async () => {
      try {
        const res = await axios.get("/experience");
        setExperienceData(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  //onchange
  const onchangeExperience = (e) => {
    setExperience(e.target.value);
    console.log(experience);
  };

  //submit experience
  const handleSubmit = (e) => {
    e.preventDefault();

    const postExperience = {
      experience,
    };

    setExperience("");
    axios
      .post(`/experience`, postExperience)
      .then((res) => setExperience([...experienceData]))
      .catch((err) => console.log(err));
  };

  //delete Experience
  const deleteExperience = (id) => {
    axios
      .delete(`/experience/${id}`)
      .then((res) => {
        setMessageCond(true);
        setMessage(`${res.data.msg}`);

        setTimeout(() => {
          setMessage("");
          setMessageCond(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
    //delete from ui
    const experienceFilterDel = experienceData.filter(
      (item) => item._ied !== id
    );

    setExperienceData(experienceFilterDel);
  };

  return (
    <div className="same-component">
      <div class="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Experience component</h4>
          <label htmlFor="text">Experience</label>
          <input type="text" onChange={onchangeExperience} value={experience} />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div class="same-item">
        <div class="experience-info">
          {experienceData.map((item) => {
            <div class="same-admin" key={item._id}>
              <div className="icons">
                <Link to={`/editExperience/${item._id}`}>
                  <i className="fas fa-edit"></i>
                </Link>
                <i className="fas fa-trash" onClick={()=>deleteExperience(item._id)}></i>
              </div>
              {/* single education */}
              <div className="single-experience">
                <p>Designer</p>
              </div>
              <h3
                className={
                  setMessageCond
                    ? "new-delete item-delete-tab"
                    : "item-deleted-tab"
                }
              >
                {message}
              </h3>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
