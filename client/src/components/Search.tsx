import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { StringDictionary, HtppExcess_DebounceTime } from '../utils/constants'
import SearchResult from './SearchResult';
import { useDebounce } from '../hooks/useDebounce';

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const page = useDebounce(keyword, HtppExcess_DebounceTime);
  return (
    <>
      <SearchBox
        onChange={keyword => setKeyword(keyword)}
        onRemove={() => setKeyword('')}
        placeholder={StringDictionary.Placeholder_Value}
        keyword={keyword}
      />
      {page && <SearchResult page={page} />}
    </>
  );
};

export default Search;