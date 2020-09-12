import React, {useState, useEffect} from 'react';
import HelloWorld from './components/HelloWorld';
import Box from './components/Box';
import {Text, View} from 'react-native';
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

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      console.log(response.data.results[0]);
    });
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
  return (
    <View style={styles.container}>
      <Box color="red" />

      <Box color="blue" />

      <Box color="green" />

      <Box color="black" />

      <View style={styles.counterView}>
        <Text>{counter}</Text>
      </View>

      <HelloWorld title="Seja bem vindo" name="Pedro" onPress={increment} />

      <HelloWorld title={title} name="Gabriel" onPress={handlePress2} />
    </View>
  );
};

export default App;
