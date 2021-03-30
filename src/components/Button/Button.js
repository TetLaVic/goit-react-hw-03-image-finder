import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  return <button className={styles.Button}>Load more</button>;
};

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
