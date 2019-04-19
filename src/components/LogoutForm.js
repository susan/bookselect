
import React, { Component} from 'react'
import { connect } from "react-redux"
import { logoutUser} from "../actions/userAction"

class LogoutUser extends Component {

	logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
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
  user: state.user
})


const mapDispatchToProps = (dispatch) => {
  return {
  	logoutUser: (user) => dispatch(logoutUser(user))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutUser);
