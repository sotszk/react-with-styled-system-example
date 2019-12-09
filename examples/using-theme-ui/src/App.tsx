import React from 'react'
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from './theme'

const App: React.FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <Comp/>
    </ThemeProvider>
  )
}

const Comp = () => (
  <div sx={{ color: 'primary' }}>Hello</div>
)

export default App;
