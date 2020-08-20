import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// require('custom-env').env()

const Window = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`

function App() {
  

  return (
    <Window>
      <Header/>
      <Main />
      <Footer/>
    </Window>
  );
}

export default App;
