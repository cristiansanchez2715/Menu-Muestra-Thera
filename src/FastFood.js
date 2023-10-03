import React, { useState } from 'react'
import hamburguesaImg from './food-picks/Sin-fondo/Hamburguesa-removebg-preview.png'
import hotDogImg from './food-picks/Sin-fondo/hot-dog-removebg-preview.png'
import papiCarneImg from './food-picks/Sin-fondo/papicarne-removebg-preview.png'
import papiPolloImg from './food-picks/Sin-fondo/papipollo-removebg-preview.png'
import pataconRellenoImg from './food-picks/Sin-fondo/patacon-removebg-preview.png'
import arepaMixtaImg from './food-picks/Sin-fondo/arepa-mixta-removebg-preview.png'


function FastFood({orders, totalPay, setOrders, setTotalPay, totalOrder, setTotalOrder}) {
  const [hamburguesa, setHamburguesa] = useState({name: "Hamburguesa", description: "a dish consisting of a flat round cake of minced beef, or sometimes another savoury ingredient, that is fried or grilled and served in a split bun or roll with various condiments and toppings.", price: 12000})
  const [hotDog, setHotDog] = useState({name: "Hot Dog", description: "a frankfurter, especially one served hot in a long, soft roll and topped with various condiments.", price: 10000})
  const [papiCarne, setPapiCarne] = useState({name: "PapiCarne", description: "Crispy potatoes accompanied with 180 grams of meat, egg and an exquisite chorizo.", price: 8000, sabores: ["fressa", "vainilla", "chocolate"] })
  const [papiPollo, setPapipollo] = useState({name: "PapiPollo", description: "Meal consisting of French fries with roasted or fried chicken, served with mayonnaise or tomato sauce.", price: 8000})
  const [pataconRelleno, setpataconRelleno] = useState({name: "Patacon relleno", description: "Meal consisting of French fries with roasted or fried chicken, served with mayonnaise or tomato sauce.  ", price: 10000})
  const [arepaMixta, setArepaMixta] = useState({name: "Arepa Mixta", description: "Delicious and just right, stuffed with chicken tossed in mushroom sauce and delicious fried chorizo", price: 8000, sabores: ["fressa", "vainilla", "chocolate"] })
  

const [generalVisibility, setGeneralVisibility] = useState(false)

// Logica Compra Frontend


const burgerOrder = () => {
  const newOrder = {name: hamburguesa.name, price: hamburguesa.price}
  setTotalOrder([...totalOrder, newOrder])

}

const hotDogOrder = () => {
  const newOrder = {name: hotDog.name, price: hotDog.price}
  setTotalOrder([...totalOrder, newOrder])

}

const papiCarneOrder = () => {
  const newOrder = {name: papiCarne.name, price: papiCarne.price}
  setTotalOrder([...totalOrder, newOrder])

}


const papiPolloOrder = () => {
  const newOrder = {name: papiPollo.name, price: papiPollo.price}
  setTotalOrder([...totalOrder, newOrder])

}

const arepaMixtaOrder = () => {
  const newOrder = {name: arepaMixta.name, price: arepaMixta.price}
  setTotalOrder([...totalOrder, newOrder])

}



const pataconRellenoOrder = () => {
  const newOrder = {name: pataconRelleno.name, price: pataconRelleno.price}
  setTotalOrder([...totalOrder, newOrder])

}



const orderFunction = () => {
  setOrders(orders + 1)
}

const payBurguer = () => {
setTotalPay(totalPay + hamburguesa.price)

}


const payHotDog = () => {
  setTotalPay(totalPay + hotDog.price)
}


const payPapiPollo = () => {
  setTotalPay(totalPay + papiPollo.price)
}


const payPapiCarne = () => {
  setTotalPay(totalPay + papiCarne.price)
}


const payPatacon = () => {
  setTotalPay(totalPay + pataconRelleno.price)
}


const payArepa = () => {
  setTotalPay(totalPay + arepaMixta.price)
}


const windowVisbilityDetails = () => {
  return(
    <div className='extra-window-container' >
 

    <button className='close-btn-window-extra' onClick={() => {
      setGeneralVisibility(!generalVisibility)
    }}>X</button>
    {/* estructura ventana emergente - detalles */}
    
   
 
    <div id='fast-food-details' >

      <div className='card-food-fast-food'>
        <div className='btn-and-food'>
           <h1>{hamburguesa.name} </h1>
           <div className='btn-container'>
           <button onClick={() => {
            payBurguer()
            orderFunction()
            burgerOrder()
           }} className='btn-order'>Buy</button> 
           </div>
           </div>
           <p>{hamburguesa.description}</p>
           </div>



           <div className='card-food-fast-food'>
           <div className='btn-and-food'>
           <h1>{hotDog.name}</h1>
           <div className='btn-container'>
           <button onClick={() => {
            payHotDog()
            orderFunction()
            hotDogOrder()
           }} className='btn-order'>Buy</button>
           </div>
           </div>
           <p>{hotDog.description}</p>
           </div>


           <div className='card-food-fast-food'>
           <div className='btn-and-food'>
           <h1>{papiCarne.name}</h1>
           <div className='btn-container'>
           <button onClick={() => {
            payPapiCarne()
            orderFunction()
            papiCarneOrder()
           }} className='btn-order'>Buy</button>
           </div>
           </div>
           <p>{papiCarne.description}</p>
           </div>


           <div className='card-food-fast-food'>
           <div className='btn-and-food'>
           <h1>{papiPollo.name}</h1>
           <div className='btn-container'>
           <button onClick={() => {
            payPapiPollo()
            orderFunction()
            papiPolloOrder()
           }} className='btn-order'>Buy</button>
           </div>
           </div>
           <p>{papiPollo.description}</p>
           </div>


           <div className='card-food-fast-food'>
           <div className='btn-and-food'>
           <h1>{pataconRelleno.name}</h1>
           <div className='btn-container'>
           <button onClick={() => {
            payPatacon()
            orderFunction()
            pataconRellenoOrder()
           }} className='btn-order'>Buy</button>
           </div>
           </div>
           <p>{pataconRelleno.description}</p>
           </div>


           <div className='card-food-fast-food'>
           <div className='btn-and-food'>
           <h1>{arepaMixta.name}</h1>
           <div className='btn-container'>
           <button onClick={() => {
            payArepa()
            orderFunction()
            arepaMixtaOrder()
           }} className='btn-order'>Buy</button>
           </div>
           </div>
           <p>{arepaMixta.description}</p>
           </div>



    </div>
    </div>

  )
}

  return (
    <div>
<div>
  {generalVisibility && windowVisbilityDetails()}
</div>
<div className='cards-fast-food'>
  
      <h1 id='fast-food-title' className='title-type-menu'>Fast Food</h1>
      
       <button className='btn-visibility' onClick={() => {
        setGeneralVisibility(!generalVisibility)
       }}>Details</button>     

       


      <div className='card-food'>
      <div  className='card-fastfood-container'>
        
      <div className='title-container'>
        <h1>Hamburguesa</h1>
        <ul>
          <li>Carne de Hamburguesa Rostizada</li>
          <li>Mozarella</li>
          <li>Jamon</li>
        </ul>
        </div>
        <div className='food-container'>
        <img id='hamburguesa-container' className='img-food' src={hamburguesaImg}></img>
        <p className='price'>12000$</p>
        </div>
       </div>
      </div>

      <div className='card-food'>
      <div className='card-fastfood-container'>
        
      <div className='title-container'>
        <h1>Hot Dog</h1>
        <ul>
          <li>Salchicha Americana</li>
          <li>Mozarella</li>
          <li>Jalapeños</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={hotDogImg}></img>
        <p className='price'>10000$</p>
        </div>
       </div>
      </div>

      <div className='card-food'>
      <div className='card-fastfood-container'>
        
        <div className='title-container'>
        <h1>Papi Carne </h1>
        <ul>
          <li>Carne de Hamburguesa</li>
          <li>Papas</li>
          <li>Salsa de la Casa</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={papiCarneImg}></img>
        <p className='price'>8000$</p>
        </div>
       </div>
      </div>


      <div className='card-food'>
      <div className='card-fastfood-container'>
        
        <div className='title-container'>
        <h1>Papi Pollo </h1>
        <ul>
          <li>Presa de Pollo</li>
          <li>Papas</li>
          <li>Salsa de la Casa</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={papiPolloImg}></img>
        <p className='price'>8000$</p>
        </div>
       </div>
      </div>


      
      <div className='card-food'>
      <div className='card-fastfood-container'>
        
        <div className='title-container'>
        <h1>Patacon Relleno</h1>
        <ul>
          <li>Carne Desmechada</li>
          <li>Pollo Desmechado</li>
          <li>Salsa Picante</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={pataconRellenoImg}></img>
        <p className='price'>10000$</p>
        </div>
       </div>
      </div>


      
      <div className='card-food'>
        <div className='card-fastfood-container'>
        <div className='title-container'>
        <h1>Arepa Mixta </h1>
        <ul>
          <li>Carne de Cerdo</li>
          <li>Pechuga de pollo</li>
          <li>Jamon</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={arepaMixtaImg}></img>
        <p className='price'>8000$</p>
        </div>
        </div>


      </div>


      <p>  </p>

    </div>


    </div>
  )
}

export default FastFood