import React, { Component } from 'react';
import './App.css';
import Students from './StudentsList';
import Header from './components/Header';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Students />
      </div>
    );
  }
}

export default App;
