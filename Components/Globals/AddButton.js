import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const AddButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.Pressable}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({})