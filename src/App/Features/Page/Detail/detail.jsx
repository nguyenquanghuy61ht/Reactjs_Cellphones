import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../component/Footer/footer";
import { mobile, watch } from "../../../data/Data_sale";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Data } from "../../../data/data";
import "./styles.scss";
import {
  addTocart,
  hideMiniCart,
  showMiniCart,
} from "../../Cart/components/cartSlice";
function Detail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];
  const { productId } = useParams();
  const dataManufacturer = Data.filter((data) => data.type === type);
  const dataProduct = dataManufacturer[0].data[productId];
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  async function hadleAddToCart() {
    const action = {
      id: productId + type,
      ...dataProduct,
      quantity: Number(quantity),
    };
    console.log(action);
    await dispatch(addTocart(action));
    await dispatch(showMiniCart());
    (() => {
      setTimeout(() => {
        dispatch(hideMiniCart());
      }, 5000);
    })();
  }

  return (
    <>
      <Grid
        container
        sx={{ marginTop: "30px", padding: "90px 110px" }}
        spacing={2}
        className="detail-box"
      >
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
        </Grid>
        <Grid item xs={6} md={4}>
          <Box component="div">
            <img
              src={dataProduct.image}
              alt="imgProduct"
              className="img-detail"
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={8} className="detail-box-price">
          <Box component="div">
            <Typography className="space text-title ">
              {dataProduct.name}
            </Typography>
            {dataProduct.order && (
              <div className="list_item__product_more_info text_stock mt-2">
                <p>Hàng đặt trước</p>
              </div>
            )}
            <Stack direction="row" spacing={2} className="space">
              <p className="specical_price">
                {dataProduct.price.newPrice}&nbsp;đ
              </p>
              <p className="old_price">{dataProduct.price.oldPrice}&nbsp;đ</p>
            </Stack>
            <Box className="space mt-4">
              <TextField
                onChange={handleQuantity}
                id="filled-number"
                size="small"
                label="Số lượng"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                defaultValue={quantity}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "90px" }}
              />
            </Box>
            {dataProduct.program && (
              <div className="promotion mt-3">
                <p className="gift_cont">Thu cũ lên đời trợ giá 1 triệu</p>
              </div>
            )}
            <Box color="danger" className="space">
              <Button
                variant="contained"
                color="error"
                className="mt-2"
                onClick={hadleAddToCart}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
     
    </>
  );
}

export default Detail;
