import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './services/fetch.js';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = { query: '', page: 1, gallery: [] };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.query !== prevState.query) {
      const { query, page } = this.state;
      fetchImages(query, page).then(images =>
        this.setState({ gallery: [...images] }),
      );
    }
  };

  handleNewQuery = ({ query }) => {
    console.log(query, 'app');
    const updateState = {
      query,
    };
    this.setState({ ...this.state, ...updateState });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleNewQuery} />
        <Loader
          type="Hearts"
          color="red"
          height={80}
          width={80}
          // timeout={3000}
          visible={Boolean(!this.state.gallery)}
        />
        <ImageGallery images={this.state.gallery} />
      </>
    );
  }
}

export default App;
