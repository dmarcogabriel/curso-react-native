import React from 'react';
import {View} from 'react-native';

const Box = ({color}) => (
  <View
    style={{
      width: 50,
      height: 50,
      backgroundColor: color,
    }}
  />
);

export default Box;
