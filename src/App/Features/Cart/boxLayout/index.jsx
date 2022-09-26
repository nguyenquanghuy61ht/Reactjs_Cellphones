import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { removeFormCart, setQuantity } from "../components/cartSlice";
import "../components/styles.scss";
import { Format } from "../../../Hook/fomatPrice";
function CartItems() {
  const dispatch = useDispatch();
  const ListOder = useSelector((state) => state.cart.cartItems);
  function deleteProduct(idProduct) {
    dispatch(removeFormCart(idProduct));
  }

  function increase(quantity, id) {
    let newQuantity = quantity;
    if (newQuantity < 10) {
      newQuantity += 1;
      UpdateQuantity(newQuantity, id);
      //console.log("add", newQuantity);
    }
  }
  function inremove(quantity, id) {
    let newQuantity = quantity;
    if (newQuantity > 1) {
      newQuantity -= 1;
      UpdateQuantity(newQuantity, id);
      //console.log("remove", newQuantity);
    }
  }
  function UpdateQuantity(newQuantity, id) {
    const action = {
      quantity: Number(newQuantity),
      id: id,
    };
    dispatch(setQuantity(action));
  }

  console.log(ListOder);
  return (
    <>
      {ListOder.map((product, idx) => {
        const newPrice = Format(product.price.newPrice);
        const oldPrice = Format(product.price.oldPrice);
        const sale =
          ((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100;
        return (
          <Grid
            key={product.id}
            item
            md={12}
            className="Box-Cart__product"
            sx={{ boxShadow: 3 }}
          >
            <Box className="image">
              <img src={product.image} alt="img-item" />
            </Box>
            <Box className="Detail">
              <Typography
                variant="subtitle1"
                component="div"
                className="title-box"
              >
                <Typography variant="subtitle1" component="p">
                  {product.name}
                </Typography>
                <CloseIcon
                  className="iconClose"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                />
              </Typography>
              <Typography component="div" className="price">
                <Typography component="p" className="new">
                  {product.price.newPrice}
                </Typography>
                <Typography component="p" className="old">
                  {product.price.oldPrice}
                </Typography>
                <Typography component="span">
                  Giảm {Math.round(sale)} %
                </Typography>
              </Typography>
              <Typography component="div" className="numberProduct">
                <Typography component="p">Chọn số lượng: </Typography>
                <Typography component="div" className="inputBox">
                  <RemoveIcon
                    onClick={() => inremove(product.quantity, product.id)}
                  />
                  <Typography component="span">{product.quantity}</Typography>
                  <AddIcon
                    onClick={() => increase(product.quantity, product.id)}
                  />
                </Typography>
              </Typography>
              <Typography component="div" className="infoSale">
                <Typography component="p">
                  Chương trình khuyến mại :{" "}
                </Typography>
                <Typography component="div">
                  <ul>
                    <li>
                      {product.program === true
                        ? "Thu cũ đổi mới,lên đời trợ giá 30%"
                        : "không có chương trình khuyến mãi"}
                    </li>
                  </ul>
                </Typography>
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default CartItems;
