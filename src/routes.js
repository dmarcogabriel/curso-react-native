import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const Stack = createStackNavigator();

// JSX
const Routes = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="deepskyblue" />

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'deepskyblue',
          },
          headerTitleStyle: {
            color: 'darkblue',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Routes;
