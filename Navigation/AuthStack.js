import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'

const Stack = createNativeStackNavigator() 

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
    >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack