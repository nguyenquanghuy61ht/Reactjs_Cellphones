import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./css/slider.scss";
import {  Navigation} from "swiper";
export default function Slide_product_phone() {
  
  return (
    <>
      <div className="slide_product">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",

            height: "305px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
         
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          slidesPerGroup={5}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.50": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            "@2.00": {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper swiper_product"
        >
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/8/0/800x800-1-640x640-5_2.png" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/f/r/frame37917-640x640_1_.png" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/8/0/800x800-640x640-5.png" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/x/i/xiaomi-mi-11t-1_1.jpg" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/0/4/04_2_4.png" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/a/samsung-galaxy-a52-26.jpg" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/x/i/xiaomi-11-lite-5g-014_1.jpg" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/x/i/xiaomi-mi-11t-pro-price-in-usa-500x500.jpg" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item__product_img">
              <a>
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/a/samsung-galaxy-tab-s7-1.jpg" />
              </a>
            </div>
            <div className="item__product_sticker">
              <p>Giảm 15%</p>
            </div>
            <div className="item__product_name">
              <a>
                <p>Xiaomi 11 Lite 5G NE</p>
              </a>
            </div>
            <div className="item__product_price">
              <p className="specical_price">8000.000&nbsp;đ</p>
              <p className="old_price">9.490.000&nbsp;đ</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

