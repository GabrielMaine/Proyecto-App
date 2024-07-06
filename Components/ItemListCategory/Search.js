import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import {useState} from 'react'

const Search = ({onSearch}) => {

    const [input, setInput] = useState("")

    const search = () => onSearch(input)

    const removeInput = () => setInput("")
    return (  
    <View>
        <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder='Buscar...'
        />
        <Pressable onPress={search}>
            <Text>Buscar</Text>
        </Pressable>
        <Pressable onPress={removeInput}>
            <Text>Limpiar</Text>
        </Pressable>
    </View>
    )
}

export default Search

const styles = StyleSheet.create({})