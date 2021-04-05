import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, tags } = image;
  return (
    <li className={styles.ImageGalleryItem} key={id} onClick={onClick}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.array,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
