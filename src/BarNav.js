import React from 'react'
import { NavLink } from 'react-router-dom'
import logoThera from './food-picks/LogoCabecera.png'

function BarNav() {

  

    // <NavLink dataCockie={dataCockie} setDataCockie={setDataCockie}  to="/" className={({isActive}) => isActive ? "isActive" : ""}>Body</NavLink> 
    // </li>
    

  return (
    <div className='BarNav-container'>
      
        <h3>Thera Food House Menu <img src={logoThera} className='logo' ></img></h3>
    <NavLink className="menuBarNav" to="/ColombianFood"  >Colombian</NavLink>
    <NavLink className="menuBarNav" to="/Drinks" > Drinks </NavLink>
    <NavLink className="menuBarNav" to="/FastFood" > FastFood </NavLink>
    <NavLink to="Desserts" className="menuBarNav">Desserts</NavLink>
    </div>
  )
}

export default BarNav