import React from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

export default function Footer() {

  const scrollToElement = (element) => {
    scroller.scrollTo(element,{
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80
    })
  }


  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title">
          Contact
        </h2>
      </div>

      <div className="main-contact">
        <div className="contact">
          <div class="contact-center">

            {/*links*/}
            <div class="contact-center-links">
              <h3>Links</h3>
              <div class="contact-links">
                <li onClick={()=>scrollToElement('Home')}><Link to="/">Home</Link></li>
                <li onClick={()=>scrollToElement('About')}><Link to="/">About</Link></li>
                <li onClick={()=>scrollToElement('Education')}><Link to="/">Education</Link></li>
                <li onClick={()=>scrollToElement('Experience')}><Link to="/">Experience</Link></li>
                <li onClick={()=>scrollToElement('Projects')}><Link to="/">Projects</Link></li>
                <li onClick={()=>scrollToElement('Contact')}><Link to="/">Contact</Link></li>
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
