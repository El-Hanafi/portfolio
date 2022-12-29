import React from 'react';
import {Link} from 'react-router-dom';

export default function EditExperience() {
  return (
    <div className='edit'>
      <div class="main-container">
        <div class="same-component">
          <div className='same-from'>
            <form action="">
              <h3 className='updated'></h3>
              <h4>Experience component</h4>
              <label htmlFor="text">Experience</label>
              <input type="text" />
              <div className="btns">
                <button type="submit">Update item</button>
                <Link tp="/admin"><button className="cancel-btn">Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
