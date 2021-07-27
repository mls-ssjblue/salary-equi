import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Header } from './header/Header'
import { SalaryContainer } from './components/SalaryContainer';

const App : React.FC =  () => {
  return (
    <div className="App">
    <StyledContainer>
      <Header />
      <SalaryContainer />
    </StyledContainer>
  </div>
  );
}

const StyledContainer = styled.div`
  margin: 0 50px 0 50px;
`

export default App;
