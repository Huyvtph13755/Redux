import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";

const Cart = () => {
  const { cart, total } = useSelector((store) => store);
  const dispatch = useDispatch();
  const increase = (item) => {
    dispatch({
      type: "increase",
      payload: item,
    });
  };
  const decrease = (item) => {
    dispatch({
      type: "decrease",
      payload: item,
    });
  };
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <table className="all-cart">
        <tbody>
          {cart?.map((item) => (
            <tr className="cart-item">
              <td width={500}>
                <p className="name">{item.name}</p>
                <img style={{ width: "30%" }} src={item.image} alt="" />
              </td>
              <td width={500}>
                <p className="qtt">Số lượng</p>
                <div className="quantity">
                  <button className="click" onClick={() => decrease(item)}>
                    -
                  </button>
                  <input disabled type="text" value={item.quantity}/>
                  <button className="click" onClick={() => increase(item)}>
                    +
                  </button>
                </div>
              </td>
              <td width={200}>
                <p className="price-cart">
                  {item.saleOffPrice.toLocaleString("en-US")} đ
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="total">
        <p>Total</p>
        <p className="tt">{total.toLocaleString("en-US")} đ</p>
      </div>
    </div>
  );
};

export default Cart;
