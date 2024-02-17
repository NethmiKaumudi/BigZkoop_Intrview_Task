import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart=(data)=>{
    console.log("Clicked", data);
    return {
        type:ADD_TO_CART,
        data
    };
}
export const removeFromCart=(data)=>{
    console.log("Clicked", data);
    return {
        type:REMOVE_FROM_CART,
        data
    };
}
export const emptyCart=()=>{
    console.log("Clicked");
    return {
        type:EMPTY_CART,
        
    };
}