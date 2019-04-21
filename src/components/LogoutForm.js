
import React, { Component} from 'react'
import { connect } from "react-redux"
import { logoutUser} from "../actions/userAction"
import { clearCart } from "../actions/cartAction"


class LogoutUser extends Component {

	logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
    this.props.clearCart(this.props.carts)
    this.props.history.push('/books');
}


  render() {
    return (
      <button onClick={() => this.logout()} className="form-submit">
        LogMeOut
      </button>
    )
  }

}

 const mapStateToProps = (state) => ({
  user: state.user,
  carts: state.cart.carts,
})


const mapDispatchToProps = (dispatch) => {
  return {
  	logoutUser: (user) => dispatch(logoutUser(user)),
    clearCart: (carts) => dispatch(clearCart(carts))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutUser);
