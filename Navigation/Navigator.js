import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home';
import ItemListCategories from '../Screens/ItemListCategory';
import ItemDetail from '../Screens/ItemDetail';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="ItemListCategory"
          component={ItemListCategories}
        />
        <Stack.Screen 
          name="Detail"
          component={ItemDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator