import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../../features/Shop/shopSlice'
import { colors } from '../../Global/colors'

const ItemListDetail = ({navigation, item}) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{
      dispatch(setProductIdSelected(item.id))
      navigation.navigate('Detail', {item})
    }}
    style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.image }}      
        />
      </View>
    </Pressable>
  )
}

export default ItemListDetail

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 300,
    margin: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 10,
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
  },
  text: {
    color: colors.gray[600],
    fontSize: 18,
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