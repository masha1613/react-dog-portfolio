import '../Testomonials/Testimonials.css' 
import Masha from '../../images/masha.jpg'
import Andre from '../../images/andre.jpg'
import Vika from '../../images/vika.jpg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const data = [
{
  avatar: Masha,
  name: 'Masha',
  rewiew: "Dasein is an incredible dog, very smart and cute. I spent many happy hours with him. I swear, he is the best dog you can get on this planet."
},
{
  avatar: Andre,
  name: 'Andre',
  rewiew: "Dasein is my favorite creature in the world. I've been a cat person for a long time, but this dog made me change my mind."
},
{
  avatar: Vika,
  name: 'Vika',
  rewiew: "I spent with Dasein just a few evenings, but that was enough to understand how kind and funny he is. I hope we'll see each other soon."
}]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5> Rewiew from clients</h5>
      <h2> Testimonials</h2>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper container testimonials__container">
      {
        data.map(({avatar, name, rewiew}, index) => {
        return (
        <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar}></img> </div>
            <h5 className='client__name'> {name} </h5>
            <small className='client__rewiew'> {rewiew} </small>
        </SwiperSlide>
        )
      })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
