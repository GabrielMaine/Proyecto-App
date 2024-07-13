import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import allProducts from '../Data/products.json'
import Search from '../Components/ItemListCategory/Search'
import { useSelector } from 'react-redux'

const ItemListCategory = ({navigation, route}) => {

    const {category} = route.params
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

    const productsFilteredByCategory = useSelector(state=>state.shopReducer.value.productsFilteredByCategory);

    useEffect(()=>{
        const filteredProducts = productsFilteredByCategory.filter(product=>product.title.toUpperCase().includes(keyword.toUpperCase()))
        setProducts(filteredProducts)
    }, [productsFilteredByCategory, keyword])

    return (
    <>
        <Header title={category||"Products"}/>
        <Pressable onPress={()=>navigation.goBack()}>
            <Text>Volver</Text>
        </Pressable>
        <Search onSearch={setKeyword}/>
        <View>
            <FlatList
                data={products}
                renderItem={({item})=><Text>{item.title}</Text>}
                keyExtractor={item=>item.id}
            />
        </View>
    </>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({})