import {PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "./constant";

export const productList=()=>{
    // let data=fetch('https://jsonplaceholder.typicode.com/todos/1');
    // data=await data.json
    // console.log("Clicked", data);
    return {
        type:PRODUCT_LIST,
    
    };
}
export const productSearch=(query)=>{
    return {
        type:SEARCH_PRODUCT_LIST,
        // query
        data: { query },
    };
}