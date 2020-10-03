import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../contexts/Theme';

const Header = ({title = '', backButton = false}) => {
  const navigation = useNavigation();
  const {theme, handleTheme} = useTheme();

  return (
    <View
      style={[
        styles.header,
        styles.shadow,
        {backgroundColor: theme.background},
      ]}>
      {backButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MIcon name="chevron-left" size={35} color={theme.color} />
        </TouchableOpacity>
      )}

      <Text style={[styles.title, {color: theme.color}]}>{title}</Text>

      <TouchableOpacity onPress={handleTheme} style={styles.rightButton}>
        {theme.title === 'light' ? (
          <FIcon name="moon" size={35} color="#000" />
        ) : (
          <FIcon name="sun" size={35} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
