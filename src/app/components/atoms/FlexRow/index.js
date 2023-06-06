import React from 'react';
import { View } from 'react-native';

const CFlexRow = ({
  children,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  padding = 0,
  paddingHorizontal = 0,
  paddingVertical = 0,
  justify = 'flex-start',
  align = 'stretch',
  width = '100%',
  style = {}
}) => {
  const flewRowStyle = {
    flexDirection: 'row',
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    justifyContent: justify,
    alignItems: align,
    width
  };

  const paddingStyle = padding ? ({ padding }) : ({ paddingHorizontal, paddingVertical });

  return <View style={[flewRowStyle, paddingStyle, style]}>{children}</View>;
};

export default CFlexRow;
