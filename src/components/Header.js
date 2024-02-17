import React from "react";
import cartIcon from "../images/item.png";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/ProductAction";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch =useDispatch();
  console.log("data in header", result);
  return (
    <div className="header">
      <Link to="/"> 
      <h1 className="logo">NK-SHOP</h1>
      </Link>
      <div> 
        <input type="text"  onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="search product"></input>
        </div>
      <Link to="/cart">
        <div className="cart_div">
          <span>{result.length}</span>
          <img src={cartIcon} alt="Cart" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
