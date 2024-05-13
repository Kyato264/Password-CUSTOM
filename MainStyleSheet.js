import {StyleSheet} from 'react-native'

//you know what to do here
//typing in caps below so youll see
//CHANGE THE BACKGROUND IT JUST MAKES THE BACKGROUND SOLID PICK ON MOBILE AND I WOULD LIKE FOR IT TO BE PRESENTABLE AS SUCH
//either change the background or modify it somehow int he stylesheet for it to work
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  box: {
    borderWidth: 1,
    borderColor: '#5F0126',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FBD0D9',
    height: '50%',
    width: '25%' 
  },
  title: {
    fontSize: 30,
    color: '#5F0126',
    fontWeight: 'bold',
    textAlign: 'center', // Center align the text
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  loginInfo: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    outline: 'solid',
    borderRadius: 5,
  },
  plainText: {
    color: '#5F0126',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#5F0126',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    height: 150,
    width: 150,
    padding: 10,
    marginBottom: 20,
  },
});