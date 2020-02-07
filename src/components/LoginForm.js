import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../thunks/userThunks";

class LoginForm extends React.Component {
  state = {
    loginEmail: "",
    loginPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = this.state;
    this.props.loginUser(user);
    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="loginEmail"
            placeholder="email"
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="loginPassword"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button> Login </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userObj => dispatch(loginUser(userObj))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
