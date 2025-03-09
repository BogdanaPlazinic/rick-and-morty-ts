import React, { useMemo } from "react";

import { Input } from "antd";
import debounce from "lodash.debounce";

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setSearchTerm(query);
      }, 500),
    [setSearchTerm]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <Input 
      className={styles.antInput}
        placeholder="Search characters..."
        onChange={handleChange}
      />
    </div>
  )
};

export default SearchBar;
