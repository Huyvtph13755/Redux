import React from "react";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, quantity: 1 },
    });
  };
  return (
    <div className="row product-container">
      <h3>Product</h3>
      {product?.map((item) => (
        <div className="col-4 product-item" onClick={() => addToCart(item)}>
          <p className="name">{item.name}</p>
          <img style={{ width: "50%" }} src={item.image} />
          <div className="price">
            {item.saleOffPrice.toLocaleString("en-US")} đ
          </div>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      ))}
    </div>
  );
};

export default Product;
