import {StyleSheet} from 'react-native'

//you know what to do here
//typing in caps below so youll see
//CHANGE THE BACKGROUND IT JUST MAKES THE BACKGROUND SOLID PICK ON MOBILE AND I WOULD LIKE FOR IT TO BE PRESENTABLE AS SUCH
//either change the background or modify it somehow int he stylesheet for it to work
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    height: '100%',
    width: '100%',
  },
  box: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(55, 96, 185, 0.8)',
    height: '50%',
    width: '80%',
    alignSelf: 'center', 
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
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
    width: "80%",
    alignSelf: 'center', 
    height: "auto",
    textAlign: 'center'
  },
  plainText: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 15,
    position: "bottom",
    width: "80%",
    height: "auto",
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: "bold"
  },
  background: {
    flex: 1,
    resizeMode: 'c',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 150,
    width: 150,
    padding: 10,
    marginBottom: 20,
  },
});