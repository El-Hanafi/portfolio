import React from 'react';
import {Link} from 'react-router-dom';

export default function EducationAdmin() {
  return (
    <div className='same-component'>
      <div class="same-form">
        <form>
          <h4>Education Component</h4>
          <label htmlFor="text">Education</label>
          <input type="text"  />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          {/* single education */}
          <div class="same-admin">
            <div class="icons">
              <Link to={"/editEducation"}>
              
              <i className="fas fa-edit"></i>
            </Link>
            <i class="fas fa-trash"></i>
            </div>

            <div class="single-education">
              <p>web developper</p>
            </div>
            <h3 className='item-deleted-tab'>the message</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
