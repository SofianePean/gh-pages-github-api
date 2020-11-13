// == Import npm
import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

// == Import
import './SearchBar.scss';

// == Composant
const SearchBar = (props) => {
  const [inputSearch, setinputSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(inputSearch);
    setinputSearch('');
  };

  const OnInputChange = (event) => {
    const { value } = event.currentTarget;
    setinputSearch(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <Input
        className="search-bar-input"
        icon="search"
        placeholder="Search..."
        value={inputSearch}
        onChange={OnInputChange}
      />
    </form>
  );
};

// == Export
export default SearchBar;
