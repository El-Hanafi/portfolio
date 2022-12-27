import React from 'react'

import profile from '../../images/ody.JPG';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
 

export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="particle">
          <Particles className='particleComp'
          height="400px"
          width="100%"
          params={{
            particles:{
              number:{
                value:100, 
                density:{
                  enable: false,
                  value_area: 800
                }
              }
            },

            "interactivity": {
              "events":{
                "onHover":{
                  "enable":true,
                  "mode":  "repulse"
                }
              }
            }

          }}
          />

          <div className="fullName">
            <h1>
              <Typewriter 
              options={{
                strings:['Mohamed El Hanafi', 'Benabbou'],
                autoStart: true,
                loop: true
              }}
              />
            </h1>

          </div>

          <div className="cv">
            <span><b><a href="#" target="_blank" rel="noreferrer"><i className='fas fa-file-pdf'></i></a></b></span>
          </div>
        </div>

      </div>


      <div className="personalInfo">
        <div className="personalInfo-center">
          <div className="personalInfo-details">

              {/* single info */}
              <div className="info">
                <label htmlFor="name">
                  Fullname: 
                </label>
                <h4>Benabbou Mohamed-El-Hanafi</h4>
              </div>

              {/* single info */}
              <div className="info">
                <label htmlFor="name">
                  Occupation: 
                </label>
                <h4>Software engineer</h4>
              </div>

              {/* single info */}
              <div className="info">
                <label htmlFor="name">
                  Email: 
                </label>
                <h4>m.h.benabbou@gmail.com</h4>
              </div>

              <div className="personalInfo-img">
                <img src={profile} alt="profile" />
              </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
