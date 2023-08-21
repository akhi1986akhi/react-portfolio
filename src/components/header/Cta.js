import React from 'react';
import cv from '../../assets/cv.pdf';

export default function Cta() {
  return (
    <>
    <div className='cta'>
    <a href={cv} download className='btn'>Download</a>
    <a href="" className='btn btn-primary'>Let's Talk</a>
    </div>
    </>
  )
}
