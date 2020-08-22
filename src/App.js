import React from 'react';
import styled from 'styled-components'
import './App.css';

import Main from './components/Main';

const Window = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`

function App() {
  

  return (
    <Window>
      
      <Main />
      
    </Window>
  );
}

export default App;
