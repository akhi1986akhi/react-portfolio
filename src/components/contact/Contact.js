import React from 'react'
import './contact.css';
import {MdEmail,MdWhatsapp,MdMessage} from 'react-icons/md';

import { useRef } from 'react';

import emailjs from '@emailjs/browser';
export default function Contact() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_cn5vfgc', 'template_m8urxbc', form.current, 'W6KHIkQDyqMXms7ok')
  e.target.reset();
  
};

  return (

    <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>abc@gmail.com</h5>
              <a href="mailto:abc@gmail.com" target='_blank'>
                Send a message
                
              </a>
            </article>

            <article className='contact_option'>
            <MdMessage className='contact_option-icon'/>
              <h4>Messanger</h4>
              <h5>recat tutorials</h5>
              <a href="mailto:abc@gmail.com" target='_blank'>
                Send a message
                
              </a>
            </article>

            <article className='contact_option'>
            <MdWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+917007761116</h5>
              <a href="https://api.whatsapp.com/send?phone=917007761116" target='_blank'>
                Send a message
                
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>

            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your E-mail' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    
    </section>
  )
}
