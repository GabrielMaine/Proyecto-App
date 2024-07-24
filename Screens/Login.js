import { Pressable, StyleSheet, Text, View } from 'react-native'
import {useEffect, useState} from 'react'
import InputForm from '../Components/Globals/InputForm'
import SubmitButton from '../Components/Globals/SubmitButton'
import { useLoginMutation } from '../Services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/Auth/AuthSlice'
import { useDB } from '../db'

const Login = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { insertSession } = useDB()

    const [triggerLogin, result] = useLoginMutation()

    useEffect(()=> {
        try {
            if (result.isSuccess) {
                dispatch(setUser({
                data:{
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                }
                }))
                insertSession({
                    email: result.data.email,
                    localId: result.data.localId,
                    token: result.data.idToken
                })
                console.log("Sesion insertada")
            }   
        } catch (error) {
            console.log("Login error: "+error.message)
        }
      }, [result])
    
    const onSubmit = ()=> {
        triggerLogin({email, password, returnSecureToken: true})
    }

    return (
    <View>
        <Text>Login</Text>
        <InputForm label={"email"} onChange={setEmail} error={""}/>
        <InputForm label={"password"} onChange={setPassword} error={""} isSecure={true}/>
        <SubmitButton onPress={onSubmit} title={"Submit"} />
        <Pressable onPress={()=>navigation.navigate('SignUp')}>
            <Text>Signup</Text>
        </Pressable>
    </View>
    )
}

export default Login

const styles = StyleSheet.create({})