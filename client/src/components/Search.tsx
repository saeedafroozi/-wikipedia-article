import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { StringDictionary } from '../utils/constants'
import SearchResult from './SearchResult';

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <SearchBox
        onChange={keyword => setKeyword(keyword)}
        onRemove={() => setKeyword('')}
        placeholder={StringDictionary.Placeholder_Value}
        keyword={keyword}
      />
      {<SearchResult page={keyword} />}
    </>
  );
}

export default Search;