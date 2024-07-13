import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, FlatList, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import TabNavigator from './Navigation/TabNavigator';
import { Provider } from 'react-redux';
import Store from './Store';

export default function App() {

  return (
    <Provider store={Store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
  },
  children: {
    flex: 0.5,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
  },
  flatList: {
    flex: 0.5,
    backgroundColor: 'green'
  }
});

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