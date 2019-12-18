import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';

const HeaderComponent = () => {
  return <header className="App-header"></header>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Login />
      </div>
    );
  }
}

export default App;
