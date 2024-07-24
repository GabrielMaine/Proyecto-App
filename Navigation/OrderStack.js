import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../Screens/Orders'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator() 

const OrderStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Order'
        screenOptions={{
            header: () => <Header title="Ordenes"/>
        }}
    >
        <Stack.Screen name="Order" component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})