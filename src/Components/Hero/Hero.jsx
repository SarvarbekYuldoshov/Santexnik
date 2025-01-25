import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Rasm_2 from "../images/rasm2.jpg"
import Rasm_3 from "../images/rasm3.jpg"
import { EffectCards } from 'swiper/modules';
import "./Hero.css"
export default function Hero() {
  return (
    <>
    <div className='hero'>
      <div className='container hero-container'>
         <ul className='hero-list'>
            <h1 className='hero-title'>Biz eng sungi va zamonaviy Santexnika bizning saytda</h1>
            <p className='hero-text'>Biz sizga har qanday santexnika ishlarini bajarib bera olamiz. Buzilgan joylarni ta'mirlashdan tortib, noldan qurilishgacha — ish hajmiga qarab farq qilmaydi. Barcha ishlaringizni tez va samarali amalga oshirib beramiz.</p>
        </ul>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='hero-img' src={Rasm_2} alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src={Rasm_3} alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'></h1>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
    </>
  );
}