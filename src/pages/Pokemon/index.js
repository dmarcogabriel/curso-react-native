import React, {useState, useEffect} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import styles from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import {useTheme} from '../../contexts/Theme';

const Pokemon = ({route}) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const {theme} = useTheme();

  const loadPokemon = async () => {
    setLoading(true);

    const id = route.params.pokemonId;

    const response = await api.get(`pokemon/${id}`);
    console.log(response.data.abilities);
    setLoading(false);

    setPokemon(response.data);
  };

  const capitalize = (name) => {
    const firstLetter = name[0];

    return firstLetter.toUpperCase() + name.substring(1);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="crimson" size={50} />
      </View>
    );
  }

  return (
    pokemon && (
      <>
        <Header title="Pokemon" backButton />

        <View style={[styles.container, {backgroundColor: theme.background}]}>
          <View
            style={[
              styles.avatarView,
              styles.shadow,
              {backgroundColor: theme.primary},
            ]}>
            <Image
              source={{
                uri: pokemon.sprites.other['official-artwork'].front_default,
              }}
              style={styles.avatar}
            />
          </View>

          <View
            style={[
              styles.content,
              styles.shadow,
              {backgroundColor: theme.secondary},
            ]}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>

            <Text style={styles.subtitle}>Abilities</Text>
            {pokemon.abilities.map(({ability}, i) => (
              <Text key={String(i)} style={styles.value}>
                {capitalize(ability.name)}
              </Text>
            ))}

            <Text style={styles.subtitle}>Types</Text>
            {pokemon.types.map(({type}, i) => (
              <Text key={String(i)} style={styles.value}>
                {capitalize(type.name)}
              </Text>
            ))}
          </View>
        </View>
      </>
    )
  );
};

export default Pokemon;
