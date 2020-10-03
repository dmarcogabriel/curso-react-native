import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import api from '../../services/api';
import sharedStyles from '../../sharedStyles';

const Home = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [next, setNext] = useState('pokemon');

  const getPokemons = async () => {
    if (loading || !next) {
      return;
    }

    setLoading(true);

    const response = await api.get(next);

    const {results, next: responseNext} = response.data;

    setNext(responseNext);

    const request = results.map(({url}) => {
      return api.get(url);
    });

    const requests = await Promise.all(request);

    const loadedPokemons = requests.map(({data}) => {
      const {id, name, sprites} = data;

      return {id, name, image: sprites.other['official-artwork'].front_default};
    });

    setPokemons((oldPokemons) => [...oldPokemons, ...loadedPokemons]);

    setLoading(false);
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
            style={[styles.card, sharedStyles.shadow]}>
            <Image
              source={{uri: item.image}}
              resizeMode="contain"
              style={{width: 60, height: 60}}
            />

            <Text style={{color: '#000'}}>{item.name}</Text>
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0.2}
        onEndReached={getPokemons}
      />
    </View>
  );
};

export default Home;
