import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ColombianFood from './ColombianFood';
import Drinks from './Drinks';
import FastFood from './FastFood';
import BarNav from './BarNav';
import Desserts from './Desserts';
import imgFastFood from './food-picks/Sin-fondo/fast.food-removebg-preview.png'


function App() {

let [totalOrder, setTotalOrder] = useState([])
  const [visibilityTotalOrder, setVisibilityTotalOrder] = useState(false)
  const [visibilityOrder, setVisibilityOrder] = useState(false)


const [orders, setOrders] = useState(0)
const [totalPay, setTotalPay] = useState(0)
  

const windowTotalOrderFunction = () => {
  return (
    <div className='total-order-container'>
      <h2>Total Order:</h2>
      <ul>
        {totalOrder.map((order, index) => (
          <li key={index} className='total-order-card'>
            <p>{order.name}</p>
            <p>{order.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
let visibilityOrderWindow = () => {
  return(
  <div className='window-order-colombian-food'>
    <h1>Orders: {orders}</h1>
    <h1>Total Pay: {totalPay}</h1>
  </div>
  )
}




  


  return (
<Router>
    
    <div className="App">
 
<React.Fragment>
<button id='total-order-btn' className='order-btn' onClick={() => {
  setVisibilityTotalOrder(!visibilityTotalOrder)
}}>Total Order</button>   <button id='view-order-btn' className='order-btn' onClick={() => {
  setVisibilityOrder(!visibilityOrder)
}}>View Order</button>
   <div className='container-food-totalOrder'>
    <img src={imgFastFood} className='fast-food-img-order'></img>
    {visibilityTotalOrder && windowTotalOrderFunction()}
    
<div>
      {visibilityOrder && visibilityOrderWindow()}
    </div>

     </div>
 
  <BarNav />
  
  </React.Fragment>      
    </div>
<Routes>
  <Route path="/ColombianFood"  element={<ColombianFood orders={orders} totalPay={totalPay} setOrders={setOrders} setTotalPay={setTotalPay} totalOrder={totalOrder} setTotalOrder={setTotalOrder}/>}></Route>
  <Route path="/Drinks" element={<Drinks orders={orders} totalPay={totalPay} setOrders={setOrders} setTotalPay={setTotalPay} totalOrder={totalOrder} setTotalOrder={setTotalOrder} />}></Route>
  <Route path="/FastFood" element={<FastFood  orders={orders} totalPay={totalPay} setOrders={setOrders} setTotalPay={setTotalPay}  totalOrder={totalOrder} setTotalOrder={setTotalOrder}/>} ></Route>
  <Route path="/Desserts" element={<Desserts orders={orders} totalPay={totalPay} setOrders={setOrders} setTotalPay={setTotalPay} totalOrder={totalOrder} setTotalOrder={setTotalOrder}/>}></Route>
</Routes>

    
  
  </Router> 

);
}

export default App;
