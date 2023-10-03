import React from 'react'
import tiramisuImg from './food-picks/Sin-fondo/tiramisu-removebg-preview.png'
import brownieImg from './food-picks/Sin-fondo/brownie-removebg-preview.png'
import heladoImg from './food-picks/Sin-fondo/helado-removebg-preview.png'
import { useState, useEffect } from 'react'



function Desserts({orders, totalPay, setOrders, setTotalPay, totalOrder, setTotalOrder}) {
const [visibilityBrownie, setvisibilityBrownie] = useState(false)
const [visibilityTiramisu, setVisibilityTiramisu] = useState(false)
const [visibilityHelado, setVisibilityHelado] = useState(false)
const [visibilityOrder, setVisibilityOrder] = useState(false)



const [brownie, setBrownie] = useState({name: "Brownie", description: "A chocolate brownie, or simply a brownie, is a chocolate baked confection. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. Brownies often, but not always, have a glossy skin on their upper crust.", price: 5000})
const [tiramisu, setTiramisu] = useState({name: "Tiramisu", description: "Tiramisu (Italian: tiramisù [ˌtiramiˈsu], from tirami su, 'pick me up' or 'cheer me up')[1] is a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone, flavoured with cocoa.", price: 10000})
const [helado, setHelado] = useState({name: "Ice-Cream", description: "ice cream, frozen dairy food made from cream or butterfat, milk, sugar, and flavourings. Frozen custard and French-type ice creams also contain eggs. Hundreds of flavours have been devised, the most popular being vanilla, chocolate, and strawberry. ice cream.", price: 2500, sabores: ["fressa", "vainilla", "chocolate"] })



// orderFunctions

const brownieOrder = () => {
  const newOrder = {name: brownie.name, price: brownie.price}
  setTotalOrder([...totalOrder, newOrder])

}


const tiramisuOrder = () => {
const newOrder = {name: tiramisu.name, price: tiramisu.price}
setTotalOrder([...totalOrder, newOrder])

}


const heladoOrder = () => {
  const newOrder = {name: helado.name, price: helado.price}
  setTotalOrder([...totalOrder, newOrder])

}



const orderFunction = () => {
setOrders(orders + 1)
}

const payBrownie = () => {
setTotalPay(totalPay + brownie.price)

}

const payTiramisu = () => {
  setTotalPay(totalPay + tiramisu.price)
}

const payHelado = () => {
  setTotalPay(totalPay + helado.price)
  
  }


// control visibility again tiramisu
useEffect(() => {
setvisibilityBrownie(false)
}, [visibilityTiramisu]) 

useEffect(() => {
  setVisibilityHelado(false)
  }, [visibilityTiramisu]) 

  // control visibility again brownie
useEffect(() => {
  setVisibilityTiramisu(false)
  }, [visibilityBrownie]) 
  
  useEffect(() => {
    setVisibilityHelado(false)
    }, [visibilityBrownie]) 


    // control visibility again helado
useEffect(() => {
  setvisibilityBrownie(false)
  }, [visibilityHelado]) 
  
  useEffect(() => {
    setVisibilityTiramisu(false)
    }, [visibilityHelado]) 







let windowOfWatchBrownie = () => {
  return (
    <div className='windowAditionalContainer' id='brownie-container'>
      <div className='container-tiramisu-title'>
<h1>{brownie.name}</h1> <button className='btn-details' onClick={() => {
orderFunction()
payBrownie()
brownieOrder()

}}>Buy</button>
</div>
<p>{brownie.description}</p>
    </div>



  )
}



let windowOfWatchTiramisu = () => {
  return (
    <div className='windowAditionalContainer' id='tiramisu-container'>
      <div className='container-tiramisu-title'>
<h1>{tiramisu.name}</h1><button className='btn-order-little-sections' onClick={() => {
orderFunction()
payTiramisu()
tiramisuOrder()
}}>Buy</button></div>
<p>{tiramisu.description}</p>
    </div>



  )
}



let windowOfWatchHelado = () => {
  return (
    <div className='windowAditionalContainer' id='helado-container'>
      <div className='icecreamdetailscontainer'>
      <div className='container-tiramisu-title'>
<h1>{helado.name}</h1><button className='btn-order-little-sections' onClick={() => {
orderFunction()
payHelado()
heladoOrder()
}}>Buy</button>
</div>
<ul>
  <li>{helado.sabores[0]}</li>
  <li>{helado.sabores[1]}</li>
  <li>{helado.sabores[2]}</li>
</ul>
</div>
<p>{helado.description}</p>

    </div>



  )
}

  return (
    <div className='container-desserts'>
    <div className='desserts'>
      <h1 id='title-dessert' className='title-type-menu'>Desserts</h1>

      <div className='food-details-container'>
        <div >
          {visibilityTiramisu && windowOfWatchTiramisu()}

        </div>
        </div>
      <div className='card-food-ice'>
      <div className='title-container'>

        <h1>Tiramisu</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={tiramisuImg}></img>
        <p className='price'>10000$</p>
        <button className='btn-details' onMouseOver={() => {
          setVisibilityTiramisu(!visibilityTiramisu)
          
        }}>Details</button>
        </div>



      </div>



      <div className='food-details-container'>
        <div >
          {visibilityBrownie && windowOfWatchBrownie()}

        </div>
       </div>

      <div className='card-food-ice'>
      <div className='title-container'>
        <h1>Brownie</h1>
        </div>
        <div className='food-container'>
        <img className='img-food' src={brownieImg}></img>
        <p className='price'>5000$</p>
        <button className='btn-details' onMouseOver={() => {
          setvisibilityBrownie(!visibilityBrownie)
        }}>Details</button>
        </div>

      </div>
      

      <div className='food-details-container'>
        <div>
          {visibilityHelado && windowOfWatchHelado()}

        </div>
       </div> 

      <div className='card-food-ice'>
        <div className='title-container'>
        <h1>Helados</h1>
        <ul>
            <li>Chocolate</li>
            <li>Vainilla</li>
            <li>Fresa</li>
        </ul>
        </div>
        <div className='food-container'>
        <img className='img-food' src={heladoImg}></img>
        <p className='price'>2500$</p>
        <button className='btn-details' onMouseOver={() => {
          setVisibilityHelado(!visibilityHelado)
        }}>Details</button>
        </div>

       
      </div>
      <p>  </p>

    </div>

<div className='container-status-order'>
 
</div>

</div>
    
  )
}

export default Desserts