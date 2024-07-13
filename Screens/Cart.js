import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import CartItem from '../Components/Cart/CartItem'
import allCartItems from '../Data/mockCart.json'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = allCartItems.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),0
    );
    setCartItems(allCartItems)
    setTotal(total)
  },[allCartItems])

  return (
    <View>
      <FlatList
        style={styles.flatlist}
        data={cartItems}
        keyExtractor={(cartItem)=>cartItem.id}
        renderItem={({item})=><CartItem cartItem={item}/>}
      />
      <View>
        <Pressable>
          <Text>Confirmar compra</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})