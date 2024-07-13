import { StyleSheet, Text, View, Button } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories/Categories'
import Counter from '../Components/Globals/Counter'

const Home = ({navigation}) => {

  return (
    <View>
        <Header title="Home"/>
        <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})