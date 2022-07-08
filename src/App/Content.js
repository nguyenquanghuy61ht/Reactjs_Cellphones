import styles_content from "./css/content.module.scss";
import "./css/content.scss"
import { FaChevronRight,FaAngleUp,FaStar} from "react-icons/fa";
import iconradio from"./images/icon-cps-220.svg"
import iconphone from "./images/phone.svg";
import iconhouse from "./images/housesmart.svg";
import iconlaptop from "./images/laptop.svg";
import iconphukien from "./images/phukien.svg";
import icontablet from "./images/tablet.svg";
import icondongho from "./images/dongho.svg";
import iconsale from "./images/sale.svg";
import icontintuc from "./images/tintuc.svg";
import iconsim from "./images/sim.svg";
import iconold from "./images/thu cũ.svg";
import flashsale from "./images/flashsale.png"
import Slide from "./Slideshow";
import Slide_product_phone from "./Slider_product";
import Slide_product_smartwatch from "./slider_product_watch";
import { useState,useEffect,useRef} from "react";

const menuProduct = [
  {
    className: "smartphone",
    icon: iconphone,
    title: "Điện thoại",
  },
  {
    className: "laptop",
    icon: iconlaptop,
    title: "LapTop,PC,màn hình",
  },
  {
    className: "tablet",
    icon: icontablet,
    title: "Tablet",
  },
  {
    className: "radio",
    icon: iconradio,
    title: "Âm thanh",
  },
  {
    className: "clock",
    icon: icondongho,
    title: "Đồng hồ",
  },
  {
    className: "house",
    icon: iconhouse,
    title: "Nhà thông minh",
  },
  {
    className: "phukien",
    icon: iconphukien,
    title: "Phụ kiện",
  },
  {
    className: "thu_cu",
    icon: iconold,
    title: "Thu cũ",
  },
  {
    className: "sim",
    icon: iconsim,
    title: "Sim thẻ",
  },
  {
    className: "newsinfo",
    icon: icontintuc,
    title: "Tin công nghệ",
  },
  {
    className: "sale",
    icon: iconsale,
    title: "Khuyến mại",
  },
];

const Content=()=>{
   
  const[change1,setChange1]=useState(true)
  const [change2, setChange2] = useState(false);

  const procerser_change1=()=>{
    setChange1(true);
    setChange2(false)
  }
  const procerser_change2 = () => {
     setChange2(true);
     setChange1(false);
  };
  //countdown
  const [timerDays,setTimerDays]=useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");
  let interval=useRef();
  const startTimer=()=>{
    const CountDownDate = new Date("March 25,2022 00:00:00").getTime();
    interval=setInterval(()=>{
      const now=new Date().getTime();
      const distance=CountDownDate-now;

      const Days=Math.floor(distance/(1000 * 60 * 60 *24));
      const Hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const Minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000* 60));
      const Seconds = Math.floor((distance % (1000 * 60))/1000);
      if(distance < 0)
      {
        //stoptimer
        clearInterval(interval.current);
      }else{
        //update Timer
        setTimerDays((Days>=10)?Days:"0"+Days);
        setTimerHours((Hours>=10)?Hours:"0"+Hours);
        setTimerMinutes((Minutes>=10)?Minutes:"0"+Minutes);
        setTimeSeconds((Seconds>=10)?Seconds:"0"+Seconds);

      }
    
    },1000)
  };
  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current);
    };
  });
  // back_to_to

    const [Showtop, setshowtop] = useState(false);
      useEffect(() => {
        window.addEventListener=('scroll',()=>{
            if(window.scrollY>=130)
            {
               setshowtop(true);
            }else
            {
                setshowtop(false)
            }
        })
      },[]);

   function Resettop() {
    window.scrollTo(0,0)
   }
 


    return (
      <div
        className="container-fluid "
        style={{ marginTop: "77px", height: "376px" }}
      >
        <div className="row mb-3">
          {Showtop && (
            <div className={styles_content.back_to_top} onClick={Resettop}>
              <FaAngleUp></FaAngleUp>
            </div>
          )}
          <a href="#" className={styles_content.btn_zalo_chat}>
            <img src="https://cellphones.com.vn/media/icons/icon-zalo.png" />
          </a>
          <div className="col-md-3 position-relative p-0 ">
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
                      <div className="box_list_big">
                        <div className="box_list_child_menu child_phone shadow-lg   ">
                          <ul className={styles_content.list_menu}>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Apple</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Samsung</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Xiaomi</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Oppo</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Nokia</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Realmi</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Vsmart</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Ausus</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Vivo</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>OnPlus</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>nubia</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>CAT</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Điện thoại phổ thông</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="box_list_child_menu child_laptop shadow-lg  ">
                          <ul className={styles_content.list_menu}>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Mac</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>HP</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Dell</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>lenovo</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Ausus</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Acer</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>MSI</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Huawei</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="box_list_child_menu child_tablet shadow-lg  ">
                          <ul className={styles_content.list_menu}>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>iPad Pro</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>iPad 10.2</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>iPad Air</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>iPad Mini</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Samsung</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Lenovo</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Xiaomi</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Máy đọc sách</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Alcetal</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="box_list_child_menu child_radio shadow-lg  ">
                          <ul className={styles_content.list_menu}>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Loa</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Tai nghe</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Phụ kiện</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Phòng thu âm</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="box_list_child_menu child_clock shadow-lg  ">
                          <ul className={styles_content.list_menu}>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Apple Watch</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Samsung</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Garmin</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Xiaomi</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Amazfit</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Huawei</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>OPPO</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Hãng khác</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Vòng đeo thông minh</span>
                              </a>
                            </li>
                            <li className={styles_content.item_menu_child}>
                              <a>
                                <span>Đồng hồ định vị trẻ em</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
            <Slide></Slide>
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
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center p-0">
            <div
              id={styles_content.block_banner_special_sale}
              className="shadow"
            >
              <a>
                <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tab-s8-series-1200-75-max.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
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
                {change1 && <Slide_product_phone></Slide_product_phone>}
                {change2 && (
                  <Slide_product_smartwatch></Slide_product_smartwatch>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
                  <div id="300" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                      <p className="old_price">32.000.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                    <div className="item_product__box-raiting">
                      <FaStar className="fa-star"></FaStar>
                      <FaStar className="fa-star"></FaStar>
                      <FaStar className="fa-star"></FaStar>
                      <FaStar className="fa-star"></FaStar>
                      <FaStar className="fa-star"></FaStar>
                      &nbsp;3 đánh giá
                    </div>
                  </div>
                  <div id="301" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="302" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                  </div>
                  <div id="303" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="item-product__stiker-precent">
                      <p>Giảm 3%</p>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="304" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                  </div>
                  <div id="305" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="306" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="307" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="308" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                  <div id="309" className="list_item__product">
                    <div className="list_item__product_img">
                      <a>
                        <img src="https://image.cellphones.com.vn/220x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg" />
                      </a>
                    </div>
                    <div className="list_item__product_name">
                      <a>
                        <p>Samsung Galaxy S22 Ultra (8GB - 128GB)</p>
                      </a>
                    </div>
                    <div className="list_item__product_more_info text_stock">
                      <p>Hàng đặt trước</p>
                    </div>
                    <div className="list_item__product_box_price">
                      <p className="special_price">30.990.000&nbsp;đ</p>
                    </div>
                    <div className="promotion">
                      <p className="gift_cont">
                        Thu cũ lên đời trợ giá 1 triệu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Content;