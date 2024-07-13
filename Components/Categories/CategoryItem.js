import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/Shop/shopSlice'

const CategoryItem = ({navigation, category}) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=>{
      dispatch(setCategorySelected(category))
      navigation.navigate("ItemListCategory", {category})}}>
      <Text>{category}</Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})