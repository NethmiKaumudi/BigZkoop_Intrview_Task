import React, { useEffect } from 'react';
import { addToCart, removeFromCart,emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/ProductAction';
import {useSelector} from 'react-redux'

function Main() {
const dispatch = useDispatch();
let data=useSelector(state=>state.productData);
console.log("data in main compnent",data);

useEffect(()=>{
  dispatch(productList())
},[])
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    
      <div className='product-container'>
  {
    data.map((item) => <div className='product-item'>
      <img src={item.photo} alt='https://img.myipadbox.com/upload/store/product_l/MPD1697W.jpg' />
      <div> Name:{item.name}</div>
      <div> color:{item.color}</div>
      <div> price:{item.price}</div>
      <div> category:{item.category}</div>
      <div> brand:{item.brand}</div>
      <div> 
        <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button></div>
    </div>)
  }
</div>
    </div>
  );
}

export default Main;
