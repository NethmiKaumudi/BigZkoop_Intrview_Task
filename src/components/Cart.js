// import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";
import { useSelector } from "react-redux";

function Cart ()  {
  const cartData = useSelector((state) => state.cartData);
//   const amount = cartData.length & cartData.map(item =>item.price) .reduce((prev,next) => prev+next);
const amount = cartData.length > 0
  ? cartData.map(item => item.price).reduce((prev, next) => prev + next)
  : 0;
  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: 'flex', marginLeft: '30px', marginRight: '20px' }} className="cart-page-container">
        <table style={{ flex: 65, borderCollapse:'Collapse' }} >
          <thead>
            <tr style={{ border: '2px solid blue', padding: '10px' }} >
              <th >Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.key} style={{ border: '2px solid blue' }}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.categeory}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ flex:35,margin:'0 35px' }}className="price-details">
          <div style={{ display:'flex', justifyContent:'space-around' ,marginBottom:10,paddingBottom:10 , borderBottom: '1px solid black'}}className="adjust-price" >
            <span style={{fontSize:25}}>Amount</span><span style={{fontSize:25}}>{amount}</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-around',marginBottom:10,paddingBottom:10 , borderBottom: '1px solid black' }}className="adjust-price">
            <span style={{fontSize:25}}>Discount</span><span style={{fontSize:25}}>{amount/10}</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-around' ,marginBottom:10,paddingBottom:10 , borderBottom: '1px solid black'}}className="adjust-price">
            <span style={{fontSize:25}}>Tax</span><span style={{fontSize:25}}>{amount/50}</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-around',marginBottom:10,paddingBottom:10 , borderBottom: '1px solid black' }} className="adjust-price">
          <span style={{fontSize:25}}>Total</span><span style={{fontSize:25}}>{amount-(amount/10+amount/50)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
