import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
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
    <Grid
      container
      sx={{ marginTop: "30px", padding: "90px 110px" }}
      spacing={2}
    >
      <Grid item xs={6} md={4}>
        <Box component="div">
          <img src={dataProduct.image} alt="imgProduct" />
        </Box>
      </Grid>
      <Grid item xs={6} md={8} >
        <Box component="div" >
          <Typography>{dataProduct.name}</Typography>
          {dataProduct.order && (
            <div className="list_item__product_more_info text_stock">
              <p>Hàng đặt trước</p>
            </div>
          )}
          <Stack direction="row" spacing={2}>
            <p className="specical_price">
              {dataProduct.price.newPrice}&nbsp;đ
            </p>
            <p className="old_price">{dataProduct.price.oldPrice}&nbsp;đ</p>
          </Stack>
          <Box >
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
          <Box color="danger">
            <Button variant="contained" color="error">
              Thêm vào giỏ hàng
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Detail;
