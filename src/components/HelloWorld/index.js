import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const HelloWorld = ({title, name}) => {
  const handlePress = () => {
    console.log('OMG! Fui clickado de novo!');
  };

  // JSX
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HelloWorld;
