import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {  useNavigate } from "react-router-dom";
import "./styles.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CartItems from "../boxLayout";
import { useSelector } from "react-redux";
import { cartItemsCountSelector, cartTotalSelector } from "./selector";
function Cart() {
  const navigate = useNavigate();
  const totalProduct = useSelector(cartItemsCountSelector);
  const ListOder = useSelector((state) => state.cart.cartItems);
  const Total = useSelector(cartTotalSelector);
  const convertTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(Total);
  const handlePay=()=>{
    if(ListOder.length>0){
      alert('Bạn đã đặt hàng thành công !')
    }else{
      alert("Bạn chưa có sản phẩm nào trong giỏ hàng");

    }
    
  }
  return (
    <Grid container spacing={2} className="Box-Cart">
      <Grid item md={6} className="Box-Cart2">
        <Grid item md={12} className="Box-Cart__header">
          <Box className="Back" onClick={() => navigate(-1)}>
            <Typography
              variant="subtitle2"
              component="span"
              className="icon_Back"
            >
              <ArrowBackIosIcon
                style={{
                  fontSize: "1.1rem",
                  marginTop: "6px",
                  color: "#D70018",
                }}
              />
            </Typography>
            <Typography variant="subtitle1" component="p">
              Trở về
            </Typography>
          </Box>
          <Box className="title">
            <Typography variant="subtitle1" component="p">
              Giỏ hàng ({totalProduct} sản phẩm)
            </Typography>
          </Box>
        </Grid>
        <CartItems />

        <Grid item md={12} className="Box-Cart__Pay" sx={{ boxShadow: 3 }}>
          <Typography component="div" className="totalPrice">
            <Typography component="p">Tổng tiền tạm tính:</Typography>
            <Typography component="p" className="price">
              {convertTotal}
            </Typography>
          </Typography>
          <Button
            className="btnOder"
            variant="contained"
            color="error"
            onClick={handlePay}
          >
            Tiến hành đặt hàng
          </Button>
          <Button
            className="addProductdiff"
            variant="outlined"
            color="error"
            onClick={() => navigate("/")}
          >
            Chọn sản phẩm khác
          </Button>
        </Grid>
      </Grid>
    </Grid>
    // <div style={{ marginTop: "10%" }}>
    //   <span
    //     style={{ cursor: "pointer", color: "red" }}
    //     onClick={() => navigate(-1)}
    //   >
    //     Quay lại{" "}
    //   </span>
    //   <span>Tổng: {totalProduct} san pham</span>
    //   <ul>
    //     {ListOder.map((product, idx) => (
    //       <li key={idx}>
    //         <img src={product.image} alt="img" />
    //         <p>{product.name}</p>
    //         <p>{product.price.newPrice}</p>
    //         <Box className="space mt-4">
    //           <TextField
    //             onChange={(e) => UpdateQuantity(e.target.value, product.id)}
    //             id="filled-number"
    //             size="small"
    //             label="Số lượng"
    //             InputProps={{ inputProps: { min: 1, max: 10 } }}
    //             defaultValue={product.quantity}
    //             type="number"
    //             InputLabelProps={{
    //               shrink: true,
    //             }}
    //             sx={{ width: "90px" }}
    //           />
    //         </Box>
    //         <button
    //           onClick={() => {
    //             deleteProduct(product.id);
    //           }}
    //         >
    //           Delete
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    //   <span>Tổng tien {convertTotal}</span>
    // </div>
  );
}

export default Cart;
