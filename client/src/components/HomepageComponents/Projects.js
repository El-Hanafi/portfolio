import React, { useContext } from "react";
import logo from '../../images/cable.jpg';
import project1 from '../../images/project1.jpg';
import project2 from '../../images/project2.jpg';
import project3 from '../../images/project3.jpg';
import { DataContext } from "../context/GlobalContext";

export default function Projects() {

  const state = useContext(DataContext);
  const [projects] = state.projects;

  return (
    <div className='main-container'>
      <div className="projects">
        <h2 className="title">Project</h2>
        <div className="projects-center">

          {projects.map(item=>{
            {/* single project */}
          <div className="single-project" key={item._id}>

            <div className="single-project-img">
              <img src={item.images.url} alt="" />
            </div>
            
            <div className="single-project-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div> 

          </div>
          })}

        </div>
      </div>
    </div>

  )
}
