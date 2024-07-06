import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories/Categories'

const Home = () => {
  return (
    <View>
        <Header title="Home"/>
        <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})