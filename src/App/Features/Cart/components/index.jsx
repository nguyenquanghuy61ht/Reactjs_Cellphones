import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartItemsCountSelector, cartTotalSelector } from "./selector";

function Cart() {
  const navigate = useNavigate();
  const ListOder = useSelector((state) => state.cart.cartItems);
  const totalProduct = useSelector(cartItemsCountSelector);
  const Total = useSelector(cartTotalSelector);

  console.log(Total);
  console.log(ListOder);

  return (
    <div style={{ marginTop: "10%" }}>
      <span style={{cursor:'pointer',color:'red'}} onClick={() => navigate(-1)}>Quay lại </span>
      <span>Tổng: {totalProduct} san pham</span>
      <ul>
        {ListOder.map((product, idx) => (
          <li key={idx}>
            <img src={product.image} alt="img" />
            <p>{product.name}</p>
            <p>{product.price.newPrice}</p>
            <p>so luong: {product.quantity}</p>
          </li>
        ))}
      </ul>
      <span>Tổng tien {Total}</span>
    </div>
  );
}

export default Cart;
