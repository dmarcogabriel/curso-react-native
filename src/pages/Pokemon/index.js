import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import axios from 'axios';

const Pokemon = ({route}) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(route.params.pokemonId);
    // ...
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>{pokemon}</Text>
    </View>
  );
};

export default Pokemon;
