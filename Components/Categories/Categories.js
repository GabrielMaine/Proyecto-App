import { StyleSheet, Text, View, FlatList } from 'react-native'
// import categories from '../../Data/categories.json'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../../Services/shopService'
import { colors } from '../../Global/colors'
import Loader from '../Loader/Loader'

const Categories = ({navigation}) => {

  const {data, isLoading, error} = useGetCategoriesQuery();

  return (
    <>
      {isLoading?
      <Loader/>
      :
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({item})=><CategoryItem navigation={navigation} category={item.category}/>}
          style={styles.flatList}
          keyExtractor={item=>item.category}
        />
      </View>      
      }    
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
    flatListContainer:{
      backgroundColor: colors.gray[100],
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
})