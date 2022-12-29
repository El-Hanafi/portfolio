import React from "react";
import { Link } from "react-router-dom";

export default function EditProjects() {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div class="same-form">
            <form>
              <h3 className="updated">updated</h3>
              <h4>Projects components</h4>
              <label htmlFor="text">Id</label>
              <input type="text" name="product_id" required id="product_id" />

              <label htmlFor="text">title</label>
              <input type="text" name="title" required id="title" />

              <label htmlFor="text">Description</label>
              <textarea
                type="text"
                name="description"
                required
                id="description"
                cols="30"
                rows="3"
              />

              <div className="upload">
                <input type="file" name="file" id="file_up" />
                <div id="file_img">
                  <img src="" alt="" />
                  <span>x</span>
                </div>
              </div>

              <div class="btns">
                <button>Update item</button>
                <Link to="/admin"><button className="cancel-btn">Cancel</button></Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
