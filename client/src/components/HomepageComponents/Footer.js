import React from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

export default function Footer() {
  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title">

        </h2>
      </div>

      <div className="main-contact">
        <div className="contact">
          <div class="contact-center">

            {/*links*/}
            <div class="contact-center-links">
              <h3>Links</h3>
              <div class="contact-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Education</Link></li>
                <li><Link to="/">Experience</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Contacts</Link></li>
                <li className='admin'><Link to="/">Admin</Link></li>
                <li><Link to="/">Login</Link></li>
              </div>
            </div>

            {/*media*/}
            <div class="contact-center-media">
              <h3>Media</h3>
              <div class="contact-media">
                <li><a href="#"><i class="fab fa-youtube-square"></i>Youtube</a></li>
                <li><a href="#"><i class="fab fa-linkedin-square"></i>Linkedin</a></li>
                <li><a href="#"><i class="fab fa-github-square"></i>Github</a></li>
              </div>
            </div>


          </div>
        </div>

        <div className="footer">
          <p>Made by Benabbou Mohamed-El-Hanafi</p>
        </div>

      </div>
    </React.Fragment>
  )
}
