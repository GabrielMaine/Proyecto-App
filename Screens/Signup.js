import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import InputForm from '../Components/Globals/InputForm'
import SubmitButton from '../Components/Globals/SubmitButton'
import { useSignUpMutation } from '../Services/authService'
import { signupSchema } from '../Validations/signupSchema'

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
    <View>
      <Text>Signup</Text>
      <InputForm label={"email"} onChange={setEmail} error={errorEmail}/>
      <InputForm label={"password"} onChange={setPassword} error={errorPassword} isSecure={true}/>
      <InputForm label={"confirmPassword"} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true}/>
      <SubmitButton onPress={onSubmit} title={"Submit"} />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})