import React from 'react';
import { GamepieceContextProvider } from './context/GamepieceContext'
import { GamemodeContextProvider } from './context/GamemodeContext'
import { createGlobalStyle } from 'styled-components'
import { COLOR_SCHEME, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from './constants/constants'
import { Home } from './pages'
import { UserChoiceContextProvider } from './context/UserChoiceContext';
import { GameRunningContextProvider } from './context/GameRunningContext'
import { ComputerChoiceContextProvider } from './context/ComputerChoiceContext';

function App() {

  // using styled-components createGlobalStyle for some global CSS values
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${FONT_FAMILY.PRIMARY}, sans-serif;
      font-size: ${FONT_SIZE.BUTTON_DESKTOP};
      font-weight: ${FONT_WEIGHT.SEMI_BOLD};
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0;
      background: linear-gradient(${COLOR_SCHEME.BG_START}, ${COLOR_SCHEME.BG_END});
      height: 100vh;
      color: ${COLOR_SCHEME.PRIMARY};
      max-width: 1600px;
  }
`
  return (
    <GameRunningContextProvider>
      <GamepieceContextProvider>
        <GamemodeContextProvider>
          <UserChoiceContextProvider>
          <ComputerChoiceContextProvider>
              <GlobalStyle />
              <Home />
            </ComputerChoiceContextProvider>
          </UserChoiceContextProvider>
        </GamemodeContextProvider>
      </GamepieceContextProvider>
    </GameRunningContextProvider>
  )
}

export default App;

