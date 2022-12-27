import React from 'react';
import './contact.css';
import BackImg from '../../images/im4.jpg';
import load1 from '../../images/load2.gif';

export default function Contact() {
  return (
    <div className="main-container">
      <div className="contactForm">
        <h2 className='title'>
          contact form
        </h2>

        <div className="contactForm-center">
          <div className="contact_form">
            <form action="">

              <p>message</p>

              <label htmlFor="name">Name</label>
              <input type="text" placeholder='import name...' required />

              <label htmlFor="email">Email</label>
              <input type="email" placeholder='import email...' required />

              <label htmlFor="message">Message</label>
              <textarea type='text' name="message" id="" placeholder='import contact reason'></textarea>

              <div className="sen-btn">
                <button type='submit'>Send</button>
              </div>
            </form>
          </div>

          {/* contact info  */}
          <div className="contact-info">
            <h4>Send your message</h4>
            <img src={BackImg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
