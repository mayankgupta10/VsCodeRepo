import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List';
import CustomList from './CustomList';
import './App.css';

class App extends React.Component{
 render(){
  return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to ReactJs Sample.</h2>
          </div>
          <CustomList />
        </div>
      );
 }
}

export default App;
