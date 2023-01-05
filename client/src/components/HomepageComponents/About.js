import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

export default function About() {
  
  const state = useContext(DataContext);
 
  const [about] = state.about;
  console.log(about);
  return (
    <div className="main-container">
      <h2 className="title">about</h2>
      <div className="about">
        

        {/* about */}

        {about.map(item=>(
                  <div className="about-info" key={item._id}>
                  <p>
                    {item.about}
                  </p>
                </div>
        ))}

      </div>
    </div>
  );
}
