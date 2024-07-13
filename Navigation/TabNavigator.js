import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import ShopStack from './ShopStack'
import OrderStack from './OrderStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
            <Tab.Screen 
                name="ShopTab" 
                component={ShopStack} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>
                                <Text>Shop</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="CartTab" 
                component={CartStack} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>
                                <Text>Cart</Text>
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="OrderTab" 
                component={OrderStack} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>
                                <Text>Orders</Text>
                            </View>
                        )
                    }
                }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: "red"
    }
})