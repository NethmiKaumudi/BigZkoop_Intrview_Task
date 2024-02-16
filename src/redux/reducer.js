import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer Add to Cart called", action);
      return [action.data, ...data];

    default:
      return []; // Return the current state (an array in this case)
  }
};
