import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator() 

const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            header: () => <Header title="Tienda"/>
        }}
    >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ItemListCategory" component={ItemListCategory}/>
        <Stack.Screen name="Detail"component={ItemDetail}/>
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})