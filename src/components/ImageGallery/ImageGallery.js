import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images } = this.props;
    console.log(this.props);
    return (
      <>
        <ul className={styles.ImageGallery} onClick={this.toggleModal}>
          {images.map(image => {
            return <ImageGalleryItem image={image} key={image.id} />;
          })}
        </ul>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>{images}</Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
