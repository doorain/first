import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header.js';
import Input from './components/input.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Input />

      </div>
    );
  }
}

export default App;
