import { Theme } from 'theme-ui'

// example theme.js
const theme: Theme = {
  breakpoints: ['480px', '640px', '768px'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 30, 48, 64],
  borders: {
    base: '1px solid #444',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#44f',
    accent: '#f08',
    muted: '#444',
    modes: {
      dark: {
        text: 'rgba(255,255,255, 0.7)',
        background: '#222',
        primary: '#33e',
        secondary: '#44f',
        accent: '#f08',
        muted: '#fff',
      }
    }
  },
  styles: {
    h1: {
      fontSize: [5, 6, 7],
      fontFamily: 'heading',
      mt: [2, 2, 4],
      mb: [1, 1, 2],
    },
  },
}

export default theme;
