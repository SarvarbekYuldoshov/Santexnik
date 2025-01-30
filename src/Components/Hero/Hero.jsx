import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Rasm_2 from "../images/rasm2.jpg"
import Rasm_3 from "../images/rasm4.webp"
import Rasm_4 from "../images/rasm5.webp"
import Rasm_5 from "../images/rasm6.webp"
import Rasm_7 from "../images/rasm7.jpg"
import Rasm_8 from "../images/rasm8.jpg"
import Rasm_9 from "../images/rasm9.jpg"
import { EffectCards } from 'swiper/modules';
import "./Hero.css"
import { Button } from 'antd';
export default function Hero() {
  return (
    <>
    <div className='hero'>
      <div className='container hero-container'>
         <ul className='hero-list'>
            <h1 className='hero-title'>Biz eng sungi va zamonaviy Santexnika bizning saytda</h1>
            <p className='hero-text'>Biz sizga har qanday santexnika ishlarini bajarib bera olamiz. Buzilgan joylarni ta'mirlashdan tortib, noldan qurilishgacha — ish hajmiga qarab farq qilmaydi. Barcha ishlaringizni tez va samarali amalga oshirib beramiz.</p>
            <Button className='hero-btn'>Ariza Qoldirish</Button>
            </ul>
            <ul className=''>
                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='hero-img' src={Rasm_9} alt="" />
                </SwiperSlide>
              </Swiper>
          </ul>
      </div>
    </div>
    </>
  );
}