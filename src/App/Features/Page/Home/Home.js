import React, { useCallback } from "react";
import styles_content from "./content.module.scss";
import { mobile, watch } from "../../../data/Data_sale";
import "./content.scss";
import { samsung, iphone, xiaomi } from "../../../data/data";
import { FaChevronRight, FaAngleUp, FaStar } from "react-icons/fa";
import { menuProduct } from "../../../data/menu_Product";
import flashsale from "../../../images/flashsale.png";
import Slide from "../../Products/Slideshow";
import Slide_product_sale from "../../Products/Slider_Product_Sale";
import { useState, useEffect, useRef } from "react";
import Product from "../../Products/List_product";
import ListContentMenu from "../../Products/ListContentMenu";
import { data } from "../../../data/Data_Content_Menu";
import Footer from "../../../component/Footer/footer";

const Home = () => {
  const [change1, setChange1] = useState(true);
  const [change2, setChange2] = useState(false);

  const procerser_change1 = () => {
    setChange1(true);
    setChange2(false);
  };
  const procerser_change2 = () => {
    setChange2(true);
    setChange1(false);
  };
  //countdown
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const CountDownDate = new Date("september 29,2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountDownDate - now;

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //stoptimer
        clearInterval(interval.current);
      } else {
        //update Timer
        setTimerDays(Days >= 10 ? Days : "0" + Days);
        setTimerHours(Hours >= 10 ? Hours : "0" + Hours);
        setTimerMinutes(Minutes >= 10 ? Minutes : "0" + Minutes);
        setTimeSeconds(Seconds >= 10 ? Seconds : "0" + Seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  // back_to_to

  const [Showtop, setshowtop] = useState(false);
  useEffect(() => {
    window.addEventListener =
      ("scroll",
      () => {
        if (window.scrollY >= 130) {
          setshowtop(true);
        } else {
          setshowtop(false);
        }
      });
  }, []);

  function Resettop() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="container-fluid p-0 "
      style={{ marginTop: "77px", height: "376px" }}
    >
      <div className="row mb-3 row_slide ">
        {Showtop && (
          <div className={styles_content.back_to_top} onClick={Resettop}>
            <FaAngleUp></FaAngleUp>
          </div>
        )}
        <a href="#" className={styles_content.btn_zalo_chat}>
          <img src="https://cellphones.com.vn/media/icons/icon-zalo.png" />
        </a>
        <div className="col-md-3  p-0 ">
          <div className="box_list_menu shadow ">
            <ul className={styles_content.list_menu}>
              {menuProduct.map((element, idx) => (
                <li
                  className={styles_content.item_menu}
                  key={idx}
                  id={element.className}
                >
                  <a>
                    <img src={element.icon} />
                    <span>{element.title}</span>
                    <FaChevronRight
                      style={{ fontSize: "11px", marginRight: "5px" }}
                    />
                    <ListContentMenu data={data} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="col-md-6  p-0 shadow "
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            marginLeft: "-14px",
          }}
        >
          <Slide />
        </div>
        <div className="col-md-3 ">
          <div className={styles_content.banner}>
            <a href="#" className="banner_item shadow ">
              <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/flip_right.png" />
            </a>
            <a href="#" className="banner_item shadow">
              <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/13-desk.png" />
            </a>
            <a href="#" className="banner_item shadow">
              <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ltRB.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-12 d-flex justify-content-center p-0">
          <div id={styles_content.block_banner_special_sale} className="shadow">
            <a>
              <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tab-s8-series-1200-75-max.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-12">
          <div className="flashsale block_hotsale shadow">
            <div className="block_hotsale__tab-menu">
              <a
                className="item_tabmenu item_tabmenu0"
                onClick={procerser_change1}
                style={{
                  background: change2 || "#D70018",
                  color: change2 || "white",
                }}
              >
                Điện thoại & Laptop
              </a>
              <a
                className="item_tabmenu item_tabmenu1"
                onClick={procerser_change2}
                style={{
                  background: change1 || "#D70018",
                  color: change1 || "white",
                }}
              >
                Phụ Kiện
              </a>
            </div>
            <div className="block_hotsale__title">
              <img src={flashsale} />
              <div className="box__title_countdown">
                <p className="countdown_title">Kết thúc sau&ensp;</p>
                <ul>
                  <li>
                    <span id="days">{timerDays}</span>:
                  </li>
                  <li>
                    <span id="hours">{timerHours}</span>:
                  </li>
                  <li>
                    <span id="minutes">{timerMinutes}</span>:
                  </li>
                  <li>
                    <span id="seconds">{timeSeconds}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block_hotsale__product">
              {change1 && <Slide_product_sale data={mobile} />}
              {change2 && <Slide_product_sale data={watch} />}
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-12">
          <div className="block_product_hot">
            <div className="box_hot_news">
              <a className="box_hot__title">
                <h2>Điện thoại nổi bật</h2>
              </a>
              <div className="box_related_tag">
                <div className="list_related_tag">
                  <a className="btn btn-default btn-sm item_related_tag">
                    Samsung
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    Apple
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag ">
                    Xiaomi
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    OPPO
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    Realme
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    Nokia
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    ASUS
                  </a>
                  <a className="btn btn-default btn-sm item_related_tag">
                    Vivo
                  </a>
                  <a className="item_related_tag">xem tất cả</a>
                </div>
              </div>
            </div>
            <div className="box_product_sp">
              <div className="list_product">
                <Product Data={samsung} name="samsung" />
                <Product Data={iphone} name="iphone" />
                <Product Data={xiaomi} name="xiaomi" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;
