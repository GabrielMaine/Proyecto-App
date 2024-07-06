import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../../Data/categories.json'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item})=><CategoryItem item={item}/>}
        style={styles.flatList}
        keyExtractor={item=>item.category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    flatList:{
        backgroundColor: "green"
    }
})