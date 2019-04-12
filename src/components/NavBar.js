import React, { Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = "nav">
     <NavLink className = "nav_item" to="/books"> Books  </NavLink>
    </div>
  )

}
export default NavBar;
