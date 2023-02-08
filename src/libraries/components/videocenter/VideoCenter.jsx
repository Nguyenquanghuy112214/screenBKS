import React, { useState } from 'react';
import YouTube from 'react-youtube';

// Import img
import anh1 from '~/assets/img/video/anh1.jpg';
import anh2 from '~/assets/img/video/anh2.jpg';
import anh3 from '~/assets/img/video/anh3.jpg';
import anh4 from '~/assets/img/video/anh4.jpg';
import anh5 from '~/assets/img/video/anh5.jpg';
import anh6 from '~/assets/img/video/anh6.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

// Css module
import classNames from 'classnames/bind';
import styles from './_VideoCenter.module.scss';
const cx = classNames.bind(styles);
export default function VideoCenter() {
  const [url, setUrl] = useState('S4kHc8ibC1g');
  const [id,setId]= useState(0)
  const opts = {
    playerVars: {
      autoplay: true,
    },
  };

  const data = [
    {id:0, img: anh1, url: 'S4kHc8ibC1g' },
    {id:1, img: anh2, url: 'zcU_vl26If8' },
    {id:2, img: anh3, url: '4gdAEy40_gU' },
    {id:3, img: anh4, url: 'S4kHc8ibC1g' },
    {id:4, img: anh5, url: 'zcU_vl26If8' },
    {id:5, img: anh6, url: '4gdAEy40_gU' },
  ];
  const handleClick = (item) => {
    setUrl(item.url)
    setId(item.id)
  }
  return (
    <div className={cx('wrapper')}>
      <YouTube className={cx('iframe')} videoId={url} opts={opts} />
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className={cx('swiper-video')}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className={`${id===index?'swiper-video-active':''}`} key={index} onClick={() =>handleClick(item)}>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
