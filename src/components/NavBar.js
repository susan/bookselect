import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/userAction";
import { clearCart } from "../actions/cartAction";

class NavBar extends Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.logoutUser();
    this.props.clearCart(this.props.carts);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="nav">
        <NavLink className="nav_item" to="/books">
          Books
        </NavLink>
        <NavLink className="nav_item" to="/register">
          Sign Up
        </NavLink>
        {!user ? (
          <NavLink className="nav_item" to="/login">
            Login
          </NavLink>
        ) : (
          <NavLink
            className="nav_item"
            onClick={() => this.logout()}
            to="/books"
          >
            Logout
          </NavLink>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    clearCart: carts => dispatch(clearCart(carts))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
