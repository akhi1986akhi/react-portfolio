import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'

        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       

      >
        <SwiperSlide className='testimonial'>
          <div className='client_avtar'>
            <img src={AVTR1} alt="avtar" />

          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat voluptatum et recusandae dolorem suscipit porro optio quos vero aspernatur.
          </small>
        </SwiperSlide>


        <SwiperSlide className='testimonial'>
          <div className='client_avtar'>
            <img src={AVTR2} alt="avtar" />

          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat voluptatum et recusandae dolorem suscipit porro optio quos vero aspernatur.
          </small>
        </SwiperSlide>


        <SwiperSlide className='testimonial'>
          <div className='client_avtar'>
            <img src={AVTR3} alt="avtar" />

          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat voluptatum et recusandae dolorem suscipit porro optio quos vero aspernatur.
          </small>
        </SwiperSlide>


        <SwiperSlide className='testimonial'>
          <div className='client_avtar'>
            <img src={AVTR4} alt="avtar" />

          </div>
          <h5 className='client_name'>Ernest Achiver</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit fugiat voluptatum et recusandae dolorem suscipit porro optio quos vero aspernatur.
          </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}
