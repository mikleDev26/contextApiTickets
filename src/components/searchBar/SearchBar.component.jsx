import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={term}
        onChange={({ target }) => setTerm(target.value)}
        placeholder="Search Ticket"
      />
    </div>
  );
};

export default SearchBar;
