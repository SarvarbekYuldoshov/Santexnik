import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Hero() {
  return (
    <>
    <div className='hero'>
      <div className='container about-container'>
        <ul className='about-list'>
         <h1 className=''></h1>
        </ul>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
    </>
  );
}