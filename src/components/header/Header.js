import React from 'react'
import './header.css';
import Cta from './Cta';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';


export default function Header() {
  return (
    <>
    <header>
      <div className='container header_container'>
        <h5>
          Hello
        </h5>
        <h1>Haji Bintu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta/>
        <HeaderSocial/>
        <div className='me'>
          <img src={me} alt=""/>

        </div>

        <a href="#contact" className='scroll_down'> Scroll Down </a>
      </div>
    </header>
    </>
  )
}
