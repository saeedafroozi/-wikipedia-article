import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Category = styled.span`
  background-color: #ccc;
  padding: 5px 8px;
  border-radius: 30px;
  margin: 5px;
  font-size:.9rem;
  width: fit-content;
`;

const Title = styled.div`
font-weight:bold;
`;

interface Props {
  items: string[];
};

const Categories: React.FC<Props> = ({ items }) => {
  return (
    <Container data-testid='category'>
      <Title> Categories:</Title>
      {items.map(
        (category, index) => (
          <Category key={`${category}-${index}`}>{category}</Category>
        )
      )}
    </Container>
  )
};

export default Categories;