import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from 'axios';

const Home = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    const {results} = response.data;

    const request = results.map(({url}) => {
      return axios.get(url);
    });

    const requests = await Promise.all(request);

    const dataFinal = requests.map(({data}) => {
      const {id, name, sprites} = data;

      return {id, name, image: sprites.other['official-artwork'].front_default};
    });

    setPokemons(dataFinal);
  };

  const handleSelectPokemon = (pokemonId) => {
    navigation.navigate('Pokemon', {pokemonId});
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSelectPokemon(item.id)}
            style={{
              padding: 23,
              margin: 16,
              borderRadius: 8,
              backgroundColor: '#333',
            }}>
            <Image
              source={{uri: item.image}}
              resizeMode="contain"
              style={{width: 60, height: 60}}
            />

            <Text style={{color: '#fff'}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
