import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Box, Text, Heading } from './components/ui'

const App = () => (
  <>
    <Heading>Hello, Styled System</Heading>

    <Box display="flex">
      <Box border="1px solid gray" p={4}>
        <Text>SOMETHING</Text>
      </Box>

      <Box border="1px solid gray" p={4} ml={2}>SOMETHING</Box>

      <BoxWithColor variantColor={VariantColor.Blue} ml={2} p={4}>
        <Text color="white">SOMETHING</Text>
      </BoxWithColor>
    </Box>
  </>
)

const enum VariantColor {
  Blue = '#26f',
  Red = '#f43',
  Yellow = 'yellow',
}

export const BoxWithColor = styled(Box)<{ variantColor?: VariantColor }>`
  background-color: ${props => props.variantColor || 'gray'};
`;

export default App;
