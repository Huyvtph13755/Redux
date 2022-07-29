import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import {currency} from "../../helper.js";
import cartSlice from "./cartSlice.js";
const Cart = () => {
  const {cart} = useSelector(store => store)
  const dispatch = useDispatch()

  const increase = (id) => {
    dispatch(cartSlice.actions.increase(id))
  }
  const decrease = (id) => {
    dispatch(cartSlice.actions.decrease(id))
  }
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <table className="all-cart">
        <tbody>
          {cart.cart?.map((item) => (
            <tr className="cart-item">
              <td width={500}>
                <p className="name">{item.name}</p>
                <img style={{ width: "30%" }} src={item.image} alt="" />
              </td>
              <td width={500}>
                <p className="qtt">Số lượng</p>
                <div className="quantity">
                  <button className="click" onClick={() => decrease(item.id)}>
                    -
                  </button>
                  <input disabled type="text" value={item.amount}/>
                  <button className="click" onClick={() => increase(item.id)}>
                    +
                  </button>
                </div>
              </td>
              <td width={200}>
                <p className="price-cart">
                  {currency(item.amount * item.saleOffPrice)} đ
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="total">
        <p>Total</p>
        <p className="tt">{currency(cart.total)} đ</p>
      </div>
    </div>
  );
};

export default Cart;
