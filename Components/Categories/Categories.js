import { StyleSheet, Text, View, FlatList } from 'react-native'
// import categories from '../../Data/categories.json'
import CategoryItem from './CategoryItem'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.value.categories)

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item})=><CategoryItem navigation={navigation} category={item.category}/>}
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