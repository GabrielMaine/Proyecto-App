import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/Shop/shopSlice'
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from '../../Global/colors';

const CategoryItem = ({navigation, category}) => {

  const dispatch = useDispatch()
  const handlePress = ()=>{
    dispatch(setCategorySelected(category))
    navigation.navigate("ItemListCategory", {category})
  }
  let data
  switch(category){
    case 'celulares':
      data={categoria: "Celulares", icono:"mobile-alt"}
      break;
    case 'notebooks':
      data={categoria: "Notebooks", icono:"laptop"}
      break;  
    case 'accesorios':
      data={categoria: "Accesorios", icono:"headphones"}
      break;
    default:
      data={categoria: "Productos", icono:"exclamation"}
      break;
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.children1}>
        <Text style={styles.title}>{data.categoria}</Text>
      </View>
      <View style={styles.children2}>
        <FontAwesome5 name={data.icono} size={44}/>
      </View>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({  
  container: {
    backgroundColor: colors.gray[50],
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 300,
    margin: 10,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  children1:{
    flex: 7,
    height: 50,
    paddingLeft: 15
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.gray[600]
  },
  children2:{
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    verticalAlign: 'center',
    height: 50,
  }
})