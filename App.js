import { Provider } from 'react-redux';
import Store from './Store';
import MainNavigator from './Navigation/MainNavigator';
import { useEffect } from 'react';
import { useDB } from './db';
import Toast from 'react-native-toast-message';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './Global/colors';

export default function App() {

  const {initDB} = useDB()

  useEffect(()=>{
    initDB()
  })

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        <MainNavigator />
        <Toast/>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "red",
//   },
//   children: {
//     flex: 0.5,
//     backgroundColor: "blue",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderColor: "black",
//   },
//   flatList: {
//     flex: 0.5,
//     backgroundColor: 'green'
//   }
// });

  // const [inputData, setInputData] = useState('')
  // const [itemList, setItemList] = useState([])

  // const onHandlerChangeInput = (t) => setInputData(t)

  // const addInput = () => {
  //   setItemList(currentItems => [
  //     ...currentItems,
  //     {id: Math.random().toString(), value:inputData}
  //   ])
  //   setInputData('')
  // }

  // const [modalView, setModalView] = useState(false)



      // {/* <View style={styles.children}>
      //     <TextInput
      //       placeholder='Input'
      //       onChangeText={onHandlerChangeInput}
      //       value={inputData}
      //     />
      //     <Button 
      //       title="Add"
      //       onPress={addInput}
      //     />
      // </View>
      // <View style={styles.children}>
      //   <Button
      //     title="CLEAR"
      //     onPress={()=>setItemList([])}
      //   />
      //   <FlatList
      //       data={itemList}
      //       renderItem={({item}) => <Text>{item.id}: {item.value}</Text>}
      //       keyExtractor={item=>item.id}
      //       style={styles.flatList}
      //     />
      // </View>
      // <View style={styles.children}>
      //   <Modal
      //   animationType='slide'
      //   visible={modalView}
      //   style={styles.children}
      //   >
      //     <Text>Modal</Text>
      //   </Modal>
      //   <Button
      //   title="Modal"
      //   onPress={()=>setModalView(!modalView)}
      //   />
      // </View>       */}