import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [count,setCount]=useState(0);
  const shoppingCart=()=>{
    setCount(count+1);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  const decreaseCount=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts decreaseCount={decreaseCount} shoppingCart={shoppingCart}></AllProducts>
    </div>
  );
}

export default App;
