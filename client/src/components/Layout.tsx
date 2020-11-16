import styled from 'styled-components';

const Layout = styled.div`
  overflow-x: hidden;
  overflow-y:auto;
  font-family: sans-serif;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  margin:0 auto;
  border-radius: 5px;
  background-color:#f8f9fa;
  padding:5px;
  min-height: 95vh;
  width: 90%;
  margin-top: 12px;
  margin-bottom: 12px;
  cursor: default;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 0px 0px;
  }

  @media (max-width: 320px) {
    padding: 9px 12px;
    position: unset;
  }
`;

export default Layout;