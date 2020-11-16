import React from 'react';
import ResetCSS from '../asset/styles/Reset';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Search from '../components/Search'
import { StringDictionary } from '../utils/constants'

const Header = styled.header`
  text-align: center;
  margin-top:20px;
  margin-bottom:20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const App: React.FC = () => {
  return <>
    <ResetCSS />
    <Layout>
      <Header >
        <Title>
          {StringDictionary.App_Title}
        </Title>
      </Header>
      <Search />
    </Layout>
  </>
};

export default App;
