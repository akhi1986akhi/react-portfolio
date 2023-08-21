import React from 'react'
import './about.css'; 
import me from '../../assets/me-about.jpg';
import {FaAward,FaUsers, FaFolderOpen} from 'react-icons/fa';
export default function About() {
  return (


  <>
 <section id="about">
  <h5>Get To Know</h5 >
  <h2>About Me</h2>
  <div className='container about_container'>
    <div className='about_me'>
        <div className='about_me-image'>
          <img  src={me} alt=""/>

        </div>
    </div>
    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
            <small>3+ Years Working</small>
        </article>

        <article className='about_card'>
          <FaUsers className='about_icon'/>
          <h5>Clients</h5>
            <small>300+ Clients world wide</small>
        </article>


        <article className='about_card'>
          <FaFolderOpen className='about_icon'/>
          <h5>Projects</h5>
            <small>80+ Completed</small>
        </article>
      </div>
      <p>
      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, beca
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
 </section>
  </>
  )
}
