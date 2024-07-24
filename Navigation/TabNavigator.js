import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartStack from './CartStack'
import ShopStack from './ShopStack'
import OrderStack from './OrderStack'
import ProfileStack from './ProfileStack'
import { colors } from '../Global/colors'
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <>
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
                                <FontAwesome5 name="store" size={24} color={focused ? colors.blue[400] : "black"} />
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
                                <FontAwesome5 name="shopping-cart" size={24} color={focused ? colors.blue[400] : "black"} />
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
                                <FontAwesome5 name="receipt" size={24} color={focused ? colors.blue[400] : "black"} />
                            </View>
                        )
                    }
                }}/>
            <Tab.Screen 
                name="ProfileTab" 
                component={ProfileStack} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View>
                                <FontAwesome5 name="user-alt" size={24} color={focused ? colors.blue[400] : "black"} />
                            </View>
                        )
                    }
                }}/>
        </Tab.Navigator>
    </>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.gray[600]
    }
})