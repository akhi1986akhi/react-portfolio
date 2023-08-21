import React from 'react'
import './footer.css';

import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer>

      <div className="footer_logo">
        AKHIL

      </div>
      <ul className='premalinks'>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">

            Contact
          </a>
        </li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebook.com'>
          <BiLogoFacebookCircle />
        </a>
        <a href='https://instagram.com'>
          <BiLogoInstagramAlt />
        </a>
        <a href='https://twitter.com'>
          <BiLogoTwitter />
        </a>
      </div>


      <div className="footer_copyright">
        <small>&copy;Akhil Tutorial, All rights reserved.</small>
      </div>
    </footer>
  )
}
