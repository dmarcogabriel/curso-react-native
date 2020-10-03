import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import api from '../../services/api';
import sharedStyles from '../../sharedStyles';
import Header from '../../components/Header';
import {useTheme} from '../../contexts/Theme';

const Home = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState('pokemon');

  const {theme, handleTheme} = useTheme();

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
    <>
      <Header title="Home" />

      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <FlatList
          data={pokemons}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSelectPokemon(item.id)}
              style={[
                styles.card,
                sharedStyles.shadow,
                {backgroundColor: theme.background},
              ]}>
              <Image
                source={{uri: item.image}}
                resizeMode="contain"
                style={{width: 60, height: 60}}
              />

              <Text style={{color: theme.color}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.2}
          onEndReached={getPokemons}
        />
      </View>
    </>
  );
};

export default Home;
