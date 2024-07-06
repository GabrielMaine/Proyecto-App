import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import allProducts from '../Data/products.json'
import Search from '../Components/ItemListCategory/Search'

const ItemListCategory = ({category}) => {

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        if(category){
            const categoryProducts = allProducts.filter(product=>product.category === category)
            const filteredProducts = categoryProducts.filter(product=>product.title.includes(keyword))
            setProducts(filteredProducts)
        }else{
            const filteredProducts = allProducts.filter(product=>product.title.includes(keyword))
            setProducts(filteredProducts)
        }
    }, [category, keyword])

    return (
    <>
        <Header title={category||"Products"}/>
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