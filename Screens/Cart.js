import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../Components/Cart/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../Services/shopService'
import { clearCart } from '../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import EmptyCart from '../Components/Cart/EmptyCart'
import { colors } from '../Global/colors'

const Cart = () => {
  const user = useSelector(state => state.authReducer.value.user)
  const cartItems = useSelector(state => state.cartReducer.value.items)
  const total = useSelector(state => state.cartReducer.value.total)
  const [triggerPost, result] = usePostOrderMutation()
  const dispatch = useDispatch()

  const confirmCart = () => {
    triggerPost({total, cartItems, user:user, createdAt: new Date().toLocaleString()})
  }

  useEffect(()=> {
    try {
        if (result.isSuccess) {
            dispatch(clearCart())
            console.log("Compra realizada")
            Toast.show({
              type: 'success',
              text1: "Su compra ha sido confirmada",
              position: 'bottom'
            })
        }   
    } catch (error) {
        console.log("Purchase error: "+error.message)
        Toast.show({
          type: 'error',
          text1: "Ocurrio un error procesando su compra",
          position: 'bottom'
        })
    }
  }, [result])

  return (
    <View>
      {cartItems.length?
      <View>
            <FlatList
            style={styles.flatlist}
            data={cartItems}
            keyExtractor={(cartItem)=>cartItem.slug}
            renderItem={({item})=><CartItem cartItem={item}/>}
          />
          <View style={styles.container}>
            <Text>Total: ${total}</Text>
            <View>
              <Pressable onPress={confirmCart}>
                <Text style={styles.confirm}>Confirmar compra</Text>
              </Pressable>
            </View>
          </View>
      </View>
      :
      <EmptyCart/>
      }

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 300,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
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
  confirm:{
    color: colors.blue[600],
    fontWeight: 'bold'
  }
})