import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
function App() {
  const dispatch=useDispatch();
  const product ={
    name:'i-phone',
    category:'mobile',
    price:20000,
    color:'blue'
  }
  return (
    <div className="App">
      <Header />
    <button onClick={()=> dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
