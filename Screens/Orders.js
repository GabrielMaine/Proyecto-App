import { StyleSheet, View, FlatList } from 'react-native'
import OrderItem from '../Components/Orders/OrderItem'
import { useGetOrdersByUserQuery } from '../Services/shopService'
import { useSelector } from 'react-redux'
import EmptyOrders from '../Components/Orders/EmptyOrders'
import Loader from '../Components/Loader/Loader'

const Orders = () => {

  const user = useSelector(state => state.authReducer.value.user)
  const {data: orders, isLoading, error} = useGetOrdersByUserQuery(user)
  console.log(orders)

  return (
    <>
    {isLoading
    ?
    <Loader/>
    :
    <View>
      {orders.length
      ?
      <FlatList 
        data={orders}
        renderItem={({item})=><OrderItem orderItem={item}/>}
        keyExtractor={order=>order.createdAt}
        style={styles.FlatList}
      />
      :
      <EmptyOrders/>
      }
    </View>
    }
    </>
  )
}

export default Orders

const styles = StyleSheet.create({})