import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Shelves from "./components/Shelves";

class App extends Component {
 render() {
   return (
     <div className="App">
       <Header />
       <Shelves />
     </div>
   );
 }
}

export default App;
