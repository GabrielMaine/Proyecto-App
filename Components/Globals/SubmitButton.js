import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.Pressable}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({})