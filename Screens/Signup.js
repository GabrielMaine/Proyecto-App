import { StyleSheet, Text, View, Pressable } from 'react-native'
import {useState} from 'react'
import InputForm from '../Components/Globals/InputForm'
import SubmitButton from '../Components/Globals/SubmitButton'
import { useSignUpMutation } from '../Services/authService'
import { signupSchema } from '../Validations/signupSchema'
import { colors } from '../Global/colors'
import Toast from 'react-native-toast-message'

const Signup = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
  const [triggerSignUp, result] = useSignUpMutation()

  const onSubmit = () => {
    try {
      const validation = signupSchema.validateSync({email, password, confirmPassword})
      triggerSignUp({ email, password, returnSecureToken: true })
      Toast.show({
        type: 'success',
        text1: "Su usuario ha sido creado con exito",
        position: 'bottom'
      })
    } catch (err) {
      console.log("Entro al signup del error");
      console.log(err.path);
      console.log(err.message);
      switch(err.path) {
        case 'email':
          setErrorEmail(err.message)
          setErrorPassword("")
          setErrorConfirmPassword("")          
          break;
        case 'password':
          setErrorEmail("")
          setErrorPassword(err.message)
          setErrorConfirmPassword("")     
          break;
        case 'confirmPassword':
          setErrorEmail("")
          setErrorPassword("")
          setErrorConfirmPassword(err.message)   
          break;
        default:
          break;
      }
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Signup</Text>
        </View>
        <InputForm label={'Email'} onChange={setEmail} error={errorEmail} />
        <InputForm label={'Contraseña'} onChange={setPassword} error={errorPassword} isSecure={true} />
        <InputForm label={'Repetir contraseña'} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true} />
        <SubmitButton onPress={onSubmit} title={'Registrarse'} />
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>¿Ya estás registrado? Ingresa</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green[100],
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    width: '80%',
    marginBottom: 50,
  },
  textContainer: {
    width: '100%',
    borderBottomColor: colors.gray[800],
    borderBottomWidth: 2,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  signupText: {
    marginTop: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});