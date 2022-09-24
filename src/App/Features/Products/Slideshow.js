import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slider.scss";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

export default function Slide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
const images = [
  {
    img_slide:
      "https://cdn.cellphones.com.vn/media/ltsoft/promotion/e_shop_samsung.png",
    title_top: "ESHOP SAMSUNG",
    title_bottom: "Mua online giảm sốc",
  },
  {
    img_slide:
      "https://cdn.cellphones.com.vn/media/ltsoft/promotion/s22-690-300-max.png",
    title_top: "GALAXY S22 SERIES",
    title_bottom: "Ưu đãi đến 6 triệu",
  },
  {
    img_slide:
      "https://cdn.cellphones.com.vn/media/ltsoft/promotion/690-300-max_1_.png",
    title_top: "AIRPODS PRO 2021",
    title_bottom: "Hotsale giảm sốc",
  },
  {
    img_slide:
      "https://cdn.cellphones.com.vn/media/ltsoft/promotion/xiaomi_redmi_note_11.png",
    title_top: "REDMI NOT 11",
    title_bottom: "Ưu đãi cực tốt",
  },
  {
    img_slide: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/asus.png",
    title_top: "ZENBOOK OLED",
    title_bottom: "Đẳng cấp thời thượng",
  },
];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",

          height: "305px",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((element, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={element.img_slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        style={{
          height: "73px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper list_title"
      >
        {images.map((element1, idx1) => {
          return (
            <SwiperSlide key={idx1}>
              {element1.title_top}
              <br />
              {element1.title_bottom}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
