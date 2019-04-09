import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import './App.css';

import BookContainer from './containers/BookContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
      <BookContainer />
      </div>
    );
  }
}

export default App;
