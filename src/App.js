import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import fetchImages from './services/fetch.js';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = { query: '', page: 1, gallery: [] };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.query !== prevState.query) {
      const { query, page } = this.state;
      this.setState({ gallery: [] });
      fetchImages(query, page).then(images => {
        this.setState({ gallery: [...images] });
      });
    }
  };

  handleNewQuery = ({ query }) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleNewQuery} />

        {this.state.gallery ? (
          <>
            <ImageGallery images={this.state.gallery} /> <Button />
          </>
        ) : (
          <Loader
            type="Hearts"
            color="red"
            height={80}
            width={80}
            // timeout={3000}
          />
        )}
      </>
    );
  }
}

export default App;
