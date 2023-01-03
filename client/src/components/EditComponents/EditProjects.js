import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const initialState = {
  proejct_id: "",
  title: "",
  description: "",
};

export default function EditProjects(props) {
  const [project, setProject] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  // upload image functionality

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
      await axios.post("/destroy", { public_id: images.public.id });
      setImages(false);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  //handle change inputs
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  // getting data
  useEffect(() => {
    axios
      .get(`/project/${props.match.params.id}`)
      .then((res) => {
        //      console.log(res.data)
        setProject({
          project_id: res.data.project_id,
          title: res.data.title,
          description: res.data.description,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  //submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("/project/${props.match.params.id}", { ...project, images })
        .then((res) => {
          setMessage(res.data.msg);
        });
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      history.push("/admin");
    }, 2000);
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div class="same-form">
            <form onSubmit={handleSubmit}>
              <h3 className="updated">{message}</h3>
              <h4>Projects components</h4>
              <label htmlFor="text">Id</label>
              <input
                type="text"
                name="project_id"
                required
                value={project.project_id}
                onChange={handleChangeInput}
                id="project_id"
              />

              <label htmlFor="text">title</label>
              <input
                type="text"
                name="title"
                required
                value={project.title}
                onChange={handleChangeInput}
                id="title"
              />

              <label htmlFor="text">Description</label>
              <textarea
                type="text"
                name="description"
                required
                value={project.description}
                onChange={handleChangeInput}
                id="description"
                cols="30" 
                rows="3"
              />

              <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} required />
                <div id="file_img" style={styleUpload}>
                  <img src={images ? images.url : ''} alt="" />
                  <span>x</span>
                </div>
              </div>

              <div class="btns">
                <button>Update item</button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
