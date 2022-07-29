import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      const exitsProduct = state.cart.find((item) => item.id === action.payload.id);
      if (!exitsProduct) {
        state.cart.push(action.payload);
      } else {
        exitsProduct.amount += 1;
      }
      state.total = state.cart.reduce((accu, item) => accu + item.saleOffPrice * item.amount,0)
    },
    increase: (state, action) => {
      let currentItem = state.cart.find((c) => c.id == action.payload);
      currentItem.amount++;
      state.total = state.cart.reduce((accu, item) => accu + item.saleOffPrice * item.amount,0)
    },
    decrease: (state, action) => {
      let currentItem = state.cart.find((c) => c.id == action.payload);
      currentItem.amount--;
      if (currentItem.amount < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
        if (confirm) {
          const removeItem = state.cart.filter(
            (item) => item.id !== action.payload
          );
          state.cart = [...removeItem];
        } else {
          currentItem.amount = 1;
        }
      }
      state.total = state.cart.reduce((accu, item) => accu + item.saleOffPrice * item.amount,0)
    },
  },
});

export default cartSlice;
