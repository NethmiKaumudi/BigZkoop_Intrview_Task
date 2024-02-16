import React from 'react';
import cartIcon from '../images/item.png'; 
import{useSelector} from 'react-redux'; 
const Header = () => {
    const result=useSelector(state =>state.cartData);
    console.log("data in header",result);
  return (
    <div className="header">
      <div className="cart_div">
        <span>{result.length}</span>
        <img src={cartIcon} alt="Cart" />  
      </div>
    </div>
  );
};

export default Header;
