import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { colors } from '../../Global/colors'
import CounterLite from './CounterLite'

const CartItem = ({cartItem}) => {
  return (
    // <View>
    //   <Text>{cartItem.title}</Text>
    //   <Text>{cartItem.brand}</Text>
    //   <Text>${cartItem.price} * {cartItem.quantity} unidad/es</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{cartItem.title}</Text>
        <Text style={styles.price}>${cartItem.price}</Text>
        <View>
          <CounterLite 
            max={cartItem.stock}
            initial={cartItem.quantity}
            itemSlug={cartItem.slug}
            item={cartItem}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: cartItem.image }}      
        />
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 300,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
  },
  textContainer:{
    width: '60%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  text: {
    color: colors.gray[600],
    fontSize: 15,
    fontWeight: 'bold'
    // backgroundColor: colors.red[500]
  },
  pressable : {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  imageContainer:{
    height: 120,
    width: "40%",
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: 120,
    objectFit: 'cover'
  },
})