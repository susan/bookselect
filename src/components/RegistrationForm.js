import React from "react";
import { connect } from "react-redux";
import { createUser } from "../thunks/userThunks";

class RegistrationForm extends React.Component {
  state = {
    newUserEmail: "",
    newUserPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = this.state;
    this.props.createUser(user);
    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newUserEmail"
            placeholder="email"
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="newUserPassword"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button> Sign up </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: userObj => dispatch(createUser(userObj))
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
