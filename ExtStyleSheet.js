import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#5F0126',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  plainText: {
    color: '#5F0126',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  card: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#FBD0D9',
    width: '90%',
    alignSelf: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#5F0126',
    borderRadius: 5,
  },

  picker: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#5F0126',
    borderRadius: 5,
    backgroundColor: '#5F0126',
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'Arial',
  },
});

export default styles;
