import React, { Component } from 'react';
import Header from './Components/Header';
import GalleryGrid from './Components/GalleryGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GalleryGrid />
      </div>
      )
  }
}

export default App;
