import React, { Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = "nav">
     <NavLink className = "nav_item" to="/books"> Books  </NavLink>
     <NavLink className = "nav_item" to="/register"> Sign Up </NavLink>
     <NavLink className = "nav_item" to="/login"> Login </NavLink>
     <NavLink className = "nav_item" to="/logout"> Logout </NavLink>

    </div>
  )

}
export default NavBar;
