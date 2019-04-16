import React, { Component } from 'react';
import NavBar from './components/NavBar';
import RegistrationForm from './components/RegistrationForm';

import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import './App.css';


import BookContainer from './containers/BookContainer'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Route path = '/' component={NavBar} />
      <Route path = '/register' component={RegistrationForm} />
      <Route path = '/books'component={BookContainer} />
      </div>
    );
  }
}

export default App;
