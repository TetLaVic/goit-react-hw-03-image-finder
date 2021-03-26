import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetch from './services/fetch.js';

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}

export default App;
