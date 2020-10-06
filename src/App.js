import React, { Component } from 'react';
import './App.scss';
import Photo from './components/Photo';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Photo />
        <Header />
      </main>
    );
  }
}

export default App;
