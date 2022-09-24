import { Button, Grid, makeStyles, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../../component/Footer/footer";
import { Data } from "../../../data/data";
import "./styles.scss";
function Detail(props) {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];
  const { productId } = useParams();
  const dataManufacturer = Data.filter((data) => data.type === type);
  const dataProduct = dataManufacturer[0].data[productId];

  return (
    <>
      <Grid
        container
        sx={{ marginTop: "30px", padding: "90px 110px" }}
        spacing={2}
        className="detail-box"
      >
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
                id="filled-number"
                size="small"
                label="Số lượng"
                defaultValue={1}
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
              <Button variant="contained" color="error" className="mt-2">
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
