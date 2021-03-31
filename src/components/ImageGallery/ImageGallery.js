import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Modal from '../Modal';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = { image: null };

  hideModal = () => {
    this.setState({ image: null });
  };

  showModal = image => {
    this.setState({ image });
  };

  render() {
    const { images } = this.props;

    return (
      <>
        <ul className={styles.ImageGallery}>
          {images.map(image => {
            return (
              <ImageGalleryItem
                image={image}
                key={image.id}
                onClick={() => this.showModal(image)}
              />
            );
          })}
        </ul>
        {this.state.image && (
          <Modal onClose={this.hideModal} image={this.state.image} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
