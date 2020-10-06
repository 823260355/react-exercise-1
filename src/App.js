import React, { Component } from 'react';
import './App.scss';
import Photo from './components/Photo';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Photo />
      </main>
    );
  }
}

export default App;
