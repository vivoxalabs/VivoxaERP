import React from 'react';
//import logo from './logo.svg';
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Sidebar/>
    </React.Fragment>
  );
}

export default App;
