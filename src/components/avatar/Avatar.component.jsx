import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ img, size }) => {
  let theme = styles.smallSized;
  if (size === 'md') {
    theme = styles.middleSized;
  }
  return (
    <div className={`${styles.avatarWrapper}, ${theme}`}>
      <img className={styles.avatarImg} src={img} alt={'super hero  face'} />
    </div>
  );
};

export default Avatar;
