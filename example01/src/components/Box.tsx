import React from 'react';
import styled from 'styled-components';
import { display, DisplayProps, typography, space, color, SpaceProps, ColorProps, TypographyProps } from 'styled-system'

const Box = styled('div')<DisplayProps & SpaceProps & ColorProps & TypographyProps>(
  display,
  typography,
  space,
  color,
)

export default Box;
