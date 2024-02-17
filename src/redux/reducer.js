import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer Add to Cart called", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("reducer Remove Cart called", action);
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];

    case EMPTY_CART:
      console.log("reducer empty Cart called", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
