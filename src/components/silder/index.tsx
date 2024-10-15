'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import './styles.css';

// import required modules
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import WineCard from '../wineCard';

export default function Slider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Scrollbar, Mousewheel, Keyboard]}
      centeredSlides={true}
      spaceBetween={30}
      loop
      scrollbar={{ draggable: true }}
      keyboard={true}
      direction="horizontal"
      mousewheel={{
        forceToAxis: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.4,
          spaceBetween: 8,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 12,
        },

        960: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 38,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 48,
        },
      }}
    >
      {[]?.map((wine, index) => (
        <SwiperSlide key={index}>
          {/* <WineCard
            name={t(`${wine.key}.name`)}
            type={t(`${wine.key}.type`)}
            image={wine.image}
          /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
