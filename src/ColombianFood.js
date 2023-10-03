import React from 'react'
import carimañolaImg from './food-picks/Sin-fondo/IMG_4258-removebg-preview.png'
import aborrajaoImg from './food-picks/Sin-fondo/aborrajao-removebg-preview.png'
import arepaHuevoImg from './food-picks/Sin-fondo/ArepadeHuevo-removebg-preview.png'
import { useState, useEffect } from 'react'

function ColombianFood({orders, totalPay, setOrders, setTotalPay, totalOrder, setTotalOrder}) {

  const [visibilityCarimañola, setvisibilityCarimañola] = useState(false)
  const [visibilityAborrajao, setVisibilityAborrajao] = useState(false)
  const [visibilityArepaDeHuevo, setVisibilityArepaDeHuevo] = useState(false)



  const [carimañola, setCarimañola] = useState({name: "Carimañola", description: "Caribañola, carimañola, yuca cake, stuffed yuca, enyucado, cassava croquette or yuca bun is a typical fried food from some countries...", price: 3000})
  const [aborrajao, setAborrajao] = useState({name: "Aborrajao", description: "  Aborrajados. These Valle del Cauca banana delicacies emerged from an African culinary tradition. Originally the dish was called fufú and it came to America with the slaves during the colony.", price: 2000})
  const [arepaDeHuevo, setArepaDeHuevo] = useState({name: "Arepa de Huevo", description: "The egg arepa is a typical food of the coast, made of corn flour, which is fried until it puffs up, and an egg that is fried outside and inside the arepa, once it is added", price: 2500, sabores: ["fressa", "vainilla", "chocolate"] })

  // Total Order Functions

  const carimañolaOrder = () => {
    const newOrder = {name: carimañola.name, price: carimañola.price}
    setTotalOrder([...totalOrder, newOrder])
  
  }

  
const aborrajaoOrder = () => {
  const newOrder = {name: aborrajao.name, price: aborrajao.price}
  setTotalOrder([...totalOrder, newOrder])

}



const arepaDeHuevoOrder = () => {
  const newOrder = {name: arepaDeHuevo.name, price: arepaDeHuevo.price}
  setTotalOrder([...totalOrder, newOrder])

}

const orderFunction = () => {
  setOrders(orders + 1)
}

const payCarimañola = () => {
  setTotalPay(totalPay + carimañola.price)
  
  }

  const payAborrajao = () => {
    setTotalPay(totalPay + aborrajao.price)
  }
  
  const payArepaDeHuevo = () => {
    setTotalPay(totalPay + arepaDeHuevo.price)
    
    }
// Visibility Aditional Window Functions

let windowOfWatchCarimañola = () => {
  return (
    <div className='windowAditionalContainer' id='carimañola-container'>
<h1>{carimañola.name}</h1>
<button className='btn-details' onClick={() => {
  payCarimañola()
  orderFunction()
  carimañolaOrder()
}}>Buy</button>
<p>{carimañola.description}</p>
    </div>



  )
}

let windowOfWatchAborrajao = () => {
  return (
    <div className='windowAditionalContainer' id='aborrajao-container'>
<h1>{aborrajao.name}</h1>
<button className='btn-details'  onClick={() => {
payAborrajao()
orderFunction()
aborrajaoOrder()
}}>Buy</button>
<p>{aborrajao.description}</p>
    </div>



  )
}

let windowOfWatchAreapaDeHuevo = () => {
  return (
    <div className='windowAditionalContainer' id='arepa-de-huevo-container'>
<h1>{arepaDeHuevo.name}</h1>
<button className='btn-details'  onClick={() => {
  payArepaDeHuevo()
  orderFunction()
  arepaDeHuevoOrder()
}}>Buy</button>
<p>{arepaDeHuevo.description}</p>
    </div>



  )
}




// control visibility again carimañola
useEffect(() => {
  setVisibilityAborrajao(false)
  }, [visibilityCarimañola]) 
  
  useEffect(() => {
    setVisibilityArepaDeHuevo(false)
    }, [visibilityCarimañola]) 
  
    // control visibility again Aborrajao
  useEffect(() => {
    setvisibilityCarimañola(false)
    }, [visibilityAborrajao]) 
    
    useEffect(() => {
      setVisibilityArepaDeHuevo(false)
      }, [visibilityAborrajao]) 
  
  
      // control visibility again Arepa de Huevo
  useEffect(() => {
    setVisibilityAborrajao(false)
    }, [visibilityArepaDeHuevo]) 
    
    useEffect(() => {
      setvisibilityCarimañola(false)
      }, [visibilityArepaDeHuevo]) 



  return (
    <div>
      <h1 id='colombianFood-title' className='title-type-menu'>Colombian-Food</h1>
      

    
      <div >
          {visibilityCarimañola && windowOfWatchCarimañola()}

        </div>
        

      <div className='card-food'>
      <div className='title-container'>
        <h1>Carimañola</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={carimañolaImg}></img>
        <p className='price'>3000$</p>
        <button className='btn-details' onMouseOver={() => {
          setvisibilityCarimañola(!visibilityCarimañola)
        }}>Details</button>

        </div>
       
      </div>



      <div >
          {visibilityAborrajao && windowOfWatchAborrajao()}

        </div>
      <div className='card-food'>
      <div className='title-container'>
        <h1>Aborrajao</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={aborrajaoImg}></img>
        <p className='price'>2000$</p>

        <button className='btn-details' onMouseOver={() => {
          setVisibilityAborrajao(!visibilityAborrajao)
        }}>Details</button>

        </div>
       
      </div>


      
      <div >
          {visibilityArepaDeHuevo && windowOfWatchAreapaDeHuevo()}

        </div>

      <div className='card-food'>
        <div className='title-container'>
        <h1>Arepa de Huevo </h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={arepaHuevoImg}></img>
        <p className='price'>2500$</p>

        <button className='btn-details' onMouseOver={() => {
          setVisibilityArepaDeHuevo(!visibilityArepaDeHuevo)
        }}>Details</button>


        </div>
       
      </div>

    
      <p>  </p>

    </div>



  )
}

export default ColombianFood