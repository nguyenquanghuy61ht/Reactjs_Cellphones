import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight, FaAngleUp, FaStar } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/list-product.scss";

// import required modules
import { Navigation} from "swiper";

export default function Product({Data}) {

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={0}
        
        modules={[Navigation]}
        className="mySwiper"
      >{
        Data.map((product,idx)=>{
          return (
            <SwiperSlide key={idx} style={{ cursor: "pointer" }}>
              <div id="300" className="list_item__product">
                <div className="list_item__product_img">
                  <a>
                    <img src={product.image} />
                  </a>
                </div>
                <div className="list_item__product_name">
                  <a>
                    <p>{product.name}</p>
                  </a>
                </div>
                {product.order && (
                  <div className="list_item__product_more_info text_stock">
                    <p>Hàng đặt trước</p>
                  </div>
                )}

                <div className="list_item__product_box_price">
                  <p className="special_price">
                    {product.price.newPrice}&nbsp;đ
                  </p>
                  <p className="old_price">{product.price.oldPrice}&nbsp;đ</p>
                </div>
                {product.program && (
                  <div className="promotion">
                    <p className="gift_cont">Thu cũ lên đời trợ giá 1 triệu</p>
                  </div>
                )}
                {product.rating && (
                  <div className="item_product__box-raiting">
                    <FaStar className="fa-star"></FaStar>
                    <FaStar className="fa-star"></FaStar>
                    <FaStar className="fa-star"></FaStar>
                    <FaStar className="fa-star"></FaStar>
                    <FaStar className="fa-star"></FaStar>
                    &nbsp;3 đánh giá
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })
      }
      
     
      </Swiper>
    </>
  );
}
