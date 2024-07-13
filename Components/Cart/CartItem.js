import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <View>
      <Text>{cartItem.title}</Text>
      <Text>{cartItem.brand}</Text>
      <Text>${cartItem.price} * {cartItem.quantity} unidad/es</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})