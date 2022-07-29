const intialValue = {
  cart: [],
  total: 0,
};

const rootReducer = (state = intialValue, action) => {
  let cart = [...state.cart];
  const index = cart.findIndex((c) => c.id == action.payload.id);
  switch (action.type) {
    case "cart/add":
      const exitsProduct = cart.find((item) => item.id === action.payload.id);
      if (!exitsProduct) {
        cart.push(action.payload);
      } else {
        exitsProduct.quantity += 1;
      }
      return {
        ...state,
        cart: cart,
        total: cart.reduce(
          (accu, item) => accu + item.saleOffPrice * item.quantity,
          0
        ),
      };
    case "increase":
      cart[index].quantity++;
      return {
        ...state,
        cart: cart,
        total: cart.reduce(
          (accu, item) => accu + item.saleOffPrice * item.quantity,
          0
        ),
      };
    case "decrease":
      cart[index].quantity--;
      if (cart[index].quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
        if (confirm) {
          const removeItem = cart.filter(
            (item) => item.id !== cart[index].id
          );
          console.log(removeItem);
          cart = [...removeItem];
        }else{
            cart[index].quantity = 1
        }
      }
      return {
        ...state,
        cart: cart,
        total: cart.reduce(
          (accu, item) => accu + item.saleOffPrice * item.quantity,
          0
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
