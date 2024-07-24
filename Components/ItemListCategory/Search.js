import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import {useState} from 'react'
import { colors } from '../../Global/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'

const Search = ({onSearch, navigation}) => {

    const [input, setInput] = useState("")

    const search = () => onSearch(input)

    const removeInput = () => setInput("")
    return (  
    <View style={styles.container}>
        <Pressable onPress={()=>navigation.goBack()} style={styles.goBackContainer}>
            <FontAwesome5 name={'arrow-left'} size={25} style={styles.logout} />
        </Pressable>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder='Buscar...'
            />
        </View>

        <View style={styles.iconsContainer}>
            <Pressable onPress={search}>
                <FontAwesome5 name={'search'} size={20} style={styles.logout} />
            </Pressable>
            <Pressable onPress={removeInput}>
                <FontAwesome5 name={'eraser'} size={20} />
            </Pressable>
        </View>

    </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        // backgroundColor: colors.green[500],
        width: '100%'
      },
      goBackContainer:{
        width: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5
      },
      inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 4,
        width: "80%",
        flex: 6,
        paddingRight: 5
      },
      input: {
        width: '100%',
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        color: colors.gray[400],
        borderRadius: 10,
        borderColor: colors.blue[200],
        borderWidth: 1
      },
      iconsContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        // backgroundColor: colors.orange[500],
        width: "10%",
        padding: 5
      },
      logout:{
        // backgroundColor: colors.gray[600]
      }
})