import React from 'react';
import styles from './FeedPhotosItem.module.css';
import { func } from 'prop-types';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  console.log(photo.src);
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image  src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
