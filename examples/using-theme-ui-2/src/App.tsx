import React from 'react';
/** @jsx jsx */
import { jsx, ThemeProvider, Styled, useColorMode, ColorMode } from 'theme-ui'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode/>
      <ColorChangeButton/>
      <Styled.h1 sx={{
        color: 'primary',
        fontFamily: 'heading',
        ':hover': {
          color: 'secondary',
        },
      }}>Hello, Theme UI</Styled.h1>

      <div sx={{
        display: 'flex'
      }}>
        <div sx={{
          color: 'accent',
          border: 'base',
          p: 4,
        }}>SOMETHING</div>
        <div sx={{
          border: 'base',
          ml: 2,
          p: 4,
        }}>SOMETHING</div>
        <div sx={{
          bg: 'primary',
          color: 'background',
          ml: 2,
          p: 4,
        }}>SOMETHING</div>
      </div>
    </ThemeProvider>
  );
}

const ColorChangeButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
  <button onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>colorMode: {colorMode}</button>
  )
}

export default App;
