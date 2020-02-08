import React from 'react';
import styles from './Header.module.css';

const Header = ({ heading }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.heading}>{heading}</h3>
    </div>
  );
};

export default Header;
