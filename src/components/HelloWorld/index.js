import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const HelloWorld = ({title, name, onPress}) => {
  // JSX
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(name)}>
      <Text style={styles.text}>{title}</Text>

      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HelloWorld;
