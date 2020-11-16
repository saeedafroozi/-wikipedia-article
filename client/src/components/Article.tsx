import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';

const Container = styled.div`
  margin-top: 10px;
  width: 86%;
  margin:0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div<{ height?: number }>`
  flex: 1;
  margin-bottom:${(prop) => `${prop.height ? prop.height : 0} px`};
`;

const Header = styled.h2`
font-size: 30px;
font-weight: bold;
`

interface Props {
  title: string;
  categories: string[];
  sections: SectionViewModel[];
}

const Article: React.FC<Props> = ({ title, categories, sections }) => (
  <Container data-testid='article'>
    <Column>
      <Header>{title}</Header>
      {!!categories.length && <Categories items={categories} />}
    </Column>
  </Container>
);

export default Article;