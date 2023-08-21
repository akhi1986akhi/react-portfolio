import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare,FaGooglePlusSquare } from 'react-icons/fa';



export default function HeaderSocial() {
  return (
    <>
       <div className='header_socials'>
       <a href="https://linkedin.com" target='_blank'>
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com" target='_blank'>
            <FaGithubSquare/>
        </a>
        <a href="https://google.com" target='_blank'>
            <FaGooglePlusSquare/>
        </a>
       </div>
    </>
  )
}
