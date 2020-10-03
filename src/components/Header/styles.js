import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  shadow: {
    // Estilos da sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
  },
  rightButton: {
    position: 'absolute',
    right: 16,
  },
});
