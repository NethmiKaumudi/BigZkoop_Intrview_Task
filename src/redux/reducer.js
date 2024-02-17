import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer Add to Cart called", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.log("reducer Remove Cart called", action);
    //   data.length=data.length-1
    //   return [...data]
    if(data.length!=0){
    return data.slice(0, -1);
    }else{
return data=[];
    }
    case EMPTY_CART:
        console.log("reducer empty Cart called", action);
        data=[];
        return [ ...data];

    default:
      return []; // Return the current state (an array in this case)
  }
};
