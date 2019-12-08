import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  display,
  DisplayProps,
  border,
  BorderProps
} from 'styled-system';

export type BoxProps = SpaceProps & TextAlignProps & WidthProps & ColorProps & DisplayProps & BorderProps
export const Box = styled.div<BoxProps>(
  space,
  textAlign,
  width,
  color,
  display,
  border,
);

export type TextProps = BoxProps & FontSizeProps & FontWeightProps & FontFamilyProps & LineHeightProps;
export const Text = styled(Box)<TextProps>(
  space,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
)
Text.defaultProps = {
  color: 'red',
  fontFamily: 'monospace',
}

export type HeadingProps = TextProps;
export const Heading = Text.withComponent('h2')
