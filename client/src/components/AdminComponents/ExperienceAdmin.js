import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

export default function ExperienceAdmin() {
  return (
    <div className='same-component'>
      <div class="same-form">
        <form>
          <h4>Experience component</h4>
          <label htmlFor="text">Experience</label>
          <input type="text" />
          <button type="submit">Add item</button>
        </form>
      </div>

      <div class="same-item">
        <div class="about-info">
          <div class="same-admin">
            <div className="icons">
              <Link to={"/editExperience"}>
                
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>
            {/* single education */}
            <div className="single-experience">
              <p>Designer</p>
            </div>
            <h3 className='item-delete-tab'></h3>
          </div>
        </div>
      </div>
    </div>
  )
}
