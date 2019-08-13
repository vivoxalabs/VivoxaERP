import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Sidebar />
        <Card/>
      </React.Fragment>
    );
  }
}

export default App;
