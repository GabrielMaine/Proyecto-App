import { StyleSheet, Text, View, Pressable } from 'react-native'

const CategoryItem = ({item}) => {
  return (
    <Pressable onPress={()=>alert(item.category)}>
      <Text>{item.category}</Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})