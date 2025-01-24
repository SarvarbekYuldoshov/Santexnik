import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Hero() {
  return (
    <>
    <div className='hero'>
      <div className='container hero-container'>
         <ul className='hero-list'>
            <h1 className='hero-title'>Biz eng sungi va zamonaviy Santexnika bizning saytda</h1>
            <p className='hero-text'>Biz sizga har bir santexnika </p>
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