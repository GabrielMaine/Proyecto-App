import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title="Inicio"}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        width: "100%",
    },
    title:{
        textAlign: "center"
    }
})