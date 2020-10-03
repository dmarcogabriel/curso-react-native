import React, {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import sharedStyles from '../../sharedStyles';
import {useTheme} from '../../contexts/Theme';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const {theme} = useTheme();
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    if (username) {
      await AsyncStorage.setItem('@username', username);

      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    setLoading(true);

    AsyncStorage.getItem('@username')
      .then(() => {
        navigation.navigate('Home');

        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    !loading && (
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <View
          style={[
            styles.input,
            {backgroundColor: theme.background},
            sharedStyles.shadow,
          ]}>
          <Text style={[styles.label, {color: theme.color}]}>Login</Text>
          <TextInput
            style={[styles.textInput, {color: theme.color}]}
            value={username}
            onChangeText={(e) => setUsername(e)}
          />

          <TouchableOpacity
            onPress={handleLogin}
            style={[styles.button, {backgroundColor: theme.primary}]}>
            <Text style={[styles.textButton, {color: '#fff'}]}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default Login;
