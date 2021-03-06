import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

export default App;
