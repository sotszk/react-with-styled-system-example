import React from 'react';
import styled from '@emotion/styled'
import { typography, space, color } from 'styled-system'

const Box = styled('div')(
  {
    fontSize: 80,
    background: 'gray',
    color: 'white',
    padding: 24,
  },
  typography,
  space,
  color,
)

export default Box;
