import React, { Component } from 'react';
import './App.scss';
import Photo from './components/Photo';
import Header from './components/Header';
import Name from './components/Name';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Photo />
        <Header />
        <Name />
        <hr></hr>
        <AboutMe />
        <Education />
        <Content />
      </main>
    );
  }
}

export default App;
