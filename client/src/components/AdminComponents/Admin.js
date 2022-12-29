import React from 'react';
import "./admin.css";
import {Link} from 'react-router-dom';
import AboutAdmin from './AboutAdmin';
import EducationAdmin from './EducationAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ExperienceAdmin from './ExperienceAdmin';



export default function Admin() {
  return (
    <div className='main-container'>
      <br />
      <h2 className='title'>Admin forms</h2>
      <div className="admin-center">
        {/* aboutAdmin component */}
        <h4 class="admin-title">About component</h4>
        <AboutAdmin />
        {/* end of aboutAdmin component */}

        <br />
        <br />
        <hr style={{border:"1px solid lightgrey"}} />
        <br />

        {/* educationAdmin component */}
        <h4 class="admin-title">Education component</h4>
        <EducationAdmin />
        {/* end of eduacationAdmin comp */}


        <br />
        <br />
        <hr style={{border:"1px solid lightgrey"}} />
        <br />

        {/* projectsAdmin component */}
        <h4 class="admin-title">Projects component</h4>
        <ProjectsAdmin />
        {/* end of projectsAdmin comp */}

        <br />
        <br />
        <hr style={{border:"1px solid lightgrey"}} />
        <br />

        {/* ExperienceAdmin component */}
        <h4 class="admin-title">Experience component</h4>
        <ExperienceAdmin />
        {/* end of ExperienceAdmin comp */}

        <br />

      </div>
    </div>
  )
}
