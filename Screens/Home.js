import { StyleSheet, View } from 'react-native'
import Categories from '../Components/Categories/Categories'

const Home = ({navigation}) => {

  return (
    <View style={styles.main}>
        <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main:{
    flex: 1
  }
})