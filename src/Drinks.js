import React from 'react'
import naturalJuiceImg from './food-picks/Sin-fondo/natural-juice-removebg-preview.png'
import gaseosaImg from './food-picks/Sin-fondo/gasimba2-removebg-preview.png'
import batidosImg from './food-picks/Sin-fondo/Batidos-removebg-preview.png'
import { useState, useEffect } from 'react'

function Drinks({orders, totalPay, setOrders, setTotalPay, totalOrder, setTotalOrder}) {
  const [visibilityNaturalJuice, setvisibilityNaturalJuice] = useState(false)
  const [visibilitySoda, setVisibilitySoda] = useState(false)
  const [visibilityBatido, setVisibilityBatido] = useState(false)
  
  
  
  
  const [naturalJuice, setNaturalJuice] = useState({name: "Natural Juice", description: "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruits and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.", price: 3000})
  const [soda, setSoda] = useState({name: "Soda", description: "A soft drink, soft drink, or soda is a drink made from carbonated water, natural sweeteners such as fructose or sucrose or synthetic sweeteners such as cyclamate, acidulants, colorants, antioxidants, acidity stabilizers and preservatives.", price: 2000})
  const [batido, setBatido] = useState({name: "Batido", description: "The smoothie is a drink made from milk or ice cream, which can contain fruit, chocolate or nougat, for example. Fruit smoothies can be made in different ways. There are machines designed specifically for making smoothies.", price: 2500, sabores: ["fressa", "vainilla", "chocolate"] })
  


// order functions


const naturalJuiceOrder = () => {
  const newOrder = {name: naturalJuice.name, price: naturalJuice.price}
  setTotalOrder([...totalOrder, newOrder])

}


const sodaOrder = () => {
const newOrder = {name: soda.name, price: soda.price}
setTotalOrder([...totalOrder, newOrder])

}


const batidoOrder = () => {
  const newOrder = {name: batido.name, price: batido.price}
  setTotalOrder([...totalOrder, newOrder])

}



const orderFunction = () => {
setOrders(orders + 1)
}

const payNaturalJuice = () => {
setTotalPay(totalPay + naturalJuice.price)

}

const paySoda = () => {
  setTotalPay(totalPay + soda.price)
}

const payBatido = () => {
  setTotalPay(totalPay + batido.price)
  
  }


// visibility functions

let windowOfWatchNaturalJuice = () => {
  return (
    <div className='windowAditionalContainer' id='natural-juice-container'>
<h1>{naturalJuice.name}</h1>
<button className='btn-details' onClick={() => {
  payNaturalJuice()
  orderFunction()
  naturalJuiceOrder()
}}>Buy</button>
<p>{naturalJuice.description}</p>
    </div>



  )
}

let windowOfWatchSoda = () => {
  return (
    <div className='windowAditionalContainer' id='soda-container'>
<h1>{soda.name}</h1>
<button className='btn-details' onClick={() => {
  paySoda()
  orderFunction()
  sodaOrder()
}}>Buy</button>
<p>{soda.description}</p>
    </div>



  )
}

let windowOfWatchBatido = () => {
  return (
    <div className='windowAditionalContainer' id='batido-container'>
<h1>{batido.name}</h1>
<button className='btn-details' onClick={() => {
  payBatido()
  orderFunction()
  batidoOrder()
}}>Buy</button>
<p>{batido.description}</p>
    </div>



  )
}


// control visibility again naturalJuice
useEffect(() => {
  setVisibilitySoda(false)
  }, [visibilityNaturalJuice]) 
  
  useEffect(() => {
    setVisibilityBatido(false)
    }, [visibilityNaturalJuice]) 
  
    // control visibility again Soda
  useEffect(() => {
    setvisibilityNaturalJuice(false)
    }, [visibilitySoda]) 
    
    useEffect(() => {
      setVisibilityBatido(false)
      }, [visibilitySoda]) 
  
  
      // control visibility again Batido
  useEffect(() => {
    setVisibilitySoda(false)
    }, [visibilityBatido]) 
    
    useEffect(() => {
      setvisibilityNaturalJuice(false)
      }, [visibilityBatido]) 
  


  return (
    <div>
    <div>
      <h1 id='drinks-title'>Drinks</h1>

      <div className='food-details-container'>
       
       </div> 


       <div>
          {visibilityNaturalJuice && windowOfWatchNaturalJuice()}

        </div>

      <div className='card-food'>
      <div className='title-container'>
        <h1>Jugos Naturales</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={naturalJuiceImg}></img>
        <p className='price'>3000$</p>
        <button className='btn-details' onMouseOver={() => {
          setvisibilityNaturalJuice(!visibilityNaturalJuice)
        }}>Details</button>

        </div>
       
      </div>


      <div>
          {visibilitySoda && windowOfWatchSoda()}

        </div>


      <div className='card-food'>
      <div className='title-container'>
        <h1 className='title-type-menu'>Gaseosas</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={gaseosaImg}></img>
        <p className='price'>2000$</p>
        
        <button className='btn-details' onMouseOver={() => {
          setVisibilitySoda(!visibilitySoda)
        }}>Details</button>

        </div>
       
      </div>



      <div>
          {visibilityBatido && windowOfWatchBatido()}

        </div>

      <div className='card-food'>
        <div className='title-container'>
        <h1>Batidos </h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={batidosImg}></img>
        <p className='price'>2500$</p>

        
        <button className='btn-details' onMouseOver={() => {
          setVisibilityBatido(!visibilityBatido)
        }}>Details</button>

        </div>
       
      </div>
      <p>  </p>

    </div>



    </div>
  )
}

export default Drinks