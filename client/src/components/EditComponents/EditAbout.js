import React from 'react';
import {Link} from 'react-router-dom';
import './edit.css';

export default function EditAbout() {
  return (
    <div className='edit'>
      <div className="main-container">
        <div className="same-component">
          <div class="same-form">
            <form action="">
              <h3 class="updated">

              </h3>

              <label htmlFor="text">About</label>
              <textarea name="textarea" id="" cols="30" rows="3"></textarea>

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
