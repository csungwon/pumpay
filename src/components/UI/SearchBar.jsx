import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

import styles from './SearchBar.module.css';

const SearchBar = ({ onChange }) => (
  <div className={styles.Container}>
    <div className={styles.SearchIcon}>
      <SearchIcon />
    </div>
    <input type="text" placeholder="Search Friends" className={styles.Input} onChange={onChange} />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
