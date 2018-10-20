import React, { Component } from 'react';
import './App.scss';
import Gallery from './components/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello</h2>
        <Gallery>gallery</Gallery>
      </div>
    );
  }
}

export default App;
