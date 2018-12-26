import React, { Component } from 'react';
import './App.css';
//import AppRouter from './AppRouter.js';
import NesRouter from './NestingRouter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<NesRouter />
      </div>
    );
  }
}

export default App;
