import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

import {useTheme} from './contexts/Theme';

const Stack = createStackNavigator();

const BAR_STYLE = {
  dark: 'light-content',
  light: 'dark-content',
};

// JSX
const Routes = () => {
  const {theme} = useTheme();

  return (
    <>
      <StatusBar
        barStyle={BAR_STYLE[theme.title]}
        backgroundColor={theme.background}
      />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
