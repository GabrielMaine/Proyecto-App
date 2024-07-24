import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/Cart/cartSlice'
import { colors } from '../Global/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import ItemCounter from '../Components/ItemDetail/ItemCounter'
import Toast from 'react-native-toast-message'

const ItemDetail = ({navigation, route}) => {

  const dispatch = useDispatch()

  const {item} = route.params

  const onAddCart = (count) => {
    try {
      dispatch(addItem({...item, quantity: count}))
      Toast.show({
        type: 'success',
        text1: "Producto agregado al carrito",
        position: 'bottom'
      })      
    } catch (error) {
      console.log(error.message)
      Toast.show({
        type: 'error',
        text1: "Ocurrio un error agregando su producto",
        position: 'bottom'
      })      
    }
  }

  return (
    <View style={styles.main}>
      <Pressable onPress={()=>navigation.goBack()} style={styles.goBackContainer}>
          <FontAwesome5 name={'arrow-left'} size={25} style={styles.logout} />
      </Pressable>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: item.image }}      
          />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View>
        <ItemCounter
          onPress={(count)=>onAddCart(count)}
          min={1}
          max={item.stock}
          initial={1}
        />
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  main:{
    // backgroundColor: colors.red[500],
    padding: 9,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.gray[600],
    backgroundColor: 'white'
  },
  goBackContainer:{
    // backgroundColor: colors.green[100],
    width: 30
  },
  titleContainer:{
    // backgroundColor: colors.blue[200]
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer:{
    // backgroundColor:colors.orange[200],
    padding: 5
  },
  image:{
    height: 250,
    objectFit: 'cover'
  },
  descriptionContainer:{
    // backgroundColor: colors.amber[100],
    padding: 4
  },
  description:{
    textAlign: 'center'
  },

})