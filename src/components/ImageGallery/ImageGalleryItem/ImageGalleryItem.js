import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const { id, webformatURL, tags } = image;
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
