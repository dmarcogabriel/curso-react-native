import React, {useState, useEffect} from 'react';
import HelloWorld from './components/HelloWorld';
import Box from './components/Box';
import {Text, View, ScrollView, FlatList, Image} from 'react-native';
import styles from './styles';
import axios from 'axios';

// function App () {
//
// }

const App = () => {
  const [title, setTitle] = useState('Olá Mundo!');
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const handlePress2 = (name) => {
    console.log(name);

    setTitle('Até logo');
  };

  // Executa apenas quando o componente é criado
  useEffect(() => {
    getPokemons();
  }, []);

  // Executa toda vez que o counter for modificado
  useEffect(() => {
    console.log(`Contador é = ${counter}`); // Template string
  }, [counter]);

  // JSX
  // Para comentar grandes linhas de código > ctrl + / = cmd + /
  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <View
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
          </View>
        )}
      />

      {/* {pokemons.map((pokemon) => {
        return (
          <View
            // key={pokemon.name}
            style={{
              padding: 23,
              margin: 16,
              borderRadius: 8,
              backgroundColor: '#333',
            }}>
            <Text style={{color: '#fff'}}>{pokemon.name}</Text>
          </View>
        );
      })} */}

      {/* <Box color="red" />

      <Box color="blue" />

      <Box color="green" />

      <Box color="black" />

      <View style={styles.counterView}>
        <Text>{counter}</Text>
      </View>

      <HelloWorld title="Seja bem vindo" name="Pedro" onPress={increment} />

      <HelloWorld title={title} name="Gabriel" onPress={handlePress2} /> */}
    </View>
  );
};

export default App;
