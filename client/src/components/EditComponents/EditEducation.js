import React from 'react'
import {Link} from 'react-router-dom';

export default function EditEducation() {
  return (
    <div className='edit'>
      <div className="main-container">
        <div class="same-component">
          <div class="same-form">
            <form action="">
              <h3 className='updated'>updated</h3>
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
