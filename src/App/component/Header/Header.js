import logo_icon from "../../images/logo_menu.svg";
import logo from "../../images/Logo_cellphones.svg";
import icon_phone from "../../images/iconphone.svg";
import icon_GPS from "../../images/GPS.svg";
import icon_car from "../../images/iconcar.svg";
import icon_cart from "../../images/cart.svg";
import icon_acount from "../../images/acounticon.svg";
import styles from "./header.module.scss";
import { FaLocationArrow, FaAngleDown, FaSearch } from "react-icons/fa";
import { useState, createContext } from "react";
import Warpper from "./Warpper";
import { Link, useNavigate } from "react-router-dom";
import { cartItemsCountSelector } from "../../Features/Cart/components/selector";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CheckCircle } from "@mui/icons-material";
import { hideMiniCart } from "../../Features/Cart/components/cartSlice";
export const WarpperContext = createContext();
const useStyles = makeStyles((theme) => ({
  popover: {
    zIndex: 100,
    minWidth: "100px",
    position: "absolute",
    top: "90%",
    right: "70px",
    padding: "10px",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  Button: {
    marginTop: "15px",
    width: "100%",
  },
}));
const Header = () => {
  const navigate=useNavigate()
  const showCart = useSelector((state) => state.cart.isShowCart);
  const dispatch = useDispatch();
  const totalProduct = useSelector(cartItemsCountSelector);
  const [location, setLocation] = useState("Miền Bắc");
  const [show, setShow] = useState(false);
  function handleDanhMuc() {
    setShow(!show);
  }
  const handleToCart = () => {
    navigate("/cart");
    dispatch(hideMiniCart());
  };
  const classes = useStyles();

  return (
    <WarpperContext.Provider value={show}>
      {show && <Warpper hide={setShow}></Warpper>}
      <div
        className="container-fluid p-0 "
        style={{
          background: "#D70018",
          position: "fixed",
          top: "0",
          zIndex: "200",
        }}
      >
        <div className="row" id={styles.row_header}>
          <div
            className="col-md-3   "
            style={{ lineHeight: "62px", height: "100%" }}
          >
            <img
              onClick={handleDanhMuc}
              className={styles.icon_1}
              src={logo_icon}
            />
            <Link to="/">
              <img className={styles.logo_cellphons} src={logo} />
            </Link>{" "}
          </div>
          <div className="col-md-1 p-0 " style={{ height: "100%" }}>
            <div className={styles.box_button_dropdown}>
              <div className="dropdown">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="btn d-flex p-0 "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    boxShadow: "none",
                  }}
                >
                  <div className={styles.icon_GPS}>
                    <FaLocationArrow
                      style={{ fontSize: "15px", color: "white" }}
                    />
                  </div>
                  <div className="box-content ">
                    <p
                      className="m-0 "
                      style={{ fontSize: "11px", color: "white" }}
                    >
                      Xem giá tại
                    </p>
                    <p
                      className="m-0"
                      style={{ fontSize: "14px", color: "white" }}
                    >
                      {location}
                    </p>
                  </div>
                  <div className="icon_down mt-3" style={{ marginLeft: "3px" }}>
                    <FaAngleDown style={{ color: "white" }} />
                  </div>
                </button>
                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ borderRadius: "8px" }}
                >
                  <li onClick={() => setLocation("Miền Bắc")}>
                    <a
                      onClick={() => setShow(false)}
                      className="dropdown-item pt-0 pb-0"
                      href="#"
                      style={{
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        background:
                          location == "Miền Bắc" ? "#FEE2E2" : "white",
                      }}
                    >
                      <span style={{ marginRight: "4px" }}>
                        <FaLocationArrow
                          style={{ fontSize: "12px", color: "red" }}
                        />
                      </span>
                      Miền bắc
                    </a>
                  </li>
                  <li onClick={() => setLocation("Miền Nam")}>
                    <a
                      onClick={() => setShow(false)}
                      className="dropdown-item  pt-0 pb-0 "
                      href="#"
                      style={{
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                        background:
                          location == "Miền Nam" ? "#FEE2E2" : "white",
                      }}
                    >
                      <span style={{ marginRight: "4px" }}>
                        <FaLocationArrow
                          style={{ fontSize: "12px", color: "red" }}
                        />
                      </span>
                      Miền nam
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0" style={{ height: "100%" }}>
            <div className="input-group " id={styles.input_group1}>
              <div className={styles.icon_search}>
                <FaSearch style={{ marginLeft: "6px", color: "#7A7A7A" }} />
              </div>
              <input
                onFocus={() => setShow(!show)}
                onBlur={() => setShow(false)}
                type="search"
                className="form-control "
                placeholder="Bạn cần tìm gì?"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{
                  outLine: "none",
                  border: "none",
                  boxShadow: "none",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: "#808080",
                }}
              />
            </div>
          </div>
          <div
            className="col-md-5 d-flex"
            style={{ alignItems: "center", height: "100%" }}
          >
            <div
              className="box_about d-flex justify-content-between"
              style={{ width: "477px", marginLeft: "10px" }}
            >
              <a
                className={styles.box_about__item}
                style={{ alignItems: "center" }}
              >
                <div className="about__phone-icon">
                  <img className={styles.icon_menu} src={icon_phone} />
                </div>
                <div
                  className="about__phone-content "
                  style={{ lineHeight: "1.2", cursor: "pointer" }}
                >
                  <p className={styles.title}>
                    Gọi mua hàng
                    <br />
                    <strong>1800.2044</strong>
                  </p>
                </div>
              </a>
              <a
                className={styles.box_about__item}
                style={{ alignItems: "center" }}
              >
                <div className="about__adress-icon">
                  <img className={styles.icon_menu} src={icon_GPS} />
                </div>
                <div
                  className="about__adress-content"
                  style={{ lineHeight: "1.2", cursor: "pointer" }}
                >
                  <p className={styles.title}>
                    Cửa hàng
                    <br />
                    gần bạn
                  </p>
                </div>
              </a>
              <a
                className={styles.box_about__item}
                style={{ alignItems: "center" }}
              >
                <div className="about__info-icon">
                  <img className={styles.icon_menu} src={icon_car} />
                </div>
                <div
                  className="about__info-content"
                  style={{ lineHeight: "1.2", cursor: "pointer" }}
                >
                  <p className={styles.title}>
                    Tra cứu
                    <br />
                    đơn hàng
                  </p>
                </div>
              </a>
              <Link
                className={styles.box_about__item}
                style={{ alignItems: "center" }}
                to="/cart"
              >
                <div className={styles.about__cart_icon}>
                  <img className={styles.icon_menu} src={icon_cart} />
                  <span>{totalProduct}</span>
                </div>

                <div
                  className="about__cart-content"
                  style={{ lineHeight: "1.2", cursor: "pointer" }}
                >
                  <p className={styles.title}>
                    Giỏ
                    <br />
                    hàng
                  </p>
                </div>
              </Link>
              {showCart && (
                <Paper className={classes.popover}>
                  <Box className={classes.title}>
                    <IconButton>
                      <CheckCircle color="success" />
                    </IconButton>
                    <Typography variant="body1">
                      Thêm vào giỏ hàng thành công
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleToCart}
                    variant="contained"
                    color="error"
                    className={classes.Button}
                    sx={{ fontSize: "12px" }}
                  >
                    Xem giỏ hàng và thanh toán
                  </Button>
                </Paper>
              )}

              <a className={styles.box_about__Smember}>
                <div className="about__Smember-icon text-center">
                  <img className={styles.icon_member} src={icon_acount} />
                </div>
                <div className="about__Smember-content">
                  <p className={styles.title}>Smember</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </WarpperContext.Provider>
  );
};

export default Header;
