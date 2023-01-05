import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

export default function Projects() {

  const state = useContext(DataContext);
  const [projects] = state.projects;

  return (
    <div className='main-container'>
      <div className="projects">
        <h2 className="title">Project</h2>
        <div className="projects-center">
        
        {projects.map(item=>(
            /* single project */
          <div className="single-project" key={item._id}>

            <div className="single-project-img">
              <img src={item.images.url} alt="" />
            </div>
            
            <div className="single-project-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div> 

          </div>
          ))}

          
        </div>
      </div>
    </div>

  )
}
