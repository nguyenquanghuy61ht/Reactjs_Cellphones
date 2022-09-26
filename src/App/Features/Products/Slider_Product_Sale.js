import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import {  Navigation} from "swiper";
export default function Slide_product_sale({data}) {
  
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
          {
            data.map((product,indx )=>{
              return (
                <SwiperSlide key={indx} style={{cursor:'pointer'}}>
                  <div className="item__product_img">
                    <a>
                      <img src={product.image} />
                    </a>
                  </div>
                  <div className="item__product_sticker">
                    <p>{product.salePrice}</p>
                  </div>
                  <div className="item__product_name">
                    <a>
                      <p>{product.name}</p>
                    </a>
                  </div>
                  <div className="item__product_price">
                    <p className="specical_price">
                      {product.price.newPrice}&nbsp;đ
                    </p>
                    <p className="old_price">{product.price.oldPrice}&nbsp;đ</p>
                  </div>
                </SwiperSlide>
              );
            })
          }


        </Swiper>
      </div>
    </>
  );
}

