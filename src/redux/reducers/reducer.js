const init_state = {
  cart: [],
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
