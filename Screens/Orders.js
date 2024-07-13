import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import orders from '../Data/mockOrders.json'
import OrderItem from '../Components/Orders/OrderItem'

const Orders = () => {
  return (
    <View>
      <FlatList 
        data={orders}
        renderItem={({item})=><OrderItem orderItem={item}/>}
        keyExtractor={order=>order.id}
        style={styles.FlatList}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})