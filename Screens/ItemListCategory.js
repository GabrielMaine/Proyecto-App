import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import {useState, useEffect} from 'react'
import Search from '../Components/ItemListCategory/Search'
import { useGetProductsByCategoryQuery } from '../Services/shopService'
import ItemListDetail from '../Components/ItemList/ItemListDetail'
import { colors } from '../Global/colors'
import Loader from '../Components/Loader/Loader'

const ItemListCategory = ({navigation, route}) => {

    const {category} = route.params
    const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        if(productsFilteredByCategory){
            const filteredProducts = productsFilteredByCategory.filter(product=>product.title.toUpperCase().includes(keyword.toUpperCase()))
            setProducts(filteredProducts)
        }
    }, [productsFilteredByCategory, keyword])

    return (
    <>
        {isLoading
        ?<Loader/>
        :
        <View style={styles.main}>
            <View style={styles.searchContainer}>
                <Search onSearch={setKeyword} navigation={navigation}/>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={products}
                    renderItem={({item})=><ItemListDetail navigation={navigation} item={item}/>}
                    keyExtractor={item=>item.slug}
                />
            </View>
        </View>
        }
    </>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    main:{
        height: '100%'
    },
    searchContainer:{
        backgroundColor: colors.gray[100],
        flexDirection: 'row',
        // marginHorizontal: 15,
        padding: 15,
    },
    flatListContainer:{
        backgroundColor: colors.gray[100],
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      },
})