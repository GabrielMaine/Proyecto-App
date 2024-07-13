import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetail = ({navigate, route}) => {

  const {item} = route.params

  return (
    <View>
      <Text>{item.category}</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})