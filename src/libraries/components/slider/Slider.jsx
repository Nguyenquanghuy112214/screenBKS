import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative, Pagination, Navigation,Autoplay } from 'swiper';

// Import list slider
import Slider1 from './Slider1';
import Slider2 from './Slider2';

// Css module
import classNames from 'classnames/bind';
import styles from './_Slider.module.scss';
const cx = classNames.bind(styles);

export default function Slider() {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}

      navigation={true}
      pagination={true}
      loop={true}
      grabCursor={true}
      effect={'creative'}
      speed={900}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-40%', 0, -10],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Pagination, Navigation,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Slider1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slider2 />
      </SwiperSlide>
    </Swiper>
  );
}
