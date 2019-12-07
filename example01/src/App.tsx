import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Box from './components/Box';

const App = () => (
  <>
    <Box as="h2">Hello, Box</Box>
    <Box display="flex">
      <Box fontFamily="monospace" color="yellow" bg="gray" mr={2} p={4} fontSize={24}>This is A BOX</Box>
      <Box fontFamily="monospace" color="yellow" bg="gray" mr={2} p={4} fontSize={24}>This is A BOX</Box>
      <BoxWithColor variantColor={VariantColor.Blue} fontFamily="monospace" color="yellow" bg="gray" p={4} fontSize={24}>This is A BOX</BoxWithColor>
    </Box>
  </>
)

const enum VariantColor {
  Blue = '#26f',
  Red = '#f43',
  Yellow = 'yellow',
}

const BoxWithColor = styled(Box)<{ variantColor?: VariantColor }>`
  background-color: ${props => props.variantColor || 'gray'};
`;

export default App;
