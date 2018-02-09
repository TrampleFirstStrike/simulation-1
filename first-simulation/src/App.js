import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import routes from './routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Header>
        
      </div>
    );
  }
}

export default App;
