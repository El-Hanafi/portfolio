import React from 'react';
import {Link} from 'react-router-dom';

export default function ProjectsAdmin() {
  return (
    <div className='same-component'>
      <div class="same-form">
        <form>
          <h4>Projects components</h4>
          <label htmlFor="text">Id</label>
          <input type="text" name="product_id" required id="product_id"/>

          <label htmlFor="text">title</label>
          <input type="text" name="title" required id="title"/>

          <label htmlFor="text">Description</label>
          <textarea type="text" name="description" required id="description" cols="30" rows="3"/>

          <div className="upload">
            <input type="file" name="file" id="file_up" />
            <div id="file_img" >
              <img src="" alt="" />
                <span>x</span>
            </div>
          </div>
          <button>Add item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div class="projects-admin">
            <div class="icons">
              <Link to={"/editEducation"}>
                
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>

            {/* single project */}
            <div className="single-project-img">
              <img src="" alt="" />
            </div>

            <div class="single-project-info">
              <h3>mountains</h3>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
                ante et sem feugiat varius sit amet non felis. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Nullam ac justo sed dui venenatis viverra vitae nec orci. Cras ac
                lectus id lectus euismod faucibus id quis sapien. Nunc dignissim a
                tellus id tristique. Nam sapien metus, iaculis at nibh a, posuere
                placerat libero. In volutpat, mauris sed cursus eleifend, leo diam
                laoreet lorem, nec ullamcorper diam velit ac eros. Fusce nec
                dignissim metus.
              </p>
            </div>
          </div>
          <h3 className='item-delete-tab'>fgfgf</h3>
        </div>
      </div>
    </div>
  )
}
