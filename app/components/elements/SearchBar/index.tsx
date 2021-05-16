import { useState } from 'react';
import type { FunctionComponent } from 'react';
import styles from './searchBar.module.scss';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  onSearchTermChange: (term: string) => void;
};
const SearchBar: FunctionComponent<Props> = ({ onSearchTermChange }) => {
  const [value, setValue] = useState('');
  function _searchTermChange(value: string) {
    onSearchTermChange(value ?? '');
  }
  const searchTermPush = useDebouncedCallback(_searchTermChange, 500);

  return (
    <input
      type="search"
      value={value}
      placeholder="Search"
      aria-label="Search through items"
      onChange={({ currentTarget: { value } }) => {
        setValue(value);
        searchTermPush(value);
      }}
      className={styles.input}
      onKeyDown={({ key }) => key === 'Enter' && searchTermPush(value)}
    />
  );
};

export default SearchBar;
