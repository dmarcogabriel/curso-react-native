import {StyleSheet, Dimensions} from 'react-native';

const AVATAR_SIZE = 150;
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
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
  avatarView: {
    backgroundColor: '#333',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height,
    overflow: 'hidden',
    padding: 10,
    marginVertical: 16,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },

  content: {
    flex: 1,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 30,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    color: '#000',
  },

  subtitle: {
    fontSize: 20,
    marginTop: 16,
  },
  value: {
    fontSize: 15,
    marginLeft: 12,
    marginVertical: 5,
  },
});
