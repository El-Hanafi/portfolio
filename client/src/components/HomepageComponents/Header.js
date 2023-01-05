import React from 'react';

import profile from '../../images/photo.jpg';
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
          id="tsparticles"
          params={{
            background: {
              color: {
                value: "rgb(17,115,145)",
              },
            },
          fpsLimit: 20,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,

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
          <span>
              <b>Cv:</b>{" "}
              <a href="https://drive.google.com/file/d/1-zb_MYrMAPHZWGoaxWVJMs-9JW0DaXnu/view?usp=sharing" target="_blank" rel="noreferrer">
                <i className="fas fa-file-pdf"></i>
              </a>
            </span>
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

              

          </div>
          <div className="personalInfo-img">
                <img src={profile} alt="profile" />
              </div>
        </div>
      </div>
    </React.Fragment>
  )
}
