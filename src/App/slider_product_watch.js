import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./css/slider.scss";
import {  Navigation} from "swiper";

export default function Slide_product_smartwatch() {
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/r/e/redmi-watch-2.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/w/a/watch_3_leather.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/t/h/thumb_1618120865-_1__1.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/t/a/tai-nghe-khong-day-xiaomi-redmi-buds-3-pro-1_1_1.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6-11.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/t/e/template_dongho_final_5_1.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/h/u/huawei-watch-3.jpg" />
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
                <img src="https://image.cellphones.com.vn/220x/media/catalog/product/p/d/pdp-gallery-black-trio-wireless-charger-06-1600x1200.jpg" />
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