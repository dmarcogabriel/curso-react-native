import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const Stack = createStackNavigator();

// JSX
const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
