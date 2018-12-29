import React, { Component } from 'react';
import './App.css';

import BasicExample from './demo01.js';
import ParamsExample from './demo02.js';
import AuthExample from './demo03.js';
import CustomLinkExample from './demo04.js';
import PreventingTransitionsExample from './demo05.js';
import NoMatchExample from './demo06.js';
import RecursiveExample from './demo07.js';
import SidebarExample from './demo08.js';
import AnimationExample from './demo09.js';
import AmbiguousExample from './demo10.js';
import RouteConfigExample from './demo11.js';
import ModalGallery from './demo12.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<ModalGallery />
      </div>
    );
  }
}

export default App;
