import React, { Component, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from "semantic-ui-react";

const NavBar = () => {
const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
    this.props.clearCart(this.props.carts)
    //this.props.history.push('/books');
}


  return (
    <div className = "nav">
     <NavLink className = "nav_item" to="/books"> Books  </NavLink>
     <NavLink className = "nav_item" to="/register"> Sign Up </NavLink>
     <NavLink className = "nav_item" to="/login"> Login </NavLink>
     <NavLink className = "nav_item" onClick={() => logout()} to="/books"> Logout </NavLink>


    </div>
  )

}
export default NavBar;
