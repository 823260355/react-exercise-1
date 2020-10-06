import React, { Component } from 'react';
import './App.scss';
import Photo from './components/Photo';
import Header from './components/Header';
import Name from './components/Name';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Photo />
        <Header />
        <Name />
      </main>
    );
  }
}

export default App;
