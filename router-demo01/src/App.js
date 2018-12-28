import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicExample from './demo01.js';
import ParamsExample from './demo02.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<ParamsExample />
      </div>
    );
  }
}

export default App;
