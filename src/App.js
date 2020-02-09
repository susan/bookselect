import React, { Component } from "react";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getBooks } from "./thunks/bookThunks";
import { getCartForReturningUser } from "./thunks/cartThunks";

import "./App.css";

import BookContainer from "./containers/BookContainer";

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
    this.props.getCartItemsForUser();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/books" component={BookContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  getCartItemsForUser: () => dispatch(getCartForReturningUser())
});

export default connect(null, mapDispatchToProps)(App);
