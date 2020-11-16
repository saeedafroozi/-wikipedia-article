import React from 'react';
import styled from "styled-components";
import { ReactComponent as Trash } from '../asset/icons/trash.svg'
import { useScroll } from '../hooks/useScroll'

const SearchInput = styled.input`
  width: 100%;
  margin:0 auto;
  position:relative;
  border:1px solid transparent;
  border-radius: 50px 50px 50px 50px;
  line-height: 2rem;
  padding: 5px 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  &:focus{
    border-color:#90cdf4;
  }
`;

const Container = styled.div<{ isScroll: boolean }>`
  margin:0 auto;
  width:${prop => `${prop.isScroll ? 90 : 85}%`};
  position:${prop => `${prop.isScroll ? 'fixed' : 'relative'}`};
  top:${prop => `${prop.isScroll ? 2 : 'unset'}px`};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Button = styled(Trash)`
  position: absolute;
  right: 10px;
  background-color: transparent;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: none;
  color: #41534a9c;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.5s;
  color: white;
  :hover, :focus {
    opacity:0.5;
    cursor: pointer;
  }
`;

interface Props {
  onRemove: () => void;
  onChange: (keyword: string) => void;
  placeholder: string;
  keyword: string;
};

const SearchBox: React.FC<Props> = ({ onRemove, onChange, placeholder, keyword }) => (
  <Container isScroll={useScroll()}>
    <SearchInput
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange((event.target.value))}
      value={keyword}
      autoFocus={true}
      data-testid='searchInput'
    />
    <Button onClick={onRemove}></Button>
  </Container>
);

export default SearchBox;