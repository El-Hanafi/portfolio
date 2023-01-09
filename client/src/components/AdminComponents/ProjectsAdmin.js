import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {API_URL} from '../context/GlobalContext';

const initialState = {
  project_id: "",
  title: "",
  description: "",
};

export default function ProjectAdmin() {
  const [project, setProject] = useState(initialState);
  const [images, setImages] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageCond, setMessageCond] = useState(false);

    //upload image functionality
    const handleUpload = async (e) => {
      e.preventDefault();

      try {
        const file = e.target.files[0];
        if (!file) return alert("no files exist");

        if (file.size > 1024 * 1024) {
          return alert("size is too big");
        }

        if (file.type !== "image/jpeg" && file.type !== "image/png") {
          return alert("incorrect file format");
        }

        let formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("/upload", formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        setImages(res.data);
      } catch (err) {
        console.log(err.response.data.msg);
      }
    };

    //delete image

    const handleDestroy = async () => {
      try {
        await axios.post(`${API_URL}/destroy`, { public_id: images.public.id });
        setImages(false);
      } catch (err) {
        console.log(err.response.data.msg);
      }
    };

    //handle image inputs
    const handleChangeInput = (e) => {
      const { name, value } = e.target;

      setProject({ ...project, [name]: value });
    };

    //submit the form
    const handleSubmit = (e) => {
      e.preventDefault();

      try {
        axios.post(`${API_URL}/project/`, {...project, images})
        .then(res=>{
          setMessage(res.data.msg);
          setTimeout(()=>{
            setMessage('');
          }, 2000)

          setProject(initialState);
          setImages(false);
        })
      } catch (err) {

      }

    }

    const styleUpload = {
      display: images ? 'block':'none'
    }

    //fetching the data
      useEffect(()=>{
        const fetchData = async () => {
            try {
              const res = await axios.get(`${API_URL}/project`);
              setProjectData(res.data);
            } catch (err) {
              console.log(err)
            }
        }

        fetchData();
      }, [])
  
    //delete functionality
      const deleteProject = (id)=>{
        axios.delete(`${API_URL}/project/${id}`)
        .then(res=>{
          setMessageCond(true);
          setMessage(res.data.msg);

          setTimeout(()=>{
            setMessageCond(false);
            setMessage('');
          }, 2000)
        })

        //delete from client ui
        const filteredProject = projectData.filter(item=>item._id!==id);
        setProjectData(filteredProject);
      }

  return (
    <div className="same-component">
      <div class="same-form">
        <form onSubmit={handleSubmit}>
          <h4>Project components</h4>
          <label htmlFor="text">Id</label>
          <input
            type="text"
            name="project_id"
            value={project.project_id}
            onChange={handleChangeInput}
            required
            id="project_id"
          />

          <label htmlFor="text">title</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChangeInput}
            required
            id="title"
          />

          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            name="description"
            required
            id="description"
            value={project.description}
            onChange={handleChangeInput}
            cols="30"
            rows="3"
          />

          <div className="upload">
            <input type="file" name="file" id="file_up" onChange={handleUpload}/>
            <div id="file_img" style={styleUpload}>
              <img src={images ? images.url : ''} alt="" />
              <span onClick={handleDestroy}>x</span>
            </div>
          </div>
          <button>Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {projectData.map(item=>(
            <div class="project-admin" key={item._id}>
            <div class="icons">
              <Link to={`/editEducation/${item._id}`}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash" onClick={()=>deleteProject(item._id)}></i>
            </div>

            {/* single project */}
            <div className="single-project-img">
              <img src={item.images.url} alt="" />
            </div>

            <div class="single-project-info">
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </div>
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
    </div>
  );
}

